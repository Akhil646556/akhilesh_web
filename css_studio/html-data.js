// HTML Reference Database for HTML A-Z Reference Tab
const htmlTagsData = [
  {
    category: "Structure & Semantic",
    tags: [
      {
        name: "<div>",
        desc: "Defines a division or a section in an HTML document. It acts as a generic container for styling and grouping content.",
        controls: [
          { type: "select", id: "div-style", label: "Example Styling", options: ["Bordered Card", "Glassy Panel", "Gradient Container"], value: "Bordered Card" },
          { type: "text", id: "div-text", label: "Inner Text Content", value: "This is a generic div container." }
        ],
        customCompiler: (vals) => {
          let classStyle = "border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px;";
          if (vals['div-style'] === "Glassy Panel") {
            classStyle = "background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.15); padding: 20px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);";
          } else if (vals['div-style'] === "Gradient Container") {
            classStyle = "background: linear-gradient(135deg, #00f2fe, #7f00ff); color: white; padding: 20px; border-radius: 10px; font-weight: 500;";
          }
          return `<div style="${classStyle}">\n  ${vals['div-text']}\n</div>`;
        }
      },
      {
        name: "<section> & <article>",
        desc: "<section> groups related thematic content together, while <article> represents a self-contained composition (like a forum post, news story, or blog entry).",
        controls: [
          { type: "text", id: "art-title", label: "Article Title", value: "The Rise of CSS Grid Layout" },
          { type: "text", id: "art-body", label: "Article Content", value: "CSS Grid is a highly powerful layout engine that allows 2D column and row alignments." }
        ],
        customCompiler: (vals) => {
          return `<section style="padding: 16px; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px;">\n  <article style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 6px;">\n    <h3 style="margin-top: 0; color: #00f2fe;">${vals['art-title']}</h3>\n    <p style="margin-bottom: 0; font-size: 13.5px; line-height: 1.5; color: #cbd5e1;">${vals['art-body']}</p>\n  </article>\n</section>`;
        }
      },
      {
        name: "<header> & <footer>",
        desc: "<header> holds introductory content or navigation links. <footer> contains copyrights, metadata, or contact information.",
        controls: [
          { type: "text", id: "head-logo", label: "Header Logo", value: "🚀 WebDev Academy" },
          { type: "text", id: "foot-copy", label: "Footer Copyright", value: "© 2026 WebDev Academy. All rights reserved." }
        ],
        customCompiler: (vals) => {
          return `<div style="display:flex; flex-direction:column; gap: 20px; width: 100%;">\n  <header style="background: #1e293b; padding: 12px 20px; display:flex; justify-content:space-between; align-items:center; border-radius:6px; border: 1px solid rgba(255,255,255,0.05);">\n    <span style="font-weight:bold; color: #00f2fe;">${vals['head-logo']}</span>\n    <nav><a href="#" style="color:#94a3b8; font-size:12px; text-decoration:none;">Home</a></nav>\n  </header>\n\n  <footer style="background: #0f172a; padding: 12px 20px; text-align: center; border-radius:6px; font-size:11px; color:#64748b; border: 1px solid rgba(255,255,255,0.05);">\n    ${vals['foot-copy']}\n  </footer>\n</div>`;
        }
      }
    ]
  },
  {
    category: "Typography & Content",
    tags: [
      {
        name: "<h1> - <h6>",
        desc: "Defines HTML headings. <h1> is the most important (highest rank) heading and <h6> is the least important.",
        controls: [
          { type: "select", id: "h-level", label: "Heading Level", options: ["h1", "h2", "h3", "h4", "h5", "h6"], value: "h1" },
          { type: "text", id: "h-text", label: "Heading Text", value: "CSS Classroom Study" }
        ],
        customCompiler: (vals) => {
          const tag = vals['h-level'];
          return `<${tag} style="margin: 0; color: #00f2fe; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px;">\n  ${vals['h-text']}\n</${tag}>`;
        }
      },
      {
        name: "<p> & <span>",
        desc: "<p> defines a block-level paragraph with margin gaps. <span> is an inline container used to style small parts of text without breaking lines.",
        controls: [
          { type: "text", id: "span-word", label: "Span Styled Word", value: "Antigravity AI" },
          { type: "color", id: "span-color", label: "Span Text Color", value: "#00f2fe" }
        ],
        customCompiler: (vals) => {
          return `<p style="line-height: 1.6; font-size:14px; margin: 0; background:rgba(0,0,0,0.15); padding:10px; border-radius:6px;">\n  This is a paragraph of text. Inside this paragraph, we will style the words \n  <span style="color: ${vals['span-color']}; font-weight: bold; text-decoration: underline;">${vals['span-word']}</span> \n  using inline CSS inside an HTML span tag.\n</p>`;
        }
      },
      {
        name: "<pre> & <code>",
        desc: "<pre> preserves code indentations and spaces exactly as typed. <code> represents computer code, typically styled in a monospaced font.",
        controls: [
          { type: "text", id: "code-snippet", label: "JavaScript Statement", value: "const score = checkProgress('flexbox');" }
        ],
        customCompiler: (vals) => {
          return `<pre style="background: #0f172a; padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.08); overflow-x: auto; margin:0;"><code style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #38bdf8;">\nfunction testCode() {\n  // Code Block\n  ${vals['code-snippet']}\n  return score;\n}\n</code></pre>`;
        }
      }
    ]
  },
  {
    category: "Media & Anchors",
    tags: [
      {
        name: "<a> (Anchors)",
        desc: "Defines a hyperlink. The 'href' attribute specifies the URL target page, and 'target' decides if it opens in a new tab.",
        controls: [
          { type: "text", id: "link-url", label: "Destination URL (href)", value: "https://www.google.com" },
          { type: "select", id: "link-target", label: "Link Target", options: ["_blank", "_self"], value: "_blank" },
          { type: "text", id: "link-label", label: "Link Anchor Label", value: "Explore Google Search Engine" }
        ],
        customCompiler: (vals) => {
          return `<a href="${vals['link-url']}" target="${vals['link-target']}" style="color: #00f2fe; text-decoration: none; font-weight: bold; border-bottom: 2px solid transparent; padding-bottom: 2px; transition: 0.2s;" onmouseover="this.style.borderBottomColor='#00f2fe'" onmouseout="this.style.borderBottomColor='transparent'">\n  ${vals['link-label']} <i class="fas fa-external-link-alt" style="font-size:11px"></i>\n</a>`;
        }
      },
      {
        name: "<img> (Images)",
        desc: "Embeds image files in the page. The 'src' attribute defines the image path, and 'alt' defines alternate text descriptions.",
        controls: [
          { type: "select", id: "img-src", label: "Source URL", options: [
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300"
          ], value: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" },
          { type: "text", id: "img-alt", label: "Alt Text", value: "Vibrant abstract graphic background" },
          { type: "range", id: "img-width", label: "Width Size", min: 80, max: 280, unit: "px", value: 160 }
        ],
        customCompiler: (vals) => {
          return `<img src="${vals['img-src']}" alt="${vals['img-alt']}" style="width: ${vals['img-width']}px; border-radius: 8px; border: 2px solid #00f2fe; box-shadow: 0 4px 15px rgba(0,242,254,0.15); display:block; margin:auto;" />`;
        }
      }
    ]
  },
  {
    category: "Tables & Grids",
    tags: [
      {
        name: "<table> (Rows & Cols)",
        desc: "Defines tabular datasets. Composed of <tr> (rows), <th> (header cells), and <td> (body cells).",
        controls: [
          { type: "range", id: "tbl-rows", label: "Table Rows Count", min: 1, max: 5, unit: "", value: 3 },
          { type: "range", id: "tbl-cols", label: "Table Columns Count", min: 1, max: 5, unit: "", value: 3 }
        ],
        customCompiler: (vals) => {
          const rows = parseInt(vals['tbl-rows']);
          const cols = parseInt(vals['tbl-cols']);
          
          let headHtml = "      <tr>\n";
          for (let c = 1; c <= cols; c++) {
            headHtml += `        <th style="padding: 10px; background: #00f2fe; color: #0a0b0e; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Header ${c}</th>\n`;
          }
          headHtml += "      </tr>";

          let bodyHtml = "";
          for (let r = 1; r <= rows; r++) {
            bodyHtml += "      <tr>\n";
            for (let c = 1; c <= cols; c++) {
              bodyHtml += `        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Row ${r} Col ${c}</td>\n`;
            }
            bodyHtml += "      </tr>\n";
          }

          return `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13.5px; border-radius: 6px; overflow: hidden; background: rgba(255,255,255,0.02);">\n  <thead>\n${headHtml}\n  </thead>\n  <tbody>\n${bodyHtml}  </tbody>\n</table>`;
        }
      },
      {
        name: "colspan & rowspan",
        desc: "Cell properties used to span multiple columns ('colspan') or rows ('rowspan') inside tables.",
        controls: [
          { type: "select", id: "span-type", label: "Table Layout Template", options: ["Column Span (colspan)", "Row Span (rowspan)"], value: "Column Span (colspan)" }
        ],
        customCompiler: (vals) => {
          if (vals['span-type'] === "Column Span (colspan)") {
            return `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13.5px; background: rgba(255,255,255,0.02);">\n  <tr>\n    <th style="padding: 10px; background: #7f00ff; color: white; border: 1px solid rgba(255,255,255,0.1);">Header A</th>\n    <th style="padding: 10px; background: #7f00ff; color: white; border: 1px solid rgba(255,255,255,0.1);">Header B</th>\n  </tr>\n  <tr>\n    <td colspan="2" style="padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1); color: #00f2fe; font-weight: bold; background: rgba(0, 242, 254, 0.05);">\n      This cell spans 2 Columns (colspan=&quot;2&quot;)\n    </td>\n  </tr>\n  <tr>\n    <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color:#94a3b8;">Normal cell 1</td>\n    <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color:#94a3b8;">Normal cell 2</td>\n  </tr>\n</table>`;
          } else {
            return `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13.5px; background: rgba(255,255,255,0.02);">\n  <tr>\n    <th style="padding: 10px; background: #7f00ff; color: white; border: 1px solid rgba(255,255,255,0.1);">Side Header</th>\n    <th style="padding: 10px; background: #7f00ff; color: white; border: 1px solid rgba(255,255,255,0.1);">General Info</th>\n  </tr>\n  <tr>\n    <td rowspan="2" style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #00f2fe; font-weight: bold; background: rgba(0, 242, 254, 0.05); text-align: center; vertical-align: middle; width: 100px;">\n      Row Span 2<br>(rowspan=&quot;2&quot;)\n    </td>\n    <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color:#cbd5e1;">Top Content Row</td>\n  </tr>\n  <tr>\n    <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); color:#cbd5e1;">Bottom Content Row</td>\n  </tr>\n</table>`;
          }
        }
      }
    ]
  },
  {
    category: "Forms & Inputs",
    tags: [
      {
        name: "<input> Types",
        desc: "Gathers input data from users. Changing the 'type' attribute drastically shifts behavior.",
        controls: [
          { type: "select", id: "inp-type", label: "Input Type", options: ["text", "password", "email", "checkbox", "radio", "color", "range", "date"], value: "text" },
          { type: "text", id: "inp-placeholder", label: "Placeholder Text", value: "Type details..." }
        ],
        customCompiler: (vals) => {
          const type = vals['inp-type'];
          const placeholder = vals['inp-placeholder'];
          
          if (type === "checkbox" || type === "radio") {
            return `<label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:14px; color:#cbd5e1;">\n  <input type="${type}" name="ex-group" />\n  <span>Select option (${type})</span>\n</label>`;
          } else if (type === "color") {
            return `<div style="display:flex; align-items:center; gap:10px;">\n  <span style="font-size:13px; color:#cbd5e1;">Pick Color:</span>\n  <input type="color" value="#00f2fe" style="border:none; width:45px; height:35px; border-radius:4px; cursor:pointer; background:transparent;" />\n</div>`;
          } else if (type === "range") {
            return `<div style="width: 100%; display:flex; flex-direction:column; gap:4px;">\n  <span style="font-size:12px; color:#94a3b8;">Adjust Slider:</span>\n  <input type="range" min="0" max="100" value="50" style="width:100%;" />\n</div>`;
          } else {
            return `<input type="${type}" placeholder="${placeholder}" style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; padding: 10px 14px; color: white; outline: none; font-size: 13.5px; transition: 0.2s;" onfocus="this.style.borderColor='#00f2fe'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'" />`;
          }
        }
      },
      {
        name: "<select> & <textarea>",
        desc: "<select> creates drop-down lists. <textarea> defines multi-line text input fields.",
        controls: [
          { type: "select", id: "form-element", label: "Form Control Type", options: ["Dropdown list (select)", "Text area (textarea)"], value: "Dropdown list (select)" }
        ],
        customCompiler: (vals) => {
          if (vals['form-element'] === "Dropdown list (select)") {
            return `<select style="width: 100%; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; padding: 10px 14px; color: white; outline: none; font-size: 13.5px; cursor:pointer;">\n  <option>Choose Option A</option>\n  <option>Choose Option B</option>\n  <option>Choose Option C</option>\n</select>`;
          } else {
            return `<textarea placeholder="Enter description details..." style="width: 100%; height: 80px; background: #0f172a; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; padding: 10px 14px; color: white; outline: none; font-size: 13.5px; resize: none; font-family:sans-serif;" onfocus="this.style.borderColor='#00f2fe'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'"></textarea>`;
          }
        }
      }
    ]
  },
  {
    category: "Lists & Details",
    tags: [
      {
        name: "<ul>, <ol>, <li>",
        desc: "<ul> represents unordered bulleted lists. <ol> represents ordered numbered lists. Each item inside is grouped in an <li>.",
        controls: [
          { type: "select", id: "list-tag", label: "List Type Tag", options: ["ul", "ol"], value: "ul" },
          { type: "range", id: "list-count", label: "List Items Count", min: 1, max: 5, unit: "", value: 3 }
        ],
        customCompiler: (vals) => {
          const tag = vals['list-tag'];
          const count = parseInt(vals['list-count']);
          
          let listItems = "";
          for (let i = 1; i <= count; i++) {
            listItems += `  <li style="margin-bottom: 6px; color:#cbd5e1;">List Element Entry ${i}</li>\n`;
          }
          
          return `<${tag} style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.5;">\n${listItems}</${tag}>`;
        }
      },
      {
        name: "<details> & <summary>",
        desc: "Creates disclosure widgets that expand/collapse to reveal details when toggled.",
        controls: [
          { type: "text", id: "det-head", label: "Summary Header", value: "Click to reveal secret note" },
          { type: "text", id: "det-body", label: "Hidden Description content", value: "This is some bonus documentation only seen when toggled open!" }
        ],
        customCompiler: (vals) => {
          return `<details style="border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.02); border-radius: 6px; padding: 10px; cursor: pointer; font-size: 13.5px; transition: 0.2s;" ontoggle="this.style.background = this.open ? 'rgba(0, 242, 254, 0.05)' : 'rgba(255,255,255,0.02)'">\n  <summary style="font-weight: bold; color: #00f2fe; outline:none; user-select:none;">${vals['det-head']}</summary>\n  <p style="margin-top: 8px; margin-bottom: 0; color: #94a3b8; line-height:1.5;">${vals['det-body']}</p>\n</details>`;
        }
      }
    ]
  }
];
