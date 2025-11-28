# 📋 PRD - FinAi: Product Requirements Document

> **Versión:** 1.0  
> **Fecha:** 28 de Noviembre, 2025  
> **Autor:** Equipo FinAi  
> **Estado:** En desarrollo

---

## 📌 1. RESUMEN EJECUTIVO

**FinAi** es una aplicación de finanzas personales potenciada por Inteligencia Artificial que democratiza la gestión del dinero. Nuestra misión es hacer que entender y gestionar las finanzas sea **fácil, útil y sin complicaciones** para cualquier persona, independientemente de su nivel de conocimiento financiero.

### Propuesta de Valor Única
- **Asistente IA conversacional** que entiende lenguaje natural (in-app y WhatsApp)
- **Sin tecnicismos** - Hablamos el idioma del usuario
- **Gamificación** con logros y medallas para mantener el engagement
- **Planes flexibles** (Free, Plus, Premium) que se adaptan a cada necesidad

---

## 🎯 2. IDENTIDAD DE MARCA

### 2.1 Nombre y Significado
- **Fin** = Finanzas / Final (objetivo financiero)
- **Ai** = Artificial Intelligence / También suena a "Ahí" (está ahí para ti)

### 2.2 Personalidad de Marca
| Atributo | Descripción |
|----------|-------------|
| **Tono** | Cercano, sin postureo, directo |
| **Voz** | Como un amigo que sabe de finanzas |
| **Valores** | Transparencia, simplicidad, seguridad |
| **No somos** | Aburridos, técnicos, condescendientes |

### 2.3 Colores de Marca
```css
--primary-magenta: #FD08BB;   /* Rosa/Magenta - Acción, energía */
--primary-purple: #9900FF;     /* Púrpura - Premium, confianza */
--primary-blue: #0015FF;       /* Azul - Estabilidad, tecnología */
--primary-pink: #FC3DF3;       /* Rosa claro - Accesibilidad */
--primary-violet: #4D0FFF;     /* Violeta - Innovación */
--background-dark: #000000;    /* Negro - Elegancia, modernidad */
```

### 2.4 Tagline
> *"The finance app for [curiosos | emprendedores | novatos | girl math]"*

---

## 👥 3. EQUIPO FUNDADOR

| Nombre | Rol | Handle |
|--------|-----|--------|
| ThiagoSnchz | CEO & Founder | @thiagosnchz |
| Hugo Lucendo | Head of AI Strategy | @hugolucendo |
| Andrés de Abreu | Tech Lead – Full Stack | @andresedal |
| Eric Casero | Head of Growth Marketing | @ericcb6 |
| Julio Lopez | Growth Marketing Manager | @julyatm_9 |

---

## 🛠️ 4. STACK TECNOLÓGICO

### 4.1 Frontend (Landing Page)
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.1.1 | UI Framework |
| **Vite** | 7.1.7 | Build tool & Dev server |
| **React Router** | 7.9.2 | Navegación SPA |
| **Framer Motion** | 12.23.22 | Animaciones fluidas |
| **React Icons** | 5.5.0 | Iconografía |
| **React Hot Toast** | 2.6.0 | Notificaciones |
| **QRCode.react** | 4.2.0 | Generación QR para apps |

### 4.2 Backend & Database
| Tecnología | Propósito |
|------------|-----------|
| **Supabase** | BaaS (Backend as a Service) |
| **PostgreSQL** | Base de datos relacional |
| **pgvector** | Embeddings para IA/RAG |
| **Supabase Auth** | Autenticación |
| **Supabase Storage** | Almacenamiento de archivos |
| **Edge Functions** | Lógica serverless |

### 4.3 Extensiones PostgreSQL Activas
- `pgvector 0.8.0` - Vectores para búsqueda semántica/RAG
- `pg_cron 1.6` - Tareas programadas
- `pg_trgm 1.6` - Búsqueda por similitud de texto
- `http 1.6` - Llamadas HTTP desde la DB
- `pgjwt 0.2.0` - Manejo de JWT
- `pg_graphql 1.5.11` - API GraphQL automática

---

## 🗄️ 5. ARQUITECTURA DE BASE DE DATOS

### 5.1 Diagrama de Entidades Principal

