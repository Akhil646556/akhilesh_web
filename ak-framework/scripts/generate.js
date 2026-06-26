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

/* Positioning and overlay rules for ak-framework background animations */
.ak-bg-animate {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -999999 !important;
  pointer-events: none !important;
  background-color: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Positioning and overlay rules for ak-framework cursor animations */
.ak-cursor-canvas {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 999999 !important;
  pointer-events: none !important;
  background-color: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
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

  // --- Particle Cursors Engine ---
  (function(global) {
    'use strict';

    let enabled = false;
    let cursorEffect = 1;
    let clickEffect = 1;
    let speedMultiplier = 1.0;
    
    let canvas = null;
    let ctx = null;
    let particles = [];
    let mouse = { x: -1000, y: -1000, px: -1000, py: -1000, vx: 0, vy: 0 };
    let isMoving = false;
    let moveTimeout = null;

    window.addEventListener('mousemove', (e) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (mouse.px !== -1000) {
        mouse.vx = mouse.x - mouse.px;
        mouse.vy = mouse.y - mouse.py;
      }
      
      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => { isMoving = false; }, 100);

      if (enabled) {
        spawnHoverParticles();
      }
    });

    window.addEventListener('click', (e) => {
      if (enabled) {
        spawnClickParticles(e.clientX, e.clientY);
      }
    });

    const shapes = [
      'circle', 'star', 'square', 'ring', 'heart', 'spark', 'bubble', 'text', 'line',
      'triangle', 'diamond', 'cross', 'plus', 'hex', 'pentagon', 'octagon', 'arrow',
      'chevron', 'leaf', 'flower', 'cloud', 'sun', 'moon', 'lightning', 'fire',
      'water', 'snowflake', 'smile', 'frown', 'ghost', 'skull', 'alien', 'robot',
      'crown', 'gem', 'key', 'ring-double', 'infinite', 'yin-yang', 'peace', 'music',
      'bell', 'clock', 'compass', 'globe', 'anchor', 'fish', 'bird', 'butterfly',
      'paw', 'tree', 'cactus', 'cherry', 'apple', 'banana', 'grape', 'coffee',
      'pizza', 'cookie', 'cupcake', 'candy', 'gift', 'balloon', 'umbrella', 'book',
      'pencil', 'scissors', 'wrench', 'gear', 'hammer', 'shield', 'sword', 'arrow-up',
      'arrow-right', 'arrow-down', 'arrow-left', 'check', 'close', 'info', 'alert',
      'question', 'heart-broken', 'star-empty', 'square-empty', 'triangle-empty',
      'diamond-empty', 'cross-empty', 'plus-empty', 'hex-empty', 'pentagon-empty',
      'octagon-empty', 'arrow-empty', 'leaf-empty', 'flower-empty', 'cloud-empty',
      'sun-empty', 'moon-empty', 'snowflake-empty', 'smile-empty', 'ghost-empty'
    ];
    const shapeEmojis = {
      circle: '●', star: '★', square: '■', ring: '○', heart: '❤', spark: '✦', bubble: '🫧', text: '{ }', line: '—',
      triangle: '▲', diamond: '◆', cross: '✖', plus: '✚', hex: '⬢', pentagon: '⬟', octagon: '⬣', arrow: '➔',
      chevron: '❯', leaf: '🍃', flower: '🌸', cloud: '☁️', sun: '☀️', moon: '🌙', lightning: '⚡', fire: '🔥',
      water: '💧', snowflake: '❄️', smile: '😊', frown: '😢', ghost: '👻', skull: '💀', alien: '👽', robot: '🤖',
      crown: '👑', gem: '💎', key: '🔑', 'ring-double': '💍', infinite: '∞', 'yin-yang': '☯', peace: '☮', music: '🎵',
      bell: '🔔', clock: '⏰', compass: '🧭', globe: '🌐', anchor: '⚓', fish: '🐟', bird: '🐦', butterfly: '🦋',
      paw: '🐾', tree: '🌲', cactus: '🌵', cherry: '🍒', apple: '🍎', banana: '🍌', grape: '🍇', coffee: '☕',
      pizza: '🍕', cookie: '🍪', cupcake: '🧁', candy: '🍬', gift: '🎁', balloon: '🎈', umbrella: '☂', book: '📖',
      pencil: '✏️', scissors: '✂️', wrench: '🔧', gear: '⚙️', hammer: '🔨', shield: '🛡️', sword: '⚔️', 'arrow-up': '▲',
      'arrow-right': '▶', 'arrow-down': '▼', 'arrow-left': '◀', check: '✔', close: '✖', info: 'ℹ', alert: '⚠',
      question: '❓', 'heart-broken': '💔', 'star-empty': '☆', 'square-empty': '□', 'triangle-empty': '△',
      'diamond-empty': '◇', 'cross-empty': '❌', 'plus-empty': '➕', 'hex-empty': '⬡', 'pentagon-empty': '⬠',
      'octagon-empty': '⭓', 'arrow-empty': '⇨', 'leaf-empty': '🌱', 'flower-empty': '🏵️', 'cloud-empty': '⛅',
      'sun-empty': '🔆', 'moon-empty': '🌘', 'snowflake-empty': '🌨️', 'smile-empty': '😐', 'ghost-empty': '👾'
    };
    const motions = ['drift', 'float', 'gravity', 'explode', 'orbit', 'wave', 'spiral'];
    const themePalettes = {
      neon: ['#00f0ff', '#ff007f', '#9d00ff', '#00ffcc'],
      lava: ['#ff3300', '#ffaa00', '#ff0055', '#cc0000'],
      ocean: ['#0077ff', '#00d4ff', '#00aacc', '#0055aa'],
      forest: ['#10b981', '#047857', '#34d399', '#059669'],
      sunset: ['#ff5e62', '#ff9966', '#8a2387', '#e94057'],
      mono: ['#ffffff', '#e2e8f0', '#94a3b8', '#cbd5e1'],
      matrix: ['#00ff00', '#00aa00', '#003300', '#00ff55'],
      aurora: ['#00e5ff', '#00ffaa', '#7a22ff', '#3b82f6'],
      royal: ['#ffd700', '#800080', '#da70d6', '#ff8c00']
    };
    const themeKeys = Object.keys(themePalettes);

    function getPresetConfig(index) {
      const shape = shapes[(index - 1) % shapes.length];
      const motion = motions[Math.floor((index - 1) / shapes.length) % motions.length];
      const themeName = themeKeys[Math.floor((index - 1) / (shapes.length * motions.length)) % themeKeys.length];
      const colors = themePalettes[themeName];
      return { shape, motion, colors, themeName };
    }

    function spawnHoverParticles() {
      if (!ctx) return;
      const config = getPresetConfig(cursorEffect);
      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
      const count = Math.min(5, Math.max(1, Math.floor(speed / 5)));
      
      for (let i = 0; i < count; i++) {
        const color = config.colors[Math.floor(Math.random() * config.colors.length)];
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 10,
          y: mouse.y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2 + mouse.vx * 0.1,
          vy: (Math.random() - 0.5) * 2 + mouse.vy * 0.1,
          size: Math.random() * 8 + 4,
          maxLife: Math.random() * 30 + 20,
          life: 0,
          color: color,
          shape: config.shape,
          motion: config.motion,
          angle: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.1
        });
      }
    }

    function spawnClickParticles(x, y) {
      if (!ctx) return;
      const config = getPresetConfig(clickEffect);
      const count = 30;
      
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 5 + 3;
        const color = config.colors[Math.floor(Math.random() * config.colors.length)];
        
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 10 + 6,
          maxLife: Math.random() * 40 + 30,
          life: 0,
          color: color,
          shape: config.shape,
          motion: 'explode',
          angle: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2
        });
      }
    }

    function drawStar(ctx, x, y, spikes, outerRadius, innerRadius, color) {
      let rot = Math.PI / 2 * 3;
      let cx = x;
      let cy = y;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        cx = x + Math.cos(rot) * outerRadius;
        cy = y + Math.sin(rot) * outerRadius;
        ctx.lineTo(cx, cy);
        rot += step;

        cx = x + Math.cos(rot) * innerRadius;
        cy = y + Math.sin(rot) * innerRadius;
        ctx.lineTo(cx, cy);
        rot += step;
      }
      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    function drawHeart(ctx, x, y, size, color) {
      ctx.beginPath();
      ctx.moveTo(x, y + size / 4);
      ctx.quadraticCurveTo(x, y, x - size / 2, y);
      ctx.quadraticCurveTo(x - size, y, x - size, y + size / 3);
      ctx.quadraticCurveTo(x - size, y + size * 2 / 3, x, y + size);
      ctx.quadraticCurveTo(x + size, y + size * 2 / 3, x + size, y + size / 3);
      ctx.quadraticCurveTo(x + size, y, x + size / 2, y);
      ctx.quadraticCurveTo(x, y, x, y + size / 4);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (particles.length > 0) {
        const dt = speedMultiplier;
        
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life += dt;
          
          if (p.life >= p.maxLife) {
            particles.splice(i, 1);
            continue;
          }

          const lifePercent = p.life / p.maxLife;
          
          if (p.motion === 'gravity') {
            p.vy += 0.2 * dt;
          } else if (p.motion === 'float') {
            p.vy -= 0.1 * dt;
          } else if (p.motion === 'wave') {
            p.vx += Math.sin(p.life * 0.1) * 0.5 * dt;
          } else if (p.motion === 'spiral') {
            const r = p.life * 0.5;
            const a = p.life * 0.2;
            p.x = mouse.x + Math.cos(a) * r;
            p.y = mouse.y + Math.sin(a) * r;
          } else if (p.motion === 'orbit') {
            const a = p.life * 0.1;
            p.x = mouse.x + Math.cos(a) * 30;
            p.y = mouse.y + Math.sin(a) * 30;
          }

          if (p.motion !== 'spiral' && p.motion !== 'orbit') {
            p.x += p.vx * dt;
            p.y += p.vy * dt;
          }
          
          p.angle += p.rotSpeed * dt;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.globalAlpha = 1 - lifePercent;
          
          const size = p.size * (1 - lifePercent * 0.5);

          if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
          } else if (p.shape === 'ring') {
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 2;
            ctx.stroke();
          } else if (p.shape === 'square') {
            ctx.fillStyle = p.color;
            ctx.fillRect(-size, -size, size * 2, size * 2);
          } else if (p.shape === 'star') {
            drawStar(ctx, 0, 0, 5, size, size / 2, p.color);
          } else if (p.shape === 'heart') {
            drawHeart(ctx, 0, -size / 2, size * 1.2, p.color);
          } else if (p.shape === 'spark') {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(-size, 0);
            ctx.lineTo(size, 0);
            ctx.stroke();
          } else if (p.shape === 'bubble') {
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fill();
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.stroke();
          } else if (p.shape === 'text') {
            ctx.font = \`bold \${size * 2}px monospace\`;
            ctx.fillStyle = p.color;
            ctx.fillText(Math.random() > 0.5 ? '{' : '}', -size / 2, size / 2);
          } else if (shapeEmojis[p.shape]) {
            ctx.font = \`\${size * 1.5}px Arial, sans-serif\`;
            ctx.fillStyle = p.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(shapeEmojis[p.shape], 0, 0);
          }
          
          ctx.restore();
        }
      }

      requestAnimationFrame(animate);
    }

    function initCanvas() {
      if (canvas) return;
      canvas = document.createElement('canvas');
      canvas.className = '${prefix}-cursor-canvas';
      document.body.appendChild(canvas);
      ctx = canvas.getContext('2d');
      
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', resize);
      resize();
    }

    const CursorEngine = {
      init() {
        initCanvas();
      },
      setEnabled(val) {
        enabled = !!val;
        if (enabled) {
          initCanvas();
        } else if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles = [];
        }
      },
      setCursorEffect(index) {
        cursorEffect = parseInt(index, 10) || 1;
      },
      setClickEffect(index) {
        clickEffect = parseInt(index, 10) || 1;
      },
      setSpeedMultiplier(val) {
        speedMultiplier = parseFloat(val) || 1.0;
      }
    };

    global.${prefix}Cursors = CursorEngine;
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        CursorEngine.init();
        animate();
      });
    } else {
      CursorEngine.init();
      animate();
    }

  })(typeof window !== 'undefined' ? window : this);


  // --- Background Animations Engine ---
  (function(global) {
    'use strict';

    // Global mouse/interaction state
    const mouse = {
      x: undefined,
      y: undefined,
      px: undefined,
      py: undefined,
      vx: 0,
      vy: 0,
      down: false
    };

    window.addEventListener('mousemove', (e) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (mouse.px !== undefined) {
        mouse.vx = mouse.x - mouse.px;
        mouse.vy = mouse.y - mouse.py;
      }
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = undefined;
      mouse.y = undefined;
      mouse.vx = 0;
      mouse.vy = 0;
    });

    window.addEventListener('mousedown', () => { mouse.down = true; });
    window.addEventListener('mouseup', () => { mouse.down = false; });

    // Theme variation colors configuration
    const colorThemes = {
      neon: ['#00f0ff', '#ff007f', '#9d00ff', '#00ffcc'],
      lava: ['#ff3300', '#ffaa00', '#ff0055', '#cc0000'],
      ocean: ['#0077ff', '#00d4ff', '#00aacc', '#0055aa'],
      forest: ['#10b981', '#047857', '#34d399', '#059669'],
      sunset: ['#ff5e62', '#ff9966', '#8a2387', '#e94057'],
      mono: ['#ffffff', '#e2e8f0', '#94a3b8', '#cbd5e1'],
      matrix: ['#00ff00', '#00aa00', '#003300', '#00ff55'],
      aurora: ['#00e5ff', '#00ffaa', '#7a22ff', '#3b82f6'],
      royal: ['#ffd700', '#800080', '#da70d6', '#ff8c00']
    };

    function getThemeColors(presetClass, defaultColors) {
      if (!presetClass) return defaultColors;
      for (const theme in colorThemes) {
        if (presetClass.endsWith('-' + theme)) {
          return colorThemes[theme];
        }
      }
      return defaultColors;
    }

    // Preset 1: Code Universe
    function initCodeUniverse(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      
      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });

      const particles = [];
      const num = 60;
      const maxDepth = 1000;
      const fov = 250;
      const defaultColors = ['#6366f1', '#ec4899', '#a855f7', '#06b6d4', '#10b981', '#f59e0b'];
      const colors = getThemeColors(presetClass, defaultColors);
      const texts = ['console.log()', 'import', 'def', '<?php', 'SELECT', '<div>', 'const', 'await', 'return', 'fn', 'npm run', '$()', 'flex', '=>', '<ul>', 'SQL', 'React', 'Node.js', 'Python', 'PHP', 'HTML5', 'CSS3'];

      let camX = 0, camY = 0, targetCamX = 0, targetCamY = 0;
      window.addEventListener('mousemove', (e) => {
        targetCamX = (e.clientX - w / 2) * 0.15;
        targetCamY = (e.clientY - h / 2) * 0.15;
      });

      for (let i = 0; i < num; i++) {
        particles.push({
          text: texts[Math.floor(Math.random() * texts.length)],
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: Math.random() * maxDepth,
          size: Math.random() * 12 + 10,
          speed: Math.random() * 2 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.02
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        camX += (targetCamX - camX) * 0.05 * speed;
        camY += (targetCamY - camY) * 0.05 * speed;
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < num; i++) {
          const p = particles[i];
          p.z -= p.speed * speed;
          p.rot += p.rotSpeed * speed;
          if (p.z <= 0) {
            p.z = maxDepth;
            p.x = (Math.random() - 0.5) * 2000;
            p.y = (Math.random() - 0.5) * 2000;
          }

          const rx = p.x - camX;
          const ry = p.y - camY;
          const scale = fov / (fov + p.z);
          const sx = w / 2 + rx * scale;
          const sy = h / 2 + ry * scale;

          if (sx >= -100 && sx <= w + 100 && sy >= -100 && sy <= h + 100) {
            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(p.rot);
            ctx.font = \`bold \${p.size * scale * 2}px "Courier New", monospace\`;
            ctx.fillStyle = p.color;
            let alpha = p.z > maxDepth * 0.8 ? (maxDepth - p.z) / (maxDepth * 0.2) : 1;
            if (p.z < 100) alpha = p.z / 100;
            ctx.globalAlpha = alpha;
            ctx.fillText(p.text, 0, 0);
            ctx.restore();
          }
        }
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 2: Star Drift (Mesh)
    function initStarDrift(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      
      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });

      const defaultColors = ['#00D4FF'];
      const colors = getThemeColors(presetClass, defaultColors);
      const stars = [];
      for (let i = 0; i < 75; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: Math.random() * 2 + 1
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = colors[0] + '66';
        ctx.strokeStyle = colors[0] + '0D';

        stars.forEach(s => {
          if (mouse.x !== undefined) {
            const dx = mouse.x - s.x;
            const dy = mouse.y - s.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 200) {
              s.x += (dx / dist) * 0.5 * speed;
              s.y += (dy / dist) * 0.5 * speed;
            }
          }

          s.x += s.vx * speed;
          s.y += s.vy * speed;
          if (s.x < 0 || s.x > w) s.vx *= -1;
          if (s.y < 0 || s.y > h) s.vy *= -1;

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        });

        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 3: Matrix Rain
    function initMatrixRain(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      
      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });

      const defaultColors = ['#0f766e', '#00D4FF'];
      const colors = getThemeColors(presetClass, defaultColors);
      const fontSize = 14;
      const columns = Math.floor(w / fontSize) + 1;
      const drops = Array(columns).fill(1);
      const chars = '01';

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.08)';
        ctx.fillRect(0, 0, w, h);
        ctx.font = \`\${fontSize}px monospace\`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          if (mouse.x !== undefined && Math.abs(x - mouse.x) < 40 && Math.abs(y - mouse.y) < 40) {
            ctx.fillStyle = colors[1] || '#00D4FF';
          } else {
            ctx.fillStyle = colors[0] || '#0f766e';
          }

          ctx.fillText(char, x, y);
          if (y > h && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i] += speed;
        }
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 4: Aurora Glow
    function initAuroraGlow(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      
      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });

      const defaultColors = ['rgba(99, 102, 241, 0.12)', 'rgba(6, 182, 212, 0.15)', 'rgba(168, 85, 247, 0.12)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const blobs = [
        { x: w * 0.25, y: h * 0.25, vx: 0.2, vy: 0.1, r: 250, color: colors[0] || 'rgba(99, 102, 241, 0.12)' },
        { x: w * 0.75, y: h * 0.35, vx: -0.15, vy: 0.2, r: 300, color: colors[1] || 'rgba(6, 182, 212, 0.15)' },
        { x: w * 0.5, y: h * 0.75, vx: 0.1, vy: -0.1, r: 280, color: colors[2] || 'rgba(168, 85, 247, 0.12)' }
      ];

      // Aurora Glow helper animation
      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, w, h);

        blobs.forEach(b => {
          if (mouse.x !== undefined) {
            b.x += (mouse.x - b.x) * 0.005 * speed;
            b.y += (mouse.y - b.y) * 0.005 * speed;
          }
          b.x += b.vx * speed;
          b.y += b.vy * speed;
          if (b.x < 0 || b.x > w) b.vx *= -1;
          if (b.y < 0 || b.y > h) b.vy *= -1;

          const grad = ctx.createRadialGradient(b.x, b.y, 10, b.x, b.y, b.r);
          grad.addColorStop(0, b.color);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 5: Snowfall
    function initSnowfall(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(255, 255, 255, 0.4)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const flakes = [];
      for (let i = 0; i < 90; i++) {
        flakes.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 3 + 1, d: Math.random() * 50 });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = colors[0] || 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        flakes.forEach(f => {
          f.x += (Math.sin(f.d) * 0.4 + (mouse.vx ? mouse.vx * 0.05 : 0)) * speed;
          f.y += (Math.cos(f.d) + 1 + f.r / 2) * speed;
          if (f.y > h) {
            f.y = -10;
            f.x = Math.random() * w;
          }
          ctx.moveTo(f.x, f.y);
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        });
        ctx.fill();
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 6: Fireflies
    function initFireflies(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(234, 179, 8, 0.8)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const bugs = [];
      for (let i = 0; i < 40; i++) {
        bugs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          alpha: Math.random(),
          fadeSpeed: Math.random() * 0.02 + 0.01
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        bugs.forEach(b => {
          if (mouse.x !== undefined) {
            b.vx += (mouse.x - b.x) * 0.0002 * speed;
            b.vy += (mouse.y - b.y) * 0.0002 * speed;
          }
          b.x += b.vx * speed;
          b.y += b.vy * speed;
          b.alpha += b.fadeSpeed * speed;
          if (b.alpha <= 0 || b.alpha >= 1) b.fadeSpeed *= -1;
          b.alpha = Math.max(0, Math.min(1, b.alpha));

          if (b.x < 0 || b.x > w) b.vx *= -1;
          if (b.y < 0 || b.y > h) b.vy *= -1;

          ctx.fillStyle = b.alpha ? colors[0].replace('0.8', b.alpha) : \`rgba(234, 179, 8, \${b.alpha})\`;
          ctx.shadowColor = colors[0].includes('rgba') ? 'gold' : colors[0];
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 7: Galaxy Vortex
    function initGalaxyVortex(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['200', '210', '220', '230'];
      const colors = getThemeColors(presetClass, defaultColors);
      const stars = [];
      let centerX = w / 2;
      let centerY = h / 2;

      for (let i = 0; i < 150; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * (Math.min(w, h) * 0.4) + 10;
        stars.push({
          angle: angle,
          radius: radius,
          speed: (Math.random() * 0.004 + 0.001) * (150 / radius),
          size: Math.random() * 1.8 + 0.5,
          color: colors[0].startsWith('#') ? colors[Math.floor(Math.random() * colors.length)] : \`hsl(\${Math.random() * 60 + 200}, 80%, 75%)\`
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        ctx.fillRect(0, 0, w, h);

        if (mouse.x !== undefined) {
          centerX += (mouse.x - centerX) * 0.05 * speed;
          centerY += (mouse.y - centerY) * 0.05 * speed;
        }

        stars.forEach(s => {
          s.angle += s.speed * speed;
          const x = centerX + Math.cos(s.angle) * s.radius;
          const y = centerY + Math.sin(s.angle) * s.radius;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(x, y, s.size, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 8: Wave Sine
    function initWaveSine(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(99, 102, 241, 0.05)', 'rgba(99, 102, 241, 0.15)'];
      const colors = getThemeColors(presetClass, defaultColors);
      let phase = 0;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = colors[0] || 'rgba(99, 102, 241, 0.05)';
        ctx.strokeStyle = colors[1] || 'rgba(99, 102, 241, 0.15)';
        ctx.lineWidth = 2;

        for (let wave = 0; wave < 3; wave++) {
          ctx.beginPath();
          for (let x = 0; x < w; x++) {
            const mOffset = mouse.x !== undefined ? (1 - Math.abs(x - mouse.x) / w) * 80 : 0;
            const y = h * 0.8 + Math.sin(x * 0.004 + phase + wave) * (40 + mOffset);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        phase += 0.015 * speed;
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 9: Matrix Horizontal (Side scan)
    function initMatrixHorizontal(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(99, 102, 241, 0.4)', '#00D4FF'];
      const colors = getThemeColors(presetClass, defaultColors);
      const rows = 35;
      const lines = [];
      for (let i = 0; i < rows; i++) {
        lines.push({
          y: (h / rows) * i + 10,
          x: Math.random() * w,
          speed: Math.random() * 2 + 1,
          text: '${prefix}-bootstrap - premium design framework - custom styling tools - responsive engine'
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
        ctx.fillRect(0, 0, w, h);
        ctx.font = '12px monospace';

        lines.forEach(l => {
          l.x += (l.speed + (mouse.x !== undefined && Math.abs(l.y - mouse.y) < 50 ? 3 : 0)) * speed;
          if (l.x > w) l.x = -300;
          ctx.fillStyle = mouse.y !== undefined && Math.abs(l.y - mouse.y) < 50 ? (colors[1] || '#00D4FF') : (colors[0] || 'rgba(99, 102, 241, 0.4)');
          ctx.fillText(l.text, l.x, l.y);
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 10: Confetti
    function initConfetti(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['#f43f5e', '#10b981', '#3b82f6', '#eab308', '#a855f7', '#06b6d4'];
      const colors = getThemeColors(presetClass, defaultColors);
      const items = [];

      for (let i = 0; i < 50; i++) {
        items.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 1.5 + 1.0
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        items.forEach(p => {
          if (mouse.x !== undefined) {
            const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (dist < 100) {
              p.vx += (p.x - mouse.x) * 0.05 * speed;
              p.vy += (p.y - mouse.y) * 0.05 * speed;
            }
          }

          p.x += p.vx * speed;
          p.y += p.vy * speed;
          p.vx *= 0.98;

          if (p.y > h) {
            p.y = -10;
            p.x = Math.random() * w;
            p.vy = Math.random() * 1.5 + 1.0;
          }

          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size * 1.5);
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 11: Clouds
    function initClouds(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(255, 255, 255, 0.08)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const clouds = [];
      for (let i = 0; i < 8; i++) {
        clouds.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.5,
          r: Math.random() * 60 + 50,
          speed: Math.random() * 0.15 + 0.05
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = colors[0] || 'rgba(255, 255, 255, 0.08)';

        clouds.forEach(c => {
          c.x += c.speed * speed;
          if (c.x - c.r > w) c.x = -c.r;

          ctx.beginPath();
          ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
          ctx.arc(c.x + c.r * 0.5, c.y - c.r * 0.2, c.r * 0.8, 0, Math.PI * 2);
          ctx.arc(c.x - c.r * 0.5, c.y + c.r * 0.1, c.r * 0.7, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 12: Tunnel Warp
    function initTunnelWarp(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['#6366f1'];
      const colors = getThemeColors(presetClass, defaultColors);
      const lines = [];
      for (let i = 0; i < 80; i++) {
        lines.push({
          angle: Math.random() * Math.PI * 2,
          z: Math.random() * 200,
          speed: Math.random() * 1.5 + 1
        });
      }

      let cx = w / 2, cy = h / 2;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
        ctx.fillRect(0, 0, w, h);

        if (mouse.x !== undefined) {
          cx += (mouse.x - cx) * 0.05 * speed;
          cy += (mouse.y - cy) * 0.05 * speed;
        }

        lines.forEach(l => {
          l.z -= l.speed * speed;
          if (l.z <= 0) {
            l.z = 200;
            l.angle = Math.random() * Math.PI * 2;
          }

          const size = 1500 / l.z;
          const x = cx + Math.cos(l.angle) * size;
          const y = cy + Math.sin(l.angle) * size;

          ctx.strokeStyle = colors[0].startsWith('#') ? colors[Math.floor(l.angle * 2) % colors.length] + '99' : \`hsla(\${l.angle * 60}, 80%, 65%, \${1 - l.z / 200})\`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(l.angle) * (size * 0.95), cy + Math.sin(l.angle) * (size * 0.95));
          ctx.lineTo(x, y);
          ctx.stroke();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 13: Honeycomb Hex Grid
    function initHoneycombHex(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(99, 102, 241, 0.04)', 'rgba(0, 212, 255, 0.4)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const size = 30;
      const hGap = size * Math.sqrt(3);
      const vGap = size * 1.5;

      function drawHexagon(x, y, r) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
        }
        ctx.closePath();
      }

      function animate() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(99, 102, 241, 0.04)';
        ctx.lineWidth = 1;

        const cols = Math.floor(w / hGap) + 2;
        const rows = Math.floor(h / vGap) + 2;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            let cx = c * hGap;
            let cy = r * vGap;
            if (r % 2 === 1) cx += hGap / 2;

            const dist = mouse.x !== undefined ? Math.hypot(cx - mouse.x, cy - mouse.y) : 999;
            if (dist < 120) {
              ctx.strokeStyle = colors[1] ? colors[1].replace('0.4', 1 - dist/120) : \`rgba(0, 212, 255, \${0.4 * (1 - dist / 120)})\`;
              ctx.lineWidth = 2;
            } else {
              ctx.strokeStyle = colors[0] || 'rgba(99, 102, 241, 0.04)';
              ctx.lineWidth = 1;
            }

            drawHexagon(cx, cy, size - 2);
            ctx.stroke();
          }
        }
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 14: Floating Bubbles
    function initFloatingBubbles(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(6, 182, 212, 0.25)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const bubbles = [];
      for (let i = 0; i < 35; i++) {
        bubbles.push({
          x: Math.random() * w,
          y: Math.random() * h + h,
          r: Math.random() * 20 + 8,
          speed: Math.random() * 1.2 + 0.4
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 1.5;

        bubbles.forEach(b => {
          if (mouse.x !== undefined) {
            const dist = Math.hypot(b.x - mouse.x, b.y - mouse.y);
            if (dist < b.r + 15) {
              b.y = h + 50;
              b.x = Math.random() * w;
              return;
            }
          }

          b.y -= b.speed * speed;
          if (b.y < -b.r) {
            b.y = h + 50;
            b.x = Math.random() * w;
          }

          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.fillStyle = colors[0].replace('0.25', '0.02') || 'rgba(6, 182, 212, 0.02)';
          ctx.arc(b.x, b.y, b.r - 2, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 15: Diagonal Lines
    function initDiagonalLines(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(99, 102, 241, 0.08)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const lines = [];
      for (let i = 0; i < 20; i++) {
        lines.push({
          x: Math.random() * w,
          width: Math.random() * 3 + 1,
          speed: Math.random() * 0.4 + 0.1
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(99, 102, 241, 0.08)';

        lines.forEach(l => {
          l.x += l.speed * speed;
          if (l.x > w + 200) l.x = -200;

          ctx.lineWidth = l.width;
          ctx.beginPath();
          ctx.moveTo(l.x, -100);
          ctx.lineTo(l.x - 300, h + 100);
          ctx.stroke();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 16: Rainbow Flow
    function initRainbowFlow(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['#ff5e62'];
      const colors = getThemeColors(presetClass, defaultColors);
      let hue = 0;
      let fx = w / 2, fy = h / 2;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        hue = (hue + 0.25 * speed) % 360;
        if (mouse.x !== undefined) {
          fx += (mouse.x - fx) * 0.05 * speed;
          fy += (mouse.y - fy) * 0.05 * speed;
        }

        const grad = ctx.createRadialGradient(fx, fy, 5, fx, fy, w * 0.7);
        const startColor = colors[0].startsWith('#') ? colors[0] : \`hsla(\${hue}, 70%, 55%, 0.08)\`;
        grad.addColorStop(0, colors[0].startsWith('#') ? colors[0] + '14' : startColor);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 17: Sakura Bloom (Falling Petals)
    function initSakuraBloom(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(244, 180, 200, 0.55)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const petals = [];
      for (let i = 0; i < 40; i++) {
        petals.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 8 + 6,
          rot: Math.random() * Math.PI,
          spin: Math.random() * 0.02 + 0.01,
          speed: Math.random() * 1 + 0.8
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = colors[0] || 'rgba(244, 180, 200, 0.55)';

        petals.forEach(p => {
          p.y += p.speed * speed;
          p.x += (Math.sin(p.rot) * 0.5 + (mouse.vx ? mouse.vx * 0.03 : 0)) * speed;
          p.rot += p.spin * speed;

          if (p.y > h) {
            p.y = -15;
            p.x = Math.random() * w;
          }

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 18: Deep Ocean Rays
    function initDeepOcean(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(6, 182, 212, 0.07)', 'rgba(6, 182, 212, 0.2)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const bubbles = [];
      for (let i = 0; i < 30; i++) {
        bubbles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 3 + 1,
          speed: Math.random() * 0.8 + 0.4
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, w, h);

        const lGrad = ctx.createLinearGradient(w / 2, 0, w / 2, h);
        lGrad.addColorStop(0, colors[0] || 'rgba(6, 182, 212, 0.07)');
        lGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = lGrad;
        ctx.beginPath();
        ctx.moveTo(w * 0.1, 0);
        ctx.lineTo(w * 0.4, 0);
        ctx.lineTo(w * 0.75, h);
        ctx.lineTo(w * 0.25, h);
        ctx.fill();

        ctx.fillStyle = colors[1] || 'rgba(6, 182, 212, 0.2)';
        bubbles.forEach(b => {
          b.y -= b.speed * speed;
          if (mouse.x !== undefined && Math.hypot(b.x - mouse.x, b.y - mouse.y) < 80) {
            b.x += (b.x - mouse.x) * 0.05 * speed;
          }
          if (b.y < -10) {
            b.y = h + 10;
            b.x = Math.random() * w;
          }
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        });

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 19: Geometric Shapes
    function initGeometricShapes(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(99, 102, 241, 0.1)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const shapes = [];
      for (let i = 0; i < 20; i++) {
        shapes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          type: Math.random() > 0.5 ? 'square' : 'triangle',
          size: Math.random() * 15 + 10,
          rot: Math.random() * Math.PI,
          spin: (Math.random() - 0.5) * 0.02
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(99, 102, 241, 0.1)';
        ctx.lineWidth = 1.5;

        shapes.forEach(s => {
          s.rot += s.spin * speed;
          if (mouse.x !== undefined) {
            const angleToMouse = Math.atan2(mouse.y - s.y, mouse.x - s.x);
            s.rot += (angleToMouse - s.rot) * 0.02 * speed;
          }

          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.rot);
          
          ctx.beginPath();
          if (s.type === 'square') {
            ctx.strokeRect(-s.size / 2, -s.size / 2, s.size, s.size);
          } else {
            ctx.moveTo(0, -s.size / 2);
            ctx.lineTo(s.size / 2, s.size / 2);
            ctx.lineTo(-s.size / 2, s.size / 2);
            ctx.closePath();
            ctx.stroke();
          }
          ctx.restore();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 20: Digital Glitch
    function initDigitalGlitch(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(0, 212, 255, 0.15)', 'rgba(236, 72, 153, 0.15)'];
      const colors = getThemeColors(presetClass, defaultColors);

      function animate() {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
        for (let y = 0; y < h; y += 4) {
          ctx.fillRect(0, y, w, 1);
        }

        const glitchChance = mouse.x !== undefined ? 0.25 : 0.05;
        if (Math.random() < glitchChance) {
          ctx.fillStyle = Math.random() > 0.5 ? (colors[0] || 'rgba(0, 212, 255, 0.15)') : (colors[1] || 'rgba(236, 72, 153, 0.15)');
          const gy = Math.random() * h;
          const gh = Math.random() * 20 + 5;
          const gx = mouse.x !== undefined ? mouse.x - 200 + Math.random() * 400 : Math.random() * w;
          ctx.fillRect(gx, gy, Math.random() * 300 + 100, gh);
        }

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 21: Bouncing Physics Balls
    function initBouncingPhysics(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(168, 85, 247, 0.2)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const balls = [];
      for (let i = 0; i < 25; i++) {
        balls.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 10 + 6,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          color: colors[0] || 'rgba(168, 85, 247, 0.2)'
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);

        balls.forEach(b => {
          b.x += b.vx * speed;
          b.y += b.vy * speed;

          if (b.x - b.r < 0 || b.x + b.r > w) b.vx *= -1;
          if (b.y - b.r < 0 || b.y + b.r > h) b.vy *= -1;

          if (mouse.x !== undefined) {
            const dist = Math.hypot(b.x - mouse.x, b.y - mouse.y);
            if (dist < b.r + 50) {
              const angle = Math.atan2(b.y - mouse.y, b.x - mouse.x);
              b.vx = Math.cos(angle) * 4;
              b.vy = Math.sin(angle) * 4;
            }
          }

          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 22: Smoke Nebula
    function initSmokeNebula(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(99, 102, 241, 0.05)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 60 + 30,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          alpha: Math.random() * 0.05 + 0.02
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);

        particles.forEach(p => {
          p.x += p.vx * speed;
          p.y += p.vy * speed;

          if (mouse.x !== undefined) {
            p.x += (mouse.x - p.x) * 0.005 * speed;
            p.y += (mouse.y - p.y) * 0.005 * speed;
          }

          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;

          const radGrad = ctx.createRadialGradient(p.x, p.y, 5, p.x, p.y, p.r);
          const col = colors[0].startsWith('rgba') ? colors[0].replace('0.05', p.alpha) : colors[0] + '14';
          radGrad.addColorStop(0, col);
          radGrad.addColorStop(1, 'transparent');
          
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 23: DNA Double Helix
    function initDnaHelix(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['#00D4FF', '#a855f7'];
      const colors = getThemeColors(presetClass, defaultColors);
      let rotation = 0;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1.5;

        const numStrands = 30;
        const spacing = w / numStrands;

        for (let i = 0; i < numStrands; i++) {
          const x = i * spacing + spacing / 2;
          const amp = 50 + (mouse.y !== undefined ? (1 - Math.abs(x - mouse.x) / w) * 60 : 0);
          const yOffset = Math.sin(rotation + i * 0.35) * amp;
          const cy = h / 2;

          ctx.fillStyle = colors[0] || '#00D4FF';
          ctx.beginPath();
          ctx.arc(x, cy + yOffset, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = colors[1] || '#a855f7';
          ctx.beginPath();
          ctx.arc(x, cy - yOffset, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(x, cy + yOffset);
          ctx.lineTo(x, cy - yOffset);
          ctx.stroke();
        }
        rotation += 0.015 * speed;
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 24: Circuit Board Paths
    function initCircuitBoard(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(16, 185, 129, 0.15)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const nodes = [];
      const numNodes = 20;

      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          dir: Math.random() > 0.5 ? 0 : Math.PI / 2, // horizontal or vertical
          length: Math.random() * 80 + 40,
          age: 0
        });
      }

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(16, 185, 129, 0.15)';
        ctx.lineWidth = 2;

        nodes.forEach(n => {
          n.age += speed;
          if (n.age > 100) {
            n.x = Math.random() * w;
            n.y = Math.random() * h;
            n.dir = Math.random() > 0.5 ? 0 : Math.PI / 2;
            n.age = 0;
          }

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          const tx = n.x + Math.cos(n.dir) * n.length * (n.age / 100);
          const ty = n.y + Math.sin(n.dir) * n.length * (n.age / 100);
          ctx.lineTo(tx, ty);
          ctx.stroke();

          ctx.fillStyle = (typeof colors[0] === 'string' && colors[0].startsWith('rgba')) ? '#10b981' : (colors[0] || '#10b981');
          ctx.beginPath();
          ctx.arc(tx, ty, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 25: Shooting Stars
    function initShootingStars(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['#ffffff'];
      const colors = getThemeColors(presetClass, defaultColors);
      const stars = [];

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
        ctx.fillRect(0, 0, w, h);

        if (Math.random() < 0.04) {
          stars.push({
            x: Math.random() * w,
            y: 0,
            length: Math.random() * 80 + 50,
            speed: Math.random() * 12 + 8,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }

        for (let i = stars.length - 1; i >= 0; i--) {
          const s = stars[i];
          s.x += s.speed * speed;
          s.y += s.speed * speed;

          if (mouse.x !== undefined) {
            const dx = mouse.x - s.x;
            const dy = mouse.y - s.y;
            if (Math.hypot(dx, dy) < 150) {
              s.x += dx * 0.1 * speed;
              s.y += dy * 0.1 * speed;
            }
          }

          ctx.strokeStyle = s.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.length, s.y - s.length);
          ctx.stroke();

          if (s.x > w + 100 || s.y > h + 100) {
            stars.splice(i, 1);
          }
        }

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 26: 3D Outrun Grid
    function initOutrunGrid(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(236, 72, 153, 0.08)', 'rgba(6, 182, 212, 0.15)'];
      const colors = getThemeColors(presetClass, defaultColors);
      let offset = 0;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);

        const horizon = h * 0.55;
        ctx.strokeStyle = colors[0] || 'rgba(236, 72, 153, 0.08)';
        ctx.lineWidth = 1.5;

        const numPerspective = 16;
        for (let i = 0; i <= numPerspective; i++) {
          const x = (w / numPerspective) * i;
          ctx.beginPath();
          ctx.moveTo(x, horizon);
          
          let mOffset = mouse.x !== undefined ? (mouse.x - w / 2) * 0.3 : 0;
          ctx.lineTo(x + (x - w / 2) * 1.5 + mOffset, h);
          ctx.stroke();
        }

        ctx.strokeStyle = colors[1] || 'rgba(6, 182, 212, 0.15)';
        offset = (offset + 1.2 * speed) % 40;
        
        for (let y = horizon; y <= h; y += 30) {
          const ratio = (y - horizon) / (h - horizon);
          const cy = horizon + ratio * ratio * (h - horizon) + offset * ratio;
          if (cy <= h) {
            ctx.beginPath();
            ctx.moveTo(0, cy);
            ctx.lineTo(w, cy);
            ctx.stroke();
          }
        }

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 27: Water Ripple Simulation
    function initWaterRipple(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(0, 212, 255, 0.1)'];
      const colors = getThemeColors(presetClass, defaultColors);
      const ripples = [];

      window.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.15) {
          ripples.push({
            x: e.clientX,
            y: e.clientY,
            r: 5,
            maxR: Math.random() * 80 + 40,
            alpha: 0.8
          });
        }
      });

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);

        function getAlphaColor(colorStr, alpha) {
          if (!colorStr) return \`rgba(0, 212, 255, \${alpha})\`;
          if (colorStr.startsWith('rgba')) {
            // Replace the last number before ) - last alpha value
            const lastComma = colorStr.lastIndexOf(',');
            if (lastComma !== -1) {
              return colorStr.substring(0, lastComma + 2) + alpha + ')';
            }
            return colorStr;
          }
          if (colorStr.startsWith('rgb(')) {
            return colorStr.replace('rgb(', 'rgba(').replace(')', ', ' + alpha + ')');
          }
          if (colorStr.startsWith('#')) {
            let hex = colorStr.replace('#', '');
            if (hex.length === 3) {
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return \`rgba(\${r}, \${g}, \${b}, \${alpha})\`;
          }
          return colorStr;
        }

        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.r += 2.0 * speed;
          r.alpha -= 0.015 * speed;

          if (r.alpha <= 0 || r.r >= r.maxR) {
            ripples.splice(i, 1);
            continue;
          }

          ctx.strokeStyle = getAlphaColor(colors[0], r.alpha);
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
          ctx.stroke();
        }

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 28: Fractal Growth
    function initFractalGrowth(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(168, 85, 247, 0.06)'];
      const colors = getThemeColors(presetClass, defaultColors);
      let rotationAngle = 0;

      function drawBranch(x, y, len, angle, depth) {
        if (depth === 0) return;

        const x2 = x + Math.cos(angle) * len;
        const y2 = y + Math.sin(angle) * len;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        const speedFactor = BackgroundEngine.getSpeed(canvas);
        const angleDelta = 0.25 + (mouse.x !== undefined ? (mouse.x / w) * 0.1 : 0) + rotationAngle * speedFactor;
        
        drawBranch(x2, y2, len * 0.72, angle - angleDelta, depth - 1);
        drawBranch(x2, y2, len * 0.72, angle + angleDelta, depth - 1);
      }

      function animate() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(168, 85, 247, 0.06)';
        ctx.lineWidth = 1.5;

        drawBranch(w / 2, h, h * 0.22, -Math.PI / 2, 7);
        rotationAngle = Math.sin(Date.now() * 0.001) * 0.01;
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 29: Audio Waves Epicenter
    function initAudioWaves(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(6, 182, 212, 0.08)'];
      const colors = getThemeColors(presetClass, defaultColors);
      let ringRadius = 0;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(6, 182, 212, 0.08)';
        ctx.lineWidth = 2;

        const cx = mouse.x !== undefined ? mouse.x : w / 2;
        const cy = mouse.y !== undefined ? mouse.y : h / 2;

        ringRadius = (ringRadius + 1.5 * speed) % 150;

        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.arc(cx, cy, ringRadius + i * 50, 0, Math.PI * 2);
          ctx.stroke();
        }

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Preset 30: Kaleidoscope Geometry
    function initKaleidoscope(canvas, presetClass) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });

      const defaultColors = ['rgba(6, 182, 212, 0.08)'];
      const colors = getThemeColors(presetClass, defaultColors);
      let rotation = 0;

      function animate() {
        const speed = BackgroundEngine.getSpeed(canvas);
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = colors[0] || 'rgba(6, 182, 212, 0.08)';
        ctx.lineWidth = 1.5;

        const segments = 8;
        const angle = (Math.PI * 2) / segments;
        const cx = w / 2;
        const cy = h / 2;

        const sizeMultiplier = mouse.x !== undefined ? Math.hypot(mouse.x - cx, mouse.y - cy) * 0.4 + 30 : 120;

        for (let i = 0; i < segments; i++) {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(i * angle + rotation);

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(sizeMultiplier, 30);
          ctx.lineTo(sizeMultiplier * 0.5, sizeMultiplier * 0.5);
          ctx.closePath();
          ctx.stroke();

          ctx.restore();
        }

        rotation += 0.002 * speed;
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Procedural presets 31 to 100
    function initProceduralPreset(canvas, presetClass, index) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });

      const defaultColors = ['rgba(0, 212, 255, 0.08)', 'rgba(168, 85, 247, 0.08)'];
      const colors = getThemeColors(presetClass, defaultColors);

      const localMouse = { x: undefined, y: undefined };
      window.addEventListener('mousemove', (e) => {
        localMouse.x = e.clientX;
        localMouse.y = e.clientY;
      });

      const category = Math.floor((index - 31) / 7);
      const subIndex = (index - 31) % 7;

      const particles = [];
      let angleOffset = 0;

      if (category === 0) {
        const count = 80;
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            speed: Math.random() * 2 + 1,
            size: Math.random() * 3 + 1,
            color: colors[i % colors.length]
          });
        }
      } else if (category === 2) {
        const count = 60;
        for (let i = 0; i < count; i++) {
          particles.push({
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * 200 + 50,
            speed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
            size: Math.random() * 4 + 1,
            color: colors[i % colors.length]
          });
        }
      } else if (category === 4) {
        const count = 50;
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 4 + 2,
            color: colors[i % colors.length]
          });
        }
      } else if (category === 6) {
        const count = 40;
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 80 + 40,
            color: colors[i % colors.length],
            alpha: Math.random() * 0.3 + 0.1
          });
        }
      } else if (category === 7) {
        const columns = Math.floor(w / 20);
        for (let i = 0; i < columns; i++) {
          particles.push({
            x: i * 20,
            y: Math.random() * h - h,
            speed: Math.random() * 4 + 2,
            chars: (subIndex === 0 ? ['0','1'] : subIndex === 1 ? ['F','A','B','8','3','2'] : ['@','#','\$','%','&','*','+','='])
          });
        }
      }

      function animate() {
        if (!canvas || !canvas.parentNode) return;
        const speed = BackgroundEngine.getSpeed(canvas);
        
        if (category === 7) {
          ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
          ctx.fillRect(0, 0, w, h);
        } else if (category === 6) {
          ctx.clearRect(0, 0, w, h);
        } else {
          ctx.clearRect(0, 0, w, h);
        }

        angleOffset += 0.01 * speed;

        if (category === 0) {
          particles.forEach(p => {
            let flowAngle = 0;
            if (subIndex === 0) flowAngle = Math.sin(p.x * 0.005) * Math.cos(p.y * 0.005) * Math.PI * 2;
            else if (subIndex === 1) flowAngle = Math.atan2(p.y - h/2, p.x - w/2) + Math.PI/2;
            else if (subIndex === 2) flowAngle = (p.x * 0.002 + p.y * 0.002) * Math.PI;
            else if (subIndex === 3) flowAngle = Math.floor(p.x / 40) * 0.5 + Math.floor(p.y / 40) * 0.5;
            else if (subIndex === 4 && localMouse.x !== undefined) flowAngle = Math.atan2(localMouse.y - p.y, localMouse.x - p.x);
            else flowAngle = Math.sin(p.x * 0.003 + angleOffset) * Math.PI;

            p.x += Math.cos(flowAngle) * p.speed * speed;
            p.y += Math.sin(flowAngle) * p.speed * speed;

            if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
              p.x = Math.random() * w;
              p.y = Math.random() * h;
            }

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          });
        }
        else if (category === 1) {
          const step = 40;
          ctx.lineWidth = 1;
          for (let x = step; x < w; x += step) {
            for (let y = step; y < h; y += step) {
              ctx.save();
              ctx.translate(x, y);
              
              let scale = 1;
              let rot = 0;
              if (localMouse.x !== undefined) {
                const dist = Math.hypot(x - localMouse.x, y - localMouse.y);
                scale = Math.max(0.2, 1 - dist / 300);
                rot = (dist / 300) * Math.PI;
              } else {
                scale = Math.sin(x * 0.01 + y * 0.01 + angleOffset) * 0.5 + 0.5;
              }

              ctx.scale(scale, scale);
              ctx.rotate(rot);

              ctx.strokeStyle = colors[0];
              if (subIndex === 0) {
                ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.stroke();
              } else if (subIndex === 1) {
                ctx.strokeRect(-8, -8, 16, 16);
              } else if (subIndex === 2) {
                ctx.beginPath(); ctx.moveTo(-10, 0); ctx.lineTo(10, 0); ctx.stroke();
              } else {
                ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(6, 6); ctx.lineTo(-6, 6); ctx.closePath(); ctx.stroke();
              }
              ctx.restore();
            }
          }
        }
        else if (category === 2) {
          particles.forEach(p => {
            p.angle += p.speed * speed;
            let cx = w / 2;
            let cy = h / 2;
            if (subIndex === 0) {
              cx = w / 2 + Math.sin(angleOffset) * 100;
              cy = h / 2 + Math.cos(angleOffset) * 100;
            } else if (subIndex === 1 && localMouse.x !== undefined) {
              cx = localMouse.x;
              cy = localMouse.y;
            }

            const x = cx + Math.cos(p.angle) * p.radius;
            const y = cy + Math.sin(p.angle) * p.radius;

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();

            if (subIndex >= 4) {
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = 0.15;
              ctx.beginPath();
              ctx.arc(cx, cy, p.radius, 0, Math.PI * 2);
              ctx.stroke();
              ctx.globalAlpha = 1.0;
            }
          });
        }
        else if (category === 3) {
          ctx.strokeStyle = colors[0];
          ctx.lineWidth = 1.5;
          const waveCount = subIndex + 2;
          for (let k = 0; k < waveCount; k++) {
            ctx.beginPath();
            for (let x = 0; x < w; x += 5) {
              let y = h / 2 + Math.sin(x * 0.005 + angleOffset + k) * 80 + Math.cos(x * 0.01 - angleOffset) * 30;
              if (localMouse.x !== undefined) {
                const dist = Math.abs(x - localMouse.x);
                if (dist < 200) y += (1 - dist / 200) * 50 * Math.sin(angleOffset * 3);
              }
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
        }
        else if (category === 4) {
          particles.forEach(p => {
            p.x += p.vx * speed;
            p.y += p.vy * speed;

            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          });

          ctx.lineWidth = 0.5;
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.hypot(dx, dy);
              if (dist < 100) {
                ctx.strokeStyle = colors[0];
                ctx.globalAlpha = 1 - dist / 100;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
          ctx.globalAlpha = 1.0;
        }
        else if (category === 5) {
          ctx.strokeStyle = colors[0];
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          const steps = 300;
          const A = subIndex + 2;
          const B = subIndex + 3;
          for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * Math.PI * 2;
            const lx = w / 2 + Math.sin(A * theta + angleOffset) * 200;
            const ly = h / 2 + Math.sin(B * theta) * 200;
            if (i === 0) ctx.moveTo(lx, ly);
            else ctx.lineTo(lx, ly);
          }
          ctx.stroke();
        }
        else if (category === 6) {
          ctx.save();
          particles.forEach(p => {
            p.x += p.vx * speed;
            p.y += p.vy * speed;
            if (p.x < -100 || p.x > w + 100) p.vx *= -1;
            if (p.y < -100 || p.y > h + 100) p.vy *= -1;

            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, 'transparent');

            ctx.fillStyle = grad;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          });
          ctx.restore();
        }
        else if (category === 7) {
          ctx.font = '14px monospace';
          particles.forEach(p => {
            p.y += p.speed * speed;
            if (p.y > h) {
              p.y = -20;
              p.x = Math.random() * w;
            }
            ctx.fillStyle = colors[0];
            const char = p.chars[Math.floor(Math.random() * p.chars.length)];
            ctx.fillText(char, p.x, p.y);
          });
        }
        else if (category === 8) {
          ctx.strokeStyle = colors[0];
          ctx.lineWidth = 1.5;
          function drawSubBranch(x, y, len, angle, depth) {
            if (depth === 0) return;
            const x2 = x + Math.cos(angle) * len;
            const y2 = y + Math.sin(angle) * len;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            const angleDelta = 0.2 + (subIndex * 0.05) + Math.sin(angleOffset) * 0.05;
            drawSubBranch(x2, y2, len * 0.7, angle - angleDelta, depth - 1);
            drawSubBranch(x2, y2, len * 0.7, angle + angleDelta, depth - 1);
          }
          drawSubBranch(w / 2, h, h * 0.2, -Math.PI / 2, 6);
        }
        else if (category === 9) {
          ctx.strokeStyle = colors[0];
          ctx.lineWidth = 1.5;
          const segments = subIndex + 4;
          const angle = (Math.PI * 2) / segments;
          ctx.save();
          ctx.translate(w / 2, h / 2);
          ctx.rotate(angleOffset * 0.2);
          for (let i = 0; i < segments; i++) {
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(100, Math.sin(angleOffset) * 50);
            ctx.lineTo(50, 100);
            ctx.closePath();
            ctx.stroke();
          }
          ctx.restore();
        }

        requestAnimationFrame(animate);
      }
      animate();
    }

    // Master Initializer Scan Module
    const BackgroundEngine = {
      globalSpeed: 1.0,

      setSpeed(speedVal) {
        this.globalSpeed = parseFloat(speedVal) || 1.0;
      },

      getSpeed(canvas) {
        if (canvas && canvas.hasAttribute('data-${prefix}-bg-speed')) {
          return (parseFloat(canvas.getAttribute('data-${prefix}-bg-speed')) || 1.0) * this.globalSpeed;
        }
        return this.globalSpeed;
      },

      basePresets: {
        'code-universe': initCodeUniverse,
        'star-drift': initStarDrift,
        'matrix-rain': initMatrixRain,
        'aurora-glow': initAuroraGlow,
        'snowfall': initSnowfall,
        'fireflies': initFireflies,
        'galaxy-vortex': initGalaxyVortex,
        'wave-sine': initWaveSine,
        'matrix-horizontal': initMatrixHorizontal,
        'confetti': initConfetti,
        'clouds': initClouds,
        'tunnel-warp': initTunnelWarp,
        'honeycomb-hex': initHoneycombHex,
        'floating-bubbles': initFloatingBubbles,
        'diagonal-lines': initDiagonalLines,
        'rainbow-flow': initRainbowFlow,
        'sakura-bloom': initSakuraBloom,
        'deep-ocean': initDeepOcean,
        'geometric-shapes': initGeometricShapes,
        'digital-glitch': initDigitalGlitch,
        'bouncing-physics': initBouncingPhysics,
        'smoke-nebula': initSmokeNebula,
        'dna-helix': initDnaHelix,
        'circuit-board': initCircuitBoard,
        'shooting-stars': initShootingStars,
        'outrun-grid': initOutrunGrid,
        'water-ripple': initWaterRipple,
        'fractal-growth': initFractalGrowth,
        'audio-waves': initAudioWaves,
        'kaleidoscope': initKaleidoscope
      },

      initProceduralPresets() {
        for (let i = 31; i <= 100; i++) {
          this.basePresets[\`preset-\${i}\`] = (function(idx) {
            return function(canvas, presetClass) {
              initProceduralPreset(canvas, presetClass, idx);
            };
          })(i);
        }
      },

      init(element) {
        if (!element) return;

        if (!this.basePresets['preset-31']) {
          this.initProceduralPresets();
        }
        
        let matchedPreset = null;
        let matchedClass = '';
        
        for (const presetName in this.basePresets) {
          const classes = Array.from(element.classList);
          const foundClass = classes.find(c => c === '${prefix}-bg-' + presetName || c.startsWith('${prefix}-bg-' + presetName + '-'));
          if (foundClass) {
            matchedPreset = this.basePresets[presetName];
            matchedClass = foundClass;
            break;
          }
        }
        
        if (matchedPreset) {
          matchedPreset(element, matchedClass);
        }
      },

      initAll() {
        document.querySelectorAll('canvas.${prefix}-bg-animate').forEach(canvas => {
          this.init(canvas);
        });
      }
    };

    // Autoload on DOM Content Loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => BackgroundEngine.initAll());
    } else {
      BackgroundEngine.initAll();
    }

    global.${prefix}Backgrounds = BackgroundEngine;

  })(typeof window !== 'undefined' ? window : this);


  global.${prefix} = Library;
  global.${prefix}Toast = ToastSystem;

})(typeof window !== 'undefined' ? window : this);
`;

// Write core assets
fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.css`), css);
fs.writeFileSync(path.join(DIST_DIR, `${prefix}-bootstrap.js`), js);
console.log('Core raw files written (with merged animations/cursors).');


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

