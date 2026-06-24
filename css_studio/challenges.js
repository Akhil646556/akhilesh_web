const challenges = [
  {
    id: "center-div",
    title: "Centering a Div",
    difficulty: "Easy",
    category: "Layout",
    description: "Center the `.child` element both horizontally and vertically inside the `.parent` element. Try using Flexbox, CSS Grid, or absolute positioning.",
    instructions: [
      "Make the `.parent` a layout container or position it appropriately.",
      "Center the `.child` box perfectly inside.",
      "Ensure the solution is responsive if the parent resizes."
    ],
    starterHtml: `<div class="parent">
  <div class="child">Center Me!</div>
</div>`,
    starterCss: `.parent {
  width: 100%;
  height: 250px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
  /* Write centering CSS here */
}

.child {
  width: 100px;
  height: 60px;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
  /* Write child modifications if needed */
}`,
    validate: (iframe) => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const parent = doc.querySelector('.parent');
      const child = doc.querySelector('.child');
      if (!parent || !child) return { success: false, message: "Missing parent or child element." };

      const pRect = parent.getBoundingClientRect();
      const cRect = child.getBoundingClientRect();

      // Check if child center matches parent center
      const pCenterX = pRect.left + pRect.width / 2;
      const pCenterY = pRect.top + pRect.height / 2;
      const cCenterX = cRect.left + cRect.width / 2;
      const cCenterY = cRect.top + cRect.height / 2;

      const isCenteredX = Math.abs(pCenterX - cCenterX) < 3;
      const isCenteredY = Math.abs(pCenterY - cCenterY) < 3;

      if (isCenteredX && isCenteredY) {
        return { success: true, message: "Perfect! The child element is centered perfectly." };
      } else {
        return { 
          success: false, 
          message: `Not centered yet. Offset from center: X = ${Math.round(pCenterX - cCenterX)}px, Y = ${Math.round(pCenterY - cCenterY)}px` 
        };
      }
    }
  },
  {
    id: "responsive-grid",
    title: "Responsive Card Grid",
    difficulty: "Medium",
    category: "Grid",
    description: "Create a responsive layout of cards. When the screen width changes, the number of columns should automatically adjust without using media queries. Use CSS Grid with `repeat(auto-fit, minmax(...))`.",
    instructions: [
      "Set `.grid-container` display to `grid`.",
      "Use `grid-template-columns` with `repeat(auto-fit, minmax(...))` so cards wrap when columns go below `200px`.",
      "Add a gap of `20px` between elements."
    ],
    starterHtml: `<div class="grid-container">
  <div class="card"><h3>Card 1</h3><p>Interactive content</p></div>
  <div class="card"><h3>Card 2</h3><p>Responsive layout</p></div>
  <div class="card"><h3>Card 3</h3><p>CSS Grid power</p></div>
  <div class="card"><h3>Card 4</h3><p>Auto-wrapping items</p></div>
</div>`,
    starterCss: `.grid-container {
  /* Set grid layout and responsive columns here */
  width: 100%;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  color: white;
  transition: all 0.3s ease;
}

.card h3 {
  color: #00f2fe;
  margin-top: 0;
  margin-bottom: 8px;
}`,
    validate: (iframe) => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const container = doc.querySelector('.grid-container');
      const cards = doc.querySelectorAll('.card');
      if (!container || cards.length < 2) return { success: false, message: "Missing grid container or cards." };

      const compStyle = iframe.contentWindow.getComputedStyle(container);
      const isGrid = compStyle.display === 'grid';
      const gap = compStyle.gap || compStyle.gridGap;

      if (!isGrid) {
        return { success: false, message: "The container display must be set to 'grid'." };
      }

      // Check if columns wrap when container width changes
      // We can inspect the gridTemplateColumns style property
      const gridCols = compStyle.gridTemplateColumns;
      
      // Let's test by checking card positions.
      // Get initial positions
      const cardRects = Array.from(cards).map(c => c.getBoundingClientRect());
      
      // Let's check if the width of cards adapts.
      // If we verify the template columns string: it should have multiple columns or be grid-based wrapping.
      // A standard check: does it have a gap?
      const hasGap = parseFloat(gap) >= 15;
      if (!hasGap) {
        return { success: false, message: "Ensure you have a gap of at least 15px to space the cards." };
      }

      // To verify repeat(auto-fit, minmax(200px, 1fr)):
      // Let's see if gridCols matches a typical grid wrapping setup, or check elements are side-by-side or stacked.
      // We can also parse the CSS rules from style tag!
      const styles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
      const hasAutoFit = styles.includes('auto-fit') || styles.includes('auto-fill');
      const hasMinMax = styles.includes('minmax');

      if (hasAutoFit && hasMinMax) {
        return { success: true, message: "Excellent! You used responsive CSS Grid auto-fit/minmax columns correctly." };
      } else {
        return { success: false, message: "Make sure to use 'repeat(auto-fit, minmax(200px, 1fr))' (or similar min width) inside 'grid-template-columns'." };
      }
    }
  },
  {
    id: "glowing-button",
    title: "Glowing Pulse Animation",
    difficulty: "Medium",
    category: "Animations",
    description: "Design a button that pulses with a glowing aura. On hover, the button should scale up slightly and trigger an infinite pulsing box-shadow animation.",
    instructions: [
      "Apply a transition on `.pulse-btn` for smooth scaling on hover.",
      "On hover, apply `transform: scale(1.05)`.",
      "Create a `@keyframes pulse` that animates `box-shadow` from a tight glow to a wide, faded-out glow.",
      "Assign the pulse animation to the hover state of the button, running infinitely."
    ],
    starterHtml: `<div class="btn-wrapper">
  <button class="pulse-btn">INSPECT MISSION</button>
</div>`,
    starterCss: `.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.pulse-btn {
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
  background: linear-gradient(135deg, #7f00ff, #e100ff);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  /* Add styling and transition here */
}

/* Add hover state and pulse keyframe below */`,
    validate: (iframe) => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const btn = doc.querySelector('.pulse-btn');
      if (!btn) return { success: false, message: "Missing the pulse button." };

      const styles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
      const hasKeyframe = styles.includes('@keyframes') && (styles.includes('box-shadow') || styles.includes('boxShadow'));
      const hasHover = styles.includes(':hover');
      
      if (!hasKeyframe) {
        return { success: false, message: "You need to define a @keyframes animation that animates box-shadow." };
      }
      if (!hasHover) {
        return { success: false, message: "Make sure you trigger the animation and scale transformation on hover (using :hover)." };
      }

      const hasAnimation = styles.includes('animation:') || styles.includes('animation-name');
      if (!hasAnimation) {
        return { success: false, message: "Make sure you assign your keyframe animation to the button (e.g. animation: pulse 2s infinite)." };
      }

      return { success: true, message: "Splendid! The button has a stunning custom hover pulse animation!" };
    }
  },
  {
    id: "glassmorphism-card",
    title: "Frosted Glassmorphism Card",
    difficulty: "Medium",
    category: "Effects",
    description: "Build a premium glassmorphic card. Glassmorphism combines transparency, blur, a fine white border, and shadows to simulate a sheets of frosted glass floating in space.",
    instructions: [
      "Apply a semi-transparent background color (e.g. `rgba(255, 255, 255, 0.05)`).",
      "Apply `backdrop-filter: blur(12px)` to blur elements behind the card.",
      "Add a thin border with some transparency (e.g. `1px solid rgba(255, 255, 255, 0.15)`).",
      "Add a subtle box shadow to give it elevation."
    ],
    starterHtml: `<div class="bg-pattern">
  <div class="glass-card">
    <div class="avatar"></div>
    <h3>Alex Rivers</h3>
    <p>Creative Technologist</p>
    <div class="stats">
      <div><strong>42</strong><span>Projects</span></div>
      <div><strong>1.2k</strong><span>Rank</span></div>
    </div>
  </div>
</div>`,
    starterCss: `.bg-pattern {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 0;
  background: radial-gradient(circle at 20% 30%, #7f00ff 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, #00f2fe 0%, transparent 40%),
              #0f172a;
  border-radius: 12px;
}

.glass-card {
  width: 280px;
  padding: 30px;
  border-radius: 20px;
  color: white;
  text-align: center;
  /* Design the glassmorphism properties here */
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00f2fe, #7f00ff);
  margin: 0 auto 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.glass-card h3 {
  margin: 0 0 5px;
  font-size: 20px;
  font-weight: 600;
}

.glass-card p {
  margin: 0 0 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.stats {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 15px;
}

.stats div {
  display: flex;
  flex-direction: column;
}

.stats strong {
  font-size: 18px;
}

.stats span {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  margin-top: 2px;
}`,
    validate: (iframe) => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const card = doc.querySelector('.glass-card');
      if (!card) return { success: false, message: "Missing glass card element." };

      const style = iframe.contentWindow.getComputedStyle(card);
      
      const backdropFilter = style.backdropFilter || style.webkitBackdropFilter;
      const hasBlur = backdropFilter && backdropFilter.includes('blur');
      
      const bg = style.backgroundColor;
      const isTransparent = bg && (bg.includes('rgba') || bg.includes('hsla') || bg === 'transparent' || bg.match(/rgba?\(.*,\s*[0-9.]+\)/));

      const hasBorder = style.borderWidth !== '0px' && style.borderColor && style.borderColor.includes('rgba');
      const hasShadow = style.boxShadow && style.boxShadow !== 'none';

      if (!hasBlur) {
        return { success: false, message: "Make sure you add 'backdrop-filter: blur(10px)' (or larger) to achieve the frosted look." };
      }
      if (!isTransparent) {
        return { success: false, message: "The background color should be semi-transparent, e.g. rgba(255,255,255,0.05), so behind elements are visible." };
      }
      if (!hasBorder) {
        return { success: false, message: "Add a thin semi-transparent border (like 1px solid rgba(255,255,255,0.15)) to give it a sharp glass edge." };
      }
      if (!hasShadow) {
        return { success: false, message: "Add a box-shadow to lift the card and make it look elevated." };
      }

      return { success: true, message: "Stunning! You've mastered Glassmorphism. The card looks incredibly sleek." };
    }
  },
  {
    id: "custom-tooltip",
    title: "Pure CSS Tooltip",
    difficulty: "Hard",
    category: "Selectors & Effects",
    description: "Create an interactive tooltip that appears above a button when hovered. Achieve this using pure CSS with pseudo-elements (`::after` and `::before`), the `data-tooltip` attribute, and CSS transitions.",
    instructions: [
      "Position `.tooltip-btn` relatively so the pseudo-elements can be absolute to it.",
      "Use `.tooltip-btn::after` to render the tooltip bubble. Set its `content` to `attr(data-tooltip)`.",
      "Use `.tooltip-btn::before` to draw a small triangle arrow pointing downwards.",
      "Position both above the button, centered horizontally.",
      "Hide them by default (e.g. `opacity: 0; visibility: hidden; transform: translateY(10px)`).",
      "On hover, transition them to `opacity: 1; visibility: visible; transform: translateY(0)`."
    ],
    starterHtml: `<div class="container">
  <button class="tooltip-btn" data-tooltip="Success! Mission completed.">HOVER ME</button>
</div>`,
    starterCss: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
}