```
┌─────────────────────────────────────────────────────────────────────┐
│                         AUTH.USERS                                   │
│  (Gestión de autenticación de Supabase)                             │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
    ┌──────────┐        ┌──────────┐        ┌──────────┐
    │ PROFILES │        │ ACCOUNTS │        │CATEGORIES│
    │ (Perfil  │        │ (Cuentas │        │(Tipos de │
    │  usuario)│        │  dinero) │        │ gasto)   │
    └──────────┘        └────┬─────┘        └────┬─────┘
                             │                   │
                             └─────────┬─────────┘
                                       ▼
                              ┌─────────────────┐
                              │  TRANSACTIONS   │
                              │ (Movimientos)   │
                              └────────┬────────┘
                                       │
         ┌─────────────┬───────────────┼───────────────┬─────────────┐
         ▼             ▼               ▼               ▼             ▼
    ┌─────────┐  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
    │ BUDGETS │  │  GOALS  │    │  DEBTS  │    │  LOANS  │    │SCHEDULED│
    │(Presup.)│  │ (Metas) │    │(Deudas) │    │(Préstam)│    │EXPENSES │
    └─────────┘  └─────────┘    └─────────┘    └─────────┘    └─────────┘
```

### 5.2 Tablas del Schema `public`

#### 📊 CORE - Gestión Financiera

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `profiles` | Perfil extendido del usuario (plan, preferencias, avatar) | ✅ | 2 |
| `accounts` | Cuentas bancarias, efectivo, tarjetas, etc. | ✅ | 2 |
| `categories` | Categorías de ingreso/gasto (default + personalizadas) | ✅ | 124 |
| `transactions` | Registro de todos los movimientos financieros | ✅ | 38 |
| `budgets` | Presupuestos por categoría (mensual/trimestral/anual) | ✅ | 3 |

#### 🎯 METAS Y AHORRO

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `goals` | Metas/huchas de ahorro (viajes, emergencia, etc.) | ✅ | 6 |
| `goal_allocations` | Aportes y retiros de cada hucha | ✅ | 7 |

#### 💳 DEUDAS Y PRÉSTAMOS

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `debts` | Deudas del usuario con acreedores | ✅ | 0 |
| `loans` | Préstamos que el usuario ha hecho a otros | ✅ | 0 |

#### 📅 GASTOS PROGRAMADOS

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `scheduled_fixed_expenses` | Gastos fijos recurrentes (alquiler, Netflix, etc.) | ✅ | 9 |

#### 👥 GASTOS COMPARTIDOS (Split)

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `split_plans` | Grupos para dividir gastos | ✅ | 2 |
| `plan_participants` | Participantes de cada plan | ✅ | 5 |
| `plan_expenses` | Gastos dentro de un plan | ✅ | 6 |
| `expense_shares` | División de cada gasto por participante | ✅ | 9 |

#### 🏆 GAMIFICACIÓN

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `achievements` | Catálogo de logros disponibles | ✅ | 0 |
| `user_achievements` | Logros desbloqueados por usuario | ❌ | 0 |

#### 🤖 INTELIGENCIA ARTIFICIAL

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `documents` | Documentos con embeddings para RAG | ❌ | 1 |
| `chat_sessions` | Sesiones de conversación con el agente IA | ✅ | 0 |
| `chat_messages` | Mensajes individuales del chat IA | ✅ | 0 |
| `chat_history` | Historial de chat (formato alternativo) | ❌ | 13 |
| `agent_context` | Estado de conversación del agente | ❌ | 1 |
| `pending_actions` | Acciones sugeridas por IA pendientes de confirmar | ✅ | 0 |
| `ml_insights` | Descubrimientos generados por ML | ❌ | 0 |
| `conversation_memory` | Memoria del agente de Telegram | ✅ | 13 |

#### 📊 INFORMES Y NOTIFICACIONES

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `reports` | Informes generados (PDF, etc.) | ✅ | 0 |
| `notifications` | Centro de notificaciones del usuario | ✅ | 21 |
| `custom_alerts` | Reglas personalizadas de alertas | ❌ | 0 |

#### 📈 INVERSIONES

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `investments` | Portafolio de inversiones del usuario | ✅ | 0 |

#### 📉 ANALYTICS Y USO

| Tabla | Descripción | RLS | Registros |
|-------|-------------|-----|-----------|
| `user_events` | Eventos de tracking para analytics | ✅ | 6 |
| `monthly_usage` | Control de uso mensual por funcionalidad | ❌ | 0 |

### 5.3 Tipos de Cuenta Soportados
```sql
CHECK (type IN (
  'corriente',
  'ahorro', 
  'tarjeta_credito',
  'efectivo',
  'inversion',
  'viajes',
  'ahorro_colchon',
  'otro'
))
```

### 5.4 Tipos de Transacción
```sql
CHECK (type IN ('ingreso', 'gasto', 'traspaso'))
```

### 5.5 Planes de Usuario
```sql
CHECK (plan_type IN ('free', 'plus', 'premium'))
```

---

## ⚙️ 6. FUNCIONES DE BASE DE DATOS

### 6.1 Funciones de Negocio Principales

