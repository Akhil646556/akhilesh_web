// CSS Interactive Practice & Playground - Core Logic

// State management
const state = {
  activeTab: 'sandbox',
  sandbox: {
    activeLang: 'html',
    html: localStorage.getItem('css_practice_sandbox_html') || `<div class="card-container">\n  <div class="premium-card">\n    <div class="card-icon">⚡</div>\n    <h3>CSS Sandbox</h3>\n    <p>Experiment with layouts, animations, transitions, and CSS properties live.</p>\n    <button class="card-action">Get Started</button>\n  </div>\n</div>`,
    css: localStorage.getItem('css_practice_sandbox_css') || `body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);\n  font-family: 'Outfit', sans-serif;\n}\n\n.card-container {\n  perspective: 1000px;\n}\n\n.premium-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 40px 30px;\n  width: 320px;\n  text-align: center;\n  color: white;\n  backdrop-filter: blur(12px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease;\n}\n\n.premium-card:hover {\n  transform: translateY(-10px) rotateX(4deg);\n  border-color: rgba(0, 242, 254, 0.3);\n  box-shadow: 0 20px 40px rgba(0, 242, 254, 0.15);\n}\n\n.card-icon {\n  font-size: 40px;\n  margin-bottom: 20px;\n  display: inline-block;\n  animation: float 3s ease-in-out infinite;\n}\n\n.premium-card h3 {\n  margin: 0 0 10px;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n\n.premium-card p {\n  margin: 0 0 30px;\n  font-size: 14px;\n  color: #94a3b8;\n  line-height: 1.6;\n}\n\n.card-action {\n  background: linear-gradient(135deg, #00f2fe, #4facfe);\n  border: none;\n  color: #0f172a;\n  font-weight: 700;\n  padding: 12px 28px;\n  border-radius: 30px;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);\n}\n\n.card-action:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.5);\n}\n\n@keyframes float {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-8px); }\n}`
  },
  generators: {
    active: 'flexbox',
    flexbox: {
      itemsCount: 3,
      direction: 'row',
      justify: 'flex-start',
      align: 'stretch',
      wrap: 'nowrap',
      gap: 15,
      selectedItem: null,
      itemProps: {} // e.g. {1: {grow: 0, shrink: 1, self: 'auto'}}
    },
    grid: {
      colsCount: 3,
      rowsCount: 2,
      gap: 15,
      alignItems: 'stretch',
      justifyItems: 'stretch',
      alignContent: 'stretch',
      justifyContent: 'stretch'
    },
    glassmorphism: {
      blur: 12,
      opacity: 0.05,
      color: '#ffffff',
      borderOpacity: 0.15,
      radius: 16,
      shadow: 20
    },
    shadow: {
      inset: false,
      x: 0,
      y: 10,
      blur: 25,
      spread: -5,
      color: '#000000',
      opacity: 0.3
    },
    radius: {
      tl: 16,
      tr: 16,
      br: 16,
      bl: 16,
      unit: 'px'
    },
    gradient: {
      type: 'linear',
      angle: 135,
      color1: '#00f2fe',
      pos1: 0,
      color2: '#7f00ff',
      pos2: 100
    },
    transform: {
      rotate: 0,
      scale: 1,
      translateX: 0,
      translateY: 0,
      skewX: 0,
      skewY: 0,
      blur: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      hueRotate: 0,
      invert: 0,
      saturate: 100
    }
  },
  challenges: {
    activeId: 'center-div',
    html: '',
    css: '',
    solved: JSON.parse(localStorage.getItem('css_practice_solved_challenges') || '[]')
  },
  classroom: {
    activeId: null,
    html: '',
    css: '',
    completed: JSON.parse(localStorage.getItem('css_classroom_completed_lessons') || '[]'),
    activeEditorTab: 'css'
  }
};

// Templates for sandbox selector
const sandboxTemplates = {
  blank: {
    html: `<!-- Clean canvas to start custom development -->\n<div class="playground">\n  <h1>Practice Area</h1>\n  <p>Write your HTML code here and style it inside the CSS tab.</p>\n</div>`,
    css: `body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #090d16;\n  font-family: system-ui, sans-serif;\n  color: white;\n}\n\n.playground {\n  text-align: center;\n  padding: 40px;\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 12px;\n  background: #111827;\n}`
  },
  button: {
    html: `<div class="btn-group">\n  <button class="neon-btn">Cyber Active</button>\n  <button class="glass-btn">Secondary Mode</button>\n</div>`,
    css: `body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #050508;\n  font-family: 'Outfit', sans-serif;\n}\n\n.btn-group {\n  display: flex;\n  gap: 20px;\n}\n\n.neon-btn {\n  position: relative;\n  padding: 16px 36px;\n  background: transparent;\n  border: 2px solid #00f2fe;\n  color: #00f2fe;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);\n}\n\n.neon-btn:hover {\n  background: #00f2fe;\n  color: #050508;\n  box-shadow: 0 0 25px #00f2fe;\n  transform: translateY(-3px);\n}\n\n.glass-btn {\n  padding: 16px 36px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: white;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n  transition: all 0.3s;\n}\n\n.glass-btn:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  transform: translateY(-3px);\n}`
  },
  tooltip: {
    html: `<div class="tooltip-container">\n  <span class="tooltip-trigger" data-tooltip="This CSS tooltip is built entirely without JavaScript!">Hover this element</span>\n</div>`,
    css: `body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #111827;\n  font-family: system-ui, sans-serif;\n  color: white;\n}\n\n.tooltip-trigger {\n  position: relative;\n  color: #60a5fa;\n  font-weight: 600;\n  text-decoration: underline dotted;\n  cursor: pointer;\n}\n\n.tooltip-trigger::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 150%;\n  left: 50%;\n  transform: translateX(-50%) translateY(10px);\n  background: #1f2937;\n  border: 1px solid #374151;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  box-shadow: 0 10px 15px rgba(0,0,0,0.3);\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n\n.tooltip-trigger::before {\n  content: '';\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%) translateY(10px);\n  border: 6px solid transparent;\n  border-top-color: #1f2937;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n\n.tooltip-trigger:hover::after,\n.tooltip-trigger:hover::before {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0);\n}`
  }
};

// DOM Elements & Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Custom font styling injection for iframes (Defined first to avoid undefined errors during sandbox initialization)
  window.googleFontsLink = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">';

  initNavigation();
  initSandbox();
  initClassroom();
  initGenerators();
  initChallenges();
  initCheatSheet();
  initHtmlReference();
  initDesignsHub();
  initEditableCodeDisplays();
});

// Toast notification helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  
  const icon = type === 'success' 
    ? '<i class="fas fa-check-circle" style="color:#10b981; font-size:18px"></i>' 
    : '<i class="fas fa-exclamation-triangle" style="color:#f87171; font-size:18px"></i>';
    
  toast.innerHTML = `${icon} <span>${message}</span>`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ----------------------------------------------------
// TAB NAVIGATION MANAGEMENT
// ----------------------------------------------------
function initNavigation() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.getAttribute('data-tab');
      
      // Update UI tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Toggle panels
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(`${targetPanel}-panel`).classList.add('active');
      
      state.activeTab = targetPanel;
      
      // Handle page refresh updates
      if (targetPanel === 'sandbox') {
        updateSandboxPreview();
      } else if (targetPanel === 'challenges') {
        loadActiveChallenge();
      } else if (targetPanel === 'classroom') {
        // Reset scroll size
        const activeLessonView = document.getElementById('classroom-active-lesson');
        if (activeLessonView && activeLessonView.style.display !== 'none') {
          // Trigger refresh of active classroom preview
          const iframe = document.getElementById('lesson-preview-iframe');
          if (iframe && iframe.contentWindow.updateClassroomPreview) {
            iframe.contentWindow.updateClassroomPreview();
          }
        }
      }
    });
  });
}

// ----------------------------------------------------
// SANDBOX PANEL LOGIC
// ----------------------------------------------------
function initSandbox() {
  const htmlBtn = document.getElementById('sb-html-btn');
  const cssBtn = document.getElementById('sb-css-btn');
  const htmlWrapper = document.getElementById('sb-html-wrapper');
  const cssWrapper = document.getElementById('sb-css-wrapper');
  
  const htmlTextarea = document.getElementById('sb-html-code');
  const cssTextarea = document.getElementById('sb-css-code');
  
  // Set initial text values
  htmlTextarea.value = state.sandbox.html;
  cssTextarea.value = state.sandbox.css;
  
  updateLineNumbers('sb-html-lines', state.sandbox.html);
  updateLineNumbers('sb-css-lines', state.sandbox.css);

  // Tab buttons switcher inside code editor
  htmlBtn.addEventListener('click', () => {
    htmlBtn.classList.add('active');
    cssBtn.classList.remove('active');
    htmlWrapper.classList.add('active');
    cssWrapper.classList.remove('active');
    state.sandbox.activeLang = 'html';
  });

  cssBtn.addEventListener('click', () => {
    cssBtn.classList.add('active');
    htmlBtn.classList.remove('active');
    cssWrapper.classList.add('active');
    htmlWrapper.classList.remove('active');
    state.sandbox.activeLang = 'css';
  });

  // Textarea input listners (debouced preview & line count syncing)
  let sbTimeout;
  
  const syncEditor = (textarea, lineNodeId, storageKey, lang) => {
    const code = textarea.value;
    state.sandbox[lang] = code;
    localStorage.setItem(storageKey, code);
    
    updateLineNumbers(lineNodeId, code);
    
    // Live update preview with 350ms debounce
    clearTimeout(sbTimeout);
    sbTimeout = setTimeout(() => {
      updateSandboxPreview();
    }, 350);
  };

  htmlTextarea.addEventListener('input', () => {
    syncEditor(htmlTextarea, 'sb-html-lines', 'css_practice_sandbox_html', 'html');
  });

  cssTextarea.addEventListener('input', () => {
    syncEditor(cssTextarea, 'sb-css-lines', 'css_practice_sandbox_css', 'css');
  });

  // Line number scrolls sync
  htmlTextarea.addEventListener('scroll', () => {
    document.getElementById('sb-html-lines').scrollTop = htmlTextarea.scrollTop;
  });
  cssTextarea.addEventListener('scroll', () => {
    document.getElementById('sb-css-lines').scrollTop = cssTextarea.scrollTop;
  });

  // Handle template selection
  const templateSelect = document.getElementById('sb-template-select');
  templateSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val && sandboxTemplates[val]) {
      const temp = sandboxTemplates[val];
      htmlTextarea.value = temp.html;
      cssTextarea.value = temp.css;
      
      state.sandbox.html = temp.html;
      state.sandbox.css = temp.css;
      
      localStorage.setItem('css_practice_sandbox_html', temp.html);
      localStorage.setItem('css_practice_sandbox_css', temp.css);
      
      updateLineNumbers('sb-html-lines', temp.html);
      updateLineNumbers('sb-css-lines', temp.css);
      
      updateSandboxPreview();
      showToast(`Loaded ${val.toUpperCase()} template!`);
    }
  });

  // Editor utilities: Clear code, copy code, download files
  document.getElementById('sb-clear-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your sandbox code?')) {
      htmlTextarea.value = '';
      cssTextarea.value = '';
      state.sandbox.html = '';
      state.sandbox.css = '';
      localStorage.removeItem('css_practice_sandbox_html');
      localStorage.removeItem('css_practice_sandbox_css');
      updateLineNumbers('sb-html-lines', '');
      updateLineNumbers('sb-css-lines', '');
      updateSandboxPreview();
      showToast('Sandbox cleared', 'success');
    }
  });

  document.getElementById('sb-copy-btn').addEventListener('click', () => {
    const lang = state.sandbox.activeLang;
    const targetCode = lang === 'html' ? state.sandbox.html : state.sandbox.css;
    navigator.clipboard.writeText(targetCode).then(() => {
      showToast(`Copied ${lang.toUpperCase()} to clipboard!`);
    });
  });

  // Screen preview width buttons
  const screenBtns = document.querySelectorAll('.screen-btn');
  const iframeContainer = document.querySelector('.preview-container');
  screenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      screenBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size');
      
      iframeContainer.style.transition = 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      if (size === 'mobile') {
        iframeContainer.style.width = '375px';
        iframeContainer.style.height = '';
      } else if (size === 'tablet') {
        iframeContainer.style.width = '768px';
        iframeContainer.style.height = '';
      } else {
        iframeContainer.style.width = 'calc(100% - 40px)';
        iframeContainer.style.height = '';
      }
    });
  });

  // Initialize display
  updateSandboxPreview();
}

