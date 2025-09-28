// src/components/LogoLoop.jsx
import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

// --- FUNCIONES AUXILIARES ---
const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const toCssLength = value => (typeof value === 'number' ? `${value}px` : value ?? undefined);
const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) return;
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => observers.forEach(observer => observer?.disconnect());
  }, dependencies);
};
const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) { onLoad(); return; }
    let remaining = images.length;
    const handleLoad = () => { if (--remaining === 0) onLoad(); };
    images.forEach(img => {
      if (img.complete) handleLoad();
      else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });
    return () => images.forEach(img => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleLoad);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }
    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return;
    }
    const animate = timestamp => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
      const deltaTime = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;
      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};


// --- COMPONENTE PRINCIPAL ---
export const LogoLoop = memo(
  ({
    logos, speed = 120, direction = 'left', width = '100%', logoHeight = 28,
    gap = 32, pauseOnHover = true, fadeOut = false, fadeOutColor,
    scaleOnHover = false, ariaLabel = 'Partner logos', className, style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);
    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      return magnitude * directionMultiplier;
    }, [speed, direction]);
    
    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.().width ?? 0;
      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const cssVariables = useMemo(() => ({
      '--logoloop-gap': `${gap}px`,
      '--logoloop-logoHeight': `${logoHeight}px`,
      ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
    }), [gap, logoHeight, fadeOutColor]);

    const handleMouseEnter = useCallback(() => { if (pauseOnHover) setIsHovered(true); }, [pauseOnHover]);
    const handleMouseLeave = useCallback(() => { if (pauseOnHover) setIsHovered(false); }, [pauseOnHover]);
    
    const renderLogoItem = useCallback((item, key) => {
        const content = 'node' in item
          ? <span className="logo-loop__item-content">{item.node}</span>
          : <img className="logo-loop__item-content" src={item.src} alt={item.alt ?? ''} />;
  
        const inner = item.href 
          ? <a className="logo-loop__link" href={item.href} target="_blank" rel="noreferrer noopener">{content}</a>
          : content;
  
        return <li className="logo-loop__item" key={key}>{inner}</li>;
    }, []);

    const logoLists = useMemo(() => Array.from({ length: copyCount }, (_, copyIndex) => (
      <ul className="logo-loop__list" key={`copy-${copyIndex}`} ref={copyIndex === 0 ? seqRef : undefined} aria-hidden={copyIndex > 0}>
        {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
      </ul>
    )), [copyCount, logos, renderLogoItem]);

    return (
      <div
        ref={containerRef}
        className={`logo-loop ${scaleOnHover ? 'logo-loop--scale-on-hover' : ''} ${className || ''}`}
        style={{ ...cssVariables, width: toCssLength(width), ...style }}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {fadeOut && (
          <>
            <div className="logo-loop__fade logo-loop__fade--left" aria-hidden="true" />
            <div className="logo-loop__fade logo-loop__fade--right" aria-hidden="true" />
          </>
        )}
        {/* LA CLAVE ESTÁ AQUÍ, EN AÑADIR ref={trackRef} */}
        <div className="logo-loop__track" ref={trackRef}>
          {logoLists}
        </div>
      </div>
    );
  }
);
LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;