| Función | Propósito |
|---------|-----------|
| `add_contribution_to_goal` | Añadir aporte a una hucha/meta |
| `archive_goal` | Archivar una meta completada |
| `execute_internal_transfer` | Ejecutar traspaso entre cuentas |
| `record_debt_payment` | Registrar pago de una deuda |
| `record_loan_collection` | Registrar cobro de un préstamo |
| `register_fixed_expense_payment` | Registrar pago de gasto fijo |
| `recalculate_account_balance` | Trigger: Recalcular balance tras transacción |

### 6.2 Funciones de Split (Gastos Compartidos)

| Función | Propósito |
|---------|-----------|
| `add_split_expense` | Añadir gasto a un plan compartido |
| `resolve_split_plan` | Calcular quién debe a quién |

### 6.3 Funciones de Informes

| Función | Propósito |
|---------|-----------|
| `get_report_monthly_cash_flow` | Flujo de caja mensual |
| `get_report_category_spending` | Gasto por categoría |
| `get_report_budgets_status` | Estado de presupuestos |
| `get_report_goals_progress` | Progreso de metas |
| `get_report_annual_summary` | Resumen anual |
| `get_report_tax_summary` | Resumen fiscal |
| `get_report_fixed_expenses_list` | Lista de gastos fijos |

### 6.4 Funciones de IA/ML

| Función | Propósito |
|---------|-----------|
| `match_documents` | Búsqueda semántica con embeddings |
| `get_category_spending_suggestion` | Sugerencia de gasto basada en historial |
| `evaluate_custom_rules` | Evaluar reglas personalizadas del usuario |

### 6.5 Funciones Programadas (Cron Jobs)

| Función | Propósito |
|---------|-----------|
| `apply_monthly_debt_interest_all_debts` | Aplicar intereses a deudas |
| `apply_monthly_loan_interest_all_loans` | Aplicar intereses a préstamos |
| `create_over_budget_notifications` | Notificar presupuesto excedido |
| `create_finalized_goal_notifications` | Notificar meta completada |
| `delete_old_unverified_users` | Limpiar usuarios no verificados |

---

## 🔒 7. SEGURIDAD (RLS)

### 7.1 Políticas Implementadas

Todas las tablas principales tienen RLS habilitado con políticas CRUD:

- **SELECT**: `user_id = auth.uid()` - Solo ver datos propios
- **INSERT**: `WITH CHECK (user_id = auth.uid())` - Solo insertar con propio ID
- **UPDATE**: `USING + WITH CHECK (user_id = auth.uid())` - Solo modificar propios
- **DELETE**: `USING (user_id = auth.uid())` - Solo eliminar propios

### 7.2 Excepciones
- `categories`: Permite ver categorías default (`is_default = true OR user_id = auth.uid()`)
- `achievements`: Lectura pública del catálogo de logros

---

## 📦 8. STORAGE (Buckets)

| Bucket | Público | Propósito |
|--------|---------|-----------|
| `avatars` | ✅ | Fotos de perfil de usuarios |
| `logos` | ✅ | Logos de bancos/instituciones |

---

## 💰 9. MODELO DE NEGOCIO

### 9.1 Planes y Precios

| Plan | Precio/mes | Precio/año |
|------|------------|------------|
| **Free** | 0€ | 0€ |
| **Plus** | 5€ | 54€ (-15%) |
| **Premium** | 10€ | 102€ (-15%) |

### 9.2 Features por Plan

#### 🆓 FREE
- Transacciones, Dashboard, Informes básicos
- Presupuestos y Metas ilimitados
- Agente in-app Lite (100 msg/mes)
- Alertas básicas

#### ⭐ PLUS
- Todo lo de Free
- Gastos fijos programados
- Reglas de categorías automáticas
- Exportación CSV/XLS
- Notificaciones personalizadas
- Agente in-app Pro (300 msg/mes)
- 1 Avatar IA por mes

#### 💎 PREMIUM
- Todo lo de Plus
- Agente WhatsApp Pro
- Informes y alertas avanzadas (IA)
- Detección de anomalías (IA)
- Proyecciones de gastos fijos
- Preparado para banca automática
- 3 Avatares IA por mes

---

## 🎨 10. SECCIÓN "POR QUÉ ELEGIR FINAI" - Especificaciones para Animaciones

### 10.1 Concepto General
Tres tarjetas interactivas con efectos 3D (TiltedCard) que representan los pilares de FinAi.

### 10.2 Tarjeta 1: "Asistencia Personalizada"
**Mensaje:** *"Accede a la mejor ayuda personalizada con IA para ti y tu dinero. En cualquier momento y lugar."*