function updateLineNumbers(elId, code) {
  const lineNode = document.getElementById(elId);
  if (!lineNode) return;
  const linesCount = code.split('\n').length;
  let numbersHtml = '';
  for (let i = 1; i <= linesCount; i++) {
    numbersHtml += `<div>${i}</div>`;
  }
  lineNode.innerHTML = numbersHtml;
}

function updateSandboxPreview() {
  const iframe = document.getElementById('sandbox-iframe');
  if (!iframe) return;
  
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  
  const completeHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      ${window.googleFontsLink}
      <style>
        * { box-sizing: border-box; }
        ${state.sandbox.css}
      </style>
    </head>
    <body>
      ${state.sandbox.html}
    </body>
    </html>
  `;
  
  doc.open();
  doc.write(completeHtml);
  doc.close();
}

// ----------------------------------------------------
// VISUAL GENERATORS LOGIC
// ----------------------------------------------------
function initGenerators() {
  const menuItems = document.querySelectorAll('.gen-menu-item');
  const workspaces = document.querySelectorAll('.generator-workspace');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const genId = item.getAttribute('data-gen');
      
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      workspaces.forEach(w => w.classList.remove('active'));
      document.getElementById(`${genId}-gen`).classList.add('active');
      
      state.generators.active = genId;
      updateGeneratorVisual(genId);
    });
  });

  // Setup control listeners
  setupFlexboxGenerator();
  setupGridGenerator();
  setupGlassmorphismGenerator();
  setupShadowGenerator();
  setupRadiusGenerator();
  setupGradientGenerator();
  setupTransformGenerator();

  // Initialize initial states
  updateGeneratorVisual('flexbox');
}

// Helper to update code block output inside visual generators
function updateGenCodeOutput(genId, cssText) {
  const container = document.getElementById(`${genId}-code-display`);
  if (!container) return;
  
  // Set clean value on the textarea directly
  container.value = cssText;

  // Add click to copy button listener
  const copyBtn = document.getElementById(`${genId}-copy-code`);
  if (copyBtn) {
    // Remove old listeners by cloning
    const newBtn = copyBtn.cloneNode(true);
    copyBtn.parentNode.replaceChild(newBtn, copyBtn);
    newBtn.addEventListener('click', () => {
      const currentText = container.value || cssText;
      navigator.clipboard.writeText(currentText).then(() => {
        showToast('CSS copied to clipboard!');
      });
    });
  }

  // Add open in sandbox button listener
  const sandBtn = document.getElementById(`${genId}-open-sandbox`);
  if (sandBtn) {
    const newSandBtn = sandBtn.cloneNode(true);
    sandBtn.parentNode.replaceChild(newSandBtn, sandBtn);
    newSandBtn.addEventListener('click', () => {
      const currentCss = container.value || cssText;
      // Load standard practice shell depending on generator
      let htmlContent = '';
      if (genId === 'flexbox') {
        htmlContent = '<div class="flex-container">\n';
        for (let i = 1; i <= state.generators.flexbox.itemsCount; i++) {
          htmlContent += `  <div class="flex-item">Box ${i}</div>\n`;
        }
        htmlContent += '</div>';
      } else if (genId === 'grid') {
        htmlContent = '<div class="grid-container">\n';
        const total = state.generators.grid.colsCount * state.generators.grid.rowsCount;
        for (let i = 1; i <= total; i++) {
          htmlContent += `  <div class="grid-item">Grid Cell ${i}</div>\n`;
        }
        htmlContent += '</div>';
      } else if (genId === 'glassmorphism') {
        htmlContent = `<div class="glass-card">\n  <h3>Glass Card</h3>\n  <p>Frosted Glass Effect</p>\n</div>`;
      } else if (genId === 'shadow' || genId === 'radius' || genId === 'transform') {
        htmlContent = `<div class="target-element">Target Box</div>`;
      } else if (genId === 'gradient') {
        htmlContent = `<div class="gradient-bg"></div>`;
      }

      // Update state and load sandbox
      state.sandbox.html = htmlContent;
      state.sandbox.css = currentCss;
      
      localStorage.setItem('css_practice_sandbox_html', htmlContent);
      localStorage.setItem('css_practice_sandbox_css', currentCss);
      
      // Sync DOM elements directly
      document.getElementById('sb-html-code').value = htmlContent;
      document.getElementById('sb-css-code').value = currentCss;
      
      // Update line values
      updateLineNumbers('sb-html-lines', htmlContent);
      updateLineNumbers('sb-css-lines', currentCss);

      // Trigger navigation click to Sandbox Tab
      document.querySelector('.tab-btn[data-tab="sandbox"]').click();
      showToast('Loaded code into Sandbox!', 'success');
    });
  }
}

// 1. FLEXBOX GENERATOR
function setupFlexboxGenerator() {
  const container = document.getElementById('flex-stage');
  
  // Directions
  document.querySelectorAll('[data-flex-prop="direction"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-flex-prop="direction"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.flexbox.direction = btn.getAttribute('data-val');
      updateGeneratorVisual('flexbox');
    });
  });

  // Justify
  document.querySelectorAll('[data-flex-prop="justify"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-flex-prop="justify"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.flexbox.justify = btn.getAttribute('data-val');
      updateGeneratorVisual('flexbox');
    });
  });

  // Align
  document.querySelectorAll('[data-flex-prop="align"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-flex-prop="align"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.flexbox.align = btn.getAttribute('data-val');
      updateGeneratorVisual('flexbox');
    });
  });

  // Wrap
  document.querySelectorAll('[data-flex-prop="wrap"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-flex-prop="wrap"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.flexbox.wrap = btn.getAttribute('data-val');
      updateGeneratorVisual('flexbox');
    });
  });

  // Gap slider
  const gapSlider = document.getElementById('flex-gap-slider');
  gapSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.generators.flexbox.gap = val;
    document.getElementById('flex-gap-val').innerText = `${val}px`;
    updateGeneratorVisual('flexbox');
  });

  // Add / Remove box
  document.getElementById('flex-add-box').addEventListener('click', () => {
    if (state.generators.flexbox.itemsCount < 8) {
      state.generators.flexbox.itemsCount++;
      updateGeneratorVisual('flexbox');
    } else {
      showToast('Maximum 8 boxes allowed', 'warning');
    }
  });

  document.getElementById('flex-remove-box').addEventListener('click', () => {
    if (state.generators.flexbox.itemsCount > 1) {
      state.generators.flexbox.itemsCount--;
      updateGeneratorVisual('flexbox');
    }
  });
}

function updateFlexboxVisual() {
  const cfg = state.generators.flexbox;
  const container = document.getElementById('flex-stage');
  
  // Render boxes
  container.innerHTML = '';
  for (let i = 1; i <= cfg.itemsCount; i++) {
    const box = document.createElement('div');
    box.className = 'flex-demo-item';
    box.innerText = `Box ${i}`;
    box.setAttribute('data-index', i);
    
    // Add selected class if active
    if (cfg.selectedItem === i) {
      box.classList.add('selected');
    }

    // Apply individual item overrides if set
    const itemOver = cfg.itemProps[i];
    if (itemOver) {
      if (itemOver.grow) box.style.flexGrow = itemOver.grow;
      if (itemOver.shrink) box.style.flexShrink = itemOver.shrink;
      if (itemOver.self && itemOver.self !== 'auto') box.style.alignSelf = itemOver.self;
    }

    // Individual item click editor
    box.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFlexItemEditor(i);
    });

    container.appendChild(box);
  }

  // Apply main layout properties to container
  container.style.flexDirection = cfg.direction;
  container.style.justifyContent = cfg.justify;
  container.style.alignItems = cfg.align;
  container.style.flexWrap = cfg.wrap;
  container.style.gap = `${cfg.gap}px`;

  // Build generated CSS
  let css = `.flex-container {\n`;
  css += `  display: flex;\n`;
  css += `  flex-direction: ${cfg.direction};\n`;
  css += `  justify-content: ${cfg.justify};\n`;
  css += `  align-items: ${cfg.align};\n`;
  css += `  flex-wrap: ${cfg.wrap};\n`;
  css += `  gap: ${cfg.gap}px;\n`;
  css += `}\n\n`;

  // Add style rules for custom items
  for (let i = 1; i <= cfg.itemsCount; i++) {
    const it = cfg.itemProps[i];
    if (it && (it.grow !== 0 || it.shrink !== 1 || it.self !== 'auto')) {
      css += `.flex-item:nth-child(${i}) {\n`;
      if (it.grow !== 0) css += `  flex-grow: ${it.grow};\n`;
      if (it.shrink !== 1) css += `  flex-shrink: ${it.shrink};\n`;
      if (it.self !== 'auto') css += `  align-self: ${it.self};\n`;
      css += `}\n\n`;
    }
  }

  // Base styling for child boxes in the preview
  css += `/* Base item styles */\n.flex-item {\n  background: linear-gradient(135deg, #00f2fe, #4facfe);\n  color: #0f172a;\n  font-weight: 700;\n  padding: 20px 30px;\n  border-radius: 8px;\n  text-align: center;\n}`;

  updateGenCodeOutput('flexbox', css);
}

function toggleFlexItemEditor(index) {
  const panel = document.getElementById('flex-item-panel');
  const cfg = state.generators.flexbox;
  
  if (cfg.selectedItem === index) {
    // Deselect
    cfg.selectedItem = null;
    panel.classList.remove('active');
    document.querySelectorAll('.flex-demo-item').forEach(b => b.classList.remove('selected'));
  } else {
    // Select
    cfg.selectedItem = index;
    panel.classList.add('active');
    document.querySelectorAll('.flex-demo-item').forEach(b => {
      b.classList.remove('selected');
      if (parseInt(b.getAttribute('data-index')) === index) {
        b.classList.add('selected');
      }
    });

    // Populate editor settings from state
    if (!cfg.itemProps[index]) {
      cfg.itemProps[index] = { grow: 0, shrink: 1, self: 'auto' };
    }
    const props = cfg.itemProps[index];
    
    document.getElementById('flex-item-title').innerText = `Configure Box ${index}`;
    document.getElementById('item-grow-slider').value = props.grow;
    document.getElementById('item-grow-val').innerText = props.grow;
    
    document.getElementById('item-shrink-slider').value = props.shrink;
    document.getElementById('item-shrink-val').innerText = props.shrink;
    
    // Set align self buttons
    document.querySelectorAll('[data-flex-item-prop="self"]').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-val') === props.self) {
        btn.classList.add('active');
      }
    });

    // Wire sliders
    const grow = document.getElementById('item-grow-slider');
    grow.oninput = (e) => {
      props.grow = parseInt(e.target.value);
      document.getElementById('item-grow-val').innerText = props.grow;
      updateFlexboxVisual();
    };

    const shrink = document.getElementById('item-shrink-slider');
    shrink.oninput = (e) => {
      props.shrink = parseInt(e.target.value);
      document.getElementById('item-shrink-val').innerText = props.shrink;
      updateFlexboxVisual();
    };

    document.querySelectorAll('[data-flex-item-prop="self"]').forEach(btn => {
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', () => {
        document.querySelectorAll('[data-flex-item-prop="self"]').forEach(b => b.classList.remove('active'));
        newBtn.classList.add('active');
        props.self = newBtn.getAttribute('data-val');
        updateFlexboxVisual();
      });
    });
  }
}