.tooltip-btn {
  padding: 14px 28px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
  /* Write positioning here */
}

/* Tooltip bubble using ::after */
.tooltip-btn::after {
  /* Configure tooltip style and default hidden state */
}

/* Tooltip arrow using ::before */
.tooltip-btn::before {
  /* Configure triangle arrow style and default hidden state */
}

/* Hover state transitions */`,
    validate: (iframe) => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const btn = doc.querySelector('.tooltip-btn');
      if (!btn) return { success: false, message: "Missing the tooltip button." };

      const styles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
      const hasAfter = styles.includes('::after') || styles.includes(':after');
      const hasBefore = styles.includes('::before') || styles.includes(':before');
      const hasAttr = styles.includes('attr(data-tooltip)');
      const hasHover = styles.includes(':hover');

      if (!hasAfter) {
        return { success: false, message: "You need to style the tooltip bubble using the ::after pseudo-element." };
      }
      if (!hasAttr) {
        return { success: false, message: "Use the content property with attr(data-tooltip) on the bubble to fetch the tooltip text dynamically." };
      }
      if (!hasBefore) {
        return { success: false, message: "Create a neat little arrow pointing down to the button using the ::before pseudo-element." };
      }
      if (!hasHover) {
        return { success: false, message: "Ensure you reveal the tooltip elements when hovering over the button using the :hover selector." };
      }

      return { success: true, message: "Brilliant! You created a clean, interactive tooltip without writing a single line of JavaScript." };
    }
  }
];
