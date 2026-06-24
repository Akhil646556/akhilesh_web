// Comprehensive A-Z CSS Properties Database for CSS Reference
const cssPropertiesData = [
  {
    category: "Box Model",
    properties: [
      {
        name: "width",
        desc: "Sets the horizontal width of an element. It controls how wide the box layout is.",
        defaultValue: "200px",
        controls: [
          { type: "range", id: "width-range", label: "Width", min: 50, max: 400, unit: "px", value: 200 }
        ],
        targetStyle: (vals) => `width: ${vals['width-range']}px;`,
        previewHtml: `<div class="target-box box-model-target">Box</div>`
      },
      {
        name: "height",
        desc: "Sets the vertical height of an element. It controls how tall the box layout is.",
        defaultValue: "120px",
        controls: [
          { type: "range", id: "height-range", label: "Height", min: 40, max: 300, unit: "px", value: 120 }
        ],
        targetStyle: (vals) => `height: ${vals['height-range']}px;`,
        previewHtml: `<div class="target-box box-model-target">Box</div>`
      },
      {
        name: "padding",
        desc: "Creates space inside the element, between the content and its border. It pads the contents of the box.",
        defaultValue: "20px",
        controls: [
          { type: "range", id: "padding-range", label: "Padding size", min: 0, max: 80, unit: "px", value: 20 }
        ],
        targetStyle: (vals) => `padding: ${vals['padding-range']}px;`,
        previewHtml: `<div class="target-box padding-target" style="border: 2px dashed #00f2fe; background: rgba(0, 242, 254, 0.05);"><span style="background: rgba(255,255,255,0.1); padding: 4px; border-radius:4px;">Inner Content</span></div>`
      },
      {
        name: "padding (individual)",
        desc: "Sets padding values independently for Top, Right, Bottom, and Left directions.",
        defaultValue: "10px 20px 30px 40px",
        controls: [
          { type: "range", id: "pad-top", label: "Padding Top", min: 0, max: 60, unit: "px", value: 10 },
          { type: "range", id: "pad-right", label: "Padding Right", min: 0, max: 60, unit: "px", value: 30 },
          { type: "range", id: "pad-bottom", label: "Padding Bottom", min: 0, max: 60, unit: "px", value: 10 },
          { type: "range", id: "pad-left", label: "Padding Left", min: 0, max: 60, unit: "px", value: 30 }
        ],
        targetStyle: (vals) => `padding: ${vals['pad-top']}px ${vals['pad-right']}px ${vals['pad-bottom']}px ${vals['pad-left']}px;`,
        previewHtml: `<div class="target-box padding-target" style="border: 2px dashed #00f2fe; background: rgba(0, 242, 254, 0.05);"><span style="background: rgba(255,255,255,0.1); padding: 4px; border-radius:4px;">Text</span></div>`
      },
      {
        name: "margin",
        desc: "Creates space around the element, outside its border. It pushes neighboring elements away.",
        defaultValue: "20px",
        controls: [
          { type: "range", id: "margin-range", label: "Margin size", min: 0, max: 60, unit: "px", value: 20 }
        ],
        targetStyle: (vals) => `margin: ${vals['margin-range']}px;`,
        previewHtml: `<div style="border: 1px dashed rgba(255,255,255,0.2); padding: 10px; display:inline-block; background:rgba(255,255,255,0.02); border-radius:8px;">
  <div class="target-box margin-target" style="border-color: #7f00ff;">Margin Box</div>
</div>`
      },
      {
        name: "margin (individual)",
        desc: "Sets margin offsets independently for Top, Right, Bottom, and Left directions.",
        defaultValue: "10px 20px 30px 40px",
        controls: [
          { type: "range", id: "mar-top", label: "Margin Top", min: 0, max: 50, unit: "px", value: 10 },
          { type: "range", id: "mar-right", label: "Margin Right", min: 0, max: 50, unit: "px", value: 30 },
          { type: "range", id: "mar-bottom", label: "Margin Bottom", min: 0, max: 50, unit: "px", value: 10 },
          { type: "range", id: "mar-left", label: "Margin Left", min: 0, max: 50, unit: "px", value: 30 }
        ],
        targetStyle: (vals) => `margin: ${vals['mar-top']}px ${vals['mar-right']}px ${vals['mar-bottom']}px ${vals['mar-left']}px;`,
        previewHtml: `<div style="border: 1px dashed rgba(255,255,255,0.15); display:inline-block; padding: 10px; border-radius:8px;">
  <div class="target-box margin-target" style="border-color: #7f00ff;">Custom Margin</div>
</div>`
      },
      {
        name: "min-width / max-width",
        desc: "Sets constraints on the width of an element. min-width prevents it from shrinking smaller; max-width limits how wide it can expand.",
        defaultValue: "max-width: 250px",
        controls: [
          { type: "range", id: "max-w-val", label: "Max Width", min: 100, max: 400, unit: "px", value: 220 }
        ],
        targetStyle: (vals) => `width: 100%; max-width: ${vals['max-w-val']}px; min-height: 80px;`,
        previewHtml: `<div class="target-box box-model-target">Resizable Container</div>`
      },
      {
        name: "min-height / max-height",
        desc: "Sets vertical height constraints. min-height provides a baseline height, while max-height puts a ceiling on vertical growth.",
        defaultValue: "min-height: 120px",
        controls: [
          { type: "range", id: "min-h-val", label: "Min Height", min: 50, max: 250, unit: "px", value: 120 }
        ],
        targetStyle: (vals) => `min-height: ${vals['min-h-val']}px; width: 180px;`,
        previewHtml: `<div class="target-box box-model-target">Min Height Box</div>`
      },
      {
        name: "box-sizing",
        desc: "Defines how the width and height of an element are calculated. 'border-box' includes padding and border in the width/height. 'content-box' adds padding and borders on top of the width/height.",
        defaultValue: "border-box",
        controls: [
          { type: "select", id: "box-sizing-val", label: "Box Sizing Mode", options: ["border-box", "content-box"], value: "border-box" }
        ],
        targetStyle: (vals) => `box-sizing: ${vals['box-sizing-val']}; width: 160px; padding: 25px; border: 8px solid #00f2fe;`,
        previewHtml: `<div class="target-box box-sizing-target" style="height: 120px;">box-sizing</div>`
      },
      {
        name: "outline",
        desc: "Draws a line around elements outside the border edge. Unlike border, outlines do not take up space in the layout flow.",
        defaultValue: "3px dashed #e100ff",
        controls: [
          { type: "select", id: "out-style", label: "Outline Style", options: ["solid", "dashed", "dotted", "double", "none"], value: "dashed" },
          { type: "range", id: "out-width", label: "Outline Width", min: 1, max: 10, unit: "px", value: 3 },
          { type: "color", id: "out-color", label: "Outline Color", value: "#e100ff" },
          { type: "range", id: "out-offset", label: "Outline Offset", min: 0, max: 20, unit: "px", value: 5 }
        ],
        targetStyle: (vals) => `outline: ${vals['out-width']}px ${vals['out-style']} ${vals['out-color']}; outline-offset: ${vals['out-offset']}px; width: 130px; height: 100px;`,
        previewHtml: `<div class="target-box box-model-target">Outline Card</div>`
      }
    ]
  },
  {
    category: "Typography",
    properties: [
      {
        name: "color",
        desc: "Sets the color of the text inside the element.",
        defaultValue: "#00f2fe",
        controls: [
          { type: "color", id: "text-color", label: "Text Color", value: "#00f2fe" }
        ],
        targetStyle: (vals) => `color: ${vals['text-color']};`,
        previewHtml: `<div style="font-size: 24px; font-weight: bold;" class="typo-target">Visual Text Preview</div>`
      },
      {
        name: "font-size",
        desc: "Sets the size of the text. It makes typography larger or smaller.",
        defaultValue: "24px",
        controls: [
          { type: "range", id: "font-size-val", label: "Font Size", min: 12, max: 72, unit: "px", value: 24 }
        ],
        targetStyle: (vals) => `font-size: ${vals['font-size-val']}px;`,
        previewHtml: `<div class="typo-target" style="font-weight: 500;">Resize this text stream</div>`
      },
      {
        name: "font-weight",
        desc: "Sets how thick or thin characters in the text are (boldness).",
        defaultValue: "600",
        controls: [
          { type: "select", id: "font-weight-val", label: "Font Weight", options: ["100", "300", "400", "500", "600", "700", "900"], value: "600" }
        ],
        targetStyle: (vals) => `font-weight: ${vals['font-weight-val']};`,
        previewHtml: `<div class="typo-target" style="font-size: 28px;">Boldness Level</div>`
      },
      {
        name: "font-family",
        desc: "Specifies the font face of the element. You can list multiple fallback fonts.",
        defaultValue: "sans-serif",
        controls: [
          { type: "select", id: "font-fam-val", label: "Font Family", options: ["'Outfit', sans-serif", "'JetBrains Mono', monospace", "Georgia, serif", "Impact, Charcoal, sans-serif"], value: "'Outfit', sans-serif" }
        ],
        targetStyle: (vals) => `font-family: ${vals['font-fam-val']}; font-size: 24px; font-weight: 600;`,
        previewHtml: `<div class="typo-target">Font Family Styles</div>`
      },
      {
        name: "font-style",
        desc: "Applies styles like italics or oblique formats to typography text.",
        defaultValue: "italic",
        controls: [
          { type: "select", id: "font-style-val", label: "Font Style", options: ["normal", "italic", "oblique"], value: "italic" }
        ],
        targetStyle: (vals) => `font-style: ${vals['font-style-val']}; font-size: 24px; font-weight: 600;`,
        previewHtml: `<div class="typo-target">Italicizing Fonts</div>`
      },
      {
        name: "line-height",
        desc: "Sets the amount of space above and below lines of text. It regulates vertical text spacing.",
        defaultValue: "1.5",
        controls: [
          { type: "range", id: "line-height-val", label: "Line Height multiplier", min: 1, max: 3, step: 0.1, unit: "", value: 1.5 }
        ],
        targetStyle: (vals) => `line-height: ${vals['line-height-val']};`,
        previewHtml: `<div class="typo-target" style="font-size: 13.5px; width: 300px; text-align: left;">Line height determines the distance between lines of print. Larger line height gives paragraphs more breathing room. Smaller line height fits more text in tight boxes.</div>`
      },
      {
        name: "text-align",
        desc: "Sets the horizontal alignment of text inside its block container.",
        defaultValue: "center",
        controls: [
          { type: "select", id: "text-align-val", label: "Alignment", options: ["left", "center", "right", "justify"], value: "center" }
        ],
        targetStyle: (vals) => `text-align: ${vals['text-align-val']}; width: 100%;`,
        previewHtml: `<div class="typo-target" style="font-size:14px; line-height:1.5; padding: 10px; background:rgba(255,255,255,0.02); border-radius:6px;">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. CSS simplifies web design.</div>`
      },
      {
        name: "text-transform",
        desc: "Controls capitalization of text. It can force uppercase, lowercase, or capitalize starting letters.",
        defaultValue: "uppercase",
        controls: [
          { type: "select", id: "text-transform-val", label: "Transform", options: ["none", "uppercase", "lowercase", "capitalize"], value: "uppercase" }
        ],
        targetStyle: (vals) => `text-transform: ${vals['text-transform-val']};`,
        previewHtml: `<div class="typo-target" style="font-size: 20px; font-weight:600;">make text change casing</div>`
      },
      {
        name: "text-decoration",
        desc: "Adds text line accents like underlines, overlines, line-through strikeout, and line styles.",
        defaultValue: "underline solid #00f2fe",
        controls: [
          { type: "select", id: "decor-line", label: "Line Position", options: ["none", "underline", "overline", "line-through"], value: "underline" },
          { type: "select", id: "decor-style", label: "Line Style", options: ["solid", "double", "dotted", "dashed", "wavy"], value: "solid" },
          { type: "color", id: "decor-color", label: "Line Color", value: "#00f2fe" }
        ],
        targetStyle: (vals) => `text-decoration: ${vals['decor-line']} ${vals['decor-style']} ${vals['decor-color']}; font-size: 24px; font-weight: 600;`,
        previewHtml: `<div class="typo-target">Decorated Typography</div>`
      },
      {
        name: "letter-spacing",
        desc: "Sets spacing behavior between letters. It loosens or tightens character trackings.",
        defaultValue: "2px",
        controls: [
          { type: "range", id: "letter-spacing-val", label: "Letter Spacing", min: -2, max: 20, unit: "px", value: 2 }
        ],
        targetStyle: (vals) => `letter-spacing: ${vals['letter-spacing-val']}px;`,
        previewHtml: `<div class="typo-target" style="font-size: 22px; font-weight:bold;">TRACKING SPACER</div>`
      },
      {
        name: "word-spacing",
        desc: "Sets spacing spacing gap size between complete words in a sentence.",
        defaultValue: "8px",
        controls: [
          { type: "range", id: "word-spacing-val", label: "Word Spacing", min: 0, max: 30, unit: "px", value: 8 }
        ],
        targetStyle: (vals) => `word-spacing: ${vals['word-spacing-val']}px;`,
        previewHtml: `<div class="typo-target" style="font-size: 16px; font-weight:500;">This text shows custom word gaps.</div>`
      },
      {
        name: "white-space",
        desc: "Controls how white-spaces, tabs, and line breaks in the HTML source are rendered.",
        defaultValue: "nowrap",
        controls: [
          { type: "select", id: "white-sp", label: "White Space", options: ["normal", "nowrap", "pre", "pre-wrap", "pre-line"], value: "nowrap" }
        ],
        targetStyle: (vals) => `white-space: ${vals['white-sp']}; width: 100%; border: 1px dashed rgba(255,255,255,0.1); overflow: hidden; font-size: 13px; padding: 10px;`,
        previewHtml: `<div class="typo-target">This text has spaces   and
newlines that get styled by white-space rules.</div>`
      },
      {
        name: "text-overflow",
        desc: "Determines how clipped text is shown when it overflows its containing boundaries. Commonly paired with overflow: hidden.",
        defaultValue: "ellipsis",
        controls: [
          { type: "select", id: "text-over", label: "Overflow style", options: ["clip", "ellipsis"], value: "ellipsis" }
        ],
        targetStyle: (vals) => `text-overflow: ${vals['text-over']}; overflow: hidden; white-space: nowrap; width: 200px; border: 1px dashed #00f2fe; padding: 8px;`,
        previewHtml: `<div class="typo-target">This is a long sentence that exceeds its boundary box limits.</div>`
      }
    ]
  },
  {
    category: "Backgrounds & Colors",
    properties: [
      {
        name: "background-color",
        desc: "Sets the primary background color of an element.",
        defaultValue: "#7f00ff",
        controls: [
          { type: "color", id: "bg-color-val", label: "Color", value: "#7f00ff" }
        ],
        targetStyle: (vals) => `background-color: ${vals['bg-color-val']};`,
        previewHtml: `<div class="target-box bg-target">Colored Box</div>`
      },
      {
        name: "background-image",
        desc: "Sets one or more background images. Can accept image URLs (via url()) or linear/radial gradients.",
        defaultValue: "linear-gradient(135deg, #00f2fe, #7f00ff)",
        controls: [
          { type: "select", id: "bg-image-val", label: "Select Value", options: [
            "linear-gradient(135deg, #00f2fe, #7f00ff)",
            "radial-gradient(circle, #fbbf24, #d97706)",
            "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400')",
            "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400')"
          ], value: "linear-gradient(135deg, #00f2fe, #7f00ff)" }
        ],
        targetStyle: (vals) => `background-image: ${vals['bg-image-val']}; background-size: cover; background-position: center; width: 220px; height: 140px; border-radius:12px;`,
        previewHtml: `<div class="target-box bg-target">Background</div>`
      },
      {
        name: "background-size",
        desc: "Sets the size of the element's background image. 'cover' stretches to fill; 'contain' scales to fit completely; percentages or sizes can also be used.",
        defaultValue: "cover",
        controls: [
          { type: "select", id: "bg-size-val", label: "Size Type", options: ["cover", "contain", "auto", "50%", "100px"], value: "cover" }
        ],
        targetStyle: (vals) => `background-size: ${vals['bg-size-val']}; background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300'); background-repeat: no-repeat; width: 200px; height: 140px; border-radius:12px;`,
        previewHtml: `<div class="target-box bg-target" style="border: 2px dashed rgba(255,255,255,0.2)">Size</div>`
      },
      {
        name: "background-repeat",
        desc: "Controls whether a background image repeats across the horizontal/vertical axes.",
        defaultValue: "no-repeat",
        controls: [
          { type: "select", id: "bg-repeat-val", label: "Repeat Mode", options: ["repeat", "no-repeat", "repeat-x", "repeat-y", "space", "round"], value: "no-repeat" }
        ],
        targetStyle: (vals) => `background-repeat: ${vals['bg-repeat-val']}; background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100'); background-size: 50px; width: 240px; height: 140px; border-radius:12px;`,
        previewHtml: `<div class="target-box bg-target" style="border: 2px dashed rgba(255,255,255,0.2)">Repeat</div>`
      },
      {
        name: "background-position",
        desc: "Sets the initial starting position of background images relative to boundaries.",
        defaultValue: "center",
        controls: [
          { type: "select", id: "bg-pos-val", label: "Position", options: ["center", "top left", "top right", "bottom left", "bottom right", "20% 50%"], value: "center" }
        ],
        targetStyle: (vals) => `background-position: ${vals['bg-pos-val']}; background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100'); background-repeat: no-repeat; background-size: 60px; width: 200px; height: 140px; border-radius:12px;`,
        previewHtml: `<div class="target-box bg-target" style="border: 2px dashed rgba(255,255,255,0.2)">Position</div>`
      },
      {
        name: "background-attachment",
        desc: "Determines whether the background image scrolls with the page, or remains fixed in place.",
        defaultValue: "scroll",
        controls: [
          { type: "select", id: "bg-attach-val", label: "Attachment", options: ["scroll", "fixed", "local"], value: "scroll" }
        ],
        targetStyle: (vals) => `background-attachment: ${vals['bg-attach-val']}; background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400'); background-size: cover; overflow-y: scroll; width: 240px; height: 140px; padding: 10px; border-radius:12px; line-height: 1.6;`,
        previewHtml: `<div class="target-box bg-target" style="color:white; font-size:11px;">Scroll inside me!<br>Scroll me...<br>Scroll me...<br>Scroll me...<br>Scroll me...<br>Scroll me...<br>Scroll me...<br>Scroll me...</div>`
      },
      {
        name: "opacity",
        desc: "Sets the transparency level (0.0 fully transparent to 1.0 fully solid). Affects whole element.",
        defaultValue: "0.7",
        controls: [
          { type: "range", id: "opacity-val", label: "Opacity", min: 0, max: 1, step: 0.05, unit: "", value: 0.7 }
        ],
        targetStyle: (vals) => `opacity: ${vals['opacity-val']};`,
        previewHtml: `<div class="target-box bg-target" style="background:linear-gradient(135deg, #00f2fe, #7f00ff); width: 140px; height: 100px;">Opacity</div>`
      }
    ]
  },
  {
    category: "Borders & Corners",
    properties: [
      {
        name: "border-style",
        desc: "Sets the border line format (solid, dashed, dotted, or double).",
        defaultValue: "solid",
        controls: [
          { type: "select", id: "border-style-val", label: "Border Style", options: ["solid", "dashed", "dotted", "double", "groove", "ridge", "inset", "outset"], value: "solid" },
          { type: "range", id: "border-width-val", label: "Border Width", min: 1, max: 20, unit: "px", value: 4 },
          { type: "color", id: "border-color-val", label: "Border Color", value: "#00f2fe" }
        ],
        targetStyle: (vals) => `border-style: ${vals['border-style-val']}; border-width: ${vals['border-width-val']}px; border-color: ${vals['border-color-val']};`,
        previewHtml: `<div class="target-box border-target" style="background: rgba(255,255,255,0.03); width: 140px; height: 100px;">Border Test</div>`
      },
      {
        name: "border-radius",
        desc: "Rounds the corners of an element. 50% on square creates a circle.",
        defaultValue: "16px",
        controls: [
          { type: "range", id: "radius-val", label: "Radius size", min: 0, max: 100, unit: "px", value: 16 }
        ],
        targetStyle: (vals) => `border-radius: ${vals['radius-val']}px;`,
        previewHtml: `<div class="target-box border-target" style="background: linear-gradient(135deg, #00f2fe, #7f00ff); width: 120px; height: 120px;">Round Corners</div>`
      }
    ]
  },
  {
    category: "Effects & Shadows",
    properties: [
      {
        name: "box-shadow",
        desc: "Adds drop shadows around element borders. Supports offsets, blurs, and colors.",
        defaultValue: "0px 10px 20px rgba(0,0,0,0.5)",
        controls: [
          { type: "range", id: "shadow-x", label: "Offset X", min: -30, max: 30, unit: "px", value: 0 },
          { type: "range", id: "shadow-y", label: "Offset Y", min: -30, max: 30, unit: "px", value: 10 },
          { type: "range", id: "shadow-blur", label: "Blur Radius", min: 0, max: 60, unit: "px", value: 20 },
          { type: "color", id: "shadow-color", label: "Shadow Color", value: "#000000" },
          { type: "range", id: "shadow-opacity", label: "Shadow Opacity", min: 0, max: 1, step: 0.05, unit: "", value: 0.5 }
        ],
        targetStyle: (vals) => {
          return `box-shadow: ${vals['shadow-x']}px ${vals['shadow-y']}px ${vals['shadow-blur']}px rgba(0,0,0,0.5);`; 
        },
        customCompiler: (vals) => {
          const rgba = hexToRgba(vals['shadow-color'], vals['shadow-opacity']);
          return `box-shadow: ${vals['shadow-x']}px ${vals['shadow-y']}px ${vals['shadow-blur']}px ${rgba};`;
        },
        previewHtml: `<div class="target-box effects-target" style="background: #181b23; border: 1px solid rgba(255,255,255,0.05); width: 120px; height: 120px; border-radius:12px;">Shadow</div>`
      },
      {
        name: "text-shadow",
        desc: "Adds shadow glow effects to text elements.",
        defaultValue: "2px 2px 4px rgba(0,0,0,0.5)",
        controls: [
          { type: "range", id: "tshadow-x", label: "Offset X", min: -15, max: 15, unit: "px", value: 2 },
          { type: "range", id: "tshadow-y", label: "Offset Y", min: -15, max: 15, unit: "px", value: 2 },
          { type: "range", id: "tshadow-blur", label: "Blur", min: 0, max: 20, unit: "px", value: 4 },
          { type: "color", id: "tshadow-color", label: "Color", value: "#00f2fe" }
        ],
        targetStyle: (vals) => `text-shadow: ${vals['tshadow-x']}px ${vals['tshadow-y']}px ${vals['tshadow-blur']}px ${vals['tshadow-color']};`,
        previewHtml: `<div class="effects-target" style="font-size: 36px; font-weight: 800; color: white;">Text Shadow Glow</div>`
      },
      {
        name: "filter",
        desc: "Applies graphical filters like blur, grayscale, sepia, invert, or hue rotations.",
        defaultValue: "grayscale(80%)",
        controls: [
          { type: "select", id: "filter-type", label: "Filter Type", options: ["blur", "grayscale", "sepia", "invert", "hue-rotate"], value: "grayscale" },
          { type: "range", id: "filter-amount", label: "Amount", min: 0, max: 100, unit: "", value: 80 }
        ],
        targetStyle: (vals) => {
          const type = vals['filter-type'];
          let amt = vals['filter-amount'];
          if (type === 'blur') return `filter: blur(${amt / 10}px);`;
          if (type === 'hue-rotate') return `filter: hue-rotate(${amt * 3.6}deg);`;
          return `filter: ${type}(${amt}%);`;
        },
        previewHtml: `<div class="effects-target" style="width: 140px; height: 140px; border-radius:12px; background: linear-gradient(45deg, #ff007f, #7f00ff); display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:18px;">Gradient Box</div>`
      },
      {
        name: "backdrop-filter",
        desc: "Applies graphical effects like blur to the area behind the glassmorphism element.",
        defaultValue: "blur(8px)",
        controls: [
          { type: "range", id: "back-blur", label: "Blur Size", min: 0, max: 20, unit: "px", value: 8 }
        ],
        targetStyle: (vals) => `backdrop-filter: blur(${vals['back-blur']}px); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);`,
        previewHtml: `<div style="width: 100%; height: 180px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; background-image: radial-gradient(#00f2fe 2px, transparent 2px); background-size: 15px 15px;">
  <div class="target-box effects-target" style="width: 150px; height: 100px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white; font-size:13px;">Glassmorphism</div>
</div>`
      }
    ]
  },
  {
    category: "Layout & Positioning",
    properties: [
      {
        name: "display",
        desc: "Dictates layout box styling structure (block, inline-block, flex, grid, none).",
        defaultValue: "block",
        controls: [
          { type: "select", id: "display-val", label: "Display Style", options: ["block", "inline-block", "none"], value: "block" }
        ],
        targetStyle: (vals) => `display: ${vals['display-val']};`,
        previewHtml: `<div style="border:1px dashed rgba(255,255,255,0.15); padding: 10px; width: 100%; border-radius:8px;">
  <span style="background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius:4px;">Sibling A</span>
  <div class="target-box layout-target" style="background:#00f2fe; color:#0f172a; font-weight:bold; padding: 10px; border-radius:4px; text-align:center; margin: 5px 0;">Target Element</div>
  <span style="background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius:4px;">Sibling B</span>
</div>`
      },
      {
        name: "position",
        desc: "Sets positioning models (static, relative, absolute, fixed, sticky). Absolute is offset from relative parent.",
        defaultValue: "relative",
        controls: [
          { type: "select", id: "position-val", label: "Position type", options: ["relative", "absolute"], value: "relative" },
          { type: "range", id: "position-top", label: "top offset", min: -40, max: 80, unit: "px", value: 15 },
          { type: "range", id: "position-left", label: "left offset", min: -40, max: 80, unit: "px", value: 15 }
        ],
        targetStyle: (vals) => `position: ${vals['position-val']}; top: ${vals['position-top']}px; left: ${vals['position-left']}px;`,
        previewHtml: `<div style="border:2px dashed rgba(255,255,255,0.15); width: 100%; height: 160px; position: relative; padding: 10px; border-radius:8px; background: rgba(0,0,0,0.15);">
  <div class="target-box layout-target" style="background:#7f00ff; color:white; width: 120px; height: 60px; font-weight:bold; border-radius:6px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 15px rgba(127,0,255,0.3)">Target Element</div>
</div>`
      },
      {
        name: "z-index",
        desc: "Determines stack order placement of positioned elements. Higher integers overlap lower indices.",
        defaultValue: "10",
        controls: [
          { type: "select", id: "z-index-val", label: "Z-Index Top Box", options: ["-1", "0", "1", "10"], value: "10" }
        ],
        targetStyle: (vals) => `z-index: ${vals['z-index-val']}; position: absolute; top: 30px; left: 60px;`,
        previewHtml: `<div style="position:relative; width:100%; height:140px; background:rgba(255,255,255,0.02); border-radius:8px;">
  <div style="position:absolute; top:20px; left:20px; width:90px; height:60px; background:#7f00ff; z-index: 5; border-radius:6px; color:white; font-size:11px; padding:10px;">Box A (Z: 5)</div>
  <div class="target-box layout-target" style="width:90px; height:60px; background:#00f2fe; color:#0f172a; font-size:11px; padding:10px; border-radius:6px;">Box B (Target)</div>
</div>`
      },
      {
        name: "overflow",
        desc: "Configures overflow clip behaviors if internal dimensions exceed boundary boxes (visible, hidden, scroll, auto).",
        defaultValue: "scroll",
        controls: [
          { type: "select", id: "overflow-val", label: "Overflow Mode", options: ["visible", "hidden", "scroll", "auto"], value: "scroll" }
        ],
        targetStyle: (vals) => `overflow: ${vals['overflow-val']}; width: 180px; height: 110px; border: 1px dashed #00f2fe; padding: 12px; line-height: 1.5; font-size: 13px;`,
        previewHtml: `<div class="target-box layout-target">This long paragraph shows custom overflow scrolling rules. Check hidden or scroll to witness clipping boundaries.</div>`
      },
      {
        name: "visibility",
        desc: "Hides or reveals elements without removing them from layout flow document paths.",
        defaultValue: "visible",
        controls: [
          { type: "select", id: "vis-val", label: "Visibility", options: ["visible", "hidden"], value: "visible" }
        ],
        targetStyle: (vals) => `visibility: ${vals['vis-val']};`,
        previewHtml: `<div style="display:flex; gap:10px; align-items:center; background:rgba(255,255,255,0.02); padding:10px; border-radius:8px;">
  <div style="background:#4b5563; padding:10px; border-radius:4px;">Left</div>
  <div class="target-box layout-target" style="background:#e100ff; padding:10px; border-radius:4px; color:white;">Middle Target</div>
  <div style="background:#4b5563; padding:10px; border-radius:4px;">Right</div>
</div>`
      },
      {
        name: "aspect-ratio",
        desc: "Sets a preferred aspect ratio for the box, which will be used in calculations of auto sizes.",
        defaultValue: "16 / 9",
        controls: [
          { type: "select", id: "aspect-ratio-val", label: "Ratio", options: ["16 / 9", "4 / 3", "1 / 1", "2 / 3"], value: "16 / 9" }
        ],
        targetStyle: (vals) => `aspect-ratio: ${vals['aspect-ratio-val']}; width: 180px; background:#7f00ff; border-radius:8px; display:flex; align-items:center; justify-content:center;`,
        previewHtml: `<div class="target-box layout-target">Ratio Box</div>`
      }
    ]
  },
  {
    category: "Images & Media",
    properties: [
      {
        name: "object-fit",
        desc: "Specifies how replaced content, such as an <img> or <video>, is scaled to fit its box dimensions.",
        defaultValue: "cover",
        controls: [
          { type: "select", id: "obj-fit", label: "Fit Type", options: ["fill", "contain", "cover", "none", "scale-down"], value: "cover" }
        ],
        targetStyle: (vals) => `object-fit: ${vals['obj-fit']}; width: 100%; height: 100%; display:block;`,
        previewHtml: `<div style="width: 200px; height: 130px; border: 2px solid #00f2fe; overflow:hidden; border-radius:12px;">
  <img class="target-box" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" alt="Sample" />
</div>`
      },
      {
        name: "object-position",
        desc: "Aligns the alignment anchors of image files inside boundary bounds.",
        defaultValue: "center",
        controls: [
          { type: "select", id: "obj-pos", label: "Object Position", options: ["center", "top", "bottom", "left", "right", "20% 80%"], value: "center" }
        ],
        targetStyle: (vals) => `object-position: ${vals['obj-pos']}; object-fit: none; width: 100%; height: 100%; display:block;`,
        previewHtml: `<div style="width: 200px; height: 130px; border: 2px solid #7f00ff; overflow:hidden; border-radius:12px;">
  <img class="target-box" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" alt="Sample" />
</div>`
      }
    ]
  },
  {
    category: "Flexbox Layout",
    properties: [
      {
        name: "flex-direction",
        desc: "Sets layout alignment direction axis (row, row-reverse, column, column-reverse).",
        defaultValue: "row",
        controls: [
          { type: "select", id: "flex-dir", label: "Flex Direction", options: ["row", "row-reverse", "column", "column-reverse"], value: "row" }
        ],
        targetStyle: (vals) => `flex-direction: ${vals['flex-dir']}; display: flex; gap: 10px; width:100%;`,
        previewHtml: `<div class="target-box" style="background:rgba(255,255,255,0.02); border:1px dashed rgba(255,255,255,0.1); padding:10px; border-radius:8px;">
  <div style="background:#00f2fe; color:#0f172a; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">1</div>
  <div style="background:#4facfe; color:#0f172a; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">2</div>
  <div style="background:#7f00ff; color:white; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">3</div>
</div>`
      },
      {
        name: "flex-wrap",
        desc: "Controls wrap line wrap configurations if dimensions overflow container lines.",
        defaultValue: "wrap",
        controls: [
          { type: "select", id: "flex-wrap-val", label: "Flex Wrap", options: ["nowrap", "wrap", "wrap-reverse"], value: "wrap" }
        ],
        targetStyle: (vals) => `flex-wrap: ${vals['flex-wrap-val']}; display: flex; gap: 10px; width: 140px; border: 1px dashed rgba(255,255,255,0.1); padding:10px;`,
        previewHtml: `<div class="target-box">
  <div style="background:#00f2fe; color:#0f172a; width:40px; height:30px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">A</div>
  <div style="background:#4facfe; color:#0f172a; width:40px; height:30px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">B</div>
  <div style="background:#7f00ff; color:white; width:40px; height:30px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">C</div>
</div>`
      },
      {
        name: "justify-content",
        desc: "Aligns components along the main layout flex alignment axis.",
        defaultValue: "center",
        controls: [
          { type: "select", id: "justify-val", label: "Justify Content", options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], value: "center" }
        ],
        targetStyle: (vals) => `justify-content: ${vals['justify-val']}; display: flex; gap: 10px; width:100%; border:1px dashed rgba(255,255,255,0.1); padding:10px;`,
        previewHtml: `<div class="target-box">
  <div style="background:#00f2fe; color:#0f172a; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">1</div>
  <div style="background:#7f00ff; color:white; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">2</div>
</div>`
      },
      {
        name: "align-items",
        desc: "Aligns components along vertical cross-axes within layouts.",
        defaultValue: "center",
        controls: [
          { type: "select", id: "align-items-val", label: "Align Items", options: ["flex-start", "flex-end", "center", "baseline", "stretch"], value: "center" }
        ],
        targetStyle: (vals) => `align-items: ${vals['align-items-val']}; display: flex; gap: 10px; height: 120px; width: 100%; border: 1px dashed rgba(255,255,255,0.1); padding:10px;`,
        previewHtml: `<div class="target-box">
  <div style="background:#00f2fe; color:#0f172a; width:45px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">1</div>
  <div style="background:#7f00ff; color:white; width:45px; height:60px; display:flex; align-items:center; justify-content:center; border-radius:4px; font-weight:bold;">2</div>
</div>`
      },
      {
        name: "gap",
        desc: "Determines grid or flexbox space gap sizes between elements.",
        defaultValue: "15px",
        controls: [
          { type: "range", id: "gap-val", label: "Gap Size", min: 0, max: 40, unit: "px", value: 15 }
        ],
        targetStyle: (vals) => `gap: ${vals['gap-val']}px; display: flex; width:100%;`,
        previewHtml: `<div class="target-box">
  <div style="background:#00f2fe; color:#0f172a; padding: 10px 20px; border-radius:4px; font-weight:bold;">A</div>
  <div style="background:#7f00ff; color:white; padding: 10px 20px; border-radius:4px; font-weight:bold;">B</div>
</div>`
      },
      {
        name: "flex-grow",
        desc: "Sets grow ratio proportions for elements to span remaining parent dimensions.",
        defaultValue: "1",
        controls: [
          { type: "select", id: "grow-val", label: "Grow Factor", options: ["0", "1", "2"], value: "1" }
        ],
        targetStyle: (vals) => `flex-grow: ${vals['grow-val']}; background: #00f2fe; color: #0f172a; padding: 10px; border-radius: 4px; font-weight: bold; text-align: center;`,
        previewHtml: `<div style="display:flex; gap:10px; width:100%; background:rgba(255,255,255,0.02); padding:10px; border-radius:8px;">
  <div style="background:#4b5563; padding:10px; border-radius:4px; flex-grow: 1;">Fixed 1</div>
  <div class="target-box">Target Grow</div>
</div>`
      }
    ]
  },
  {
    category: "Grid Layout",
    properties: [
      {
        name: "grid-template-columns",
        desc: "Sets grid column tracks, widths, and columns bounds using fraction (fr) sizes.",
        defaultValue: "1fr 2fr",
        controls: [
          { type: "select", id: "grid-cols", label: "Column Tracks", options: ["1fr 1fr", "1fr 2fr", "1fr 1fr 1fr", "repeat(auto-fit, minmax(60px, 1fr))"], value: "1fr 2fr" }
        ],
        targetStyle: (vals) => `grid-template-columns: ${vals['grid-cols']}; display: grid; gap: 10px; width:100%;`,
        previewHtml: `<div class="target-box" style="background:rgba(255,255,255,0.02); border:1px dashed rgba(255,255,255,0.1); padding:10px; border-radius:8px;">
  <div style="background:#7f00ff; color:white; padding:10px; text-align:center; border-radius:4px;">Col A</div>
  <div style="background:#00f2fe; color:#0f172a; padding:10px; text-align:center; border-radius:4px;">Col B</div>
</div>`
      },
      {
        name: "grid-column",
        desc: "Dictates cell column starting and ending span grid intersections.",
        defaultValue: "span 2",
        controls: [
          { type: "select", id: "grid-col-span", label: "Target Span", options: ["auto", "span 2", "1 / 3"], value: "span 2" }
        ],
        targetStyle: (vals) => `grid-column: ${vals['grid-col-span']}; background: #e100ff; color: white; padding: 10px; border-radius: 4px; text-align: center;`,
        previewHtml: `<div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; width:100%; background:rgba(255,255,255,0.02); padding:10px; border-radius:8px;">
  <div class="target-box">Grid Item A</div>
  <div style="background:#4b5563; padding:10px; border-radius:4px; text-align:center;">Item B</div>
  <div style="background:#4b5563; padding:10px; border-radius:4px; text-align:center;">Item C</div>
</div>`
      }
    ]
  },
  {
    category: "Transforms & Motion",
    properties: [
      {
        name: "transform: rotate",
        desc: "Rotates the element around a fixed point in degree loops.",
        defaultValue: "30deg",
        controls: [
          { type: "range", id: "rot-angle", label: "Rotate Angle", min: -180, max: 180, unit: "deg", value: 30 }
        ],
        targetStyle: (vals) => `transform: rotate(${vals['rot-angle']}deg);`,
        previewHtml: `<div class="target-box transform-target" style="background: linear-gradient(135deg, #10b981, #059669); width:100px; height:100px; border-radius:8px;">Rotate</div>`
      },
      {
        name: "transform: scale",
        desc: "Resizes the element dynamically. 1.0 represents original size.",
        defaultValue: "1.2",
        controls: [
          { type: "range", id: "scale-val", label: "Scale multiplier", min: 0.5, max: 2, step: 0.1, unit: "", value: 1.2 }
        ],
        targetStyle: (vals) => `transform: scale(${vals['scale-val']});`,
        previewHtml: `<div class="target-box transform-target" style="background: linear-gradient(135deg, #f59e0b, #d97706); width:100px; height:100px; border-radius:8px;">Scale</div>`
      },
      {
        name: "transform: translate",
        desc: "Repositions elements along X and Y horizontal/vertical offset paths.",
        defaultValue: "20px, 0px",
        controls: [
          { type: "range", id: "trans-x", label: "Translate X", min: -50, max: 50, unit: "px", value: 20 },
          { type: "range", id: "trans-y", label: "Translate Y", min: -50, max: 50, unit: "px", value: 0 }
        ],
        targetStyle: (vals) => `transform: translate(${vals['trans-x']}px, ${vals['trans-y']}px);`,
        previewHtml: `<div class="target-box transform-target" style="background: linear-gradient(135deg, #00f2fe, #7f00ff); width:100px; height:100px; border-radius:8px;">Translate</div>`
      },
      {
        name: "transform: skew",
        desc: "Skews (tilts) elements along vertical/horizontal degree angles.",
        defaultValue: "15deg",
        controls: [
          { type: "range", id: "skew-x", label: "Skew X", min: -45, max: 45, unit: "deg", value: 15 },
          { type: "range", id: "skew-y", label: "Skew Y", min: -45, max: 45, unit: "deg", value: 0 }
        ],
        targetStyle: (vals) => `transform: skew(${vals['skew-x']}deg, ${vals['skew-y']}deg);`,
        previewHtml: `<div class="target-box transform-target" style="background: linear-gradient(135deg, #ec4899, #be185d); width:100px; height:100px; border-radius:8px;">Skew</div>`
      },
      {
        name: "transition",
        desc: "Animates changes smoothly. Groups transition-properties, durations, and delay times.",
        defaultValue: "all 0.3s ease-in-out",
        controls: [
          { type: "select", id: "trans-prop", label: "Property", options: ["all", "background-color", "transform"], value: "all" },
          { type: "range", id: "trans-dur", label: "Duration", min: 0.1, max: 2.0, step: 0.1, unit: "s", value: 0.5 },
          { type: "select", id: "trans-ease", label: "Timing Function", options: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"], value: "ease-in-out" }
        ],
        targetStyle: (vals) => `transition: ${vals['trans-prop']} ${vals['trans-dur']}s ${vals['trans-ease']}; width:120px; height:100px; background:#10b981; display:flex; align-items:center; justify-content:center; border-radius:8px; cursor:pointer;`,
        previewHtml: `<div class="target-box transform-target" onmouseover="this.style.backgroundColor='#00f2fe'; this.style.transform='scale(1.2)';" onmouseout="this.style.backgroundColor='#10b981'; this.style.transform='scale(1)';">Hover Me</div>`
      }
    ]
  },
  {
    category: "Interaction & Lists",
    properties: [
      {
        name: "cursor",
        desc: "Specifies the mouse cursor style display when floating over active bounds.",
        defaultValue: "pointer",
        controls: [
          { type: "select", id: "cursor-val", label: "Cursor Type", options: ["auto", "default", "pointer", "wait", "crosshair", "not-allowed", "zoom-in", "grab"], value: "pointer" }
        ],
        targetStyle: (vals) => `cursor: ${vals['cursor-val']}; width: 140px; height: 100px; background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; text-align:center; font-size:12px;`,
        previewHtml: `<div class="target-box">Hover to inspect cursor</div>`
      },
      {
        name: "list-style-type",
        desc: "Sets the marker item shape (e.g. disc, square, numerals) for lists.",
        defaultValue: "square",
        controls: [
          { type: "select", id: "list-style-val", label: "Marker Style", options: ["disc", "circle", "square", "decimal", "lower-roman", "none"], value: "square" }
        ],
        targetStyle: (vals) => `list-style-type: ${vals['list-style-val']}; color: white; padding-left: 20px; text-align: left;`,
        previewHtml: `<ul class="target-box">
  <li>First item list point</li>
  <li>Second item list point</li>
</ul>`
      },
      {
        name: "user-select",
        desc: "Controls whether users can highlight and select page text characters.",
        defaultValue: "none",
        controls: [
          { type: "select", id: "user-sel-val", label: "Selection Mode", options: ["auto", "text", "none", "all"], value: "none" }
        ],
        targetStyle: (vals) => `user-select: ${vals['user-sel-val']}; -webkit-user-select: ${vals['user-sel-val']};`,
        previewHtml: `<div class="target-box" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); padding:12px; border-radius:8px; font-size:13px;">Try selecting this text block.</div>`
      }
    ]
  }
];

// Helper to convert color values is defined in script.js