// 2. CSS GRID GENERATOR
function setupGridGenerator() {
  const colSlider = document.getElementById('grid-col-slider');
  colSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.generators.grid.colsCount = val;
    document.getElementById('grid-col-val').innerText = val;
    updateGeneratorVisual('grid');
  });

  const rowSlider = document.getElementById('grid-row-slider');
  rowSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.generators.grid.rowsCount = val;
    document.getElementById('grid-row-val').innerText = val;
    updateGeneratorVisual('grid');
  });

  const gapSlider = document.getElementById('grid-gap-slider');
  gapSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.generators.grid.gap = val;
    document.getElementById('grid-gap-val').innerText = `${val}px`;
    updateGeneratorVisual('grid');
  });

  // Alignment Options
  document.querySelectorAll('[data-grid-prop="align-items"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-grid-prop="align-items"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.grid.alignItems = btn.getAttribute('data-val');
      updateGeneratorVisual('grid');
    });
  });

  document.querySelectorAll('[data-grid-prop="justify-items"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-grid-prop="justify-items"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.grid.justifyItems = btn.getAttribute('data-val');
      updateGeneratorVisual('grid');
    });
  });
}

function updateGridVisual() {
  const cfg = state.generators.grid;
  const container = document.getElementById('grid-stage');

  container.innerHTML = '';
  const totalCells = cfg.colsCount * cfg.rowsCount;
  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-demo-item';
    cell.innerText = `Cell ${i}`;
    container.appendChild(cell);
  }

  container.style.gridTemplateColumns = `repeat(${cfg.colsCount}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${cfg.rowsCount}, 1fr)`;
  container.style.gap = `${cfg.gap}px`;
  container.style.alignItems = cfg.alignItems;
  container.style.justifyItems = cfg.justifyItems;

  let css = `.grid-container {\n`;
  css += `  display: grid;\n`;
  css += `  grid-template-columns: repeat(${cfg.colsCount}, 1fr);\n`;
  css += `  grid-template-rows: repeat(${cfg.rowsCount}, 1fr);\n`;
  css += `  gap: ${cfg.gap}px;\n`;
  if (cfg.alignItems !== 'stretch') css += `  align-items: ${cfg.alignItems};\n`;
  if (cfg.justifyItems !== 'stretch') css += `  justify-items: ${cfg.justifyItems};\n`;
  css += `}\n\n`;
  css += `/* Base cell styles */\n.grid-item {\n  background: linear-gradient(135deg, #7f00ff, #e100ff);\n  color: white;\n  font-weight: 600;\n  padding: 24px;\n  border-radius: 8px;\n  text-align: center;\n}`;

  updateGenCodeOutput('grid', css);
}

// 3. GLASSMORPHISM GENERATOR
function setupGlassmorphismGenerator() {
  const blur = document.getElementById('glass-blur-slider');
  blur.oninput = (e) => {
    state.generators.glassmorphism.blur = parseInt(e.target.value);
    document.getElementById('glass-blur-val').innerText = `${e.target.value}px`;
    updateGlassmorphismVisual();
  };

  const opacity = document.getElementById('glass-opacity-slider');
  opacity.oninput = (e) => {
    state.generators.glassmorphism.opacity = parseFloat(e.target.value);
    document.getElementById('glass-opacity-val').innerText = e.target.value;
    updateGlassmorphismVisual();
  };

  const color = document.getElementById('glass-color-picker');
  color.oninput = (e) => {
    state.generators.glassmorphism.color = e.target.value;
    updateGlassmorphismVisual();
  };

  const border = document.getElementById('glass-border-slider');
  border.oninput = (e) => {
    state.generators.glassmorphism.borderOpacity = parseFloat(e.target.value);
    document.getElementById('glass-border-val').innerText = e.target.value;
    updateGlassmorphismVisual();
  };

  const radius = document.getElementById('glass-radius-slider');
  radius.oninput = (e) => {
    state.generators.glassmorphism.radius = parseInt(e.target.value);
    document.getElementById('glass-radius-val').innerText = `${e.target.value}px`;
    updateGlassmorphismVisual();
  };

  const shadow = document.getElementById('glass-shadow-slider');
  shadow.oninput = (e) => {
    state.generators.glassmorphism.shadow = parseInt(e.target.value);
    document.getElementById('glass-shadow-val').innerText = `${e.target.value}px`;
    updateGlassmorphismVisual();
  };
}

