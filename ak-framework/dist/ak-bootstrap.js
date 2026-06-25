/**
 * Custom JS Library - Generated for ak
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
      styleEl.id = 'ak-dynamic-utilities';
      document.head.appendChild(styleEl);
      dynamicStyleSheet = styleEl.sheet;
    }
  }

  function generateUtilityStyle(className) {
    if (stylesCache.has(className)) return;

    // Pattern: akhilesh-[utility]-[breakpoint]-[value] OR akhilesh-[utility]-[value]
    // Max value limit set to 50,000 for extreme flexibility
    const regex = /^ak-(m|mt|mb|ml|mr|ms|me|mx|my|p|pt|pb|pl|pr|ps|pe|px|py|fs|rounded|gap|w|h|z|opacity)-(?:(sm|md|lg|xl|xxl)-)?(\d+)$/;
    const match = className.match(regex);
    if (!match) return;

    const [_, prop, bp, valStr] = match;
    const val = parseInt(valStr, 10);
    if (isNaN(val) || val < 1 || val > 50000) return;

    let ruleContent = '';
    switch (prop) {
      case 'm': ruleContent = `margin: ${val}px !important;`; break;
      case 'mt': ruleContent = `margin-top: ${val}px !important;`; break;
      case 'mb': ruleContent = `margin-bottom: ${val}px !important;`; break;
      case 'ml':
      case 'ms': ruleContent = `margin-left: &nbsp;${val}px !important;`; // wait, check variable name mapping
      case 'ml':
      case 'ms': ruleContent = `margin-left: ${val}px !important;`; break;
      case 'mr':
      case 'me': ruleContent = `margin-right: ${val}px !important;`; break;
      case 'mx': ruleContent = `margin-left: ${val}px !important; margin-right: ${val}px !important;`; break;
      case 'my': ruleContent = `margin-top: ${val}px !important; margin-bottom: ${val}px !important;`; break;
      case 'p': ruleContent = `padding: ${val}px !important;`; break;
      case 'pt': ruleContent = `padding-top: ${val}px !important;`; break;
      case 'pb': ruleContent = `padding-bottom: ${val}px !important;`; break;
      case 'pl':
      case 'ps': ruleContent = `padding-left: ${val}px !important;`; break;
      case 'pr':
      case 'pe': ruleContent = `padding-right: ${val}px !important;`; break;
      case 'px': ruleContent = `padding-left: ${val}px !important; padding-right: ${val}px !important;`; break;
      case 'py': ruleContent = `padding-top: ${val}px !important; padding-bottom: ${val}px !important;`; break;
      case 'fs': ruleContent = `font-size: ${val}px !important;`; break;
      case 'rounded': ruleContent = `border-radius: ${val}px !important;`; break;
      case 'gap': ruleContent = `gap: ${val}px !important;`; break;
      case 'w': ruleContent = `width: ${val}% !important;`; break;
      case 'h': ruleContent = `height: ${val}% !important;`; break;
      case 'opacity': ruleContent = `opacity: ${val / 100} !important;`; break;
      case 'z': ruleContent = `z-index: ${val} !important;`; break;
    }

    if (!ruleContent) return;

    let finalRule = `.${className} { ${ruleContent} }`;
    if (bp && breakpoints[bp]) {
      finalRule = `@media (min-width: ${breakpoints[bp]}) { .${className} { ${ruleContent} } }`;
    }

    try {
      initDynamicStyles();
      dynamicStyleSheet.insertRule(finalRule, dynamicStyleSheet.cssRules.length);
      stylesCache.add(className);
    } catch (e) {
      console.warn(`Failed to inject dynamic style for class: ${className}`, e);
    }
  }

  function scanDOMForUtilities(node = document.body) {
    if (!node) return;
    if (node.classList) {
      node.classList.forEach(className => {
        if (className.startsWith('ak-')) {
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

        // 1. Check in-memory global registry first (loaded from ak-icons-[set].js)
        if (global.akIcons && global.akIcons[set] && global.akIcons[set][name]) {
          let svgText = global.akIcons[set][name];
          this.innerHTML = svgText;
          this.applyStyles();
          return;
        }

        // Find basePath of the library to load SVGs from host
        let basePath = '';
        const scriptEl = document.querySelector('script[src*="ak-bootstrap"]');
        if (scriptEl) {
          const src = scriptEl.getAttribute('src');
          basePath = src.substring(0, src.lastIndexOf('/'));
        } else {
          basePath = '../dist';
        }

        const svgUrl = `${basePath}/icons/${set}/${name}.svg`;

        try {
          const response = await fetch(svgUrl);
          if (!response.ok) throw new Error(`Icon not found: ${set}/${name}`);
          
          let svgText = await response.text();
          this.innerHTML = svgText;
          this.applyStyles();
        } catch (err) {
          // Fallback to core icons if matching system status
          if (coreIcons[name]) {
            this.innerHTML = coreIcons[name];
            this.applyStyles();
          } else {
            this.innerHTML = `<span style="font-size:0.75em; opacity:0.6;">[${name}]</span>`;
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
        svgElement.classList.add('ak-icon-svg');
        
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

  if (!customElements.get('ak-icon')) {
    customElements.define('ak-icon', AkhileshIcon);
  }

  // Support <i class="akhilesh-icon" data-name="lucide/home"></i> class format
  function renderIconElements(node = document.body) {
    if (!node) return;
    const elements = node.querySelectorAll('.ak-icon[data-name]');
    elements.forEach(el => {
      const name = el.getAttribute('data-name');
      const size = el.getAttribute('data-size') || el.getAttribute('size');
      const color = el.getAttribute('data-color') || el.getAttribute('color');
      const stroke = el.getAttribute('data-stroke') || el.getAttribute('stroke');

      const customIcon = document.createElement('ak-icon');
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
      const closeButton = e.target.closest('[data-ak-dismiss="alert"]');
      if (closeButton) {
        const alertElement = closeButton.closest('.ak-alert');
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
        this.container.className = 'ak-toast-container';
        document.body.appendChild(this.container);
      }
    },

    show(message, title = '', type = 'info', duration = 4000) {
      this._initContainer();
      const toastId = 'toast-' + Math.random().toString(36).substr(2, 9);
      
      const toastHTML = `
        <div id="${toastId}" class="ak-toast ak-toast-${type}">
          <div class="ak-toast-icon">
            <ak-icon name="${type === 'success' ? 'check-circle' : type === 'danger' ? 'x-circle' : type === 'warning' ? 'alert-triangle' : 'info'}" size="14"></ak-icon>
          </div>
          <div class="ak-toast-content">
            ${title ? `<div class="ak-toast-title">${title}</div>` : ''}
            <div class="ak-toast-message">${message}</div>
          </div>
          <button class="ak-toast-close">${coreIcons.close}</button>
          <div class="ak-toast-progress">
            <div class="ak-toast-progress-bar"></div>
          </div>
        </div>
      `;

      const toastElement = createElementFromHTML(toastHTML);
      this.container.appendChild(toastElement);

      const closeBtn = toastElement.querySelector('.ak-toast-close');
      const progressBar = toastElement.querySelector('.ak-toast-progress-bar');
      
      let timer = null;
      let progressInterval = null;
      const startTime = Date.now();

      const dismiss = () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
        toastElement.classList.add('ak-toast-dismissing');
        toastElement.addEventListener('animationend', () => toastElement.remove());
      };

      closeBtn.addEventListener('click', dismiss);

      if (duration > 0) {
        timer = setTimeout(dismiss, duration);
        progressInterval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const remainingPercent = Math.max(0, 100 - (elapsed / duration * 100));
          progressBar.style.transform = `scaleX(&nbsp;${remainingPercent / 100})`;
          progressBar.style.transform = `scaleX(${remainingPercent / 100})`;
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
        const dialogHTML = `
          <div class="ak-dialog-overlay">
            <div class="ak-dialog-box">
              <div class="ak-dialog-header">
                <div class="ak-dialog-icon" style="background-color: var(--ak-info-light); color: var(--ak-info);">
                  <ak-icon name="info" size="22"></ak-icon>
                </div>
                <div class="ak-dialog-title">${title}</div>
              </div>
              <div class="ak-dialog-body">
                <div class="ak-dialog-message">${message}</div>
              </div>
              <div class="ak-dialog-footer">
                <button class="ak-btn ak-btn-primary ok-btn">OK</button>
              </div>
            </div>
          </div>
        `;
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
        const dialogHTML = `
          <div class="ak-dialog-overlay">
            <div class="ak-dialog-box">
              <div class="ak-dialog-header">
                <div class="ak-dialog-icon" style="background-color: var(--ak-warning-light); color: var(--ak-warning);">
                  <ak-icon name="help-circle" size="22"></ak-icon>
                </div>
                <div class="ak-dialog-title">${title}</div>
              </div>
              <div class="ak-dialog-body">
                <div class="ak-dialog-message">${message}</div>
              </div>
              <div class="ak-dialog-footer">
                <button class="ak-btn ak-btn-outline-secondary cancel-btn">Cancel</button>
                <button class="ak-btn ak-btn-primary confirm-btn">Yes, Confirm</button>
              </div>
            </div>
          </div>
        `;
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
        const dialogHTML = `
          <div class="ak-dialog-overlay">
            <div class="ak-dialog-box">
              <div class="ak-dialog-header">
                <div class="ak-dialog-icon" style="background-color: var(--ak-primary-light); color: var(--ak-primary);">
                  <ak-icon name="edit-3" size="22"></ak-icon>
                </div>
                <div class="ak-dialog-title">${title}</div>
              </div>
              <div class="ak-dialog-body">
                <div class="ak-dialog-message">${message}</div>
                <div class="ak-dialog-prompt-wrapper">
                  <input type="text" class="ak-dialog-input" value="${defaultValue}">
                </div>
              </div>
              <div class="ak-dialog-footer">
                <button class="ak-btn ak-btn-outline-secondary cancel-btn">Cancel</button>
                <button class="ak-btn ak-btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        `;
        const overlay = createElementFromHTML(dialogHTML);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        const submitBtn = overlay.querySelector('.submit-btn');
        const cancelBtn = overlay.querySelector('.cancel-btn');
        const inputField = overlay.querySelector('.ak-dialog-input');
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

  global.ak = Library;
  global.akToast = ToastSystem;

})(typeof window !== 'undefined' ? window : this);
