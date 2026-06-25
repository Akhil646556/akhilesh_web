const fs = require('fs');
const path = require('path');

let CleanCSS;
let Terser;

try {
  CleanCSS = require('clean-css');
} catch (e) {
  console.log('clean-css not available, will output raw CSS only');
}

try {
  Terser = require('terser');
} catch (e) {
  console.log('terser not available, will output raw JS only');
}

const DIST_DIR = path.join(__dirname, '../dist');
const ICONS_DIST_DIR = path.join(DIST_DIR, 'icons');
const USER_ICONS_DIR = path.join(__dirname, '../icons');

// Create directories if they do not exist
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });
if (!fs.existsSync(ICONS_DIST_DIR)) fs.mkdirSync(ICONS_DIST_DIR, { recursive: true });
if (!fs.existsSync(USER_ICONS_DIR)) fs.mkdirSync(USER_ICONS_DIR, { recursive: true });

const prefix = 'ak';

// Color Palette (Premium HSL colors)
const colors = {
  primary: { h: 243, s: 75, l: 59 },   // Indigo/Purple
  secondary: { h: 215, s: 16, l: 47 }, // Slate
  success: { h: 142, s: 71, l: 45 },   // Emerald
  danger: { h: 350, s: 89, l: 60 },    // Rose/Red
  warning: { h: 38, s: 92, l: 50 },    // Amber
  info: { h: 188, s: 86, l: 53 },     // Cyan
  light: { h: 210, s: 40, l: 96 },    // Soft gray
  dark: { h: 222, s: 47, l: 11 }      // Deep slate
};

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