function hexToRgba(hex, opacity) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${opacity})`;
  }
  return `rgba(255, 255, 255, ${opacity})`;
}

function updateGlassmorphismVisual() {
  const cfg = state.generators.glassmorphism;
  const card = document.getElementById('glass-card-element');

  const bgRgba = hexToRgba(cfg.color, cfg.opacity);
  const borderRgba = hexToRgba('#ffffff', cfg.borderOpacity);

  card.style.background = bgRgba;
  card.style.backdropFilter = `blur(${cfg.blur}px)`;
  card.style.webkitBackdropFilter = `blur(${cfg.blur}px)`;
  card.style.border = `1px solid ${borderRgba}`;
  card.style.borderRadius = `${cfg.radius}px`;
  card.style.boxShadow = `0 8px 32px 0 rgba(0, 0, 0, ${cfg.shadow / 100})`;

  let css = `.glass-card {\n`;
  css += `  background: ${bgRgba};\n`;
  css += `  backdrop-filter: blur(${cfg.blur}px);\n`;
  css += `  -webkit-backdrop-filter: blur(${cfg.blur}px);\n`;
  css += `  border: 1px solid ${borderRgba};\n`;
  css += `  border-radius: ${cfg.radius}px;\n`;
  css += `  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, ${cfg.shadow / 100});\n`;
  css += `}`;

  updateGenCodeOutput('glassmorphism', css);
}

// 4. BOX SHADOW GENERATOR
function setupShadowGenerator() {
  document.getElementById('shadow-inset').onchange = (e) => {
    state.generators.shadow.inset = e.target.checked;
    updateShadowVisual();
  };

  document.getElementById('shadow-x').oninput = (e) => {
    state.generators.shadow.x = parseInt(e.target.value);
    document.getElementById('shadow-x-val').innerText = `${e.target.value}px`;
    updateShadowVisual();
  };

  document.getElementById('shadow-y').oninput = (e) => {
    state.generators.shadow.y = parseInt(e.target.value);
    document.getElementById('shadow-y-val').innerText = `${e.target.value}px`;
    updateShadowVisual();
  };

  document.getElementById('shadow-blur').oninput = (e) => {
    state.generators.shadow.blur = parseInt(e.target.value);
    document.getElementById('shadow-blur-val').innerText = `${e.target.value}px`;
    updateShadowVisual();
  };

  document.getElementById('shadow-spread').oninput = (e) => {
    state.generators.shadow.spread = parseInt(e.target.value);
    document.getElementById('shadow-spread-val').innerText = `${e.target.value}px`;
    updateShadowVisual();
  };

  document.getElementById('shadow-color').oninput = (e) => {
    state.generators.shadow.color = e.target.value;
    updateShadowVisual();
  };

  document.getElementById('shadow-opacity').oninput = (e) => {
    state.generators.shadow.opacity = parseFloat(e.target.value);
    document.getElementById('shadow-opacity-val').innerText = e.target.value;
    updateShadowVisual();
  };
}

function updateShadowVisual() {
  const cfg = state.generators.shadow;
  const target = document.getElementById('shadow-target');

  const shadowRgba = hexToRgba(cfg.color, cfg.opacity);
  const insetStr = cfg.inset ? 'inset ' : '';
  const shadowValue = `${insetStr}${cfg.x}px ${cfg.y}px ${cfg.blur}px ${cfg.spread}px ${shadowRgba}`;

  target.style.boxShadow = shadowValue;

  let css = `.target-element {\n`;
  css += `  box-shadow: ${shadowValue};\n`;
  css += `}`;

  updateGenCodeOutput('shadow', css);
}

// 5. BORDER RADIUS GENERATOR
function setupRadiusGenerator() {
  const corners = ['tl', 'tr', 'br', 'bl'];
  corners.forEach(c => {
    document.getElementById(`radius-${c}`).oninput = (e) => {
      state.generators.radius[c] = parseInt(e.target.value);
      document.getElementById(`radius-${c}-val`).innerText = `${e.target.value}${state.generators.radius.unit}`;
      updateRadiusVisual();
    };
  });

  document.querySelectorAll('[data-radius-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-radius-unit]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const unit = btn.getAttribute('data-radius-unit');
      state.generators.radius.unit = unit;

      // Update unit titles
      corners.forEach(c => {
        const slider = document.getElementById(`radius-${c}`);
        if (unit === '%') {
          slider.max = 50;
        } else {
          slider.max = 150;
        }
        if (parseInt(slider.value) > slider.max) {
          slider.value = slider.max;
          state.generators.radius[c] = slider.max;
        }
        document.getElementById(`radius-${c}-val`).innerText = `${slider.value}${unit}`;
      });

      updateRadiusVisual();
    });
  });
}

function updateRadiusVisual() {
  const cfg = state.generators.radius;
  const target = document.getElementById('radius-target');
  const u = cfg.unit;

  const valueStr = `${cfg.tl}${u} ${cfg.tr}${u} ${cfg.br}${u} ${cfg.bl}${u}`;
  target.style.borderRadius = valueStr;

  let css = `.target-element {\n`;
  css += `  border-radius: ${valueStr};\n`;
  css += `}`;

  updateGenCodeOutput('radius', css);
}

// 6. CSS GRADIENTS GENERATOR
function setupGradientGenerator() {
  document.querySelectorAll('[data-grad-prop="type"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-grad-prop="type"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.generators.gradient.type = btn.getAttribute('data-val');
      
      const angleCtrl = document.getElementById('grad-angle-ctrl');
      if (btn.getAttribute('data-val') === 'radial') {
        angleCtrl.style.display = 'none';
      } else {
        angleCtrl.style.display = 'flex';
      }
      
      updateGradientVisual();
    });
  });

  document.getElementById('grad-angle').oninput = (e) => {
    state.generators.gradient.angle = parseInt(e.target.value);
    document.getElementById('grad-angle-val').innerText = `${e.target.value}°`;
    updateGradientVisual();
  };

  document.getElementById('grad-c1').oninput = (e) => {
    state.generators.gradient.color1 = e.target.value;
    updateGradientVisual();
  };

  document.getElementById('grad-c1-pos').oninput = (e) => {
    state.generators.gradient.pos1 = parseInt(e.target.value);
    document.getElementById('grad-c1-pos-val').innerText = `${e.target.value}%`;
    updateGradientVisual();
  };

  document.getElementById('grad-c2').oninput = (e) => {
    state.generators.gradient.color2 = e.target.value;
    updateGradientVisual();
  };

  document.getElementById('grad-c2-pos').oninput = (e) => {
    state.generators.gradient.pos2 = parseInt(e.target.value);
    document.getElementById('grad-c2-pos-val').innerText = `${e.target.value}%`;
    updateGradientVisual();
  };
}

function updateGradientVisual() {
  const cfg = state.generators.gradient;
  const target = document.getElementById('gradient-target');

  let valueStr = '';
  if (cfg.type === 'linear') {
    valueStr = `linear-gradient(${cfg.angle}deg, ${cfg.color1} ${cfg.pos1}%, ${cfg.color2} ${cfg.pos2}%)`;
  } else {
    valueStr = `radial-gradient(circle, ${cfg.color1} ${cfg.pos1}%, ${cfg.color2} ${cfg.pos2}%)`;
  }

  target.style.background = valueStr;

  let css = `.gradient-bg {\n`;
  css += `  background: ${valueStr};\n`;
  css += `}`;

  updateGenCodeOutput('gradient', css);
}

// 7. TRANSFORMS & FILTERS
function setupTransformGenerator() {
  // Transform sliders
  document.getElementById('tr-rotate').oninput = (e) => {
    state.generators.transform.rotate = parseInt(e.target.value);
    document.getElementById('tr-rotate-val').innerText = `${e.target.value}deg`;
    updateTransformVisual();
  };

  document.getElementById('tr-scale').oninput = (e) => {
    state.generators.transform.scale = parseFloat(e.target.value);
    document.getElementById('tr-scale-val').innerText = e.target.value;
    updateTransformVisual();
  };

  document.getElementById('tr-translate-x').oninput = (e) => {
    state.generators.transform.translateX = parseInt(e.target.value);
    document.getElementById('tr-translate-x-val').innerText = `${e.target.value}px`;
    updateTransformVisual();
  };

  document.getElementById('tr-translate-y').oninput = (e) => {
    state.generators.transform.translateY = parseInt(e.target.value);
    document.getElementById('tr-translate-y-val').innerText = `${e.target.value}px`;
    updateTransformVisual();
  };

  document.getElementById('tr-skew-x').oninput = (e) => {
    state.generators.transform.skewX = parseInt(e.target.value);
    document.getElementById('tr-skew-x-val').innerText = `${e.target.value}deg`;
    updateTransformVisual();
  };

  document.getElementById('tr-skew-y').oninput = (e) => {
    state.generators.transform.skewY = parseInt(e.target.value);
    document.getElementById('tr-skew-y-val').innerText = `${e.target.value}deg`;
    updateTransformVisual();
  };

  // Filter sliders
  document.getElementById('tr-blur').oninput = (e) => {
    state.generators.transform.blur = parseInt(e.target.value);
    document.getElementById('tr-blur-val').innerText = `${e.target.value}px`;
    updateTransformVisual();
  };

  document.getElementById('tr-brightness').oninput = (e) => {
    state.generators.transform.brightness = parseInt(e.target.value);
    document.getElementById('tr-brightness-val').innerText = `${e.target.value}%`;
    updateTransformVisual();
  };

  document.getElementById('tr-contrast').oninput = (e) => {
    state.generators.transform.contrast = parseInt(e.target.value);
    document.getElementById('tr-contrast-val').innerText = `${e.target.value}%`;
    updateTransformVisual();
  };

  document.getElementById('tr-grayscale').oninput = (e) => {
    state.generators.transform.grayscale = parseInt(e.target.value);
    document.getElementById('tr-grayscale-val').innerText = `${e.target.value}%`;
    updateTransformVisual();
  };

  document.getElementById('tr-hue-rotate').oninput = (e) => {
    state.generators.transform.hueRotate = parseInt(e.target.value);
    document.getElementById('tr-hue-rotate-val').innerText = `${e.target.value}deg`;
    updateTransformVisual();
  };

  document.getElementById('tr-saturate').oninput = (e) => {
    state.generators.transform.saturate = parseInt(e.target.value);
    document.getElementById('tr-saturate-val').innerText = `${e.target.value}%`;
    updateTransformVisual();
  };
}

function updateTransformVisual() {
  const cfg = state.generators.transform;
  const target = document.getElementById('transform-target');

  // Build transform string
  let transformStr = '';
  if (cfg.translateX !== 0 || cfg.translateY !== 0) {
    transformStr += `translate(${cfg.translateX}px, ${cfg.translateY}px) `;
  }
  if (cfg.rotate !== 0) transformStr += `rotate(${cfg.rotate}deg) `;
  if (cfg.scale !== 1) transformStr += `scale(${cfg.scale}) `;
  if (cfg.skewX !== 0 || cfg.skewY !== 0) {
    transformStr += `skew(${cfg.skewX}deg, ${cfg.skewY}deg) `;
  }

  // Build filter string
  let filterStr = '';
  if (cfg.blur !== 0) filterStr += `blur(${cfg.blur}px) `;
  if (cfg.brightness !== 100) filterStr += `brightness(${cfg.brightness}%) `;
  if (cfg.contrast !== 100) filterStr += `contrast(${cfg.contrast}%) `;
  if (cfg.grayscale !== 0) filterStr += `grayscale(${cfg.grayscale}%) `;
  if (cfg.hueRotate !== 0) filterStr += `hue-rotate(${cfg.hueRotate}deg) `;
  if (cfg.saturate !== 100) filterStr += `saturate(${cfg.saturate}%) `;

  target.style.transform = transformStr.trim();
  target.style.filter = filterStr.trim();

  let css = `.target-element {\n`;
  if (transformStr.trim()) css += `  transform: ${transformStr.trim()};\n`;
  if (filterStr.trim()) css += `  filter: ${filterStr.trim()};\n`;
  css += `}`;

  updateGenCodeOutput('transform', css);
}

// Master update routing switcher
function updateGeneratorVisual(genId) {
  switch (genId) {
    case 'flexbox':
      updateFlexboxVisual();
      break;
    case 'grid':
      updateGridVisual();
      break;
    case 'glassmorphism':
      updateGlassmorphismVisual();
      break;
    case 'shadow':
      updateShadowVisual();
      break;
    case 'radius':
      updateRadiusVisual();
      break;
    case 'gradient':
      updateGradientVisual();
      break;
    case 'transform':
      updateTransformVisual();
      break;
  }
}

// ----------------------------------------------------
// CHALLENGES MODULE LOGIC
// ----------------------------------------------------
function initChallenges() {
  const container = document.getElementById('challenge-cards');
  if (!container) return;

  // Render list of challenges from database
  renderChallengesList();

  // Load editor listeners
  const htmlTextarea = document.getElementById('ch-html-code');
  const cssTextarea = document.getElementById('ch-css-code');
  
  htmlTextarea.addEventListener('input', () => {
    state.challenges.html = htmlTextarea.value;
    updateLineNumbers('ch-html-lines', htmlTextarea.value);
    updateChallengePreview();
  });

  cssTextarea.addEventListener('input', () => {
    state.challenges.css = cssTextarea.value;
    updateLineNumbers('ch-css-lines', cssTextarea.value);
    updateChallengePreview();
  });

  htmlTextarea.addEventListener('scroll', () => {
    document.getElementById('ch-html-lines').scrollTop = htmlTextarea.scrollTop;
  });
  cssTextarea.addEventListener('scroll', () => {
    document.getElementById('ch-css-lines').scrollTop = cssTextarea.scrollTop;
  });

  // Verify Solution Button
  document.getElementById('verify-btn').addEventListener('click', () => {
    verifyActiveChallenge();
  });

  // Overlay button listeners
  document.getElementById('next-challenge-btn').addEventListener('click', () => {
    document.getElementById('celebration-modal').classList.remove('show');
    loadNextChallenge();
  });
  
  document.getElementById('close-overlay-btn').addEventListener('click', () => {
    document.getElementById('celebration-modal').classList.remove('show');
  });

  // Reset challenge button
  document.getElementById('ch-reset-btn').addEventListener('click', () => {
    if (confirm('Reset this challenge to its starter code?')) {
      const activeCh = challenges.find(c => c.id === state.challenges.activeId);
      if (activeCh) {
        htmlTextarea.value = activeCh.starterHtml;
        cssTextarea.value = activeCh.starterCss;
        
        state.challenges.html = activeCh.starterHtml;
        state.challenges.css = activeCh.starterCss;
        
        updateLineNumbers('ch-html-lines', activeCh.starterHtml);
        updateLineNumbers('ch-css-lines', activeCh.starterCss);
        
        updateChallengePreview();
        document.getElementById('validation-result').style.display = 'none';
        showToast('Challenge starter code reset.');
      }
    }
  });
}

function renderChallengesList() {
  const container = document.getElementById('challenge-cards');
  container.innerHTML = '';

  challenges.forEach(ch => {
    const card = document.createElement('div');
    card.className = `challenge-menu-card ${state.challenges.activeId === ch.id ? 'active' : ''}`;
    card.setAttribute('data-id', ch.id);

    const isSolved = state.challenges.solved.includes(ch.id);
    const badgeClass = ch.difficulty.toLowerCase();
    
    card.innerHTML = `
      <div class="challenge-card-meta">
        <span class="challenge-badge ${badgeClass}">${ch.difficulty}</span>
        <span class="challenge-status ${isSolved ? 'solved' : ''}">
          ${isSolved ? '<i class="fas fa-check-circle"></i> Solved' : '<i class="far fa-circle"></i> Unsolved'}
        </span>
      </div>
      <h4>${ch.title}</h4>
      <p>${ch.description}</p>
    `;

    card.addEventListener('click', () => {
      state.challenges.activeId = ch.id;
      document.querySelectorAll('.challenge-menu-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      loadActiveChallenge();
    });

    container.appendChild(card);
  });
}

function loadActiveChallenge() {
  const activeCh = challenges.find(c => c.id === state.challenges.activeId);
  if (!activeCh) return;

  // Update Instructions UI
  document.getElementById('ch-title').innerText = activeCh.title;
  document.getElementById('ch-desc').innerText = activeCh.description;
  
  const instructionList = document.getElementById('ch-instructions');
  instructionList.innerHTML = '';
  activeCh.instructions.forEach(ins => {
    const li = document.createElement('li');
    li.innerText = ins;
    instructionList.appendChild(li);
  });

  // Load code editors
  const htmlTextarea = document.getElementById('ch-html-code');
  const cssTextarea = document.getElementById('ch-css-code');
  
  // Set starter code
  htmlTextarea.value = activeCh.starterHtml;
  cssTextarea.value = activeCh.starterCss;
  
  state.challenges.html = activeCh.starterHtml;
  state.challenges.css = activeCh.starterCss;

  updateLineNumbers('ch-html-lines', activeCh.starterHtml);
  updateLineNumbers('ch-css-lines', activeCh.starterCss);

  // Hide verification box
  document.getElementById('validation-result').style.display = 'none';

  // Render iframe
  updateChallengePreview();
}

function updateChallengePreview() {
  const iframe = document.getElementById('challenge-iframe');
  if (!iframe) return;

  const doc = iframe.contentDocument || iframe.contentWindow.document;

  const completeHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      ${window.googleFontsLink}
      <style>
        * { box-sizing: border-box; }
        html, body {
          margin: 0;
          padding: 16px;
          min-height: 100%;
          height: auto;
          background: #0f172a;
          color: white;
          font-family: 'Outfit', 'Inter', sans-serif;
        }
        ${state.challenges.css}
      </style>
    </head>
    <body>
      ${state.challenges.html}
    </body>
    </html>
  `;

  doc.open();
  doc.write(completeHtml);
  doc.close();
}

