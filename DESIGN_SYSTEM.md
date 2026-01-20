# DentalTec Design System

Sistema de diseño documentado para mantener consistencia visual entre la aplicación principal y la landing page.

---

## Tabla de Contenidos

1. [Filosofía de Diseño](#filosofía-de-diseño)
2. [Sistema de Temas](#sistema-de-temas)
3. [Paleta de Colores](#paleta-de-colores)
4. [Tipografía](#tipografía)
5. [Espaciado](#espaciado)
6. [Sombras](#sombras)
7. [Bordes y Radios](#bordes-y-radios)
8. [Componentes](#componentes)
9. [Animaciones](#animaciones)
10. [Responsive Design](#responsive-design)
11. [Implementación](#implementación)

---

## Filosofía de Diseño

El sistema de diseño de DentalTec sigue estos principios:

- **Profesionalismo**: Diseño limpio y moderno apropiado para el sector de salud dental
- **Accesibilidad**: Soporte completo para tema claro y oscuro
- **Consistencia**: Variables CSS compartidas en toda la aplicación
- **Fluidez**: Transiciones suaves entre estados y temas
- **Jerarquía visual**: Clara distinción entre elementos primarios, secundarios y terciarios

---

## Sistema de Temas

### Implementación Base

El sistema usa CSS Custom Properties (variables CSS) con el atributo `data-theme` en el elemento raíz:

```css
:root,
[data-theme="light"] {
  /* Variables del tema claro */
}

[data-theme="dark"] {
  /* Variables del tema oscuro */
}
```

### Cambio de Tema

```javascript
// Detectar preferencia del sistema
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Aplicar tema
document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

// Persistir en localStorage
localStorage.setItem("dentaltec-theme", isDark ? "dark" : "light");
```

---

## Paleta de Colores

### Colores Primarios

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-primary` | `#1976d2` | `#42a5f5` | Color de acción principal |
| `--theme-primary-light` | `#e3f2fd` | `rgba(66, 165, 245, 0.15)` | Fondos sutiles, hovers |
| `--theme-primary-hover` | `rgba(33, 150, 243, 0.08)` | `rgba(66, 165, 245, 0.12)` | Estados hover |

### Colores de Fondo

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-bg-primary` | `#ffffff` | `#1e1e1e` | Fondo principal (app bar) |
| `--theme-bg-secondary` | `#fafafa` | `#252525` | Fondo secundario (drawer) |
| `--theme-bg-tertiary` | `#f5f5f5` | `#2d2d2d` | Fondo terciario |
| `--theme-bg-page` | Gradiente claro | Gradiente oscuro | Fondo de página completa |

#### Gradientes de Página

```css
/* Light */
--theme-bg-page: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);

/* Dark */
--theme-bg-page: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
```

### Colores de Superficie

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-surface` | `#ffffff` | `#2d2d2d` | Cards, modals |
| `--theme-surface-hover` | `#f5f5f5` | `#383838` | Estado hover |
| `--theme-surface-active` | `rgba(33, 150, 243, 0.08)` | `rgba(66, 165, 245, 0.15)` | Estado activo |

### Colores de Texto

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-text-primary` | `#212121` | `#e0e0e0` | Texto principal, títulos |
| `--theme-text-secondary` | `#424242` | `#bdbdbd` | Texto secundario |
| `--theme-text-tertiary` | `#616161` | `#9e9e9e` | Texto terciario |
| `--theme-text-muted` | `#757575` | `#757575` | Texto atenuado |
| `--theme-text-hint` | `#9e9e9e` | `#616161` | Placeholders, hints |

### Colores de Borde

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-border` | `#e0e0e0` | `#424242` | Bordes principales |
| `--theme-border-light` | `rgba(226, 232, 240, 0.8)` | `rgba(66, 66, 66, 0.8)` | Bordes sutiles |

### Colores de Cards (Inicio)

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-card-bg` | `#ffffff` | `#2d2d2d` | Fondo de cards |
| `--theme-card-text-primary` | `#1e293b` | `#e0e0e0` | Texto principal en cards |
| `--theme-card-text-secondary` | `#64748b` | `#9e9e9e` | Texto secundario en cards |
| `--theme-card-text-muted` | `#94a3b8` | `#757575` | Texto atenuado en cards |

### Colores de Navegación

| Variable | Light | Dark | Uso |
|----------|-------|------|-----|
| `--theme-nav-icon-bg` | `#e3f2fd` | `rgba(66, 165, 245, 0.15)` | Fondo de iconos nav |
| `--theme-nav-icon-color` | `#1976d2` | `#42a5f5` | Color de iconos nav |
| `--theme-nav-item-hover` | `rgba(33, 150, 243, 0.08)` | `rgba(66, 165, 245, 0.12)` | Hover de items |
| `--theme-nav-item-active` | `rgba(33, 150, 243, 0.12)` | `rgba(66, 165, 245, 0.2)` | Estado activo |

### Colores Semánticos (Gradientes)

```css
/* Éxito / Verde */
background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);

/* Advertencia / Naranja */
background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);

/* Error / Rojo */
background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);

/* Info / Azul */
background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

/* Morado */
background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);

/* Teal */
background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);

/* Tema (sol/luna) */
background: linear-gradient(135deg, #ffa726 0%, #fb8c00 100%);
```

### Colores del Header (Drawer)

```css
/* Gradiente principal del header */
background: linear-gradient(145deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%);

/* Avatar de usuario */
background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);

/* Avatar de prestador */
background: linear-gradient(135deg, #26a69a 0%, #00897b 100%);

/* Avatar de entidad */
background: linear-gradient(135deg, #5c6bc0 0%, #3949ab 100%);
```

---

## Tipografía

### Escala Tipográfica

| Elemento | Tamaño | Peso | Line Height |
|----------|--------|------|-------------|
| H1 (Welcome) | 24px | 700 | 1.3 |
| H2 (Section Title) | 18px | 600 | 1.4 |
| Stat Value | 26px | 700 | 1.2 |
| Card Value | 22px | 700 | 1.2 |
| Body | 14px | 400 | 1.4 |
| Nav Title | 13px | 500 | 1.4 |
| Nav Subtitle | 12.5px | 400 | 1.4 |
| Label | 13px | 500 | 1.3 |
| Small/Muted | 12px | 400 | 1.3 |
| X-Small | 11px | 400 | 1.3 |

### Ejemplos de Uso

```css
/* Título de bienvenida */
.welcome-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--theme-card-text-primary);
  line-height: 1.3;
}

/* Valor estadístico */
.stat-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--theme-card-text-primary);
  line-height: 1.2;
}

/* Etiqueta de sección */
.section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--theme-card-text-primary);
}

/* Item de navegación */
.nav-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--theme-text-secondary);
  letter-spacing: 0.2px;
}
```

---

## Espaciado

### Escala Base

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | 4px | Gaps mínimos |
| `sm` | 8px | Espaciado interno pequeño |
| `md` | 12px | Espaciado estándar |
| `lg` | 16px | Gaps entre elementos |
| `xl` | 20px | Padding de cards |
| `2xl` | 24px | Separación de secciones |
| `3xl` | 28px | Padding de header |
| `4xl` | 32px | Margin entre secciones |
| `5xl` | 40px | Padding inferior de página |

### Aplicación

```css
/* Card estándar */
.card {
  padding: 20px; /* xl */
  gap: 16px; /* lg */
}

/* Header del drawer */
.drawer-header {
  padding: 28px 20px 40px; /* 3xl xl 5xl */
}

/* Lista de navegación */
.nav-list {
  padding: 8px 12px; /* sm md */
}

/* Item de navegación */
.nav-item {
  min-height: 44px;
  padding-left: 12px;
  margin-bottom: 2px;
}
```

---

## Sombras

### Sistema de Sombras

```css
/* Sombra pequeña - Cards en reposo */
--theme-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.08);

/* Sombra media - Cards destacadas */
--theme-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.08);

/* Sombra grande - Cards en hover, elementos flotantes */
--theme-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.1);
```

### Sombras en Tema Oscuro

```css
/* Dark - más pronunciadas */
--theme-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4);
--theme-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.4);
--theme-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.5);
```

### Sombras Coloreadas (Para iconos/badges)

```css
/* Azul */
box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

/* Verde */
box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);

/* Naranja */
box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);

/* Morado */
box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);

/* Logo container */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1);
```

---

## Bordes y Radios

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `sm` | 8px | Botones pequeños, inputs |
| `md` | 10px | Items de navegación, iconos |
| `lg` | 14px | Iconos de stats |
| `xl` | 16px | Cards, alertas |
| `2xl` | 20px | Cards de bienvenida, badges |
| `full` | 50% | Avatares, círculos |

### Ejemplos

```css
/* Botón de navegación */
.nav-btn {
  border-radius: 8px;
}

/* Card estándar */
.card {
  border-radius: 16px;
}

/* Card de bienvenida */
.welcome-card {
  border-radius: 20px;
}

/* Avatar */
.avatar {
  border-radius: 50%;
}

/* Badge */
.badge {
  border-radius: 20px;
}
```

---

## Componentes

### 1. Card Básica

```css
.card {
  background: var(--theme-card-bg);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--theme-shadow-sm);
  border: 1px solid var(--theme-border-light);
}
```

### 2. Card de Bienvenida

```html
<div class="welcome-card">
  <div class="welcome-icon">
    <icon>mdi-hand-wave</icon>
  </div>
  <div class="welcome-text">
    <h1 class="welcome-title">¡Bienvenido, Usuario!</h1>
    <p class="welcome-subtitle">Buenos días - Domingo, 18 de enero 2026</p>
  </div>
</div>
```

```css
.welcome-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 28px;
  background: var(--theme-card-bg);
  border-radius: 20px;
  box-shadow: var(--theme-shadow-md);
  border: 1px solid var(--theme-border-light);
}

.welcome-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.welcome-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--theme-card-text-primary);
  margin: 0;
  line-height: 1.3;
}

.welcome-subtitle {
  font-size: 14px;
  color: var(--theme-card-text-secondary);
  margin: 4px 0 0 0;
  text-transform: capitalize;
}
```

### 3. Card de Estadística

```html
<div class="stat-card stat-card--blue">
  <div class="stat-card-icon stat-icon--blue">
    <icon>mdi-tooth-outline</icon>
  </div>
  <div class="stat-card-content">
    <span class="stat-value">15</span>
    <span class="stat-label">Prácticas realizadas hoy</span>
  </div>
  <div class="stat-decoration"></div>
</div>
```

```css
.stat-card {
  position: relative;
  background: var(--theme-card-bg);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--theme-shadow-sm);
  border: 1px solid var(--theme-border-light);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--theme-shadow-lg);
}

.stat-card-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Variantes de color */
.stat-icon--blue {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.stat-icon--green {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.stat-icon--orange {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.stat-icon--purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.stat-icon--teal {
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
}

.stat-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.stat-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--theme-card-text-primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 13px;
  color: var(--theme-card-text-secondary);
  margin-top: 4px;
  line-height: 1.3;
}

/* Decoración circular */
.stat-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  opacity: 0.06;
}

.stat-card--blue .stat-decoration { background: #3b82f6; }
.stat-card--green .stat-decoration { background: #22c55e; }
.stat-card--orange .stat-decoration { background: #f97316; }
.stat-card--purple .stat-decoration { background: #8b5cf6; }
.stat-card--teal .stat-decoration { background: #14b8a6; }
```

### 4. Card de Alerta

```html
<div class="alert-card alert-warning">
  <div class="alert-icon-wrapper">
    <icon>mdi-alert-circle</icon>
  </div>
  <div class="alert-content">
    <span class="alert-title">Cierre de Facturación Próximo</span>
    <span class="alert-text">Recuerde enviar su facturación antes de la fecha de cierre.</span>
  </div>
  <div class="alert-badge">
    <icon>mdi-clock-alert</icon>
    3 días
  </div>
</div>
```

```css
.alert-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);
}

.alert-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.alert-title {
  font-size: 15px;
  font-weight: 600;
  color: white;
}

.alert-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

.alert-badge {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}
```

### 5. Botón de Navegación (Desktop)

```css
.nav-btn {
  text-transform: none;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.2px;
  border-radius: 8px;
  padding: 0 14px;
  height: 36px;
  color: var(--theme-text-secondary);
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: var(--theme-primary-hover);
  color: var(--theme-primary);
}

.nav-btn .icon {
  color: var(--theme-text-tertiary);
}

.nav-btn:hover .icon {
  color: var(--theme-primary);
}
```

### 6. Item de Navegación (Drawer)

```css
.nav-item {
  border-radius: 10px;
  margin-bottom: 2px;
  min-height: 44px;
  transition: all 0.2s ease;
  padding-left: 12px;
}

.nav-item:hover {
  background: var(--theme-nav-item-hover);
}

.nav-item:active {
  background: var(--theme-nav-item-active);
}

.nav-icon-wrapper {
  min-width: 36px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--theme-nav-icon-bg);
  border-radius: 8px;
}

.nav-icon-wrapper .icon {
  color: var(--theme-nav-icon-color);
}

.nav-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--theme-text-secondary);
  letter-spacing: 0.2px;
}
```

### 7. Header del Drawer

```html
<div class="drawer-header">
  <!-- Fondo con gradiente -->
  <div class="header-bg"></div>

  <!-- Círculos decorativos -->
  <div class="header-circle header-circle-1"></div>
  <div class="header-circle header-circle-2"></div>
  <div class="header-circle header-circle-3"></div>

  <!-- Contenido -->
  <div class="header-content">
    <div class="logo-wrapper">
      <div class="logo-ring"></div>
      <div class="logo-container">
        <img src="logo.png" alt="Logo" class="drawer-logo" />
      </div>
    </div>
    <div class="app-brand">
      <span class="brand-text">DentalTec</span>
    </div>
  </div>

  <!-- Onda decorativa -->
  <svg class="header-wave" viewBox="0 0 300 30" preserveAspectRatio="none">
    <path d="M0,30 C75,10 225,10 300,30 L300,30 L0,30 Z"/>
  </svg>
</div>
```

```css
.drawer-header {
  position: relative;
  padding: 28px 20px 40px;
  text-align: center;
  overflow: hidden;
  min-height: 260px;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, #1565c0 0%, #0d47a1 50%, #1a237e 100%);
}

/* Círculos decorativos */
.header-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
}

.header-circle-1 {
  width: 180px;
  height: 180px;
  top: -60px;
  right: -40px;
}

.header-circle-2 {
  width: 120px;
  height: 120px;
  bottom: 40px;
  left: -40px;
  background: rgba(255, 255, 255, 0.04);
}

.header-circle-3 {
  width: 80px;
  height: 80px;
  top: 30px;
  left: 20px;
  background: rgba(255, 255, 255, 0.03);
}

/* Logo con anillo animado */
.logo-wrapper {
  position: relative;
  display: inline-block;
}

.logo-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: pulse-ring 2s ease-out infinite;
}

.logo-container {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1);
}

.drawer-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.brand-text {
  font-size: 22px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Onda inferior */
.header-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
}

.header-wave path {
  fill: var(--theme-drawer-wave);
}
```

### 8. Tarjeta de Prestador (en Header)

```css
.prestador-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.prestador-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.prestador-avatar {
  background: linear-gradient(135deg, #26a69a 0%, #00897b 100%);
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.prestador-name {
  font-size: 14px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.prestador-detail {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
}
```

### 9. Menú de Usuario (Footer del Drawer)

```css
.user-footer {
  border-top: 1px solid var(--theme-border);
  background: var(--theme-bg-primary);
}

.user-footer-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.user-footer-btn:hover {
  background: var(--theme-surface-hover);
}

.user-footer-avatar {
  background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);
  flex-shrink: 0;
  border: 2px solid var(--theme-primary-light);
}

.user-footer-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--theme-text-primary);
}

.user-footer-role {
  font-size: 12px;
  color: var(--theme-text-muted);
}

/* Menú expandible */
.user-menu {
  background: var(--theme-user-menu-bg);
  padding: 8px 12px 12px;
}

.user-menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.user-menu-item:hover {
  background: var(--theme-user-menu-item-hover);
}

.user-menu-item--danger:hover {
  background: var(--theme-user-menu-danger-hover);
}

.user-menu-item-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--theme-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu-item-icon .icon {
  color: var(--theme-primary);
}
```

### 10. Avatar

```css
.avatar {
  background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);
  border: 2px solid var(--theme-primary-light);
  cursor: pointer;
  transition: all 0.2s ease;
}

.avatar:hover {
  border-color: var(--theme-primary);
  transform: scale(1.05);
}

.avatar-text {
  color: white;
  font-weight: 500;
}
```

---

## Animaciones

### Transiciones Globales

```css
*,
*::before,
*::after {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.15s ease;
}

/* Excluir elementos que no deben tener transición de tema */
.btn,
.icon,
.ripple,
.dialog,
.menu-content {
  transition: none;
}
```

### Hover de Cards

```css
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--theme-shadow-lg);
}
```

### Pulse Ring (Logo)

```css
@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
}

.logo-ring {
  animation: pulse-ring 2s ease-out infinite;
}
```

### Float (Background Shapes)

```css
@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.05);
  }
}

.bg-shape-1 {
  animation: float-slow 20s ease-in-out infinite;
}

.bg-shape-2 {
  animation: float-slow 25s ease-in-out infinite reverse;
}

.bg-shape-3 {
  animation: float-slow 30s ease-in-out infinite;
}
```

### Rotación de Chevron

```css
.chevron {
  transition: transform 0.3s ease;
}

.chevron.rotated {
  transform: rotate(180deg);
}
```

### Expand Transition

```css
/* Para menús expandibles */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
```

---

## Responsive Design

### Breakpoints

| Nombre | Valor | Descripción |
|--------|-------|-------------|
| `xs` | < 600px | Móviles |
| `sm` | 600px - 959px | Tablets portrait |
| `md` | 960px - 1263px | Tablets landscape / Desktop pequeño |
| `lg` | 1264px - 1903px | Desktop |
| `xl` | > 1904px | Desktop grande |

### Ajustes por Breakpoint

```css
/* Móvil (< 600px) */
@media (max-width: 599px) {
  .welcome-card {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .welcome-title {
    font-size: 20px;
  }

  .stat-value {
    font-size: 22px;
  }

  .alert-card {
    flex-wrap: wrap;
  }

  .alert-badge {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
}

/* Móvil pequeño (< 400px) */
@media (max-width: 400px) {
  .desglose-btn {
    padding: 0 6px;
    min-width: auto;
  }

  .desglose-btn .chip {
    display: none;
  }
}

/* Desktop (>= 960px) */
@media (min-width: 960px) {
  .nav-desktop {
    display: flex;
    gap: 4px;
  }
}
```

### Clases de Visibilidad

```css
/* Ocultar en móvil */
.d-none.d-md-block {
  display: none;
}

@media (min-width: 960px) {
  .d-none.d-md-block {
    display: block;
  }
}
```

---

## Implementación

### Variables CSS Completas

Copiar el archivo `theme.css` completo en tu proyecto:

```css
/* ============================================
   SISTEMA DE TEMAS - CSS Custom Properties
   ============================================ */

:root,
[data-theme="light"] {
  /* === FONDOS === */
  --theme-bg-primary: #ffffff;
  --theme-bg-secondary: #fafafa;
  --theme-bg-tertiary: #f5f5f5;
  --theme-bg-page: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);

  /* === SUPERFICIES === */
  --theme-surface: #ffffff;
  --theme-surface-hover: #f5f5f5;
  --theme-surface-active: rgba(33, 150, 243, 0.08);

  /* === BORDES === */
  --theme-border: #e0e0e0;
  --theme-border-light: rgba(226, 232, 240, 0.8);

  /* === TEXTO === */
  --theme-text-primary: #212121;
  --theme-text-secondary: #424242;
  --theme-text-tertiary: #616161;
  --theme-text-muted: #757575;
  --theme-text-hint: #9e9e9e;

  /* === COLORES DE ACCION === */
  --theme-primary: #1976d2;
  --theme-primary-light: #e3f2fd;
  --theme-primary-hover: rgba(33, 150, 243, 0.08);

  /* === NAVEGACION === */
  --theme-nav-icon-bg: #e3f2fd;
  --theme-nav-icon-color: #1976d2;
  --theme-nav-item-hover: rgba(33, 150, 243, 0.08);
  --theme-nav-item-active: rgba(33, 150, 243, 0.12);

  /* === SOMBRAS === */
  --theme-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.08);
  --theme-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  --theme-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.1);

  /* === CARDS === */
  --theme-card-bg: #ffffff;
  --theme-card-text-primary: #1e293b;
  --theme-card-text-secondary: #64748b;
  --theme-card-text-muted: #94a3b8;

  /* === SCROLLBAR === */
  --theme-scrollbar-track: #f5f5f5;
  --theme-scrollbar-thumb: #bdbdbd;
  --theme-scrollbar-thumb-hover: #9e9e9e;

  /* === USER MENU === */
  --theme-user-menu-bg: #fafafa;
  --theme-user-menu-info-bg: #ffffff;
  --theme-user-menu-item-hover: #e3f2fd;
  --theme-user-menu-danger-hover: #ffebee;
  --theme-user-menu-danger-icon-bg: #ffebee;

  /* === DRAWER === */
  --theme-drawer-wave: #fafafa;
}

[data-theme="dark"] {
  /* === FONDOS === */
  --theme-bg-primary: #1e1e1e;
  --theme-bg-secondary: #252525;
  --theme-bg-tertiary: #2d2d2d;
  --theme-bg-page: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);

  /* === SUPERFICIES === */
  --theme-surface: #2d2d2d;
  --theme-surface-hover: #383838;
  --theme-surface-active: rgba(66, 165, 245, 0.15);

  /* === BORDES === */
  --theme-border: #424242;
  --theme-border-light: rgba(66, 66, 66, 0.8);

  /* === TEXTO === */
  --theme-text-primary: #e0e0e0;
  --theme-text-secondary: #bdbdbd;
  --theme-text-tertiary: #9e9e9e;
  --theme-text-muted: #757575;
  --theme-text-hint: #616161;

  /* === COLORES DE ACCION === */
  --theme-primary: #42a5f5;
  --theme-primary-light: rgba(66, 165, 245, 0.15);
  --theme-primary-hover: rgba(66, 165, 245, 0.12);

  /* === NAVEGACION === */
  --theme-nav-icon-bg: rgba(66, 165, 245, 0.15);
  --theme-nav-icon-color: #42a5f5;
  --theme-nav-item-hover: rgba(66, 165, 245, 0.12);
  --theme-nav-item-active: rgba(66, 165, 245, 0.2);

  /* === SOMBRAS === */
  --theme-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4);
  --theme-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --theme-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.5);

  /* === CARDS === */
  --theme-card-bg: #2d2d2d;
  --theme-card-text-primary: #e0e0e0;
  --theme-card-text-secondary: #9e9e9e;
  --theme-card-text-muted: #757575;

  /* === SCROLLBAR === */
  --theme-scrollbar-track: #2d2d2d;
  --theme-scrollbar-thumb: #4a4a4a;
  --theme-scrollbar-thumb-hover: #5a5a5a;

  /* === USER MENU === */
  --theme-user-menu-bg: #252525;
  --theme-user-menu-info-bg: #2d2d2d;
  --theme-user-menu-item-hover: rgba(66, 165, 245, 0.15);
  --theme-user-menu-danger-hover: rgba(244, 67, 54, 0.15);
  --theme-user-menu-danger-icon-bg: rgba(244, 67, 54, 0.15);

  /* === DRAWER === */
  --theme-drawer-wave: #252525;
}

/* === TRANSICIONES GLOBALES === */
*,
*::before,
*::after {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.15s ease;
}
```

### Composable useTheme (JavaScript)

```javascript
import { ref, computed } from "vue";

const isDark = ref(false);
const THEME_KEY = "dentaltec-theme";

export const useTheme = () => {
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    applyTheme();
  }

  function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem(THEME_KEY, isDark.value ? "dark" : "light");
    applyTheme();
  }

  function applyTheme() {
    document.documentElement.setAttribute(
      "data-theme",
      isDark.value ? "dark" : "light"
    );
  }

  const themeIcon = computed(() =>
    isDark.value ? "mdi-weather-sunny" : "mdi-weather-night"
  );

  const themeLabel = computed(() =>
    isDark.value ? "Modo Claro" : "Modo Oscuro"
  );

  return {
    isDark,
    initTheme,
    toggleTheme,
    themeIcon,
    themeLabel,
  };
};
```

### Inicialización

```javascript
// En App.vue o main.js
import { useTheme } from "./composables/useTheme";

// En el mounted o onMounted
const { initTheme } = useTheme();
initTheme();
```

---

## Scrollbar Personalizado

```css
/* Webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--theme-scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--theme-scrollbar-thumb);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--theme-scrollbar-thumb-hover);
}
```

---

## Background Decorativo (Página de Inicio)

```html
<div class="page-background">
  <!-- Gradiente base -->
  <div class="bg-gradient"></div>

  <!-- Patrón de puntos -->
  <div class="bg-pattern"></div>

  <!-- Formas decorativas -->
  <div class="bg-shape bg-shape-1"></div>
  <div class="bg-shape bg-shape-2"></div>
  <div class="bg-shape bg-shape-3"></div>

  <!-- Líneas decorativas -->
  <svg class="bg-lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
    <path class="line-path" d="M0,400 Q300,350 600,400 T1200,400" />
    <path class="line-path line-path-2" d="M0,450 Q300,400 600,450 T1200,450" />
  </svg>
</div>
```

```css
.page-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: var(--theme-bg-page);
}

.bg-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: radial-gradient(var(--theme-inicio-pattern) 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.bg-shape-1 {
  width: 600px;
  height: 600px;
  background: var(--theme-inicio-shape-1);
  top: -200px;
  right: -100px;
  animation: float-slow 20s ease-in-out infinite;
}

.bg-shape-2 {
  width: 400px;
  height: 400px;
  background: var(--theme-inicio-shape-2);
  bottom: -100px;
  left: -100px;
  animation: float-slow 25s ease-in-out infinite reverse;
}

.bg-shape-3 {
  width: 300px;
  height: 300px;
  background: var(--theme-inicio-shape-3);
  top: 40%;
  left: 30%;
  animation: float-slow 30s ease-in-out infinite;
}

.bg-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.15;
}

.line-path {
  fill: none;
  stroke: var(--theme-inicio-line-1);
  stroke-width: 1.5;
}

.line-path-2 {
  stroke: var(--theme-inicio-line-2);
  opacity: 0.7;
}
```

---

## Iconografía

El sistema usa **Material Design Icons (MDI)**. Iconos principales usados:

| Icono | Código | Uso |
|-------|--------|-----|
| Inicio | `mdi-home-outline` | Navegación |
| Calendario | `mdi-calendar-outline` | Agenda |
| Diente | `mdi-tooth-outline` | Prácticas |
| Factura | `mdi-receipt-text-outline` | Facturación |
| Usuario | `mdi-account` | Perfil |
| Configuración | `mdi-cog-outline` | Settings |
| Cerrar sesión | `mdi-logout-variant` | Logout |
| Sol | `mdi-weather-sunny` | Tema claro |
| Luna | `mdi-weather-night` | Tema oscuro |
| Alerta | `mdi-alert-circle` | Warnings |
| Saludo | `mdi-hand-wave` | Welcome |
| Gráfico | `mdi-chart-box-outline` | Estadísticas |
| Noticias | `mdi-newspaper-variant-outline` | News |

---

## Notas Finales

Este design system está optimizado para:

1. **Consistencia visual** entre la aplicación y la landing page
2. **Accesibilidad** con soporte completo de temas claro/oscuro
3. **Performance** con transiciones CSS optimizadas
4. **Mantenibilidad** usando CSS Custom Properties
5. **Escalabilidad** con componentes modulares y reutilizables

Para implementar en la landing page:

1. Copiar el archivo `theme.css` completo
2. Implementar el composable `useTheme` si se usa Vue, o adaptar a JavaScript vanilla
3. Usar las clases y estructuras de componentes documentadas
4. Respetar la escala de espaciado y tipografía
5. Mantener los mismos gradientes y colores semánticos