**Animación sugerida:**
- Icono de chat/burbuja que se transforma en un asistente amigable
- Partículas de datos fluyendo hacia el usuario
- Gradiente magenta → púrpura
- Al hover: efecto de "conversación" con burbujas apareciendo

**Elementos visuales:**
- Representar el agente IA (WhatsApp + in-app)
- 24/7 disponibilidad
- Personalización (datos del usuario transformándose en consejos)

### 10.3 Tarjeta 2: "Control Total"
**Mensaje:** *"Aprende a controlar tu dinero y dominar el mundo de la economía de forma sencilla con nuestros cursos."*

**Animación sugerida:**
- Dashboard minimalista que se llena de gráficos
- Barras de presupuesto llenándose
- Icono de candado → escudo de seguridad
- Gradiente azul → púrpura

**Elementos visuales:**
- Representar: cuentas, presupuestos, categorías
- Visualización de gastos fijos
- Progreso de metas (barra circular llenándose)

### 10.4 Tarjeta 3: "Independencia Financiera"
**Mensaje:** *"Da un paso más hacia tu independencia financiera. Con FinAi, toma decisiones inteligentes y crece económicamente."*

**Animación sugerida:**
- Gráfico de línea ascendente (como el SVG de About.jsx)
- Hucha/meta llenándose hasta completarse
- Monedas transformándose en una planta que crece
- Gradiente rosa → magenta

**Elementos visuales:**
- Representar: metas/huchas, inversiones
- Logros desbloqueándose
- Cohete despegando (independencia)

### 10.5 Especificaciones Técnicas de Animación

```javascript
// Configuración base para TiltedCard
const animationConfig = {
  rotateAmplitude: 12,      // Grados de rotación en hover
  scaleOnHover: 1.05,       // Escala al hacer hover
  springDamping: 30,        // Suavidad del spring
  springStiffness: 100,     // Rigidez del spring
};

// Colores de gradiente para efecto aura
const auraGradients = {
  card1: 'radial-gradient(circle, #FD08BB4D 0%, transparent 70%)',
  card2: 'radial-gradient(circle, #0015FF4D 0%, transparent 70%)',
  card3: 'radial-gradient(circle, #9900FF4D 0%, transparent 70%)',
};

// Animación de entrada escalonada
const entryAnimation = {
  keyframes: { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
  delays: [0.2, 0.4, 0.6], // segundos
  duration: 0.6,
};
```

### 10.6 Consideraciones de Accesibilidad
- Desactivar animaciones 3D en móvil (ya implementado con `useIsMobile`)
- Respetar `prefers-reduced-motion`
- Mantener contraste mínimo WCAG AA

---

## 📱 11. PLATAFORMAS

| Plataforma | Estado | Tecnología |
|------------|--------|------------|
| **Landing Page** | ✅ En producción | React + Vite |
| **App iOS** | 🚧 En desarrollo | React Native |
| **App Android** | 🚧 En desarrollo | React Native |
| **WhatsApp Bot** | ✅ Funcional | n8n + Supabase |
| **Telegram Bot** | ✅ Funcional | Python + Supabase |

---

## 🔗 12. REDES SOCIALES

| Red | Handle | URL |
|-----|--------|-----|
| X (Twitter) | @AppFinai | https://x.com/AppFinai |
| Instagram | @finai_official | https://www.instagram.com/finai_official/ |
| TikTok | @finai_official | https://www.tiktok.com/@finai_official |
| LinkedIn | FinAi | (pendiente) |
| WhatsApp | FinAi | (pendiente) |

---

## 📈 13. MÉTRICAS CLAVE (KPIs)

| Métrica | Objetivo |
|---------|----------|
| MAU (Monthly Active Users) | Crecimiento 20% MoM |
| Conversión Free → Plus | 8% |
| Conversión Plus → Premium | 15% |
| Churn Rate | < 5% mensual |
| NPS | > 50 |
| Tiempo en app | > 5 min/sesión |

---

## 🗓️ 14. ROADMAP

### Q4 2025 (Actual)
- [x] Landing page responsive
- [x] Sistema de autenticación
- [ ] Animaciones "Por qué elegir FinAi"
- [ ] Chatbot en landing page

### Q1 2026
- [ ] App móvil beta (iOS/Android)
- [ ] Integración banca abierta (PSD2)
- [ ] Sistema de referidos

### Q2 2026
- [ ] Lanzamiento público apps
- [ ] Expansion a Latam
- [ ] IA predictiva de gastos

---

## 📝 15. CHANGELOG

| Fecha | Versión | Cambios |
|-------|---------|---------|
| 2025-11-28 | 1.0 | Documento inicial completo |

---

*Documento generado automáticamente a partir del análisis de la base de datos de producción.*