function verifyActiveChallenge() {
  const activeCh = challenges.find(c => c.id === state.challenges.activeId);
  if (!activeCh) return;

  const iframe = document.getElementById('challenge-iframe');
  const resultBox = document.getElementById('validation-result');

  // Run challenge verification script
  try {
    const check = activeCh.validate(iframe);
    
    resultBox.classList.remove('success', 'error');
    if (check.success) {
      resultBox.classList.add('success');
      resultBox.innerHTML = `<strong><i class="fas fa-check-circle"></i> Success!</strong><br>${check.message}`;
      resultBox.style.display = 'block';

      // Save success status
      if (!state.challenges.solved.includes(activeCh.id)) {
        state.challenges.solved.push(activeCh.id);
        localStorage.setItem('css_practice_solved_challenges', JSON.stringify(state.challenges.solved));
        renderChallengesList(); // refresh sidebar statuses
      }

      // Show success modal overlay
      document.getElementById('celebration-modal').classList.add('show');
      
    } else {
      resultBox.classList.add('error');
      resultBox.innerHTML = `<strong><i class="fas fa-times-circle"></i> Incomplete:</strong><br>${check.message}`;
      resultBox.style.display = 'block';
      showToast('Validation failed. Try again!', 'error');
    }
  } catch (err) {
    resultBox.className = 'validation-output error';
    resultBox.innerHTML = `<strong>Error during evaluation:</strong> ${err.message}`;
    resultBox.style.display = 'block';
  }
}

function loadNextChallenge() {
  const currentIndex = challenges.findIndex(c => c.id === state.challenges.activeId);
  if (currentIndex !== -1 && currentIndex + 1 < challenges.length) {
    const nextCh = challenges[currentIndex + 1];
    state.challenges.activeId = nextCh.id;
    renderChallengesList();
    loadActiveChallenge();
  } else {
    showToast('Congratulations! You completed all the CSS Challenges! 🎉', 'success');
  }
}

// ----------------------------------------------------
// CSS EXPLORER LOGIC (REPLACES CHEAT SHEET)
// ----------------------------------------------------
function initCheatSheet() {
  const searchInput = document.getElementById('explorer-search');
  const treeContainer = document.getElementById('explorer-list-tree');
  const emptyMsg = document.getElementById('explorer-empty-msg');
  const activeContent = document.getElementById('explorer-active-content');
  
  const propName = document.getElementById('explorer-prop-name');
  const propCategory = document.getElementById('explorer-prop-category');
  const propDesc = document.getElementById('explorer-prop-desc');
  const controlsList = document.getElementById('explorer-prop-controls');
  const previewBox = document.getElementById('explorer-preview-box');
  const codeDisplay = document.getElementById('explorer-code-display');
  const openSandboxBtn = document.getElementById('explorer-open-sandbox');
  const copyCodeBtn = document.getElementById('explorer-copy-code');

  let activeProperty = null;

  // Render sidebar list
  const renderSidebar = (query = '') => {
    treeContainer.innerHTML = '';
    const lowercaseQuery = query.toLowerCase();

    cssPropertiesData.forEach(catGroup => {
      // Filter properties in this category
      const matchedProps = catGroup.properties.filter(prop => 
        prop.name.toLowerCase().includes(lowercaseQuery) ||
        prop.desc.toLowerCase().includes(lowercaseQuery) ||
        catGroup.category.toLowerCase().includes(lowercaseQuery)
      );

      if (matchedProps.length === 0) return;

      const groupDiv = document.createElement('div');
      groupDiv.className = 'explorer-category-group';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'explorer-category-title';
      titleDiv.innerText = catGroup.category;
      groupDiv.appendChild(titleDiv);

      matchedProps.forEach(prop => {
        const btn = document.createElement('button');
        btn.className = 'explorer-item-btn';
        if (activeProperty && activeProperty.name === prop.name) {
          btn.classList.add('active');
        }
        btn.innerText = prop.name;
        
        btn.addEventListener('click', () => {
          document.querySelectorAll('.explorer-item-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectProperty(prop);
        });

        groupDiv.appendChild(btn);
      });

      treeContainer.appendChild(groupDiv);
    });

    if (treeContainer.children.length === 0) {
      treeContainer.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-dark); font-size:13px">No properties match "${query}"</div>`;
    }
  };

  // Select property and load details
  const selectProperty = (prop) => {
    activeProperty = prop;
    emptyMsg.style.display = 'none';
    activeContent.style.display = 'block';

    propName.innerText = prop.name;
    propCategory.innerText = prop.category;
    propDesc.innerText = prop.desc;

    // Load visual stage HTML
    previewBox.innerHTML = prop.previewHtml;
    const targetEl = previewBox.querySelector('.target-box, .typo-target, .effects-target, .border-target, .bg-target, .layout-target, .transform-target') || previewBox.firstElementChild;

    // Render controls
    controlsList.innerHTML = '';
    const currentValues = {};

    prop.controls.forEach(ctrl => {
      const ctrlGroup = document.createElement('div');
      ctrlGroup.className = 'control-group';

      const label = document.createElement('label');
      label.className = 'control-label';
      label.innerHTML = `${ctrl.label} ${ctrl.type === 'range' ? `<span class="value-bubble" id="val-${ctrl.id}">${ctrl.value}${ctrl.unit || ''}</span>` : ''}`;
      ctrlGroup.appendChild(label);

      let inputEl;
      if (ctrl.type === 'range') {
        inputEl = document.createElement('input');
        inputEl.type = 'range';
        inputEl.id = ctrl.id;
        inputEl.min = ctrl.min;
        inputEl.max = ctrl.max;
        if (ctrl.step) inputEl.step = ctrl.step;
        inputEl.value = ctrl.value;

        inputEl.addEventListener('input', (e) => {
          document.getElementById(`val-${ctrl.id}`).innerText = `${e.target.value}${ctrl.unit || ''}`;
          updateStyle();
        });
      } else if (ctrl.type === 'color') {
        inputEl = document.createElement('input');
        inputEl.type = 'color';
        inputEl.id = ctrl.id;
        inputEl.value = ctrl.value;

        inputEl.addEventListener('input', () => {
          updateStyle();
        });
      } else if (ctrl.type === 'select') {
        inputEl = document.createElement('select');
        inputEl.className = 'template-select';
        inputEl.style.width = '100%';
        inputEl.id = ctrl.id;

        ctrl.options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.text = opt;
          if (opt === ctrl.value) option.selected = true;
          inputEl.appendChild(option);
        });

        inputEl.addEventListener('change', () => {
          updateStyle();
        });
      }

      ctrlGroup.appendChild(inputEl);
      controlsList.appendChild(ctrlGroup);
      currentValues[ctrl.id] = ctrl.value;
    });

    // Update style compiled rules
    const updateStyle = () => {
      // Gather inputs
      prop.controls.forEach(ctrl => {
        currentValues[ctrl.id] = document.getElementById(ctrl.id).value;
      });

      // Calculate styles
      let styleString = '';
      if (typeof prop.customCompiler === 'function') {
        styleString = prop.customCompiler(currentValues);
      } else {
        styleString = prop.targetStyle(currentValues);
      }

      // Apply style
      if (targetEl) {
        targetEl.setAttribute('style', styleString);
      }

      // Format code snippet display
      let formattedCode = `.target-element {\n  ${styleString.replace(/;\s*/g, ';\n  ').trim()}\n}`;
      codeDisplay.value = formattedCode;

      // Wire utility buttons
      // Copy CSS
      const newCopyBtn = copyCodeBtn.cloneNode(true);
      copyCodeBtn.parentNode.replaceChild(newCopyBtn, copyCodeBtn);
      newCopyBtn.addEventListener('click', () => {
        let toCopy = codeDisplay.value;
        if (toCopy.includes('{')) {
          toCopy = toCopy.substring(toCopy.indexOf('{') + 1, toCopy.lastIndexOf('}')).trim();
        }
        navigator.clipboard.writeText(toCopy).then(() => {
          showToast(`Copied CSS declaration to clipboard!`);
        });
      });

      // Open in Sandbox
      const newSandBtn = openSandboxBtn.cloneNode(true);
      openSandboxBtn.parentNode.replaceChild(newSandBtn, openSandboxBtn);
      newSandBtn.addEventListener('click', () => {
        const sandboxHtml = prop.previewHtml;
        let sandboxCssDecl = codeDisplay.value;
        if (sandboxCssDecl.includes('{')) {
          sandboxCssDecl = sandboxCssDecl.substring(sandboxCssDecl.indexOf('{') + 1, sandboxCssDecl.lastIndexOf('}')).trim();
        }
        const sandboxCss = `body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n  background: #090d16;\n}\n\n.target-box, .typo-target, .effects-target, .border-target, .bg-target, .layout-target, .transform-target {\n  ${sandboxCssDecl}\n}`;
        
        // Update state
        state.sandbox.html = sandboxHtml;
        state.sandbox.css = sandboxCss;

        localStorage.setItem('css_practice_sandbox_html', sandboxHtml);
        localStorage.setItem('css_practice_sandbox_css', sandboxCss);

        // Sync inputs
        document.getElementById('sb-html-code').value = sandboxHtml;
        document.getElementById('sb-css-code').value = sandboxCss;
        
        updateLineNumbers('sb-html-lines', sandboxHtml);
        updateLineNumbers('sb-css-lines', sandboxCss);

        // Switch to sandbox tab
        document.querySelector('.tab-btn[data-tab="sandbox"]').click();
        showToast('Loaded element into Sandbox!', 'success');
      });
    };

    updateStyle();
  };

  // Bind Search bar filter
  searchInput.addEventListener('input', (e) => {
    renderSidebar(e.target.value);
  });

  // Initial render
  renderSidebar();
}

