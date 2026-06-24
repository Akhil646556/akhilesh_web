const classroomLessons = [
  {
    id: "basic-selectors",
    chapter: "Ch 1: Selectors & Syntax",
    title: "Basic Selectors (Tag, Class, ID)",
    desc: "<p>CSS selectors are used to targeting HTML elements you want to style. There are three primary types:</p><ul><li><strong>Tag selector:</strong> Styles all elements of a specific tag type (e.g. <code>h1</code> targets all main headings).</li><li><strong>Class selector:</strong> Styles elements with a class attribute. Prefixed with a dot (e.g. <code>.card</code>). Reusable across multiple elements.</li><li><strong>ID selector:</strong> Styles a single unique element. Prefixed with a hash (e.g. <code>#header</code>). Must be unique in the document.</li></ul>",
    teacherTips: [
      "Explain that Class selectors are for reusable components, while ID selectors must only be used once per page.",
      "Explain CSS Syntax structure: Selector { property: value; }",
      "Ask: If an element has both a tag style and a class style, which one wins? (Hint: Specificity!)"
    ],
    playground: {
      html: `<div class="card" id="special-card">
  <h1>Visual Heading</h1>
  <p class="description">This paragraph is styled via a class selector.</p>
  <div class="normal-text">Normal text selector exercise.</div>
</div>`,
      css: `/* Tag Selector: Styles all h1 tags */
h1 {
  color: #00f2fe;
  margin-bottom: 8px;
  font-size: 24px;
}

/* Class Selector: Styles all elements with class 'description' */
.description {
  color: #94a3b8;
  font-size: 14px;
}

/* ID Selector: Styles the unique element with ID 'special-card' */
#special-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}`,
      validation: {
        instructions: [
          "Modify the h1 tag selector to change its color to violet (#7f00ff).",
          "Modify the #special-card ID selector to change its border to a solid blue border: 2px solid #00f2fe."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const h1 = doc.querySelector('h1');
          const card = doc.querySelector('#special-card');
          if (!h1 || !card) return { success: false, message: "Heading or special-card element is missing." };
          
          const h1Style = iframe.contentWindow.getComputedStyle(h1);
          const cardStyle = iframe.contentWindow.getComputedStyle(card);
          
          const isViolet = h1Style.color === 'rgb(127, 0, 255)';
          const hasCyanBorder = cardStyle.borderColor === 'rgb(0, 242, 254)' && parseFloat(cardStyle.borderWidth) >= 1.5;
          
          if (isViolet && hasCyanBorder) {
            return { success: true, message: "Awesome! You have successfully styled the Heading and ID card element!" };
          }
          if (!isViolet) {
            return { success: false, message: "Heading color is not violet (#7f00ff). Please check your selector." };
          }
          return { success: false, message: "Ensure you set a cyan (#00f2fe) border on #special-card." };
        }
      }
    }
  },
  {
    id: "pseudo-classes",
    chapter: "Ch 1: Selectors & Syntax",
    title: "Interactive State Pseudo-classes",
    desc: "<p>Pseudo-classes are keywords added to selectors to specify a special state of the elements. The most popular interactive states are:</p><ul><li><code>:hover</code> - Triggered when the user points to an element (e.g. mouse cursor over a button).</li><li><code>:focus</code> - Triggered when an element gets keyboard focus (e.g. tabbed to or clicked text field).</li><li><code>:active</code> - Triggered when an element is being activated (e.g. during a mouse click).</li></ul>",
    teacherTips: [
      "Explain how pseudo-classes add interactive, micro-animations without using JavaScript.",
      "Show how focus outlines are critical for accessibility (a11y) so screen readers/keyboard users see what is active."
    ],
    playground: {
      html: `<div class="container">
  <button class="interactive-btn">Hover & Click Me</button>
</div>`,
      css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

.interactive-btn {
  padding: 14px 28px;
  background: #7f00ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

/* Style the hover state of the button below */
`,
      validation: {
        instructions: [
          "Add a hover state rule (.interactive-btn:hover).",
          "Inside the hover state, change the background to #e100ff (neon pink).",
          "Inside the hover state, scale the button size up slightly using transform: scale(1.1)."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const styleElement = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
          const hasHoverSelector = styleElement.includes('.interactive-btn:hover') || styleElement.includes('btn:hover');
          
          if (!hasHoverSelector) {
            return { success: false, message: "Make sure to add the .interactive-btn:hover selector." };
          }
          if (!styleElement.includes('#e100ff') && !styleElement.includes('rgb(225, 0, 255)') && !styleElement.includes('pink')) {
            return { success: false, message: "Did you change the hover background color to #e100ff?" };
          }
          if (!styleElement.includes('scale(1.1)')) {
            return { success: false, message: "Make sure to add transform: scale(1.1) to hover state." };
          }
          return { success: true, message: "Fantastic! The button now reacts beautifully when hovered!" };
        }
      }
    }
  },
  {
    id: "box-model-size",
    chapter: "Ch 2: Box Model Fundamentals",
    title: "Understanding Box Dimensions",
    desc: "<p>Every element in HTML is represented as a rectangular box. The CSS Box Model consists of:</p><ul><li><strong>Content:</strong> The text or images inside.</li><li><strong>Padding:</strong> Space inside the element (around the content, inside border).</li><li><strong>Border:</strong> The edge drawing the box outline.</li><li><strong>Margin:</strong> Space outside the element (pushing other elements away).</li></ul>",
    teacherTips: [
      "Explain the layering order: Content -> Padding -> Border -> Margin.",
      "Ask: If we want to add space between two buttons, should we use padding or margin? (Answer: Margin)."
    ],
    playground: {
      html: `<div class="outer-wrapper">
  <div class="box-model-element">Box Model Element</div>
</div>`,
      css: `.outer-wrapper {
  background: rgba(255,255,255,0.02);
  border: 1px dashed rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 8px;
}

.box-model-element {
  background: rgba(0, 242, 254, 0.15);
  border: 2px solid #00f2fe;
  color: white;
  text-align: center;
  font-weight: 600;
  /* Configure padding and margin below */
  
}`,
      validation: {
        instructions: [
          "Add padding of 25px to create breathing room inside the box element.",
          "Add margin of 30px to push the box away from the outer wrapper edges."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const box = doc.querySelector('.box-model-element');
          if (!box) return { success: false, message: "Box element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(box);
          const hasPadding = style.paddingTop === '25px';
          const hasMargin = style.marginTop === '30px';
          
          if (hasPadding && hasMargin) {
            return { success: true, message: "Great! You understand padding (internal space) and margin (external space)." };
          }
          if (!hasPadding) return { success: false, message: "Check that you set padding to exactly 25px." };
          return { success: false, message: "Check that you set margin to exactly 30px." };
        }
      }
    }
  },
  {
    id: "box-sizing",
    chapter: "Ch 2: Box Model Fundamentals",
    title: "Box Sizing: content-box vs border-box",
    desc: "<p>The <code>box-sizing</code> property defines how the total width and height of an element are calculated.</p><ul><li><code>content-box</code> (Default): Padding and border are added <strong>on top of</strong> the width/height. (Total size = width + padding + border).</li><li><code>border-box</code>: Padding and border are included <strong>within</strong> the width/height. Width includes padding and borders. Makes responsive layout sizing much easier!</li></ul>",
    teacherTips: [
      "Draw two boxes on the board: both width 100px, but one has content-box and 20px padding (total width 140px), and the other has border-box (total width 100px).",
      "Mention that most modern web designers reset all elements to 'box-sizing: border-box' using the global selector '*'."
    ],
    playground: {
      html: `<div class="container">
  <div class="card card-content">content-box (Width: 160px + 20px pad + 5px bord)</div>
  <div class="card card-border">border-box (Width: 160px total)</div>
</div>`,
      css: `.container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 160px;
  height: 120px;
  padding: 20px;
  border: 5px solid #7f00ff;
  background: rgba(255, 255, 255, 0.04);
  color: white;
  font-size: 11px;
  text-align: center;
}

.card-content {
  box-sizing: content-box;
}

.card-border {
  /* Change the box-sizing to border-box below */
  
}`,
      validation: {
        instructions: [
          "Add box-sizing: border-box; to the .card-border class so that padding and borders are accounted inside the 160px width."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const card = doc.querySelector('.card-border');
          if (!card) return { success: false, message: "card-border element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(card);
          if (style.boxSizing === 'border-box') {
            return { success: true, message: "Perfect! Notice how the border-box element fits its 160px width limits correctly." };
          }
          return { success: false, message: "Check that you set box-sizing: border-box; on .card-border." };
        }
      }
    }
  },
  {
    id: "typography-text",
    chapter: "Ch 3: Text & Typography",
    title: "Typography Styles & Alignment",
    desc: "<p>CSS offers a robust set of styling options to make text legible and visually striking:</p><ul><li><code>font-size</code>: Adjusts size (e.g. <code>24px</code>, <code>1.5rem</code>).</li><li><code>font-weight</code>: Changes thickness (e.g. <code>bold</code>, <code>300</code>, <code>600</code>).</li><li><code>text-transform</code>: Handles capitalization (e.g. <code>uppercase</code>, <code>capitalize</code>).</li><li><code>text-align</code>: Aligns inline blocks (e.g. <code>left</code>, <code>center</code>, <code>right</code>).</li></ul>",
    teacherTips: [
      "Explain the rem/em sizing units compared to absolute pixels (px).",
      "Mention standard design weights: 300 (Light), 400 (Regular), 600/700 (Bold)."
    ],
    playground: {
      html: `<div class="wrapper">
  <p class="headline">interactive learning platform</p>
  <p class="subtitle">CSS allows you to control font families, size, formatting rules, alignment, and spacings easily.</p>
</div>`,
      css: `.wrapper {
  background: rgba(255,255,255,0.02);
  padding: 24px;
  border-radius: 12px;
}

.headline {
  color: #00f2fe;
  margin-bottom: 12px;
  /* Format this headline below */
  
}

.subtitle {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.6;
}`,
      validation: {
        instructions: [
          "Set the .headline font-size to 28px.",
          "Set the .headline font-weight to 800.",
          "Set the .headline text-transform to uppercase.",
          "Set the .headline text-align to center."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const hl = doc.querySelector('.headline');
          if (!hl) return { success: false, message: "Headline element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(hl);
          const hasSize = style.fontSize === '28px';
          const hasWeight = style.fontWeight === '800' || style.fontWeight === 'bold';
          const hasTransform = style.textTransform === 'uppercase';
          const hasAlign = style.textAlign === 'center';
          
          if (hasSize && hasWeight && hasTransform && hasAlign) {
            return { success: true, message: "Splendid! The headline is styled according to the requirements." };
          }
          if (!hasSize) return { success: false, message: "Please check your font-size value (expected 28px)." };
          if (!hasWeight) return { success: false, message: "Please check your font-weight value (expected 800)." };
          if (!hasTransform) return { success: false, message: "Please check your text-transform value (expected uppercase)." };
          return { success: false, message: "Please check your text-align value (expected center)." };
        }
      }
    }
  },
  {
    id: "gradients",
    chapter: "Ch 4: Visual Polish",
    title: "Linear & Radial Gradients",
    desc: "<p>Gradients allow you to render smooth transitions between multiple colors. Instead of standard flat backgrounds, you can use the <code>background</code> or <code>background-image</code> declaration.</p><ul><li><code>linear-gradient(direction, color1, color2, ...)</code> - Fades colors in a straight line (angles like 45deg or directions like 'to right').</li><li><code>radial-gradient(shape, color1, color2, ...)</code> - Fades colors in circular rings radiating from a central point.</li></ul>",
    teacherTips: [
      "Demonstrate how linear gradients are drawn relative to a dial (e.g. 90deg, 135deg).",
      "Mention that gradients require the background-image or background declaration, not background-color."
    ],
    playground: {
      html: `<div class="gradient-box">
  <h3>Interactive Gradient</h3>
</div>`,
      css: `.gradient-box {
  width: 100%;
  height: 180px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  /* Apply a linear-gradient from cyan (#00f2fe) to violet (#7f00ff) below */
  
}`,
      validation: {
        instructions: [
          "Apply a linear-gradient background from #00f2fe (cyan) to #7f00ff (violet) on .gradient-box."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const box = doc.querySelector('.gradient-box');
          if (!box) return { success: false, message: "gradient-box element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(box);
          const bg = style.backgroundImage;
          
          const includesCyan = bg.includes('0, 242, 254') || bg.includes('#00f2fe') || bg.includes('rgb(0, 242, 254)');
          const includesViolet = bg.includes('127, 0, 255') || bg.includes('#7f00ff') || bg.includes('rgb(127, 0, 255)');
          const isGradient = bg.includes('linear-gradient');
          
          if (isGradient && includesCyan && includesViolet) {
            return { success: true, message: "Perfect gradient background! The visual outcome is premium!" };
          }
          return { success: false, message: "Please apply a linear gradient containing #00f2fe and #7f00ff." };
        }
      }
    }
  },
  {
    id: "display-flow",
    chapter: "Ch 5: Layout & Flow",
    title: "Display: Block, Inline & Inline-Block",
    desc: "<p>The <code>display</code> property dictates the layout behavior of elements:</p><ul><li><code>block</code>: Takes up full width. Starts on a new line (e.g. <code>div</code>, <code>p</code>, <code>h1</code>).</li><li><code>inline</code>: Takes up only needed width. Cannot have width/height or top/bottom margins (e.g. <code>span</code>, <code>a</code>, <code>strong</code>).</li><li><code>inline-block</code>: Behaves like inline text but permits setting custom widths, heights, padding, and margins.</li></ul>",
    teacherTips: [
      "Show how span elements ignore width settings by default.",
      "Ask: How do we center an inline-block element? (Answer: text-align: center on its parent block element)."
    ],
    playground: {
      html: `<div class="container">
  <span class="inline-box">Item A</span>
  <span class="inline-box">Item B</span>
</div>`,
      css: `.container {
  background: rgba(255,255,255,0.02);
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}

.inline-box {
  background: #fbbf24;
  color: #0f172a;
  font-weight: 700;
  padding: 10px;
  /* Configure width & display below to make elements respect dimensions */
  width: 100px;
  
}`,
      validation: {
        instructions: [
          "Convert the .inline-box display state to inline-block.",
          "Add padding of 15px inside .inline-box."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const box = doc.querySelector('.inline-box');
          if (!box) return { success: false, message: "Box element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(box);
          const isInlineBlock = style.display === 'inline-block';
          const hasPadding = style.paddingTop === '15px';
          
          if (isInlineBlock && hasPadding) {
            return { success: true, message: "Great! Changing to inline-block now honors the custom width and padding height." };
          }
          if (!isInlineBlock) return { success: false, message: "Ensure you set display to inline-block." };
          return { success: false, message: "Ensure padding is set to 15px." };
        }
      }
    }
  },
  {
    id: "positioning-abs",
    chapter: "Ch 5: Layout & Flow",
    title: "Absolute vs Relative Positioning",
    desc: "<p>The <code>position</code> property manages custom offsets:</p><ul><li><code>relative</code>: Elements stay in normal document flow. Offset relative to its original self.</li><li><code>absolute</code>: Element is removed from layout flow. Offset coordinates align relative to its <strong>closest positioned ancestor</strong> (usually a relative parent).</li></ul>",
    teacherTips: [
      "Draw a boundary box (relative container) and an inner box (absolute). Show how setting top/right pins it relative to that box.",
      "Warning: If the parent is not set to relative (or absolute/fixed), the absolute child aligns relative to the viewport body!"
    ],
    playground: {
      html: `<div class="post-card">
  <span class="hot-badge">POPULAR</span>
  <h3>Visual card title</h3>
  <p>Learn CSS positioning like absolute and relative.</p>
</div>`,
      css: `.post-card {
  width: 250px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  border-radius: 12px;
  color: white;
  margin: 20px auto;
  /* 1. Make this card a positioning anchor context */
  
}

.hot-badge {
  background: #fbbf24;
  color: #0f172a;
  font-weight: 700;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  /* 2. Position the badge absolutely in top right corner */
  
}`,
      validation: {
        instructions: [
          "Set the .post-card position to relative.",
          "Set the .hot-badge position to absolute.",
          "Pin the .hot-badge to top: 12px and right: 12px."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const card = doc.querySelector('.post-card');
          const badge = doc.querySelector('.hot-badge');
          if (!card || !badge) return { success: false, message: "Card or badge element is missing." };
          
          const cardStyle = iframe.contentWindow.getComputedStyle(card);
          const badgeStyle = iframe.contentWindow.getComputedStyle(badge);
          
          const cardRel = cardStyle.position === 'relative';
          const badgeAbs = badgeStyle.position === 'absolute';
          const badgeTop = badgeStyle.top === '12px';
          const badgeRight = badgeStyle.right === '12px';
          
          if (cardRel && badgeAbs && badgeTop && badgeRight) {
            return { success: true, message: "Splendid! The popular badge is pinned absolutely to the top-right corner of the relative card!" };
          }
          if (!cardRel) return { success: false, message: "Ensure you set the .post-card position to relative." };
          if (!badgeAbs) return { success: false, message: "Ensure you set the .hot-badge position to absolute." };
          return { success: false, message: "Verify you placed the badge at top: 12px and right: 12px." };
        }
      }
    }
  },
  {
    id: "flexbox-direction",
    chapter: "Ch 6: Flexbox Masterclass",
    title: "Flexbox Layout and Alignment",
    desc: "<p>Flexbox is a 1-dimensional layout model for arranging items in columns or rows. Critical parent properties:</p><ul><li><code>display: flex</code> - Turns the container into a flex container.</li><li><code>justify-content</code> - Align items along the main-axis (e.g. <code>center</code>, <code>space-between</code>, <code>space-evenly</code>).</li><li><code>align-items</code> - Align items along the cross-axis (e.g. <code>center</code>, <code>stretch</code>).</li></ul>",
    teacherTips: [
      "Explain the concept of Main-Axis (default horizontal) and Cross-Axis (default vertical).",
      "Explain how flexbox solves vertical centering, which was historically very difficult in CSS."
    ],
    playground: {
      html: `<div class="navbar">
  <div class="nav-logo">⚡ LOGO</div>
  <div class="nav-links">
    <span>Home</span>
    <span>Syllabus</span>
  </div>
</div>`,
      css: `.navbar {
  width: 100%;
  height: 60px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 0 20px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  /* 1. Make this navbar element a flex container */
  
}

.nav-links {
  /* 2. Style links container as a flex with 15px gap */
  display: flex;
  gap: 15px;
}`,
      validation: {
        instructions: [
          "Turn .navbar display into flex.",
          "Set .navbar justify-content to space-between (pushes logo and links to opposite sides).",
          "Set .navbar align-items to center (vertical alignment)."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const navbar = doc.querySelector('.navbar');
          if (!navbar) return { success: false, message: "Navbar element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(navbar);
          const isFlex = style.display === 'flex';
          const isJustified = style.justifyContent === 'space-between';
          const isAligned = style.alignItems === 'center';
          
          if (isFlex && isJustified && isAligned) {
            return { success: true, message: "Spot on! The navbar components are arranged and centered horizontally/vertically." };
          }
          if (!isFlex) return { success: false, message: "Did you set display: flex; on the navbar?" };
          if (!isJustified) return { success: false, message: "Did you set justify-content: space-between;?" };
          return { success: false, message: "Did you set align-items: center;?" };
        }
      }
    }
  },
  {
    id: "grid-basics",
    chapter: "Ch 7: Grid Architecture",
    title: "CSS Grid Layout Columns & Gap",
    desc: "<p>CSS Grid is a 2-dimensional grid-based layout model designed for columns and rows. Common properties:</p><ul><li><code>display: grid</code> - Turns container into grid container.</li><li><code>grid-template-columns</code> - Sets column tracks. Using fraction unit (<code>fr</code>) is common (e.g. <code>1fr 1fr</code>).</li><li><code>gap</code> - Space between rows and columns.</li></ul>",
    teacherTips: [
      "Explain the fraction unit (fr) - it represents a proportional fraction of the available space.",
      "Show how grid is perfect for structural page-level layouts, whereas flexbox is great for linear elements like menus/buttons."
    ],
    playground: {
      html: `<div class="grid-layout">
  <div class="grid-card">Grid Card 1</div>
  <div class="grid-card">Grid Card 2</div>
  <div class="grid-card">Grid Card 3</div>
</div>`,
      css: `.grid-layout {
  width: 100%;
  /* Define CSS Grid layout here */
  
}

.grid-card {
  background: linear-gradient(135deg, #7f00ff, #e100ff);
  color: white;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
}`,
      validation: {
        instructions: [
          "Set the display of .grid-layout to grid.",
          "Use grid-template-columns to define 3 equal columns: repeat(3, 1fr) or 1fr 1fr 1fr.",
          "Add a gap of 16px between the grid cards."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const container = doc.querySelector('.grid-layout');
          if (!container) return { success: false, message: "Grid container is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(container);
          const isGrid = style.display === 'grid';
          const colsCount = style.gridTemplateColumns.split(' ').length;
          const gap = parseFloat(style.gap) || parseFloat(style.gridGap);
          
          if (isGrid && colsCount === 3 && gap >= 15) {
            return { success: true, message: "Perfect! You successfully configured a 3-column responsive grid!" };
          }
          if (!isGrid) return { success: false, message: "Did you set display to grid?" };
          if (colsCount !== 3) return { success: false, message: "Verify that grid-template-columns has 3 columns." };
          return { success: false, message: "Check that gap size is set to 16px." };
        }
      }
    }
  },
  {
    id: "transitions-hover",
    chapter: "Ch 8: Dynamic Motion",
    title: "Smooth Transitions",
    desc: "<p>The <code>transition</code> property allows you to change property values smoothly (from one value to another), over a given duration. The property combines:</p><ul><li><code>transition-property</code>: The style to animate (e.g. <code>background-color</code>).</li><li><code>transition-duration</code>: Time length (e.g. <code>0.3s</code>, <code>500ms</code>).</li><li><code>transition-timing-function</code>: Easing curve (e.g. <code>ease-in-out</code>).</li></ul>",
    teacherTips: [
      "Show how jarred and abrupt styles look without transition, and how premium they look with a subtle 300ms transition.",
      "Warn: Do not use too long transitions (like > 1s) for buttons, as it makes pages feel sluggish."
    ],
    playground: {
      html: `<div class="container">
  <div class="hover-box">Hover Me</div>
</div>`,
      css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

.hover-box {
  width: 120px;
  height: 120px;
  background: #10b981;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  /* Add transitions here for smooth animations */
  
}

.hover-box:hover {
  background: #00f2fe;
  transform: scale(1.1) rotate(5deg);
}`,
      validation: {
        instructions: [
          "Add transition: all 0.3s ease; (or target transform and background) to the base state .hover-box selector.",
          "Verify the button zooms and changes color smoothly when hovered."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const box = doc.querySelector('.hover-box');
          if (!box) return { success: false, message: "Hover box element is missing." };
          
          const style = iframe.contentWindow.getComputedStyle(box);
          const hasTransition = style.transitionProperty === 'all' || style.transitionDuration !== '0s';
          
          if (hasTransition) {
            return { success: true, message: "Excellent! The transition timing creates an elegant scaling and color sweep!" };
          }
          return { success: false, message: "Verify that transition properties are added onto .hover-box." };
        }
      }
    }
  },
  {
    id: "keyframes-pulse",
    chapter: "Ch 9: Keyframe Animations",
    title: "Creating Keyframe Animations",
    desc: "<p>CSS animations let an element gradually change from one style to another. You can change as many CSS properties you want, as many times as you want.</p><ul><li><code>@keyframes name</code> - Define the styling milestones (0% to 100% or 'from' to 'to').</li><li><code>animation</code> - Assigns keyframes to elements and configures length and loops (e.g. <code>spin 2s linear infinite</code>).</li></ul>",
    teacherTips: [
      "Compare Transitions (starts on click/hover state changes) to Animations (runs automatically, can loop infinitely).",
      "Demonstrate standard spinning, pulsing, and bouncing keyframes."
    ],
    playground: {
      html: `<div class="container">
  <div class="spinner"></div>
</div>`,
      css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255,255,255,0.1);
  border-top: 5px solid #00f2fe;
  border-radius: 50%;
  /* Assign animation below (spin 1.5s linear infinite) */
  
}

/* Define the @keyframes spin animation below */
`,
      validation: {
        instructions: [
          "Define keyframe animation named 'spin' that rotates from transform: rotate(0deg) to transform: rotate(360deg).",
          "Apply the animation to the .spinner selector: animation: spin 1s linear infinite;"
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const styles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
          const hasKeyframe = styles.includes('@keyframes spin') && styles.includes('rotate(360deg)');
          const hasAnimation = styles.includes('animation:') || styles.includes('animation-name:');
          
          if (hasKeyframe && hasAnimation) {
            return { success: true, message: "Brilliant! You've successfully designed a custom loading spinner!" };
          }
          if (!hasKeyframe) return { success: false, message: "Ensure you define @keyframes spin { 100% { transform: rotate(360deg); } }." };
          return { success: false, message: "Ensure you assign the animation properties inside the .spinner selector." };
        }
      }
    }
  },
  {
    id: "media-queries",
    chapter: "Ch 10: Responsive Web Design",
    title: "Media Queries & Adaptability",
    desc: "<p>Media queries are a key component of responsive design, allowing you to apply CSS rules only when the browser matching specific conditions (like viewport screen width):</p><ul><li><code>@media (max-width: 600px)</code> - Applies CSS only for screens smaller than or equal to 600px.</li><li>Used to change font sizing, display, and layout grids for mobile users.</li></ul>",
    teacherTips: [
      "Show how mobile views require single columns, larger touch targets, and smaller margins.",
      "Show how to test responsive designs using the browser's developer inspect mobile viewport mode."
    ],
    playground: {
      html: `<div class="responsive-card">
  <h3>Layout Box</h3>
  <p>Resize screen to witness styling updates.</p>
</div>`,
      css: `.responsive-card {
  width: 100%;
  padding: 30px;
  background: #7f00ff; /* Desktop purple theme */
  border-radius: 12px;
  color: white;
  text-align: center;
  transition: background-color 0.4s ease;
}

/* Add media query for mobile screens (max-width: 600px) below */
/* Inside the media query, change .responsive-card background to #fbbf24 (amber) */
`,
      validation: {
        instructions: [
          "Create a media query: @media (max-width: 600px) { ... }.",
          "Inside it, target .responsive-card and change its background to #fbbf24."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const styles = Array.from(doc.querySelectorAll('style')).map(s => s.textContent).join('\n');
          const hasMediaQuery = styles.includes('@media') && styles.includes('600px');
          const hasAmberValue = styles.includes('#fbbf24') || styles.includes('rgb(251, 191, 36)');
          
          if (!hasMediaQuery) {
            return { success: false, message: "Please declare the @media (max-width: 600px) query block." };
          }
          if (!hasAmberValue) {
            return { success: false, message: "Make sure you style the background of .responsive-card to #fbbf24 inside the query." };
          }
          return { success: true, message: "Excellent! The card adapts its theme to yellow whenever the width shrinks!" };
        }
      }
    }
  },
  {
    id: "css-variables",
    chapter: "Ch 11: Modern Layout Features",
    title: "CSS Variables (Custom Properties)",
    desc: "<p>CSS variables allow you to store values (like colors or sizing) in a reusable name prefix, then access them anywhere. This helps maintain consistency across large sites.</p><ul><li>Define them in a selector (typically <code>:root</code> to be global): <code>--main-color: #00f2fe;</code>.</li><li>Access using: <code>color: var(--main-color);</code>.</li></ul>",
    teacherTips: [
      "Show how changing one variable value in :root updates colors across the entire website instantly.",
      "Variables are extremely helpful for creating Dark Mode / Light Mode toggles."
    ],
    playground: {
      html: `<div class="theme-card">
  <h4>Visual Theme System</h4>
  <button class="theme-btn">Click Action</button>
</div>`,
      css: `:root {
  /* 1. Define your custom property --brand-color below */
  --brand-color: #ec4899;
}

.theme-card {
  border: 2px solid var(--brand-color);
  padding: 24px;
  border-radius: 12px;
  color: white;
  text-align: center;
}

.theme-btn {
  /* 2. Style button background with brand variable color */
  background: #111;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  margin-top: 12px;
  cursor: pointer;
}`,
      validation: {
        instructions: [
          "Change the --brand-color value inside :root to #e100ff (neon pink).",
          "Apply the CSS variable to the background property of the .theme-btn class using var(--brand-color)."
        ],
        validate: (iframe) => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const btn = doc.querySelector('.theme-btn');
          const rootStyle = iframe.contentWindow.getComputedStyle(doc.documentElement);
          const btnStyle = iframe.contentWindow.getComputedStyle(btn);
          
          const brandVar = rootStyle.getPropertyValue('--brand-color').trim();
          const btnBg = btnStyle.backgroundColor;
          
          const isPinkVar = brandVar === '#e100ff' || brandVar.toLowerCase() === 'rgb(225, 0, 255)';
          const isBtnPink = btnBg === 'rgb(225, 0, 255)';
          
          if (isPinkVar && isBtnPink) {
            return { success: true, message: "Superb! You set the custom variable and used the var() function correctly!" };
          }
          if (!isPinkVar) return { success: false, message: "Check that --brand-color in :root is set to #e100ff." };
          return { success: false, message: "Ensure the .theme-btn background is styled using var(--brand-color)." };
        }
      }
    }
  }
];