// -----------------------------------------------------------------------------
// PART 1: STATIC CSS COMPILATION
// -----------------------------------------------------------------------------
let css = `/*
 * Custom CSS Library - Generated for ${prefix}
 * Fully responsive, no external dependencies.
 * Dynamic Range Utilities (1 to 30,000+) powered by JS Engine.
 */

:root {
  /* HSL Colors */
  ${Object.entries(colors).map(([name, c]) => `
  --${prefix}-${name}-h: ${c.h};
  --${prefix}-${name}-s: ${c.s}%;
  --${prefix}-${name}-l: ${c.l}%;
  --${prefix}-${name}: hsl(var(--${prefix}-${name}-h), var(--${prefix}-${name}-s), var(--${prefix}-${name}-l));
  --${prefix}-${name}-rgb: ${name === 'primary' ? '79, 70, 229' : name === 'success' ? '16, 185, 129' : name === 'danger' ? '244, 63, 94' : name === 'warning' ? '245, 158, 11' : name === 'info' ? '6, 182, 212' : '100, 116, 139'};
  --${prefix}-${name}-hover: hsl(var(--${prefix}-${name}-h), var(--${prefix}-${name}-s), calc(var(--${prefix}-${name}-l) - 8%));
  --${prefix}-${name}-active: hsl(var(--${prefix}-${name}-h), var(--${prefix}-${name}-s), calc(var(--${prefix}-${name}-l) - 12%));
  --${prefix}-${name}-light: hsl(var(--${prefix}-${name}-h), var(--${prefix}-${name}-s), 95%);
  --${prefix}-${name}-border: hsl(var(--${prefix}-${name}-h), var(--${prefix}-${name}-s), 85%);
  `).join('')}

  /* Font Settings */
  --${prefix}-font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --${prefix}-body-bg: #f8fafc;
  --${prefix}-body-color: #1e293b;
  --${prefix}-border-color: #e2e8f0;
  
  /* Shadows */
  --${prefix}-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --${prefix}-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --${prefix}-shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --${prefix}-shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --${prefix}-shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  --${prefix}-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--${prefix}-font-family);
  background-color: var(--${prefix}-body-bg);
  color: var(--${prefix}-body-color);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Grid & Layout Container */
.${prefix}-container, .${prefix}-container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.${prefix}-container { max-width: 100%; }

@media (min-width: ${breakpoints.sm}) { .${prefix}-container { max-width: 540px; } }
@media (min-width: ${breakpoints.md}) { .${prefix}-container { max-width: 720px; } }
@media (min-width: ${breakpoints.lg}) { .${prefix}-container { max-width: 960px; } }
@media (min-width: ${breakpoints.xl}) { .${prefix}-container { max-width: 1140px; } }
@media (min-width: ${breakpoints.xxl}) { .${prefix}-container { max-width: 1320px; } }

.${prefix}-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}

.${prefix}-row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}

/* Columns */
.${prefix}-col { flex: 1 0 0%; }
.${prefix}-col-auto { flex: 0 0 auto; width: auto; }

${Array.from({ length: 12 }, (_, i) => i + 1).map(num => `
.${prefix}-col-${num} {
  flex: 0 0 auto;
  width: ${(num / 12 * 100).toFixed(6)}%;
}
`).join('')}

/* Breakpoint Columns */
${Object.entries(breakpoints).map(([bp, size]) => `
@media (min-width: ${size}) {
  .${prefix}-col-${bp} { flex: 1 0 0%; }
  .${prefix}-col-${bp}-auto { flex: 0 0 auto; width: auto; }
  ${Array.from({ length: 12 }, (_, i) => i + 1).map(num => `
  .${prefix}-col-${bp}-${num} {
    flex: 0 0 auto;
    width: ${(num / 12 * 100).toFixed(6)}%;
  }
  `).join('')}
}
`).join('')}

/* Static utilities 1 to 5 for compatibility */
${[1, 2, 3, 4, 5, 8, 10, 12, 16, 20, 24, 32, 40, 48, 50, 64, 80, 100].map(i => `
.${prefix}-m-${i} { margin: ${i}px !important; }
.${prefix}-mt-${i} { margin-top: ${i}px !important; }
.${prefix}-mb-${i} { margin-bottom: ${i}px !important; }
.${prefix}-ms-${i}, .${prefix}-ml-${i} { margin-left: ${i}px !important; }
.${prefix}-me-${i}, .${prefix}-mr-${i} { margin-right: ${i}px !important; }
.${prefix}-mx-${i} { margin-left: ${i}px !important; margin-right: ${i}px !important; }
.${prefix}-my-${i} { margin-top: ${i}px !important; margin-bottom: ${i}px !important; }
.${prefix}-p-${i} { padding: ${i}px !important; }
.${prefix}-pt-${i} { padding-top: ${i}px !important; }
.${prefix}-pb-${i} { padding-bottom: ${i}px !important; }
.${prefix}-ps-${i}, .${prefix}-pl-${i} { padding-left: ${i}px !important; }
.${prefix}-pe-${i}, .${prefix}-pr-${i} { padding-right: ${i}px !important; }
.${prefix}-px-${i} { padding-left: ${i}px !important; padding-right: ${i}px !important; }
.${prefix}-py-${i} { padding-top: ${i}px !important; padding-bottom: ${i}px !important; }
.${prefix}-rounded-${i} { border-radius: ${i}px !important; }
.${prefix}-fs-${i} { font-size: ${i}px !important; }
.${prefix}-gap-${i} { gap: ${i}px !important; }
.${prefix}-w-${i} { width: ${i}% !important; }
.${prefix}-h-${i} { height: ${i}% !important; }
.${prefix}-opacity-${i} { opacity: ${i / 100} !important; }
.${prefix}-z-${i} { z-index: ${i} !important; }
`).join('')}

.${prefix}-m-auto { margin: auto !important; }
.${prefix}-mt-auto { margin-top: auto !important; }
.${prefix}-mb-auto { margin-bottom: auto !important; }
.${prefix}-ms-auto, .${prefix}-ml-auto { margin-left: auto !important; }
.${prefix}-me-auto, .${prefix}-mr-auto { margin-right: auto !important; }
.${prefix}-mx-auto { margin-left: auto !important; margin-right: auto !important; }
.${prefix}-my-auto { margin-top: auto !important; margin-bottom: auto !important; }

/* Colors */
${Object.keys(colors).map(color => `
.${prefix}-text-${color} { color: var(--${prefix}-${color}) !important; }
.${prefix}-bg-${color} { background-color: var(--${prefix}-${color}) !important; }
.${prefix}-border-${color} { border-color: var(--${prefix}-${color}) !important; }
`).join('')}
.${prefix}-text-white { color: #ffffff !important; }
.${prefix}-bg-white { background-color: #ffffff !important; }
.${prefix}-border-white { border-color: #ffffff !important; }
.${prefix}-text-transparent { color: transparent !important; }
.${prefix}-bg-transparent { background-color: transparent !important; }

/* Display & Responsive Display */
.${prefix}-d-none { display: none !important; }
.${prefix}-d-inline { display: inline !important; }
.${prefix}-d-inline-block { display: inline-block !important; }
.${prefix}-d-block { display: block !important; }
.${prefix}-d-flex { display: flex !important; }
.${prefix}-d-inline-flex { display: inline-flex !important; }
.${prefix}-d-grid { display: grid !important; }

${Object.entries(breakpoints).map(([bp, size]) => `
@media (min-width: ${size}) {
  .${prefix}-d-${bp}-none { display: none !important; }
  .${prefix}-d-${bp}-inline { display: inline !important; }
  .${prefix}-d-${bp}-inline-block { display: inline-block !important; }
  .${prefix}-d-${bp}-block { display: block !important; }
  .${prefix}-d-${bp}-flex { display: flex !important; }
  .${prefix}-d-${bp}-inline-flex { display: inline-flex !important; }
  .${prefix}-d-${bp}-grid { display: grid !important; }
}
`).join('')}

/* Flexbox */
.${prefix}-flex-row { flex-direction: row !important; }
.${prefix}-flex-column { flex-direction: column !important; }
.${prefix}-flex-row-reverse { flex-direction: row-reverse !important; }
.${prefix}-flex-column-reverse { flex-direction: column-reverse !important; }
.${prefix}-flex-wrap { flex-wrap: wrap !important; }
.${prefix}-flex-nowrap { flex-wrap: nowrap !important; }
.${prefix}-flex-grow-0 { flex-grow: 0 !important; }
.${prefix}-flex-grow-1 { flex-grow: 1 !important; }
.${prefix}-flex-shrink-0 { flex-shrink: 0 !important; }
.${prefix}-flex-shrink-1 { flex-shrink: 1 !important; }

.${prefix}-justify-content-start { justify-content: flex-start !important; }
.${prefix}-justify-content-end { justify-content: flex-end !important; }
.${prefix}-justify-content-center { justify-content: center !important; }
.${prefix}-justify-content-between { justify-content: space-between !important; }
.${prefix}-justify-content-around { justify-content: space-around !important; }
.${prefix}-justify-content-evenly { justify-content: space-evenly !important; }

.${prefix}-align-items-start { align-items: flex-start !important; }
.${prefix}-align-items-end { align-items: flex-end !important; }
.${prefix}-align-items-center { align-items: center !important; }
.${prefix}-align-items-baseline { align-items: baseline !important; }
.${prefix}-align-items-stretch { align-items: stretch !important; }

.${prefix}-align-self-auto { align-self: auto !important; }
.${prefix}-align-self-start { align-self: flex-start !important; }
.${prefix}-align-self-end { align-self: flex-end !important; }
.${prefix}-align-self-center { align-self: center !important; }
.${prefix}-align-self-baseline { align-self: baseline !important; }
.${prefix}-align-self-stretch { align-self: stretch !important; }

/* Responsive Flexbox */
${Object.entries(breakpoints).map(([bp, size]) => `
@media (min-width: ${size}) {
  .${prefix}-flex-${bp}-row { flex-direction: row !important; }
  .${prefix}-flex-${bp}-column { flex-direction: column !important; }
  .${prefix}-flex-${bp}-wrap { flex-wrap: wrap !important; }
  .${prefix}-flex-${bp}-nowrap { flex-wrap: nowrap !important; }
  .${prefix}-justify-content-${bp}-start { justify-content: flex-start !important; }
  .${prefix}-justify-content-${bp}-end { justify-content: flex-end !important; }
  .${prefix}-justify-content-${bp}-center { justify-content: center !important; }
  .${prefix}-justify-content-${bp}-between { justify-content: space-between !important; }
  .${prefix}-align-items-${bp}-start { align-items: flex-start !important; }
  .${prefix}-align-items-${bp}-end { align-items: flex-end !important; }
  .${prefix}-align-items-${bp}-center { align-items: center !important; }
  .${prefix}-align-items-${bp}-stretch { align-items: stretch !important; }
}
`).join('')}

/* Borders & Rounding */
.${prefix}-border { border: 1px solid var(--${prefix}-border-color) !important; }
.${prefix}-border-top { border-top: 1px solid var(--${prefix}-border-color) !important; }
.${prefix}-border-bottom { border-bottom: 1px solid var(--${prefix}-border-color) !important; }
.${prefix}-border-0 { border: 0 !important; }
.${prefix}-rounded-circle { border-radius: 50% !important; }
.${prefix}-rounded-0 { border-radius: 0 !important; }

/* Shadows */
.${prefix}-shadow-sm { box-shadow: var(--${prefix}-shadow-sm) !important; }
.${prefix}-shadow { box-shadow: var(--${prefix}-shadow) !important; }
.${prefix}-shadow-md { box-shadow: var(--${prefix}-shadow-md) !important; }
.${prefix}-shadow-lg { box-shadow: var(--${prefix}-shadow-lg) !important; }
.${prefix}-shadow-xl { box-shadow: var(--${prefix}-shadow-xl) !important; }
.${prefix}-shadow-none { box-shadow: none !important; }

/* Typography */
.${prefix}-h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.2; }
.${prefix}-h2 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.2; }
.${prefix}-h3 { font-size: 1.75rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.2; }
.${prefix}-h4 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.2; }
.${prefix}-h5 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.2; }
.${prefix}-h6 { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.2; }
.${prefix}-lead { font-size: 1.25rem; font-weight: 300; }
.${prefix}-small { font-size: 0.875em; }

.${prefix}-text-start { text-align: left !important; }
.${prefix}-text-center { text-align: center !important; }
.${prefix}-text-end { text-align: right !important; }

${Object.entries(breakpoints).map(([bp, size]) => `
@media (min-width: ${size}) {
  .${prefix}-text-${bp}-start { text-align: left !important; }
  .${prefix}-text-${bp}-center { text-align: center !important; }
  .${prefix}-text-${bp}-end { text-align: right !important; }
}
`).join('')}

.${prefix}-fw-light { font-weight: 300 !important; }
.${prefix}-fw-normal { font-weight: 400 !important; }
.${prefix}-fw-medium { font-weight: 500 !important; }
.${prefix}-fw-semibold { font-weight: 600 !important; }
.${prefix}-fw-bold { font-weight: 700 !important; }
.${prefix}-fw-extrabold { font-weight: 800 !important; }

.${prefix}-fst-italic { font-style: italic !important; }
.${prefix}-fst-normal { font-style: normal !important; }

/* Buttons */
.${prefix}-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--${prefix}-font-family);
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5625rem 1.25rem;
  font-size: 0.9375rem;
  border-radius: 8px;
  transition: var(--${prefix}-transition);
  cursor: pointer;
  text-decoration: none;
  gap: 8px;
}
.${prefix}-btn:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.4);
}
.${prefix}-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

${Object.keys(colors).map(color => {
  const isLight = color === 'light';
  const textColor = isLight ? '#1e293b' : '#ffffff';
  const outlineTextColor = isLight ? '#1e293b' : `var(--${prefix}-${color})`;
  const outlineBorderColor = isLight ? '#cbd5e1' : `var(--${prefix}-${color})`;
  return `