// ----------------------------------------------------
// CSS CLASSROOM LOGIC (NEW TEACHER/STUDENT SYLLABUS)
// ----------------------------------------------------
function initClassroom() {
  const treeContainer = document.getElementById('classroom-syllabus-list');
  const emptyMsg = document.getElementById('classroom-empty-msg');
  const activeContent = document.getElementById('classroom-active-lesson');
  
  const chapterTitle = document.getElementById('lesson-chapter-title');
  const activeTitle = document.getElementById('lesson-active-title');
  const explanation = document.getElementById('lesson-explanation');
  const teacherPrompts = document.getElementById('lesson-teacher-prompts');
  const completedCheckbox = document.getElementById('lesson-completed-checkbox');
  const validationGuidelines = document.getElementById('lesson-validation-guidelines');
  const validationResult = document.getElementById('lesson-validation-result');
  
  const codeEditor = document.getElementById('lesson-code-editor');
  const codeLines = document.getElementById('lesson-code-lines');
  
  const cssTabBtn = document.getElementById('lesson-css-tab-btn');
  const htmlTabBtn = document.getElementById('lesson-html-tab-btn');
  
  // 1. Group lessons by Chapter and render Sidebar
  const renderClassroomSyllabus = () => {
    treeContainer.innerHTML = '';
    
    const chaptersMap = {};
    classroomLessons.forEach(lesson => {
      if (!chaptersMap[lesson.chapter]) {
        chaptersMap[lesson.chapter] = [];
      }
      chaptersMap[lesson.chapter].push(lesson);
    });
    
    Object.keys(chaptersMap).forEach(chapName => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'classroom-chapter-group';
      
      const titleDiv = document.createElement('div');
      titleDiv.className = 'classroom-chapter-header';
      titleDiv.innerText = chapName;
      groupDiv.appendChild(titleDiv);
      
      chaptersMap[chapName].forEach(lesson => {
        const btn = document.createElement('button');
        btn.className = 'classroom-lesson-btn';
        if (state.classroom.activeId === lesson.id) {
          btn.classList.add('active');
        }
        
        const isCompleted = state.classroom.completed.includes(lesson.id);
        const statusIcon = isCompleted 
          ? '<i class="fas fa-check-circle lesson-status-icon completed"></i>' 
          : '<i class="far fa-circle lesson-status-icon"></i>';
        
        btn.innerHTML = `
          <span>${lesson.title}</span>
          ${statusIcon}
        `;
        
        btn.addEventListener('click', () => {
          document.querySelectorAll('.classroom-lesson-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectLesson(lesson);
        });
        
        groupDiv.appendChild(btn);
      });
      
      treeContainer.appendChild(groupDiv);
    });
  };
  
  // 2. Select and Load Lesson
  const selectLesson = (lesson) => {
    state.classroom.activeId = lesson.id;
    state.classroom.html = lesson.playground.html;
    state.classroom.css = lesson.playground.css;
    state.classroom.activeEditorTab = 'css';
    
    emptyMsg.style.display = 'none';
    activeContent.style.display = 'block';
    
    chapterTitle.innerText = lesson.chapter;
    activeTitle.innerText = lesson.title;
    explanation.innerHTML = lesson.desc;
    
    // Checkbox state
    completedCheckbox.checked = state.classroom.completed.includes(lesson.id);
    
    // Teacher Prompts
    teacherPrompts.innerHTML = '';
    lesson.teacherTips.forEach(tip => {
      const li = document.createElement('li');
      li.innerText = tip;
      teacherPrompts.appendChild(li);
    });
    
    // Validation Guidelines
    validationGuidelines.innerHTML = '';
    lesson.playground.validation.instructions.forEach(ins => {
      const li = document.createElement('li');
      li.innerText = ins;
      validationGuidelines.appendChild(li);
    });
    
    // Reset validation result
    validationResult.style.display = 'none';
    
    // Load CSS Editor
    cssTabBtn.classList.add('active');
    htmlTabBtn.classList.remove('active');
    codeEditor.value = state.classroom.css;
    codeEditor.readOnly = false;
    
    updateLineNumbers('lesson-code-lines', state.classroom.css);
    updateClassroomPreview();
  };
  
  // 3. Tab switching inside playground
  cssTabBtn.addEventListener('click', () => {
    if (state.classroom.activeEditorTab === 'css') return;
    state.classroom.activeEditorTab = 'css';
    cssTabBtn.classList.add('active');
    htmlTabBtn.classList.remove('active');
    
    codeEditor.value = state.classroom.css;
    codeEditor.readOnly = false;
    updateLineNumbers('lesson-code-lines', state.classroom.css);
  });
  
  htmlTabBtn.addEventListener('click', () => {
    if (state.classroom.activeEditorTab === 'html') return;
    state.classroom.activeEditorTab = 'html';
    htmlTabBtn.classList.add('active');
    cssTabBtn.classList.remove('active');
    
    codeEditor.value = state.classroom.html;
    codeEditor.readOnly = true;
    updateLineNumbers('lesson-code-lines', state.classroom.html);
  });
  
  // 4. Code Editor Input
  codeEditor.addEventListener('input', () => {
    if (state.classroom.activeEditorTab === 'css') {
      state.classroom.css = codeEditor.value;
      updateLineNumbers('lesson-code-lines', state.classroom.css);
      updateClassroomPreview();
    }
  });
  
  // Scroll sync
  codeEditor.addEventListener('scroll', () => {
    codeLines.scrollTop = codeEditor.scrollTop;
  });
  
  // 5. Update Preview Frame
  const updateClassroomPreview = () => {
    const iframe = document.getElementById('lesson-preview-iframe');
    if (!iframe) return;
    
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    
    const completeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        ${window.googleFontsLink}
        <style>
          * { box-sizing: border-box; }
          html, body {
            margin: 0;
            padding: 16px;
            min-height: 100%;
            height: auto;
            background: #0f172a;
            color: white;
            font-family: 'Outfit', 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          ${state.classroom.css}
        </style>
      </head>
      <body>
        ${state.classroom.html}
      </body>
      </html>
    `;
    
    doc.open();
    doc.write(completeHtml);
    doc.close();
  };
  
  // Make the update function available globally so we can refresh
  window.updateClassroomPreview = updateClassroomPreview;
  
  // 6. Verify Lesson challenge
  document.getElementById('lesson-verify-btn').addEventListener('click', () => {
    const activeLesson = classroomLessons.find(l => l.id === state.classroom.activeId);
    if (!activeLesson) return;
    
    const iframe = document.getElementById('lesson-preview-iframe');
    try {
      const result = activeLesson.playground.validation.validate(iframe);
      validationResult.className = 'validation-output';
      validationResult.style.display = 'block';
      
      if (result.success) {
        validationResult.classList.add('success');
        validationResult.innerHTML = `<strong><i class="fas fa-check-circle"></i> Validated!</strong><br>${result.message}`;
        
        // Mark as completed
        if (!state.classroom.completed.includes(activeLesson.id)) {
          state.classroom.completed.push(activeLesson.id);
          localStorage.setItem('css_classroom_completed_lessons', JSON.stringify(state.classroom.completed));
          completedCheckbox.checked = true;
          renderClassroomSyllabus();
        }
        
        // Show celebration modal
        document.getElementById('celebration-modal').classList.add('show');
        
        const modalNextBtn = document.getElementById('next-challenge-btn');
        const nextIndex = classroomLessons.findIndex(l => l.id === activeLesson.id) + 1;
        
        const newNextBtn = modalNextBtn.cloneNode(true);
        modalNextBtn.parentNode.replaceChild(newNextBtn, modalNextBtn);
        
        if (nextIndex < classroomLessons.length) {
          newNextBtn.innerHTML = 'Next Lesson <i class="fas fa-arrow-right"></i>';
          newNextBtn.addEventListener('click', () => {
            document.getElementById('celebration-modal').classList.remove('show');
            selectLesson(classroomLessons[nextIndex]);
            renderClassroomSyllabus();
          });
        } else {
          newNextBtn.innerHTML = 'Finish Syllabus! 🎉';
          newNextBtn.addEventListener('click', () => {
            document.getElementById('celebration-modal').classList.remove('show');
            showToast('Amazing! You completed the entire A to Z CSS Syllabus! 🎓', 'success');
          });
        }
      } else {
        validationResult.classList.add('error');
        validationResult.innerHTML = `<strong><i class="fas fa-times-circle"></i> Incomplete:</strong><br>${result.message}`;
      }
    } catch(err) {
      validationResult.className = 'validation-output error';
      validationResult.style.display = 'block';
      validationResult.innerHTML = `<strong>Verification Error:</strong> ${err.message}`;
    }
  });
  
  // 7. Progress checkbox check/uncheck
  completedCheckbox.addEventListener('change', () => {
    const activeLesson = classroomLessons.find(l => l.id === state.classroom.activeId);
    if (!activeLesson) return;
    
    if (completedCheckbox.checked) {
      if (!state.classroom.completed.includes(activeLesson.id)) {
        state.classroom.completed.push(activeLesson.id);
      }
    } else {
      state.classroom.completed = state.classroom.completed.filter(id => id !== activeLesson.id);
    }
    localStorage.setItem('css_classroom_completed_lessons', JSON.stringify(state.classroom.completed));
    renderClassroomSyllabus();
  });
  
  // 8. Open current code in sandbox
  document.getElementById('lesson-open-sandbox').addEventListener('click', () => {
    const activeLesson = classroomLessons.find(l => l.id === state.classroom.activeId);
    if (!activeLesson) return;
    
    state.sandbox.html = state.classroom.html;
    state.sandbox.css = state.classroom.css;
    
    localStorage.setItem('css_practice_sandbox_html', state.classroom.html);
    localStorage.setItem('css_practice_sandbox_css', state.classroom.css);
    
    document.getElementById('sb-html-code').value = state.classroom.html;
    document.getElementById('sb-css-code').value = state.classroom.css;
    
    updateLineNumbers('sb-html-lines', state.classroom.html);
    updateLineNumbers('sb-css-lines', state.classroom.css);
    
    document.querySelector('.tab-btn[data-tab="sandbox"]').click();
    showToast('Loaded Classroom code into Sandbox!', 'success');
  });
  
  // 9. Reset current code
  document.getElementById('lesson-reset-code').addEventListener('click', () => {
    const activeLesson = classroomLessons.find(l => l.id === state.classroom.activeId);
    if (!activeLesson) return;
    
    if (confirm('Reset this lesson code to the starting template?')) {
      state.classroom.css = activeLesson.playground.css;
      codeEditor.value = state.classroom.css;
      updateLineNumbers('lesson-code-lines', state.classroom.css);
      updateClassroomPreview();
      validationResult.style.display = 'none';
      showToast('Reset lesson template', 'success');
    }
  });
  
  // 10. Presentation mode toggle
  const presModeBtn = document.getElementById('btn-presentation-mode');
  presModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('presentation-mode');
    
    if (document.body.classList.contains('presentation-mode')) {
      presModeBtn.innerHTML = '<i class="fas fa-compress"></i> Exit Presentation';
      showToast('Presentation Mode Enabled. Press ESC to exit.', 'success');
    } else {
      presModeBtn.innerHTML = '<i class="fas fa-expand"></i> Presentation Mode';
    }
    setTimeout(updateClassroomPreview, 400);
  });
  
  // ESC to exit presentation mode
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('presentation-mode')) {
      document.body.classList.remove('presentation-mode');
      presModeBtn.innerHTML = '<i class="fas fa-expand"></i> Presentation Mode';
      setTimeout(updateClassroomPreview, 400);
    }
  });
  
  // 11. Zoom Controls
  let zoomVal = 1;
  document.getElementById('btn-zoom-in').addEventListener('click', () => {
    if (zoomVal < 2) {
      zoomVal += 0.15;
      activeContent.style.setProperty('--lesson-zoom', zoomVal);
    }
  });
  
  document.getElementById('btn-zoom-out').addEventListener('click', () => {
    if (zoomVal > 0.7) {
      zoomVal -= 0.15;
      activeContent.style.setProperty('--lesson-zoom', zoomVal);
    }
  });
  
  // Initial render of syllabus
  renderClassroomSyllabus();
}

// ----------------------------------------------------
// HTML REFERENCE TAB LOGIC
// ----------------------------------------------------
function initHtmlReference() {
  const searchInput = document.getElementById('html-search');
  const treeContainer = document.getElementById('html-list-tree');
  const emptyMsg = document.getElementById('html-empty-msg');
  const activeContent = document.getElementById('html-active-content');
  
  const tagNameEl = document.getElementById('html-tag-name');
  const tagCategoryEl = document.getElementById('html-tag-category');
  const tagDescEl = document.getElementById('html-tag-desc');
  const controlsList = document.getElementById('html-tag-controls');
  const previewBox = document.getElementById('html-preview-box');
  const codeDisplay = document.getElementById('html-code-display');
  let openSandboxBtn = document.getElementById('html-open-sandbox');
  let copyCodeBtn = document.getElementById('html-copy-code');

  let activeTag = null;

  const renderSidebar = (query = '') => {
    treeContainer.innerHTML = '';
    const lowercaseQuery = query.toLowerCase();

    htmlTagsData.forEach(catGroup => {
      const matchedTags = catGroup.tags.filter(tag => 
        tag.name.toLowerCase().includes(lowercaseQuery) ||
        tag.desc.toLowerCase().includes(lowercaseQuery) ||
        catGroup.category.toLowerCase().includes(lowercaseQuery)
      );

      if (matchedTags.length === 0) return;

      const groupDiv = document.createElement('div');
      groupDiv.className = 'explorer-category-group';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'explorer-category-title';
      titleDiv.innerText = catGroup.category;
      groupDiv.appendChild(titleDiv);

      matchedTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'explorer-item-btn html-item-btn';
        if (activeTag && activeTag.name === tag.name) {
          btn.classList.add('active');
        }
        btn.innerText = tag.name;
        
        btn.addEventListener('click', () => {
          document.querySelectorAll('.html-item-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectTag(tag);
        });

        groupDiv.appendChild(btn);
      });

      treeContainer.appendChild(groupDiv);
    });

    if (treeContainer.children.length === 0) {
      treeContainer.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-dark); font-size:13px">No tags match "${query}"</div>`;
    }
  };

  const selectTag = (tag) => {
    activeTag = tag;
    emptyMsg.style.display = 'none';
    activeContent.style.display = 'block';

    tagNameEl.innerText = tag.name;
    tagCategoryEl.innerText = tag.category;
    tagDescEl.innerText = tag.desc;

    // Render controls
    controlsList.innerHTML = '';
    const currentValues = {};

    tag.controls.forEach(ctrl => {
      const ctrlGroup = document.createElement('div');
      ctrlGroup.className = 'control-group';

      const label = document.createElement('label');
      label.className = 'control-label';
      label.innerHTML = `${ctrl.label} ${ctrl.type === 'range' ? `<span class="value-bubble" id="html-val-${ctrl.id}">${ctrl.value}${ctrl.unit || ''}</span>` : ''}`;
      ctrlGroup.appendChild(label);

      let inputEl;
      if (ctrl.type === 'range') {
        inputEl = document.createElement('input');
        inputEl.type = 'range';
        inputEl.id = `html-ctrl-${ctrl.id}`;
        inputEl.min = ctrl.min;
        inputEl.max = ctrl.max;
        if (ctrl.step) inputEl.step = ctrl.step;
        inputEl.value = ctrl.value;

        inputEl.addEventListener('input', (e) => {
          const bubble = document.getElementById(`html-val-${ctrl.id}`);
          if (bubble) bubble.innerText = `${e.target.value}${ctrl.unit || ''}`;
          updateTagPreview();
        });
      } else if (ctrl.type === 'color') {
        inputEl = document.createElement('input');
        inputEl.type = 'color';
        inputEl.id = `html-ctrl-${ctrl.id}`;
        inputEl.value = ctrl.value;

        inputEl.addEventListener('input', () => {
          updateTagPreview();
        });
      } else if (ctrl.type === 'select') {
        inputEl = document.createElement('select');
        inputEl.className = 'template-select';
        inputEl.style.width = '100%';
        inputEl.id = `html-ctrl-${ctrl.id}`;

        ctrl.options.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.text = opt;
          if (opt === ctrl.value) option.selected = true;
          inputEl.appendChild(option);
        });

        inputEl.addEventListener('change', () => {
          updateTagPreview();
        });
      } else if (ctrl.type === 'text') {
        inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.id = `html-ctrl-${ctrl.id}`;
        inputEl.value = ctrl.value;
        inputEl.className = 'editor-text-input';
        inputEl.style.width = '100%';
        inputEl.style.background = 'var(--bg-primary)';
        inputEl.style.border = '1px solid var(--border-color)';
        inputEl.style.color = 'white';
        inputEl.style.padding = '8px';
        inputEl.style.borderRadius = '4px';

        inputEl.addEventListener('input', () => {
          updateTagPreview();
        });
      }

      ctrlGroup.appendChild(inputEl);
      controlsList.appendChild(ctrlGroup);
      currentValues[ctrl.id] = ctrl.value;
    });

    const updateTagPreview = () => {
      // Gather inputs
      tag.controls.forEach(ctrl => {
        const el = document.getElementById(`html-ctrl-${ctrl.id}`);
        if (el) currentValues[ctrl.id] = el.value;
      });

      // Calculate HTML code
      const compiledHtml = tag.customCompiler(currentValues);

      // Render visually
      previewBox.innerHTML = compiledHtml;

      // Set value on textarea directly
      codeDisplay.value = compiledHtml;

      // Wire copy
      const newCopyBtn = copyCodeBtn.cloneNode(true);
      copyCodeBtn.parentNode.replaceChild(newCopyBtn, copyCodeBtn);
      copyCodeBtn = newCopyBtn;
      copyCodeBtn.addEventListener('click', () => {
        const currentHtml = codeDisplay.value || compiledHtml;
        navigator.clipboard.writeText(currentHtml).then(() => {
          showToast(`Copied HTML markup to clipboard!`);
        });
      });

      // Wire Sandbox load
      const newSandBtn = openSandboxBtn.cloneNode(true);
      openSandboxBtn.parentNode.replaceChild(newSandBtn, openSandboxBtn);
      openSandboxBtn = newSandBtn;
      openSandboxBtn.addEventListener('click', () => {
        const currentHtml = codeDisplay.value || compiledHtml;
        state.sandbox.html = currentHtml;
        state.sandbox.css = '';

        localStorage.setItem('css_practice_sandbox_html', currentHtml);
        localStorage.setItem('css_practice_sandbox_css', '');

        document.getElementById('sb-html-code').value = currentHtml;
        document.getElementById('sb-css-code').value = '';
        
        updateLineNumbers('sb-html-lines', currentHtml);
        updateLineNumbers('sb-css-lines', '');

        document.querySelector('.tab-btn[data-tab="sandbox"]').click();
        showToast('Loaded HTML element into Sandbox!', 'success');
      });
    };

    updateTagPreview();
  };

  searchInput.addEventListener('input', (e) => {
    renderSidebar(e.target.value);
  });

  renderSidebar();
}

