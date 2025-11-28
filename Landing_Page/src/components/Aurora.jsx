import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useState } from "react";

import './Aurora.css';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Shader optimizado - menos operaciones matemáticas
const FRAG = `#version 300 es
precision lowp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

// Simplex noise simplificado para mejor rendimiento
float snoise(vec2 v) {
  vec2 i = floor(v);
  vec2 f = fract(v);
  f = f * f * (3.0 - 2.0 * f);
  float a = sin(dot(i, vec2(12.9898, 78.233))) * 43758.5453;
  float b = sin(dot(i + vec2(1.0, 0.0), vec2(12.9898, 78.233))) * 43758.5453;
  float c = sin(dot(i + vec2(0.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453;
  float d = sin(dot(i + vec2(1.0, 1.0), vec2(12.9898, 78.233))) * 43758.5453;
  return mix(mix(fract(a), fract(b), f.x), mix(fract(c), fract(d), f.x), f.y) * 2.0 - 1.0;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  // Color ramp simplificado sin structs ni loops
  vec3 rampColor = mix(
    mix(uColorStops[0], uColorStops[1], clamp(uv.x * 2.0, 0.0, 1.0)),
    uColorStops[2],
    clamp(uv.x * 2.0 - 1.0, 0.0, 1.0)
  );
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.1)) * 0.6 * uAmplitude;
  height = exp(height);
  height = uv.y * 2.0 - height + 0.2;
  float intensity = 0.4 * height;
  
  float auroraAlpha = smoothstep(0.20 - uBlend * 0.5, 0.20 + uBlend * 0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

// Detectar si es móvil o tiene poca potencia
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    || window.innerWidth < 768;
};

// Detectar si el usuario prefiere movimiento reducido
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Factor de escala para reducir resolución en móvil (renderiza a menor resolución)
const getResolutionScale = () => {
  if (isMobile()) return 0.3; // 30% de la resolución en móvil
  return 0.6; // 60% en desktop
};

export default function Aurora(props) {
  const {
    colorStops = ["#3300FF", "#FD08BB", "#9909DC"],
    amplitude = 3.0,
    blend = 0.5
  } = props;
  const propsRef = useRef(props);
  propsRef.current = props;

  const ctnDom = useRef(null);
  const [isSupported, setIsSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    // Si el usuario prefiere movimiento reducido, mostrar imagen estática
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = (e) => setReducedMotion(e.matches);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    if (reducedMotion) {
      // Renderizar un solo frame y parar
      return () => {
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }

    const mobile = isMobile();
    const resolutionScale = getResolutionScale();
    
    // FPS: 15 en móvil (mínimo viable), 30 en desktop
    const targetFPS = mobile ? 15 : 30;
    const frameInterval = 1000 / targetFPS;
    let lastFrameTime = 0;

    // Verificar soporte WebGL2
    const testCanvas = document.createElement('canvas');
    const testGl = testCanvas.getContext('webgl2');
    if (!testGl) {
      setIsSupported(false);
      return;
    }

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: false, // Nunca antialiasing - muy costoso
      dpr: 1, // Siempre DPR 1, escalamos manualmente
      powerPreference: 'low-power'
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = 'transparent';

    let program;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      // Renderizar a menor resolución y escalar con CSS
      const scaledWidth = Math.floor(width * resolutionScale);
      const scaledHeight = Math.floor(height * resolutionScale);
      renderer.setSize(scaledWidth, scaledHeight);
      // El canvas se estira al 100% via CSS, creando efecto de blur natural
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      if (program) {
        program.uniforms.uResolution.value = [scaledWidth, scaledHeight];
      }
    }
    
    // Debounce resize para evitar múltiples llamadas
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener("resize", debouncedResize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const colorStopsArray = colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    const scaledWidth = Math.floor(ctn.offsetWidth * resolutionScale);
    const scaledHeight = Math.floor(ctn.offsetHeight * resolutionScale);

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [scaledWidth, scaledHeight] },
        uBlend: { value: blend }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    let isVisible = true;

    // Pausar animación cuando no es visible (ahorra batería)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Usar IntersectionObserver para pausar cuando no está en viewport
    let isInViewport = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isInViewport = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(ctn);

    const update = (currentTime) => {
      animateId = requestAnimationFrame(update);
      
      // No renderizar si no es visible o no está en viewport
      if (!isVisible || !isInViewport) return;
      
      // Limitar FPS
      const deltaTime = currentTime - lastFrameTime;
      if (deltaTime < frameInterval) return;
      lastFrameTime = currentTime - (deltaTime % frameInterval);

      const { time = currentTime * 0.01, speed = 1.0 } = propsRef.current;
      program.uniforms.uTime.value = time * speed * 0.1;
      program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0;
      program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
      
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", debouncedResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      observer.disconnect();
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amplitude, reducedMotion]);

  // Si WebGL2 no está soportado o prefiere movimiento reducido, mostrar gradiente CSS
  if (!isSupported || reducedMotion) {
    return (
      <div 
        className="aurora-container" 
        style={{
          background: `linear-gradient(135deg, ${colorStops[0]} 0%, ${colorStops[1]} 50%, ${colorStops[2]} 100%)`,
          opacity: 0.6
        }} 
      />
    );
  }

  return <div ref={ctnDom} className="aurora-container" />;
}