.${prefix}-btn-${color} {
  color: ${textColor};
  background-color: var(--${prefix}-${color});
  border-color: var(--${prefix}-${color});
}
.${prefix}-btn-${color}:hover {
  color: ${textColor};
  background-color: var(--${prefix}-${color}-hover);
  border-color: var(--${prefix}-${color}-hover);
}
.${prefix}-btn-${color}:active {
  background-color: var(--${prefix}-${color}-active);
  border-color: var(--${prefix}-${color}-active);
}
.${prefix}-btn-outline-${color} {
  color: ${outlineTextColor};
  background-color: transparent;
  border-color: ${outlineBorderColor};
}
.${prefix}-btn-outline-${color}:hover {
  color: ${textColor};
  background-color: var(--${prefix}-${color});
  border-color: var(--${prefix}-${color});
}
.${prefix}-btn-soft-${color} {
  color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), calc(var(--${prefix}-${color}-l) - 20%));
  background-color: var(--${prefix}-${color}-light);
  border-color: var(--${prefix}-${color}-border);
}
.${prefix}-btn-soft-${color}:hover {
  color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), calc(var(--${prefix}-${color}-l) - 25%));
  background-color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), 91%);
  border-color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), 80%);
}
.${prefix}-btn-soft-${color}:active {
  background-color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), 87%);
}
.${prefix}-btn-gradient-${color} {
  color: ${textColor};
  background: linear-gradient(135deg, var(--${prefix}-${color}), ${color === 'primary' ? '#7c3aed' : color === 'success' ? '#059669' : color === 'danger' ? '#e11d48' : color === 'warning' ? '#d97706' : color === 'info' ? '#0891b2' : color === 'dark' ? '#1e293b' : '#cbd5e1'});
  border: none;
  box-shadow: 0 4px 12px ${color === 'light' ? 'rgba(0,0,0,0.05)' : `rgba(var(--${prefix}-${color}-rgb), 0.35)`};
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s, background 0.2s;
}
.${prefix}-btn-gradient-${color}:hover {
  color: ${textColor};
  transform: translateY(-2px);
  box-shadow: 0 8px 20px ${color === 'light' ? 'rgba(0,0,0,0.08)' : `rgba(var(--${prefix}-${color}-rgb), 0.45)`};
}
.${prefix}-btn-gradient-${color}:active {
  transform: translateY(0);
}
`;
}).join('')}

.${prefix}-btn-pill {
  border-radius: 9999px !important;
}

.${prefix}-btn-sm { padding: 0.25rem 0.75rem; font-size: 0.8125rem; border-radius: 6px; }
.${prefix}-btn-lg { padding: 0.75rem 1.75rem; font-size: 1.0625rem; border-radius: 10px; }

/* Cards */
.${prefix}-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #ffffff;
  border: 1px solid var(--${prefix}-border-color);
  border-radius: 12px;
  box-shadow: var(--${prefix}-shadow-sm);
  overflow: hidden;
}
.${prefix}-card-body { flex: 1 1 auto; padding: 24px; }
.${prefix}-card-header { padding: 16px 24px; background-color: #ffffff; border-bottom: 1px solid var(--${prefix}-border-color); }
.${prefix}-card-footer { padding: 16px 24px; background-color: #ffffff; border-top: 1px solid var(--${prefix}-border-color); }

/* Alerts */
.${prefix}-alert {
  position: relative;
  padding: 16px 20px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9375rem;
  box-shadow: var(--${prefix}-shadow-sm);
  transition: opacity 0.15s linear;
}
.${prefix}-alert-title { font-weight: 600; margin-bottom: 4px; }
.${prefix}-alert-icon { flex-shrink: 0; width: 20px; height: 20px; }
.${prefix}-alert-icon svg, .${prefix}-alert-icon akhilesh-icon { display: block; width: 100%; height: 100%; }
.${prefix}-alert-content { flex-grow: 1; }
.${prefix}-alert-dismissible { padding-right: 48px; }
.${prefix}-alert-close {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: var(--${prefix}-transition);
  color: inherit;
}
.${prefix}-alert-close:hover { opacity: 1; }

${Object.keys(colors).map(color => `
.${prefix}-alert-${color} {
  color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), calc(var(--${prefix}-${color}-l) - 20%));
  background-color: var(--${prefix}-${color}-light);
  border-color: var(--${prefix}-${color}-border);
}
.${prefix}-alert-${color} .${prefix}-alert-close {
  color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), calc(var(--${prefix}-${color}-l) - 25%));
}
`).join('')}

/* Toasts */
.${prefix}-toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 380px;
  pointer-events: none;
}
.${prefix}-toast {
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 12px;
  padding: 16px;
  box-shadow: var(--${prefix}-shadow-lg);
  overflow: hidden;
  animation: ${prefix}-toast-slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transition: transform 0.2s, opacity 0.2s;
}
.${prefix}-toast-dismissing {
  animation: ${prefix}-toast-slide-out 0.2s ease-in forwards !important;
}

@keyframes ${prefix}-toast-slide-in {
  from { transform: translateX(100%) translateY(-10px); opacity: 0; }
  to { transform: translateX(0) translateY(0); opacity: 1; }
}
@keyframes ${prefix}-toast-slide-out {
  from { transform: translateX(0) scale(1); opacity: 1; }
  to { transform: translateX(50%) scale(0.9); opacity: 0; }
}

.${prefix}-toast-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.${prefix}-toast-icon akhilesh-icon { display: block; width: 14px; height: 14px; }
.${prefix}-toast-content { flex-grow: 1; padding-right: 16px; }
.${prefix}-toast-title { font-size: 0.9375rem; font-weight: 600; color: #0f172a; margin-bottom: 4px; }
.${prefix}-toast-message { font-size: 0.875rem; color: #64748b; line-height: 1.4; }
.${prefix}-toast-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: 0;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  display: inline-flex;
}
.${prefix}-toast-close:hover { color: #475569; }
.${prefix}-toast-progress { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: #e2e8f0; }
.${prefix}-toast-progress-bar { height: 100%; width: 100%; transform-origin: left; }

${Object.keys(colors).map(color => `
.${prefix}-toast-${color} { border-left: 4px solid var(--${prefix}-${color}); }
.${prefix}-toast-${color} .${prefix}-toast-icon {
  background-color: var(--${prefix}-${color});
  color: ${color === 'light' ? '#0f172a' : '#ffffff'};
}
.${prefix}-toast-${color} .${prefix}-toast-progress-bar { background-color: var(--${prefix}-${color}); }
`).join('')}

/* Custom Modals */
.${prefix}-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 20px;
  overflow-y: auto;
  animation: ${prefix}-fade-in 0.2s ease-out forwards;
}
.${prefix}-dialog-box {
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 16px;
  width: 100%;
  max-width: 460px;
  box-shadow: var(--${prefix}-shadow-xl);
  overflow: hidden;
  animation: ${prefix}-dialog-zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes ${prefix}-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${prefix}-dialog-zoom-in {
  from { transform: scale(0.9) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}

.${prefix}-dialog-header { padding: 24px 24px 16px 24px; display: flex; align-items: center; gap: 12px; }
.${prefix}-dialog-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.${prefix}-dialog-icon svg, .${prefix}-dialog-icon akhilesh-icon { width: 22px; height: 22px; }
.${prefix}-dialog-title { font-size: 1.25rem; font-weight: 700; color: #0f172a; }
.${prefix}-dialog-body { padding: 0 24px 24px 24px; }
.${prefix}-dialog-message { font-size: 0.9375rem; color: #475569; line-height: 1.5; }
.${prefix}-dialog-prompt-wrapper { margin-top: 16px; }
.${prefix}-dialog-input {
  width: 100%;
  font-family: var(--${prefix}-font-family);
  font-size: 0.9375rem;
  padding: 10px 14px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  outline: 0;
  transition: var(--${prefix}-transition);
}
.${prefix}-dialog-input:focus {
  border-color: var(--${prefix}-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}
.${prefix}-dialog-footer { padding: 16px 24px 24px 24px; display: flex; justify-content: flex-end; gap: 12px; background-color: #f8fafc; border-top: 1px solid #f1f5f9; }

/* Custom customizable Icon Wrapper Styling */
${prefix}-icon, .${prefix}-icon {
  display: inline-block !important;
  vertical-align: middle;
}
.${prefix}-icon-svg {
  display: inline-block;
  vertical-align: middle;
}
/* Ensure outline-based icons do not fill their shapes with solid color */
.${prefix}-icon-svg[stroke], .${prefix}-icon-svg [stroke] {
  fill: none;
}
/* Ensure solid/fill-based icons use current text color */
.${prefix}-icon-svg:not([stroke]) {
  fill: currentColor;
}
/* Display Utilities */
.${prefix}-d-none { display: none !important; }
.${prefix}-d-inline { display: inline !important; }
.${prefix}-d-inline-block { display: inline-block !important; }
.${prefix}-d-block { display: block !important; }
.${prefix}-d-flex { display: flex !important; }
.${prefix}-d-inline-flex { display: inline-flex !important; }

@media (min-width: 576px) {
  .${prefix}-d-sm-none { display: none !important; }
  .${prefix}-d-sm-inline { display: inline !important; }
  .${prefix}-d-sm-inline-block { display: inline-block !important; }
  .${prefix}-d-sm-block { display: block !important; }
  .${prefix}-d-sm-flex { display: flex !important; }
  .${prefix}-d-sm-inline-flex { display: inline-flex !important; }
}
@media (min-width: 768px) {
  .${prefix}-d-md-none { display: none !important; }
  .${prefix}-d-md-inline { display: inline !important; }
  .${prefix}-d-md-inline-block { display: inline-block !important; }
  .${prefix}-d-md-block { display: block !important; }
  .${prefix}-d-md-flex { display: flex !important; }
  .${prefix}-d-md-inline-flex { display: inline-flex !important; }
}
@media (min-width: 992px) {
  .${prefix}-d-lg-none { display: none !important; }
  .${prefix}-d-lg-inline { display: inline !important; }
  .${prefix}-d-lg-inline-block { display: inline-block !important; }
  .${prefix}-d-lg-block { display: block !important; }
  .${prefix}-d-lg-flex { display: flex !important; }
  .${prefix}-d-lg-inline-flex { display: inline-flex !important; }
}
@media (min-width: 1200px) {
  .${prefix}-d-xl-none { display: none !important; }
  .${prefix}-d-xl-inline { display: inline !important; }
  .${prefix}-d-xl-inline-block { display: inline-block !important; }
  .${prefix}-d-xl-block { display: block !important; }
  .${prefix}-d-xl-flex { display: flex !important; }
  .${prefix}-d-xl-inline-flex { display: inline-flex !important; }
}

/* Rotation and Flip Utility Classes */
.${prefix}-rotate-90 { transform: rotate(90deg); }
.${prefix}-rotate-180 { transform: rotate(180deg); }
.${prefix}-rotate-270 { transform: rotate(270deg); }
.${prefix}-flip-h { transform: scaleX(-1); }
.${prefix}-flip-v { transform: scaleY(-1); }
.${prefix}-flip-both { transform: scale(-1); }

/* Animation Utility Classes */
.${prefix}-spin { animation: ${prefix}-keyframes-spin 2s linear infinite; }
.${prefix}-spin-pulse { animation: ${prefix}-keyframes-spin 2s steps(8) infinite; }
.${prefix}-beat { animation: ${prefix}-keyframes-beat 1.5s ease-in-out infinite; }
.${prefix}-bounce { animation: ${prefix}-keyframes-bounce 1.5s ease-in-out infinite; }
.${prefix}-shake { animation: ${prefix}-keyframes-shake 1.5s ease-in-out infinite; }
.${prefix}-fade { animation: ${prefix}-keyframes-fade 2s ease-in-out infinite; }

@keyframes ${prefix}-keyframes-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ${prefix}-keyframes-beat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
@keyframes ${prefix}-keyframes-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes ${prefix}-keyframes-shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-3px); } 40%, 80% { transform: translateX(3px); } }
@keyframes ${prefix}-keyframes-fade { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

/* Typography Additional Elements */
.${prefix}-display-1 { font-size: 5rem; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; }
.${prefix}-display-2 { font-size: 4.25rem; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; }
.${prefix}-display-3 { font-size: 3.5rem; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; }
.${prefix}-display-4 { font-size: 2.75rem; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
.${prefix}-text-gradient {
  background: linear-gradient(135deg, var(--${prefix}-primary), var(--${prefix}-info));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.${prefix}-blockquote {
  font-size: 1.15rem;
  font-style: italic;
  padding: 12px 24px;
  border-left: 4px solid var(--${prefix}-primary);
  background: rgba(79, 70, 229, 0.04);
  border-radius: 0 8px 8px 0;
  margin-bottom: 20px;
}

/* Forms & Input Elements */
.${prefix}-form-label {
  display: inline-block;
  margin-bottom: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
}
.${prefix}-form-control, .${prefix}-form-select {
  display: block;
  width: 100%;
  padding: 10px 16px;
  font-family: var(--${prefix}-font-family);
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #1e293b;
  background-color: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: var(--${prefix}-shadow-sm);
  transition: var(--${prefix}-transition);
}
.${prefix}-form-control:focus, .${prefix}-form-select:focus {
  border-color: var(--${prefix}-primary);
  outline: 0;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}
.${prefix}-form-control:disabled, .${prefix}-form-select:disabled {
  background-color: #f1f5f9;
  color: #64748b;
  cursor: not-allowed;
}

/* Input Groups */
.${prefix}-input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.${prefix}-input-group > .${prefix}-form-control, .${prefix}-input-group > .${prefix}-form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.${prefix}-input-group > .${prefix}-form-control:first-child, .${prefix}-input-group > .${prefix}-form-select:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.${prefix}-input-group > .${prefix}-form-control:last-child, .${prefix}-input-group > .${prefix}-form-select:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.${prefix}-input-group-text {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #475569;
  background-color: #f8fafc;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  white-space: nowrap;
}
.${prefix}-input-group-text:first-child {
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.${prefix}-input-group-text:last-child {
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Checkboxes & Radios */
.${prefix}-form-check {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 1.5rem;
  padding-left: 0;
  margin-bottom: 8px;
}
.${prefix}-form-check-input {
  width: 18px;
  height: 18px;
  margin-top: 0;
  vertical-align: top;
  background-color: #fff;
  border: 1.5px solid #cbd5e1;
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: var(--${prefix}-transition);
}
.${prefix}-form-check-input[type="radio"] {
  border-radius: 50%;
}
.${prefix}-form-check-input:checked {
  background-color: var(--${prefix}-primary);
  border-color: var(--${prefix}-primary);
}
.${prefix}-form-check-input:checked::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #fff;
}
.${prefix}-form-check-input[type="checkbox"]:checked::before {
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  width: 10px;
  height: 10px;
}
.${prefix}-form-check-input[type="radio"]:checked::before {
  border-radius: 50%;
  width: 6px;
  height: 6px;
}

/* Switch toggles */
.${prefix}-form-switch {
  padding-left: 0;
}
.${prefix}-form-switch .${prefix}-form-check-input {
  width: 36px;
  height: 20px;
  border-radius: 20px;
  background-color: #cbd5e1;
  border: 0;
}
.${prefix}-form-switch .${prefix}-form-check-input::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ffffff;
  transition: transform 0.2s ease;
  clip-path: none !important;
}
.${prefix}-form-switch .${prefix}-form-check-input:checked {
  background-color: var(--${prefix}-primary);
}
.${prefix}-form-switch .${prefix}-form-check-input:checked::before {
  transform: translateX(16px);
  clip-path: none !important;
  width: 16px !important;
  height: 16px !important;
  background-color: #ffffff !important;
}

/* Badges & Tags */
.${prefix}-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 4px;
}
.${prefix}-badge-pill {
  border-radius: 20px;
}
${Object.keys(colors).map(color => `
.${prefix}-badge-${color} {
  color: ${color === 'light' ? '#0f172a' : '#ffffff'};
  background-color: var(--${prefix}-${color});
}
.${prefix}-badge-soft-${color} {
  color: hsl(var(--${prefix}-${color}-h), var(--${prefix}-${color}-s), calc(var(--${prefix}-${color}-l) - 20%));
  background-color: var(--${prefix}-${color}-light);
  border: 1px solid var(--${prefix}-${color}-border);
}
`).join('')}

/* Tables */
.${prefix}-table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.${prefix}-table {
  width: 100%;
  margin-bottom: 20px;
  color: #334155;
  vertical-align: top;
  border-collapse: collapse;
}
.${prefix}-table th, .${prefix}-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--${prefix}-border-color);
  text-align: left;
}
.${prefix}-table th {
  font-weight: 600;
  color: #1e293b;
  background-color: #f8fafc;
}
.${prefix}-table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}
.${prefix}-table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.04);
}
.${prefix}-table-bordered th, .${prefix}-table-bordered td {
  border: 1px solid var(--${prefix}-border-color);
}

/* Spinners & Loaders */
.${prefix}-spinner-border {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: text-bottom;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${prefix}-keyframes-spin 0.75s linear infinite;
}
.${prefix}-spinner-grow {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  animation: ${prefix}-keyframes-grow 0.75s linear infinite;
}
@keyframes ${prefix}-keyframes-grow {
  0% { transform: scale(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}

/* Progress Bars */
.${prefix}-progress {
  display: flex;
  height: 16px;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e2e8f0;
  border-radius: 8px;
  box-shadow: var(--${prefix}-shadow-sm);
}
.${prefix}-progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  background-color: var(--${prefix}-primary);
  transition: width 0.6s ease;
}
.${prefix}-progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
  background-size: 16px 16px;
}
.${prefix}-progress-bar-animated {
  animation: ${prefix}-keyframes-progress-bar-stripes 1s linear infinite;
}
@keyframes ${prefix}-keyframes-progress-bar-stripes {
  0% { background-position-x: 16px; }
}

/* Pagination Component */
.${prefix}-pagination {
  display: inline-flex;
  padding-left: 0;
  list-style: none;
  border-radius: 8px;
  gap: 6px;
  margin: 20px 0;
}
.${prefix}-page-item {
  display: inline-block;
}
.${prefix}-page-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  height: 38px;
  padding: 0 14px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  background-color: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  transition: var(--${prefix}-transition);
  cursor: pointer;
  user-select: none;
}
.${prefix}-page-link:hover {
  color: var(--${prefix}-primary);
  background-color: var(--${prefix}-primary-light);
  border-color: var(--${prefix}-primary-border);
}
.${prefix}-page-item.active .${prefix}-page-link {
  z-index: 3;
  color: #ffffff;
  background-color: var(--${prefix}-primary);
  border-color: var(--${prefix}-primary);
}
.${prefix}-page-item.disabled .${prefix}-page-link {
  color: #94a3b8;
  pointer-events: none;
  background-color: #f8fafc;
  border-color: #f1f5f9;
  cursor: not-allowed;
}

.${prefix}-admin-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  overflow-x: hidden;
}
.${prefix}-admin-sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0f172a; /* Slate 900 */
  color: #94a3b8;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1010;
  display: flex;
  flex-direction: column;
}
.${prefix}-admin-sidebar.collapsed {
  width: 70px;
}
.${prefix}-sidebar-menu-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #94a3b8;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
}
.${prefix}-sidebar-menu-item:hover {
  background-color: #1e293b; /* Slate 800 */
  color: #ffffff;
}
.${prefix}-sidebar-menu-item .menu-text {
  margin-left: 12px;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.2s;
}
.${prefix}-sidebar-menu-item .floating-menu {
  display: none;
}
.${prefix}-admin-sidebar.collapsed .${prefix}-sidebar-menu-item .menu-text {
  opacity: 0;
  pointer-events: none;
  width: 0;
  margin: 0;
  display: none;
}
.${prefix}-admin-sidebar.collapsed .${prefix}-sidebar-menu-item .floating-menu {
  position: absolute;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 8px 16px;
  white-space: nowrap;
  display: none;
  z-index: 9999;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  pointer-events: auto;
}
.${prefix}-admin-sidebar.collapsed .${prefix}-sidebar-menu-item:hover .floating-menu {
  display: block;
}
.${prefix}-admin-main {
  flex-grow: 1;
  margin-left: 260px;
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: calc(100% - 260px);
}
.${prefix}-admin-main.sidebar-collapsed {
  margin-left: 70px;
  width: calc(100% - 70px);
}
.${prefix}-admin-content {
  flex-grow: 1;
  padding: 30px;
}
.${prefix}-admin-topbar {
  height: 70px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 30px;
}
.${prefix}-admin-footer {
  background: #ffffff;
  border-top: 1px solid #e2e8f0;
  padding: 16px 30px;
}

@media (max-width: 768px) {
  .${prefix}-admin-sidebar {
    left: -260px;
    width: 260px;
  }
  .${prefix}-admin-sidebar.mobile-open {
    left: 0;
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.25);
  }
  .${prefix}-admin-sidebar.collapsed {
    left: -260px;
    width: 260px;
  }
  .${prefix}-admin-main {
    margin-left: 0 !important;
    width: 100% !important;
  }
  .${prefix}-admin-main.sidebar-collapsed {
    margin-left: 0 !important;
    width: 100% !important;
  }
}

`;