function formatHtmlHighlight(code) {
  let esc = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // highlight tags
  esc = esc.replace(/(&lt;\/?[a-zA-Z1-6]+)(&gt;)?/g, '<span class="selector">$1</span>$2');
  esc = esc.replace(/(&lt;\/?[a-zA-Z1-6]+)(\s+[^&]+)(&gt;)/g, (m, g1, g2, g3) => {
    let attrs = g2.replace(/([a-zA-Z-]+)=(".*?"|'.*?'|[^\s>]+)/g, '<span class="property">$1</span>=<span class="value">$2</span>');
    return `${g1}${attrs}${g3}`;
  });
  return esc;
}

// ----------------------------------------------------
// DESIGNS HUB LOGIC (COMBINED HTML + CSS)
// ----------------------------------------------------
function initDesignsHub() {
  const treeContainer = document.getElementById('designs-list-tree');
  const emptyMsg = document.getElementById('designs-empty-msg');
  const activeContent = document.getElementById('designs-active-content');
  
  const layoutTitleEl = document.getElementById('designs-layout-title');
  const layoutCategoryEl = document.getElementById('designs-layout-category');
  const layoutDescEl = document.getElementById('designs-layout-desc');
  const layoutNotesEl = document.getElementById('designs-layout-notes');
  const previewIframe = document.getElementById('designs-preview-iframe');
  
  const htmlViewBtn = document.getElementById('designs-html-btn');
  const cssViewBtn = document.getElementById('designs-css-btn');
  const codeTypeTitle = document.getElementById('designs-code-type-title');
  const codeEditor = document.getElementById('designs-code-editor');
  const copyCodeBtn = document.getElementById('designs-copy-code');
  const openSandboxBtn = document.getElementById('designs-open-sandbox');

  // Visual Designer Elements
  const designTabBtn = document.getElementById('designs-designer-btn');
  const editorsPane = document.getElementById('designs-editors-pane');
  const designerPanel = document.getElementById('designs-designer-panel');
  const elementSelect = document.getElementById('designs-element-select');
  
  const fontSizeInput = document.getElementById('designer-font-size');
  const fontValLabel = document.getElementById('designer-font-val');
  const textColorInput = document.getElementById('designer-color');
  const textAlignSelect = document.getElementById('designer-align');
  
  const paddingInput = document.getElementById('designer-padding');
  const paddingLabel = document.getElementById('designer-padding-val');
  const marginInput = document.getElementById('designer-margin');
  const marginLabel = document.getElementById('designer-margin-val');
  
  const bgColorInput = document.getElementById('designer-bg-color');
  const borderRadiusInput = document.getElementById('designer-radius');
  const borderRadiusLabel = document.getElementById('designer-radius-val');
  const borderWidthInput = document.getElementById('designer-border-width');
  const borderWidthLabel = document.getElementById('designer-border-width-val');
  const borderColorInput = document.getElementById('designer-border-color');
  
  const shadowBlurInput = document.getElementById('designer-shadow');
  const shadowBlurLabel = document.getElementById('designer-shadow-val');
  const shadowColorInput = document.getElementById('designer-shadow-color');

  let activeDesign = null;
  let activeCodeView = 'html'; // 'html', 'css', or 'designer'

  const renderSidebar = () => {
    treeContainer.innerHTML = '';

    // Group designs by category
    const categories = {};
    webDesignsData.forEach(design => {
      if (!categories[design.category]) {
        categories[design.category] = [];
      }
      categories[design.category].push(design);
    });

    for (const catName in categories) {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'explorer-category-group';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'explorer-category-title';
      titleDiv.innerText = catName;
      groupDiv.appendChild(titleDiv);

      categories[catName].forEach(design => {
        const btn = document.createElement('button');
        btn.className = 'explorer-item-btn designs-item-btn';
        if (activeDesign && activeDesign.title === design.title) {
          btn.classList.add('active');
        }
        btn.innerText = design.title;
        
        btn.addEventListener('click', () => {
          document.querySelectorAll('.designs-item-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectDesign(design);
        });

        groupDiv.appendChild(btn);
      });

      treeContainer.appendChild(groupDiv);
    }
  };

  const selectDesign = (design) => {
    activeDesign = design;
    emptyMsg.style.display = 'none';
    activeContent.style.display = 'block';

    layoutTitleEl.innerText = design.title;
    layoutCategoryEl.innerText = design.category;
    layoutDescEl.innerText = design.desc;
    layoutNotesEl.innerText = design.notes;

    const updatePreview = () => {
      const customFont = window.googleFontsLink || '';
      const fontAwesome = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">';
      previewIframe.srcdoc = `
        <!DOCTYPE html>
        <html>
          <head>
            ${customFont}
            ${fontAwesome}
            <style>
              body {
                font-family: 'Outfit', 'Inter', sans-serif;
                background: #0f172a;
                color: #cbd5e1;
                margin: 0;
                padding: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                box-sizing: border-box;
              }
              ${design.css}
            </style>
          </head>
          <body>
            ${design.html}
          </body>
        </html>
      `;
    };

    const updateCodeDisplay = () => {
      if (activeCodeView === 'html') {
        htmlViewBtn.classList.add('active');
        cssViewBtn.classList.remove('active');
        designTabBtn.classList.remove('active');
        editorsPane.style.display = 'flex';
        designerPanel.style.display = 'none';
        codeTypeTitle.innerText = 'HTML Editor (Live)';
        codeEditor.value = design.html;
      } else if (activeCodeView === 'css') {
        cssViewBtn.classList.add('active');
        htmlViewBtn.classList.remove('active');
        designTabBtn.classList.remove('active');
        editorsPane.style.display = 'flex';
        designerPanel.style.display = 'none';
        codeTypeTitle.innerText = 'CSS Editor (Live)';
        codeEditor.value = design.css;
      } else {
        designTabBtn.classList.add('active');
        htmlViewBtn.classList.remove('active');
        cssViewBtn.classList.remove('active');
        editorsPane.style.display = 'none';
        designerPanel.style.display = 'block';
        populateElementSelectors();
      }
    };

    // Parser Helpers for Visual Designer
    const extractSelectors = (cssText) => {
      const selectors = [];
      const regex = /([^{]+)\s*\{/g;
      let match;
      while ((match = regex.exec(cssText)) !== null) {
        let selectorStr = match[1].trim();
        selectorStr.split(',').forEach(sel => {
          sel = sel.trim();
          if (!sel.startsWith('@') && !sel.startsWith(':root') && !/^\d+%\s*$/.test(sel) && sel !== 'to' && sel !== 'from') {
            if (!selectors.includes(sel)) {
              selectors.push(sel);
            }
          }
        });
      }
      return selectors;
    };

    const getCssProperty = (cssText, selector, property) => {
      const escapedSelector = selector.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedSelector + '\\s*\\{([^}]+)\\}', 'i');
      const match = cssText.match(regex);
      if (match) {
        const rules = match[1];
        const propRegex = new RegExp(property + '\\s*:\\s*([^;]+);', 'i');
        const propMatch = rules.match(propRegex);
        if (propMatch) {
          return propMatch[1].trim();
        }
      }
      return '';
    };

    const setCssProperty = (cssText, selector, property, value) => {
      const escapedSelector = selector.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp('(' + escapedSelector + '\\s*\\{[^}]*)(' + property + '\\s*:\\s*[^;]+;)', 'i');
      if (regex.test(cssText)) {
        return cssText.replace(regex, `$1${property}: ${value};`);
      }
      const selectorRegex = new RegExp('(' + escapedSelector + '\\s*\\{)', 'i');
      if (selectorRegex.test(cssText)) {
        return cssText.replace(selectorRegex, `$1\n  ${property}: ${value};`);
      }
      return cssText + `\n\n${selector} {\n  ${property}: ${value};\n}`;
    };

    const loadElementStyles = (selector) => {
      const fontSize = getCssProperty(design.css, selector, 'font-size');
      if (fontSize) {
        const val = parseInt(fontSize);
        fontSizeInput.value = isNaN(val) ? 16 : val;
        fontValLabel.innerText = fontSize;
      } else {
        fontSizeInput.value = 16;
        fontValLabel.innerText = '16px (default)';
      }

      const color = getCssProperty(design.css, selector, 'color');
      if (color && color.startsWith('#')) {
        textColorInput.value = color;
      } else {
        textColorInput.value = '#ffffff';
      }

      const align = getCssProperty(design.css, selector, 'text-align');
      textAlignSelect.value = align || '';

      const padding = getCssProperty(design.css, selector, 'padding');
      if (padding) {
        const val = parseInt(padding);
        paddingInput.value = isNaN(val) ? 0 : val;
        paddingLabel.innerText = padding;
      } else {
        paddingInput.value = 0;
        paddingLabel.innerText = '0px';
      }

      const margin = getCssProperty(design.css, selector, 'margin');
      if (margin) {
        const val = parseInt(margin);
        marginInput.value = isNaN(val) ? 0 : val;
        marginLabel.innerText = margin;
      } else {
        marginInput.value = 0;
        marginLabel.innerText = '0px';
      }

      const bgColor = getCssProperty(design.css, selector, 'background-color') || getCssProperty(design.css, selector, 'background');
      if (bgColor && bgColor.startsWith('#')) {
        bgColorInput.value = bgColor;
      } else {
        bgColorInput.value = '#1e293b';
      }

      const radius = getCssProperty(design.css, selector, 'border-radius');
      if (radius) {
        const val = parseInt(radius);
        borderRadiusInput.value = isNaN(val) ? 0 : val;
        borderRadiusLabel.innerText = radius;
      } else {
        borderRadiusInput.value = 0;
        borderRadiusLabel.innerText = '0px';
      }

      const borderWidth = getCssProperty(design.css, selector, 'border-width');
      if (borderWidth) {
        const val = parseInt(borderWidth);
        borderWidthInput.value = isNaN(val) ? 0 : val;
        borderWidthLabel.innerText = borderWidth;
      } else {
        borderWidthInput.value = 0;
        borderWidthLabel.innerText = '0px';
      }

      const borderColor = getCssProperty(design.css, selector, 'border-color');
      if (borderColor && borderColor.startsWith('#')) {
        borderColorInput.value = borderColor;
      } else {
        borderColorInput.value = '#00f2fe';
      }

      const shadow = getCssProperty(design.css, selector, 'box-shadow');
      if (shadow) {
        const match = shadow.match(/(\d+)px/);
        if (match) {
          const val = parseInt(match[1]);
          shadowBlurInput.value = val;
          shadowBlurLabel.innerText = val + 'px';
        } else {
          shadowBlurInput.value = 0;
          shadowBlurLabel.innerText = '0px';
        }
      } else {
        shadowBlurInput.value = 0;
        shadowBlurLabel.innerText = '0px';
      }
    };

    const populateElementSelectors = () => {
      elementSelect.innerHTML = '';
      const selectors = extractSelectors(design.css);
      selectors.forEach(sel => {
        const option = document.createElement('option');
        option.value = sel;
        option.innerText = sel;
        elementSelect.appendChild(option);
      });
      if (selectors.length > 0) {
        elementSelect.value = selectors[0];
        loadElementStyles(selectors[0]);
      }
    };

    const applyStyleChange = (property, value) => {
      const selector = elementSelect.value;
      if (!selector) return;
      design.css = setCssProperty(design.css, selector, property, value);
      updatePreview();
      if (activeCodeView === 'css') {
        codeEditor.value = design.css;
      }
    };

    // Bind event handlers directly using property overrides
    htmlViewBtn.onclick = () => {
      activeCodeView = 'html';
      updateCodeDisplay();
    };

    cssViewBtn.onclick = () => {
      activeCodeView = 'css';
      updateCodeDisplay();
    };

    designTabBtn.onclick = () => {
      activeCodeView = 'designer';
      updateCodeDisplay();
    };

    codeEditor.oninput = (e) => {
      if (activeCodeView === 'html') {
        design.html = e.target.value;
      } else {
        design.css = e.target.value;
      }
      updatePreview();
    };

    copyCodeBtn.onclick = () => {
      navigator.clipboard.writeText(codeEditor.value).then(() => {
        showToast(`Copied ${activeCodeView.toUpperCase()} source to clipboard!`);
      });
    };

    openSandboxBtn.onclick = () => {
      state.sandbox.html = design.html;
      state.sandbox.css = design.css;

      localStorage.setItem('css_practice_sandbox_html', design.html);
      localStorage.setItem('css_practice_sandbox_css', design.css);

      document.getElementById('sb-html-code').value = design.html;
      document.getElementById('sb-css-code').value = design.css;
      
      updateLineNumbers('sb-html-lines', design.html);
      updateLineNumbers('sb-css-lines', design.css);

      document.querySelector('.tab-btn[data-tab="sandbox"]').click();
      showToast('Loaded active layout into Sandbox!', 'success');
    };

    // Binder Controls Change Listeners
    elementSelect.onchange = (e) => {
      loadElementStyles(e.target.value);
    };

    fontSizeInput.oninput = (e) => {
      const val = e.target.value + 'px';
      fontValLabel.innerText = val;
      applyStyleChange('font-size', val);
    };

    textColorInput.oninput = (e) => {
      applyStyleChange('color', e.target.value);
    };

    textAlignSelect.onchange = (e) => {
      applyStyleChange('text-align', e.target.value);
    };

    paddingInput.oninput = (e) => {
      const val = e.target.value + 'px';
      paddingLabel.innerText = val;
      applyStyleChange('padding', val);
    };

    marginInput.oninput = (e) => {
      const val = e.target.value + 'px';
      marginLabel.innerText = val;
      applyStyleChange('margin', val);
    };

    bgColorInput.oninput = (e) => {
      applyStyleChange('background-color', e.target.value);
    };

    borderRadiusInput.oninput = (e) => {
      const val = e.target.value + 'px';
      borderRadiusLabel.innerText = val;
      applyStyleChange('border-radius', val);
    };

    borderWidthInput.oninput = (e) => {
      const val = e.target.value + 'px';
      borderWidthLabel.innerText = val;
      applyStyleChange('border-width', val);
    };

    borderColorInput.oninput = (e) => {
      applyStyleChange('border-color', e.target.value);
    };

    shadowBlurInput.oninput = (e) => {
      const val = e.target.value;
      shadowBlurLabel.innerText = val + 'px';
      const color = shadowColorInput.value;
      applyStyleChange('box-shadow', `0 10px ${val}px ${color}`);
    };

    shadowColorInput.oninput = (e) => {
      const val = shadowBlurInput.value;
      const color = e.target.value;
      applyStyleChange('box-shadow', `0 10px ${val}px ${color}`);
    };

    updatePreview();
    updateCodeDisplay();
  };

  renderSidebar();
}

// Parse declarations list or full stylesheet rules and apply to target element inline style
function applyCssStringToElement(cssString, element) {
  if (!element) return;
  // Strip comments
  let cleanCss = cssString.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Extract declarations block between { and } if present, otherwise treat as declarations list
  let declsBlock = cleanCss;
  if (cleanCss.includes('{')) {
    declsBlock = cleanCss.substring(cleanCss.indexOf('{') + 1, cleanCss.lastIndexOf('}'));
  }
  
  // Clear inline style and apply the new values
  element.removeAttribute('style');
  
  // Split declarations by semicolon
  const declarations = declsBlock.split(';');
  declarations.forEach(decl => {
    const parts = decl.split(':');
    if (parts.length >= 2) {
      const prop = parts[0].trim();
      const val = parts.slice(1).join(':').trim();
      if (prop && val) {
        // Convert to camelCase
        const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        element.style[camelProp] = val;
      }
    }
  });
}

// Attach input event listeners to all newly editable pre code-displays (now textareas)
function initEditableCodeDisplays() {
  // 1. CSS Reference (Cheatsheet)
  const explorerDisplay = document.getElementById('explorer-code-display');
  if (explorerDisplay) {
    explorerDisplay.addEventListener('input', (e) => {
      const previewBox = document.getElementById('explorer-preview-box');
      if (previewBox) {
        const targetEl = previewBox.querySelector('.target-box, .typo-target, .effects-target, .border-target, .bg-target, .layout-target, .transform-target') || previewBox.firstElementChild;
        applyCssStringToElement(e.target.value, targetEl);
      }
    });
  }

  // 2. HTML Reference
  const htmlDisplay = document.getElementById('html-code-display');
  if (htmlDisplay) {
    htmlDisplay.addEventListener('input', (e) => {
      const previewBox = document.getElementById('html-preview-box');
      if (previewBox) {
        previewBox.innerHTML = e.target.value;
      }
    });
  }

  // 3. Generators
  const generatorsMap = {
    'flexbox': 'flex-stage',
    'grid': 'grid-stage',
    'glassmorphism': 'glass-card-element',
    'shadow': 'shadow-target',
    'radius': 'radius-target',
    'gradient': 'gradient-target',
    'transform': 'transform-target'
  };

  Object.entries(generatorsMap).forEach(([genId, targetId]) => {
    const display = document.getElementById(`${genId}-code-display`);
    if (display) {
      display.addEventListener('input', (e) => {
        const target = document.getElementById(targetId);
        applyCssStringToElement(e.target.value, target);
      });
    }
  });
}