// -----------------------------------------------------------------------------
// PART 2: JAVASCRIPT COMPILATION
// -----------------------------------------------------------------------------
let js = `/**
 * Custom JS Library - Generated for ${prefix}
 * Dynamic Spacing Utility Engine (1 to 30,000+) & Dynamic Icon Loader (36,000+ Icons)
 */
(function(global) {
  'use strict';

  // Fallback static SVGs for core system dialogs (so they render instantly without network request)
  const coreIcons = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    danger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    question: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
  };

  // Helper to construct elements
  function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  // ---------------------------------------------------------------------------
  // DYNAMIC UTILITIES ENGINE (1 to 30,000+)
  // ---------------------------------------------------------------------------
  const breakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  };

  const stylesCache = new Set();
  let dynamicStyleSheet = null;

  function initDynamicStyles() {
    if (!dynamicStyleSheet) {
      const styleEl = document.createElement('style');
      styleEl.id = '${prefix}-dynamic-utilities';
      document.head.appendChild(styleEl);
      dynamicStyleSheet = styleEl.sheet;
    }
  }

  function generateUtilityStyle(className) {
    if (stylesCache.has(className)) return;

    // Pattern: akhilesh-[utility]-[breakpoint]-[value] OR akhilesh-[utility]-[value]
    // Max value limit set to 50,000 for extreme flexibility
    const regex = /^${prefix}-(m|mt|mb|ml|mr|ms|me|mx|my|p|pt|pb|pl|pr|ps|pe|px|py|fs|rounded|gap|w|h|z|opacity)-(?:(sm|md|lg|xl|xxl)-)?(\\d+)$/;
    const match = className.match(regex);
    if (!match) return;

    const [_, prop, bp, valStr] = match;
    const val = parseInt(valStr, 10);
    if (isNaN(val) || val < 1 || val > 50000) return;

    let ruleContent = '';
    switch (prop) {
      case 'm': ruleContent = \`margin: \${val}px !important;\`; break;
      case 'mt': ruleContent = \`margin-top: \${val}px !important;\`; break;
      case 'mb': ruleContent = \`margin-bottom: \${val}px !important;\`; break;
      case 'ml':
      case 'ms': ruleContent = \`margin-left: \&nbsp;\${val}px !important;\`; // wait, check variable name mapping
      case 'ml':
      case 'ms': ruleContent = \`margin-left: \${val}px !important;\`; break;
      case 'mr':
      case 'me': ruleContent = \`margin-right: \${val}px !important;\`; break;
      case 'mx': ruleContent = \`margin-left: \${val}px !important; margin-right: \${val}px !important;\`; break;
      case 'my': ruleContent = \`margin-top: \${val}px !important; margin-bottom: \${val}px !important;\`; break;
      case 'p': ruleContent = \`padding: \${val}px !important;\`; break;
      case 'pt': ruleContent = \`padding-top: \${val}px !important;\`; break;
      case 'pb': ruleContent = \`padding-bottom: \${val}px !important;\`; break;
      case 'pl':
      case 'ps': ruleContent = \`padding-left: \${val}px !important;\`; break;
      case 'pr':
      case 'pe': ruleContent = \`padding-right: \${val}px !important;\`; break;
      case 'px': ruleContent = \`padding-left: \${val}px !important; padding-right: \${val}px !important;\`; break;
      case 'py': ruleContent = \`padding-top: \${val}px !important; padding-bottom: \${val}px !important;\`; break;
      case 'fs': ruleContent = \`font-size: \${val}px !important;\`; break;
      case 'rounded': ruleContent = \`border-radius: \${val}px !important;\`; break;
      case 'gap': ruleContent = \`gap: \${val}px !important;\`; break;
      case 'w': ruleContent = \`width: \${val}% !important;\`; break;
      case 'h': ruleContent = \`height: \${val}% !important;\`; break;
      case 'opacity': ruleContent = \`opacity: \${val / 100} !important;\`; break;
      case 'z': ruleContent = \`z-index: \${val} !important;\`; break;
    }

    if (!ruleContent) return;

    let finalRule = \`.\${className} { \${ruleContent} }\`;
    if (bp && breakpoints[bp]) {
      finalRule = \`@media (min-width: \${breakpoints[bp]}) { .\${className} { \${ruleContent} } }\`;
    }

    try {
      initDynamicStyles();
      dynamicStyleSheet.insertRule(finalRule, dynamicStyleSheet.cssRules.length);
      stylesCache.add(className);
    } catch (e) {
      console.warn(\`Failed to inject dynamic style for class: \${className}\`, e);
    }
  }

  function scanDOMForUtilities(node = document.body) {
    if (!node) return;
    if (node.classList) {
      node.classList.forEach(className => {
        if (className.startsWith('${prefix}-')) {
          generateUtilityStyle(className);
        }
      });
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        scanDOMForUtilities(node.children[i]);
      }
    }
  }

  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          scanDOMForUtilities(mutation.target);
        } else if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              scanDOMForUtilities(node);
              renderIconElements(node); // Also check for custom i elements on DOM changes
            }
          });
        }
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // ---------------------------------------------------------------------------
  // DYNAMIC ICON COMPONENT (36,000+ Icons)
  // ---------------------------------------------------------------------------
  class AkhileshIcon extends HTMLElement {
    static get observedAttributes() {
      return ['set', 'name', 'color', 'size', 'stroke'];
    }

    constructor() {
      super();
      this._renderedName = '';
      this._renderedSet = '';
      this._renderedSize = '';
      this._renderedColor = '';
      this._renderedStroke = '';
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    async render() {
      let set = this.getAttribute('set') || '';
      let name = this.getAttribute('name') || '';
      const size = this.getAttribute('size') || '';
      const color = this.getAttribute('color') || '';
      const stroke = this.getAttribute('stroke') || '';

      if (name.includes('/')) {
        const parts = name.split('/');
        set = parts[0];
        name = parts[1];
      }

      if (!name) return;
      if (!set) set = 'lucide'; // default fallback set

      // Normalize strings
      set = set.toLowerCase().trim();
      name = name.toLowerCase().trim();

      // If set or name changed, we must re-fetch/re-render
      if (this._renderedName !== name || this._renderedSet !== set) {
        this._renderedName = name;
        this._renderedSet = set;
        this._renderedSize = size;
        this._renderedColor = color;
        this._renderedStroke = stroke;

        // 1. Check in-memory global registry first (loaded from ${prefix}-icons-[set].js)
        if (global.${prefix}Icons && global.${prefix}Icons[set] && global.${prefix}Icons[set][name]) {
          let svgText = global.${prefix}Icons[set][name];
          this.innerHTML = svgText;
          this.applyStyles();
          return;
        }

        // Find basePath of the library to load SVGs from host
        let basePath = '';
        const scriptEl = document.querySelector('script[src*="${prefix}-bootstrap"]');
        if (scriptEl) {
          const src = scriptEl.getAttribute('src');
          basePath = src.substring(0, src.lastIndexOf('/'));
        } else {
          basePath = '../dist';
        }

        const svgUrl = \`\${basePath}/icons/\${set}/\${name}.svg\`;

        try {
          const response = await fetch(svgUrl);
          if (!response.ok) throw new Error(\`Icon not found: \${set}/\${name}\`);
          
          let svgText = await response.text();
          this.innerHTML = svgText;
          this.applyStyles();
        } catch (err) {
          // Fallback to core icons if matching system status
          if (coreIcons[name]) {
            this.innerHTML = coreIcons[name];
            this.applyStyles();
          } else {
            this.innerHTML = \`<span style="font-size:0.75em; opacity:0.6;">[\${name}]</span>\`;
          }
        }
      } else if (this._renderedSize !== size || this._renderedColor !== color || this._renderedStroke !== stroke) {
        // Only styling attributes changed, just re-apply styles
        this._renderedSize = size;
        this._renderedColor = color;
        this._renderedStroke = stroke;
        this.applyStyles();
      }
    }

    applyStyles() {
      const svgElement = this.querySelector('svg');
      if (svgElement) {
        svgElement.classList.add('${prefix}-icon-svg');
        
        const size = this.getAttribute('size');
        const color = this.getAttribute('color');
        const stroke = this.getAttribute('stroke');

        if (size) {
          svgElement.setAttribute('width', size);
          svgElement.setAttribute('height', size);
        } else {
          svgElement.setAttribute('width', '1em');
          svgElement.setAttribute('height', '1em');
        }

        if (color) {
          svgElement.style.color = color;
        } else {
          svgElement.style.color = 'inherit';
        }

        if (stroke) {
          svgElement.setAttribute('stroke-width', stroke);
        }
      }
    }
  }

  if (!customElements.get('${prefix}-icon')) {
    customElements.define('${prefix}-icon', AkhileshIcon);
  }

  // Support <i class="akhilesh-icon" data-name="lucide/home"></i> class format
  function renderIconElements(node = document.body) {
    if (!node) return;
    const elements = node.querySelectorAll('.${prefix}-icon[data-name]');
    elements.forEach(el => {
      const name = el.getAttribute('data-name');
      const size = el.getAttribute('data-size') || el.getAttribute('size');
      const color = el.getAttribute('data-color') || el.getAttribute('color');
      const stroke = el.getAttribute('data-stroke') || el.getAttribute('stroke');

      const customIcon = document.createElement('${prefix}-icon');
      customIcon.setAttribute('name', name);
      if (size) customIcon.setAttribute('size', size);
      if (color) customIcon.setAttribute('color', color);
      if (stroke) customIcon.setAttribute('stroke', stroke);
      customIcon.className = el.className;

      el.replaceWith(customIcon);
    });
  }

  // ---------------------------------------------------------------------------
  // INTERACTIVE ALERTS, TOASTS, DIALOGS
  // ---------------------------------------------------------------------------
  function setupAlertDismissals() {
    document.addEventListener('click', function(e) {
      const closeButton = e.target.closest('[data-${prefix}-dismiss="alert"]');
      if (closeButton) {
        const alertElement = closeButton.closest('.${prefix}-alert');
        if (alertElement) {
          alertElement.style.opacity = '0';
          setTimeout(() => alertElement.remove(), 150);
        }
      }
    });
  }

  const ToastSystem = {
    container: null,

    _initContainer() {
      if (!this.container) {
        this.container = document.createElement('div');
        this.container.className = '${prefix}-toast-container';
        document.body.appendChild(this.container);
      }
    },

    show(message, title = '', type = 'info', duration = 4000) {
      this._initContainer();
      const toastId = 'toast-' + Math.random().toString(36).substr(2, 9);
      
      const toastHTML = \`
        <div id="\${toastId}" class="${prefix}-toast ${prefix}-toast-\${type}">
          <div class="${prefix}-toast-icon">
            <${prefix}-icon name="\${type === 'success' ? 'check-circle' : type === 'danger' ? 'x-circle' : type === 'warning' ? 'alert-triangle' : 'info'}" size="14"></${prefix}-icon>
          </div>
          <div class="${prefix}-toast-content">
            \${title ? \`<div class="${prefix}-toast-title">\${title}</div>\` : ''}
            <div class="${prefix}-toast-message">\${message}</div>
          </div>
          <button class="${prefix}-toast-close">\${coreIcons.close}</button>
          <div class="${prefix}-toast-progress">
            <div class="${prefix}-toast-progress-bar"></div>
          </div>
        </div>
      \`;

      const toastElement = createElementFromHTML(toastHTML);
      this.container.appendChild(toastElement);

      const closeBtn = toastElement.querySelector('.${prefix}-toast-close');
      const progressBar = toastElement.querySelector('.${prefix}-toast-progress-bar');
      
      let timer = null;
      let progressInterval = null;
      const startTime = Date.now();

      const dismiss = () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
        toastElement.classList.add('${prefix}-toast-dismissing');
        toastElement.addEventListener('animationend', () => toastElement.remove());
      };

      closeBtn.addEventListener('click', dismiss);

      if (duration > 0) {
        timer = setTimeout(dismiss, duration);
        progressInterval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const remainingPercent = Math.max(0, 100 - (elapsed / duration * 100));
          progressBar.style.transform = \`scaleX(\&nbsp;\${remainingPercent / 100})\`;
          progressBar.style.transform = \`scaleX(\${remainingPercent / 100})\`;
          if (elapsed >= duration) clearInterval(progressInterval);
        }, 16);
      } else {
        progressBar.style.transform = 'scaleX(1)';
      }

      return { id: toastId, element: toastElement, dismiss: dismiss };
    },

    success(message, title = 'Success', duration = 4000) { return this.show(message, title, 'success', duration); },
    danger(message, title = 'Error', duration = 4000) { return this.show(message, title, 'danger', duration); },
    warning(message, title = 'Warning', duration = 4000) { return this.show(message, title, 'warning', duration); },
    info(message, title = 'Information', duration = 4000) { return this.show(message, title, 'info', duration); }
  };

  const DialogSystem = {
    alert(message, title = 'Alert') {
      return new Promise((resolve) => {
        const dialogHTML = \`
          <div class="${prefix}-dialog-overlay">
            <div class="${prefix}-dialog-box">
              <div class="${prefix}-dialog-header">
                <div class="${prefix}-dialog-icon" style="background-color: var(--${prefix}-info-light); color: var(--${prefix}-info);">
                  <${prefix}-icon name="info" size="22"></${prefix}-icon>
                </div>
                <div class="${prefix}-dialog-title">\${title}</div>
              </div>
              <div class="${prefix}-dialog-body">
                <div class="${prefix}-dialog-message">\${message}</div>
              </div>
              <div class="${prefix}-dialog-footer">
                <button class="${prefix}-btn ${prefix}-btn-primary ok-btn">OK</button>
              </div>
            </div>
          </div>
        \`;
        const overlay = createElementFromHTML(dialogHTML);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        const okBtn = overlay.querySelector('.ok-btn');
        const cleanup = () => {
          overlay.remove();
          document.body.style.overflow = '';
          resolve();
        };
        okBtn.addEventListener('click', cleanup);
        okBtn.focus();

        const escListener = (e) => {
          if (e.key === 'Escape') {
            document.removeEventListener('keydown', escListener);
            cleanup();
          }
        };
        document.addEventListener('keydown', escListener);
      });
    },

    confirm(message, title = 'Confirm Action') {
      return new Promise((resolve) => {
        const dialogHTML = \`
          <div class="${prefix}-dialog-overlay">
            <div class="${prefix}-dialog-box">
              <div class="${prefix}-dialog-header">
                <div class="${prefix}-dialog-icon" style="background-color: var(--${prefix}-warning-light); color: var(--${prefix}-warning);">
                  <${prefix}-icon name="help-circle" size="22"></${prefix}-icon>
                </div>
                <div class="${prefix}-dialog-title">\${title}</div>
              </div>
              <div class="${prefix}-dialog-body">
                <div class="${prefix}-dialog-message">\${message}</div>
              </div>
              <div class="${prefix}-dialog-footer">
                <button class="${prefix}-btn ${prefix}-btn-outline-secondary cancel-btn">Cancel</button>
                <button class="${prefix}-btn ${prefix}-btn-primary confirm-btn">Yes, Confirm</button>
              </div>
            </div>
          </div>
        \`;
        const overlay = createElementFromHTML(dialogHTML);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        const confirmBtn = overlay.querySelector('.confirm-btn');
        const cancelBtn = overlay.querySelector('.cancel-btn');
        const cleanup = (result) => {
          overlay.remove();
          document.body.style.overflow = '';
          resolve(result);
        };

        confirmBtn.addEventListener('click', () => cleanup(true));
        cancelBtn.addEventListener('click', () => cleanup(false));
        confirmBtn.focus();

        const escListener = (e) => {
          if (e.key === 'Escape') {
            document.removeEventListener('keydown', escListener);
            cleanup(false);
          }
        };
        document.addEventListener('keydown', escListener);
      });
    },

    prompt(message, defaultValue = '', title = 'Input Required') {
      return new Promise((resolve) => {
        const dialogHTML = \`
          <div class="${prefix}-dialog-overlay">
            <div class="${prefix}-dialog-box">
              <div class="${prefix}-dialog-header">
                <div class="${prefix}-dialog-icon" style="background-color: var(--${prefix}-primary-light); color: var(--${prefix}-primary);">
                  <${prefix}-icon name="edit-3" size="22"></${prefix}-icon>
                </div>
                <div class="${prefix}-dialog-title">\${title}</div>
              </div>
              <div class="${prefix}-dialog-body">
                <div class="${prefix}-dialog-message">\${message}</div>
                <div class="${prefix}-dialog-prompt-wrapper">
                  <input type="text" class="${prefix}-dialog-input" value="\${defaultValue}">
                </div>
              </div>
              <div class="${prefix}-dialog-footer">
                <button class="${prefix}-btn ${prefix}-btn-outline-secondary cancel-btn">Cancel</button>
                <button class="${prefix}-btn ${prefix}-btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        \`;
        const overlay = createElementFromHTML(dialogHTML);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        const submitBtn = overlay.querySelector('.submit-btn');
        const cancelBtn = overlay.querySelector('.cancel-btn');
        const inputField = overlay.querySelector('.${prefix}-dialog-input');
        const cleanup = (result) => {
          overlay.remove();
          document.body.style.overflow = '';
          resolve(result);
        };

        submitBtn.addEventListener('click', () => cleanup(inputField.value));
        cancelBtn.addEventListener('click', () => cleanup(null));
        inputField.addEventListener('keydown', (e) => { if (e.key === 'Enter') cleanup(inputField.value); });
        inputField.focus();
        inputField.select();

        const escListener = (e) => {
          if (e.key === 'Escape') {
            document.removeEventListener('keydown', escListener);
            cleanup(null);
          }
        };
        document.addEventListener('keydown', escListener);
      });
    }
  };

  const Library = {
    toast: ToastSystem,
    alert: DialogSystem.alert,
    confirm: DialogSystem.confirm,
    prompt: DialogSystem.prompt,
    init() {
      setupAlertDismissals();
      scanDOMForUtilities();
      renderIconElements();
      setupMutationObserver();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Library.init());
  } else {
    Library.init();
  }

  global.${prefix} = Library;
  global.${prefix}Toast = ToastSystem;

})(typeof window !== 'undefined' ? window : this);
`;

// Write core assets
fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.css`), css);
fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.js`), js);
console.log('Core raw files written.');

// Minify CSS
if (CleanCSS) {
  const minifiedCSS = new CleanCSS({ level: 1 }).minify(css);
  if (minifiedCSS.styles) {
    fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.min.css`), minifiedCSS.styles);
    console.log('Minified CSS written.');
  }
} else {
  fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.min.css`), css);
}

// Minify JS
if (Terser) {
  Terser.minify(js)
    .then(result => {
      if (result.code) {
        fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.min.js`), result.code);
        console.log('Minified JS written.');
      }
    })
    .catch(err => {
      console.error('Terser error:', err);
      fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.min.js`), js);
    });
} else {
  fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.min.js`), js);
}

// -----------------------------------------------------------------------------
// PART 3: 36,000+ ICON ASSET PIPELINE
// -----------------------------------------------------------------------------
console.log('Starting 36,000+ Icon Asset Copy Pipeline...');

const iconSets = [
  {
    name: 'lucide',
    src: path.join(__dirname, '../node_modules/lucide-static/icons'),
    recursive: false
  },
  {
    name: 'fa-solid',
    src: path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free/svgs/solid'),
    recursive: false
  },
  {
    name: 'fa-regular',
    src: path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free/svgs/regular'),
    recursive: false
  },
  {
    name: 'fa-brands',
    src: path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free/svgs/brands'),
    recursive: false
  },
  {
    name: 'bootstrap',
    src: path.join(__dirname, '../node_modules/bootstrap-icons/icons'),
    recursive: false
  },
  {
    name: 'simple',
    src: path.join(__dirname, '../node_modules/simple-icons/icons'),
    recursive: false
  },
  {
    name: 'ionicons',
    src: path.join(__dirname, '../node_modules/ionicons/dist/svg'),
    recursive: false
  },
  {
    name: 'octicons',
    src: path.join(__dirname, '../node_modules/@primer/octicons/build/svg'),
    recursive: false
  },
  {
    name: 'feather',
    src: path.join(__dirname, '../node_modules/feather-icons/dist/icons'),
    recursive: false
  },
  {
    name: 'box-solid',
    src: path.join(__dirname, '../node_modules/boxicons/svg/solid'),
    recursive: false
  },
  {
    name: 'box-regular',
    src: path.join(__dirname, '../node_modules/boxicons/svg/regular'),
    recursive: false
  },
  {
    name: 'box-logos',
    src: path.join(__dirname, '../node_modules/boxicons/svg/logos'),
    recursive: false
  },
  {
    name: 'remix',
    src: path.join(__dirname, '../node_modules/remixicon/icons'),
    recursive: true
  },
  {
    name: 'tabler',
    src: path.join(__dirname, '../node_modules/@tabler/icons'),
    recursive: true
  },
  {
    name: 'custom',
    src: USER_ICONS_DIR,
    recursive: true
  }
];

function getFilesRecursive(dir, extension = '.svg') {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursive(filePath, extension));
    } else if (filePath.endsWith(extension)) {
      results.push(filePath);
    }
  });
  return results;
}

// Optimization check: only build icons if they aren't fully copied yet
iconSets.forEach(set => {
  const destDir = path.join(ICONS_DIST_DIR, set.name);
  
  if (!fs.existsSync(set.src)) {
    console.log(`Warning: Icon set folder "${set.name}" not found in node_modules, skipping.`);
    return;
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  } else {
    // If folder already contains files, skip copy to speed up compilation
    const existingCount = fs.readdirSync(destDir).length;
    if (existingCount > 10) {
      console.log(`Icon set "${set.name}" already has ${existingCount} icons copied. Skipping copy step for speed.`);
      return;
    }
  }

  console.log(`Copying "${set.name}" icons...`);
  
  if (set.recursive) {
    const files = getFilesRecursive(set.src, '.svg');
    let copiedCount = 0;
    files.forEach(file => {
      const fileName = path.basename(file).toLowerCase();
      const destFile = path.join(destDir, fileName);
      try {
        fs.copyFileSync(file, destFile);
        copiedCount++;
      } catch (err) {
        // Silently skip read errors
      }
    });
    console.log(`Copied ${copiedCount} recursive icons into dist/icons/${set.name}`);
  } else {
    const files = fs.readdirSync(set.src);
    let copiedCount = 0;
    files.forEach(file => {
      if (file.endsWith('.svg')) {
        const srcFile = path.join(set.src, file);
        const destFile = path.join(destDir, file.toLowerCase());
        fs.copyFileSync(srcFile, destFile);
        copiedCount++;
      }
    });
    console.log(`Copied ${copiedCount} flat icons into dist/icons/${set.name}`);
  }
});

// Process Material Design Icons separately (as they are stored as JSON files)
const materialDestDir = path.join(ICONS_DIST_DIR, 'material');
const materialSrcDir = path.join(__dirname, '../node_modules/material-design-icons-svg/paths');

if (fs.existsSync(materialSrcDir)) {
  let buildMaterial = true;
  if (!fs.existsSync(materialDestDir)) {
    fs.mkdirSync(materialDestDir, { recursive: true });
  } else {
    const existingCount = fs.readdirSync(materialDestDir).length;
    if (existingCount > 10) {
      console.log(`Material Icons set already has ${existingCount} icons compiled. Skipping.`);
      buildMaterial = false;
    }
  }

  if (buildMaterial) {
    console.log('Compiling Material Icons JSON to SVG files...');
    const files = fs.readdirSync(materialSrcDir);
    let compiledCount = 0;
    files.forEach(file => {
      if (file.endsWith('.json')) {
        const filePath = path.join(materialSrcDir, file);
        try {
          const pathData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (pathData) {
            const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${pathData}"/></svg>`;
            const svgFileName = file.replace('.json', '.svg').toLowerCase();
            fs.writeFileSync(path.join(materialDestDir, svgFileName), svgContent);
            compiledCount++;
          }
        } catch (e) {
          // Skip corrupt JSON
        }
      }
    });
    console.log(`Compiled ${compiledCount} Material Icons into SVG files.`);
  }
} else {
  console.log('Warning: Material Icons source folder not found, skipping.');
}

// Generate icons-index.json
console.log('Generating Icon Index JSON...');
const indexData = {};
let totalIconsCount = 0;

if (fs.existsSync(ICONS_DIST_DIR)) {
  const sets = fs.readdirSync(ICONS_DIST_DIR);
  sets.forEach(setName => {
    const setPath = path.join(ICONS_DIST_DIR, setName);
    if (fs.statSync(setPath).isDirectory()) {
      const files = fs.readdirSync(setPath)
        .filter(f => f.endsWith('.svg'))
        .map(f => f.replace('.svg', ''));
      indexData[setName] = files;
      totalIconsCount += files.length;
    }
  });
}

fs.writeFileSync(path.join(DIST_DIR, 'icons-index.json'), JSON.stringify(indexData));
console.log(`Generated icons-index.json with ${totalIconsCount} total icons.`);

// Compile Icon Sets into Single JS Bundles
console.log('Compiling Icon Sets to Single JS Bundles...');
if (fs.existsSync(ICONS_DIST_DIR)) {
  const sets = fs.readdirSync(ICONS_DIST_DIR);
  sets.forEach(setName => {
    const setPath = path.join(ICONS_DIST_DIR, setName);
    if (fs.statSync(setPath).isDirectory()) {
      const files = fs.readdirSync(setPath).filter(f => f.endsWith('.svg'));
      
      const iconsData = {};
      files.forEach(f => {
        const iconName = f.replace('.svg', '');
        const fileContent = fs.readFileSync(path.join(setPath, f), 'utf8');
        // Compress whitespace inside SVGs to save space
        iconsData[iconName] = fileContent.replace(/>\s+</g, '><').trim();
      });
      
      const bundleName = `${prefix}-icons-${setName}.js`;
      const minBundleName = `${prefix}-icons-${setName}.min.js`;
      
      const bundleContent = `(function(global) {
  global.${prefix}Icons = global.${prefix}Icons || {};
  global.${prefix}Icons['${setName}'] = ${JSON.stringify(iconsData)};
})(typeof window !== 'undefined' ? window : this);`;
      
      fs.writeFileSync(path.join(DIST_DIR, bundleName), bundleContent);
      
      if (Terser) {
        Terser.minify(bundleContent)
          .then(result => {
            if (result.code) {
              fs.writeFileSync(path.join(DIST_DIR, minBundleName), result.code);
            }
          })
          .catch(err => {
            console.error(`Terser error minifying icon set ${setName}:`, err);
            fs.writeFileSync(path.join(DIST_DIR, minBundleName), bundleContent);
          });
      } else {
        fs.writeFileSync(path.join(DIST_DIR, minBundleName), bundleContent);
      }
      console.log(`Compiled icon set bundle: dist/${bundleName} (${files.length} icons)`);
    }
  });
}

console.log('Icon pipeline complete.');
console.log('Build completed successfully!');

