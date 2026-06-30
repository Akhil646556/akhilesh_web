// HTML Reference Database for HTML A-Z Reference Tab
const htmlTagsData = [
  {
    category: "🎓 Introduction & Guides",
    tags: [
      {
        name: "1. Introduction to HTML",
        desc: "Learn what HTML is, its history, versions, and role in modern web development.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-question-circle"></i> What is HTML?</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
              <strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>. It is the absolute foundation of the World Wide Web. Every website you visit, from Google to social media networks, uses HTML to structure the page content.
            </p>
            <p style="color: var(--text-muted); line-height: 1.6;">
              Think of HTML as the **skeleton** of a house. CSS is the paint, tiles, and furniture (styling), and JavaScript is the electricity and plumbing (interactivity). Without HTML, there is no webpage!
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-history"></i> History & Versions of HTML</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              HTML was created by physicist **Tim Berners-Lee** at CERN in 1991 to help researchers share documents. Since then, it has evolved through several versions:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><strong>HTML 1.0 & 2.0 (1991-1995):</strong> Basic text sharing, links, and simple formatting.</li>
              <li><strong>HTML 3.2 & 4.01 (1997-1999):</strong> Added support for tables, scripts, styling, and forms.</li>
              <li><strong>XHTML (2000):</strong> A stricter, XML-based version of HTML that required perfect syntax.</li>
              <li><strong>HTML5 (2014 - Present):</strong> The modern standard. It brought native support for video, audio, layout elements (like header, footer, main), canvas drawing, and mobile-friendly responsiveness.</li>
            </ul>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-emerald); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-bolt"></i> Why HTML5 is Awesome</h3>
            <p style="color: var(--text-main); line-height: 1.6;">
              HTML5 eliminated the need for external plugins like Flash for watching videos or drawing graphics. It made webpages load faster, improved mobile device support, and introduced semantic elements that make it much easier for search engines (like Google) and screen readers (for blind users) to understand webpage structures.
            </p>
          </div>
        `
      },
      {
        name: "2. HTML Page Structure",
        desc: "Understand the basic anatomy of an HTML document and what each element does.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-file-code"></i> The Basic Shell</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
              Every HTML page starts with a standard set of tags (the "boilerplate"). Here is how it looks:
            </p>
            <pre style="background: var(--bg-primary); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 13px; color: var(--accent-cyan); overflow-x: auto;">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My First Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;p&gt;This is my webpage content.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-sitemap"></i> Explaining the Key Sections</h3>
            <div style="display: flex; flex-direction: column; gap: 16px; color: var(--text-main); line-height: 1.6;">
              <div>
                <strong style="color: var(--accent-cyan); font-family: var(--font-mono);">&lt;!DOCTYPE html&gt;</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-left: 10px;">Tells the web browser that this file is a modern HTML5 document so it renders correctly.</p>
              </div>
              <div>
                <strong style="color: var(--accent-cyan); font-family: var(--font-mono);">&lt;html lang="en"&gt;</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-left: 10px;">The root container of the page. The <code>lang="en"</code> attribute helps search engines and translation tools know the language.</p>
              </div>
              <div>
                <strong style="color: var(--accent-cyan); font-family: var(--font-mono);">&lt;head&gt;</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-left: 10px;">Contains invisible data about the page (metadata), such as the character set, links to stylesheet designs, and search engine title tags.</p>
              </div>
              <div>
                <strong style="color: var(--accent-cyan); font-family: var(--font-mono);">&lt;body&gt;</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-left: 10px;">Contains all the visible parts of the page: headings, paragraphs, images, tables, forms, and video players.</p>
              </div>
            </div>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-emerald); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-indent"></i> Whitespace & Formatting Rules</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              When writing HTML, remember these golden rules:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><strong>Nesting:</strong> Tags must close in the reverse order they were opened (e.g. <code>&lt;p&gt;&lt;strong&gt;text&lt;/strong&gt;&lt;/p&gt;</code> is correct).</li>
              <li><strong>Indentation:</strong> Always indent child tags by 2 spaces inside parent tags. It keeps your code clean and readable.</li>
              <li><strong>Whitespace:</strong> Browsers ignore multiple spaces and line breaks. If you want a line break, you must use a tag like <code>&lt;br&gt;</code>.</li>
            </ul>
          </div>
        `
      },
      {
        name: "3. Closing, Void & Nesting Tags",
        desc: "Learn about opening tags, closing tags, nested tags, and void (self-closing) elements.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-arrows-alt-h"></i> Elements vs Tags</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              An HTML **element** is the complete bundle of an opening tag, any attributes, the content inside, and a closing tag:
            </p>
            <div style="display: flex; gap: 10px; font-family: var(--font-mono); justify-content: center; background: var(--bg-primary); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); font-size: 14px;">
              <span style="color: var(--accent-cyan);">&lt;p class="intro"&gt;</span>
              <span style="color: white; font-weight: bold;">Hello World</span>
              <span style="color: var(--accent-cyan);">&lt;/p&gt;</span>
            </div>
            <div style="display: flex; justify-content: space-around; font-size: 12px; color: var(--text-muted); margin-top: 6px;">
              <span>Opening Tag + Attribute</span>
              <span>Content</span>
              <span>Closing Tag</span>
            </div>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-sliders-h"></i> HTML Attributes Explained</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              An <strong>attribute</strong> is like a setting or configuration for an HTML tag. It provides extra information about the tag and changes how it behaves or looks.
            </p>
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
              Think of the HTML tag as a person, and attributes as their clothes or accessories. For example, a person is just a person, but wearing a name tag (attribute) tells everyone their name!
            </p>
            <h4 style="color: white; font-size: 14px; margin-bottom: 8px;">The Syntax of Attributes:</h4>
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 12px;">
              Attributes are always written inside the <strong>opening tag</strong> of an element, using this exact format:
              <br><code style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 13.5px;">name="value"</code>
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><strong>Attribute Name:</strong> Tells the browser what setting you are changing (e.g. <code>href</code> for links, <code>src</code> for image files, or <code>class</code> for styling).</li>
              <li><strong>Attribute Value:</strong> The setting value itself, wrapped in double quotes (e.g. <code>"https://google.com"</code>, <code>"logo.png"</code>).</li>
            </ul>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-ban"></i> Void Elements (Self-Closing Tags)</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Most tags enclose content and need a closing tag (like <code>&lt;p&gt;...&lt;/p&gt;</code>). However, **Void Elements** do not have any nested content and therefore **never require a closing tag**.
            </p>
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
              Here are all the standard self-closing tags:
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; font-family: var(--font-mono); font-size: 13px;">
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;img&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;br&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;hr&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;input&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;link&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;meta&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;source&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;track&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;area&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;base&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;col&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;embed&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;param&gt;</span>
              <span style="background: var(--bg-primary); padding: 6px 12px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--accent-cyan);">&lt;wbr&gt;</span>
            </div>
            <p style="color: var(--text-muted); line-height: 1.6; margin-top: 12px; font-size: 13.5px;">
              <em>Note:</em> In modern HTML5, adding a trailing slash like <code>&lt;img /&gt;</code> is optional and acts exactly like <code>&lt;img&gt;</code>.
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-emerald); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-indent"></i> Element Relationships</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Elements nested inside other elements establish family-style relationships:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><strong>Parent:</strong> An element containing another element (e.g. <code>&lt;ul&gt;</code> is the parent of <code>&lt;li&gt;</code>).</li>
              <li><strong>Child:</strong> An element placed inside another element (e.g. <code>&lt;li&gt;</code> is a child of <code>&lt;ul&gt;</code>).</li>
              <li><strong>Sibling:</strong> Elements sharing the same parent at the same nesting level.</li>
            </ul>
          </div>
        `
      },
      {
        name: "4. DOM Tree & Nesting",
        desc: "Learn about the Document Object Model (DOM) and visualize HTML structures as tree diagrams.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-network-wired"></i> What is the DOM Tree?</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              When a browser loads your HTML file, it parses the markup and converts it into a structural representation called the **Document Object Model (DOM)**. This model maps out your nested elements as a tree of nodes.
            </p>
            <p style="color: var(--text-muted); line-height: 1.6;">
              JavaScript and CSS use this DOM structure to target elements, apply styles, and dynamically update pages without requiring a full page refresh.
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 16px;"><i class="fas fa-project-diagram"></i> DOM Visual Diagram</h3>
            
            <div class="dom-tree" style="display: flex; flex-direction: column; align-items: center; background: var(--bg-primary); border: 1px solid var(--border-color); padding: 24px; border-radius: 8px; font-family: var(--font-mono); font-size: 13px;">
              <div style="background: rgba(0,242,254,0.1); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); padding: 8px 16px; border-radius: 6px;">html</div>
              <div style="width: 2px; height: 20px; background: var(--border-color);"></div>
              <div style="display: flex; gap: 40px; justify-content: center; width: 100%;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <div style="background: rgba(79,172,254,0.1); border: 1px solid var(--accent-blue); color: var(--accent-blue); padding: 8px 16px; border-radius: 6px;">head</div>
                  <div style="width: 2px; height: 16px; background: var(--border-color);"></div>
                  <div style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-main); padding: 6px 12px; border-radius: 6px; font-size: 11px;">meta</div>
                  <div style="width: 2px; height: 8px; background: var(--border-color);"></div>
                  <div style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-main); padding: 6px 12px; border-radius: 6px; font-size: 11px;">title</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <div style="background: rgba(127,0,255,0.1); border: 1px solid var(--accent-violet); color: var(--accent-violet); padding: 8px 16px; border-radius: 6px;">body</div>
                  <div style="width: 2px; height: 16px; background: var(--border-color);"></div>
                  <div style="display: flex; gap: 16px;">
                    <div style="display: flex; flex-direction: column; align-items: center;">
                      <div style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-main); padding: 6px 12px; border-radius: 6px; font-size: 11px;">header</div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                      <div style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-main); padding: 6px 12px; border-radius: 6px; font-size: 11px;">main</div>
                      <div style="width: 2px; height: 12px; background: var(--border-color);"></div>
                      <div style="background: rgba(0,242,254,0.05); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 10px;">h1</div>
                      <div style="width: 2px; height: 8px; background: var(--border-color);"></div>
                      <div style="background: rgba(0,242,254,0.05); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 10px;">p</div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                      <div style="background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--text-main); padding: 6px 12px; border-radius: 6px; font-size: 11px;">footer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        name: "5. Character Encoding & Entities",
        desc: "Understand UTF-8, reserved characters, and special HTML character entities.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-font"></i> Character Encoding (UTF-8)</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Web browsers need to know how to translate the raw binary bytes of a file into actual text characters. **UTF-8** is the global character encoding standard for HTML. It supports almost every language character in the world, plus emojis!
            </p>
            <p style="color: var(--text-muted); line-height: 1.6;">
              Always declare character encoding at the very top of your <code>&lt;head&gt;</code> block:
              <br><code style="color: var(--accent-cyan);">&lt;meta charset="UTF-8"&gt;</code>
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-hashtag"></i> HTML Entities</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Certain characters are reserved for code syntax. For example, you cannot use the less-than symbol (<code>&lt;</code>) directly in text, because the browser thinks you are starting a tag. Instead, you must use **HTML character entities** that start with <code>&amp;</code> and end with <code>;</code>.
            </p>
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px; color: var(--text-main); margin-top: 15px;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="padding: 8px; color: var(--accent-cyan);">Symbol</th>
                  <th style="padding: 8px; color: var(--accent-cyan);">Entity Code</th>
                  <th style="padding: 8px; color: var(--accent-cyan);">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 8px; font-weight: bold;">&lt;</td>
                  <td style="padding: 8px; font-family: var(--font-mono);">&amp;lt;</td>
                  <td style="padding: 8px;">Less-than sign</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 8px; font-weight: bold;">&gt;</td>
                  <td style="padding: 8px; font-family: var(--font-mono);">&amp;gt;</td>
                  <td style="padding: 8px;">Greater-than sign</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 8px; font-weight: bold;">&amp;</td>
                  <td style="padding: 8px; font-family: var(--font-mono);">&amp;amp;</td>
                  <td style="padding: 8px;">Ampersand</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 8px; font-weight: bold;">"</td>
                  <td style="padding: 8px; font-family: var(--font-mono);">&amp;quot;</td>
                  <td style="padding: 8px;">Double quote</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 8px; font-weight: bold;">©</td>
                  <td style="padding: 8px; font-family: var(--font-mono);">&amp;copy;</td>
                  <td style="padding: 8px;">Copyright symbol</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 8px; font-weight: bold;">(space)</td>
                  <td style="padding: 8px; font-family: var(--font-mono);">&amp;nbsp;</td>
                  <td style="padding: 8px;">Non-breaking space</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        name: "6. Semantic HTML & SEO Basics",
        desc: "Learn about building meaningful structures, accessibility tags, and SEO tags.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-bullseye"></i> What is Semantic HTML?</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              **Semantic HTML** means using tags that describe their *meaning* and *purpose* instead of just their appearance.
            </p>
            <p style="color: var(--text-muted); line-height: 1.6;">
              For example, instead of styling a generic <code>&lt;div&gt;</code> to represent a footer, you should use the native <code>&lt;footer&gt;</code> element. This tells browsers, screen readers, and search engine spiders exactly what that section is.
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-search"></i> SEO Tags for Search Engine Optimization</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              To make your website show up on Google, you must include meta tags inside the <code>&lt;head&gt;</code>:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><strong>Canonical Link:</strong> <code>&lt;link rel="canonical" href="..."&gt;</code> prevents duplicate page issues.</li>
              <li><strong>Robots Meta:</strong> <code>&lt;meta name="robots" content="index, follow"&gt;</code> tells Google to crawl and index your page.</li>
              <li><strong>Description Meta:</strong> <code>&lt;meta name="description" content="..."&gt;</code> sets the snippet description text in search results.</li>
              <li><strong>Open Graph Tags:</strong> <code>&lt;meta property="og:title" content="..."&gt;</code> structures how link preview cards look when shared on Facebook or Twitter.</li>
            </ul>
          </div>
        `
      },
      {
        name: "7. Forms & Tables Guide",
        desc: "Master the structure of standard HTML inputs, forms, and grid layouts.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-wpforms"></i> HTML Forms Anatomy</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Forms gather data from users. A complete form combines a <code>&lt;form&gt;</code> wrapper with <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;button&gt;</code> elements:
            </p>
            <pre style="background: var(--bg-primary); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 13px; color: var(--accent-cyan); overflow-x: auto;">
&lt;form action="/submit" method="POST"&gt;
  &lt;label for="username"&gt;Username:&lt;/label&gt;
  &lt;input type="text" id="username" name="user" required&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>
            <p style="color: var(--text-muted); line-height: 1.6; margin-top: 12px; font-size: 13.5px;">
              <em>A11y Tip:</em> Always connect labels to inputs using the matching <code>for</code> and <code>id</code> attributes. It allows screen readers to declare input fields correctly.
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-table"></i> HTML Tables Structure</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Tables display grids of data. They should use semantic sections:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><code>&lt;thead&gt;</code>: Header group.</li>
              <li><code>&lt;tbody&gt;</code>: Data rows group.</li>
              <li><code>&lt;tfoot&gt;</code>: Bottom calculations summary group.</li>
            </ul>
          </div>
        `
      },
      {
        name: "8. Media, SVG & Canvas Guide",
        desc: "Learn about embeds, SVG vectors, HTML5 canvas drawing, and media elements.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-photo-video"></i> Media Elements</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              HTML5 introduced native media tags:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8; margin-bottom: 16px;">
              <li><code>&lt;video&gt;</code>: Renders a video file with inline playback controls.</li>
              <li><code>&lt;audio&gt;</code>: Embeds sound clips natively.</li>
              <li><code>&lt;picture&gt;</code>: Serves different optimized sizes of an image depending on screen sizes.</li>
            </ul>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-bezier-curve"></i> SVG (Scalable Vector Graphics)</h3>
            <p style="color: var(--text-main); line-height: 1.6;">
              SVG files use XML-based code tags to draw paths, circles, and polygons. Unlike PNG or JPEG images, SVGs are vector graphics, meaning they **never pixelate or lose quality** when stretched or zoomed.
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-emerald); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-paint-brush"></i> Canvas Element</h3>
            <p style="color: var(--text-main); line-height: 1.6;">
              The <code>&lt;canvas&gt;</code> element defines a drawing area. It serves as a container where you can draw graphs, build animations, or program interactive 2D/3D games on the fly using JavaScript code.
            </p>
          </div>
        `
      },
      {
        name: "9. Accessibility & ARIA Basics",
        desc: "Learn about ARIA labels, boolean attributes, global attributes, and event handlers.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-universal-access"></i> Web Accessibility (A11y)</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Accessibility means structuring webpages so that everyone, including people with visual, motor, or auditory impairments, can browse them.
            </p>
            <p style="color: var(--text-muted); line-height: 1.6;">
              Use **ARIA (Accessible Rich Internet Applications)** attributes like <code>aria-label</code> or <code>role="..."</code> to give assistive screen-readers additional information about elements.
            </p>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-globe"></i> Global Attributes</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Global attributes can be applied to **any** HTML element:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><code>id</code>: A unique page-wide identifier.</li>
              <li><code>class</code>: Groups elements for styling or selecting.</li>
              <li><code>style</code>: Inline CSS styles.</li>
              <li><code>title</code>: Tooltip descriptor hover string.</li>
              <li><code>data-*</code>: Custom variables for storing extra data (e.g. <code>data-tooltip</code>).</li>
            </ul>
          </div>
        `
      },
      {
        name: "10. Performance, Security & Validation",
        desc: "Understand HTML code cleanliness, standard guidelines, loading optimization, and file safety.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-tachometer-alt"></i> Performance Optimization</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              Help your pages load instantly by optimizing your markup structure:
            </p>
            <ul style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li><strong>Lazy Loading:</strong> Use <code>loading="lazy"</code> on non-critical images so they only download as the user scrolls to them.</li>
              <li><strong>Non-blocking Scripts:</strong> Place JavaScript files at the end of the body, or use <code>async</code> or <code>defer</code> attributes on scripts in the head.</li>
            </ul>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-shield-alt"></i> Security Tips</h3>
            <p style="color: var(--text-main); line-height: 1.6;">
              When opening external links in a new tab using <code>target="_blank"</code>, always add <code>rel="noopener"</code> or <code>rel="noreferrer"</code>. This prevents the newly opened page from controlling your website via JavaScript redirections.
            </p>
          </div>
        `
      },
      {
        name: "11. Interview Questions & Cheat Sheet",
        desc: "Master key definitions, look up elements at a glance, and view the learning path roadmap.",
        isGuide: true,
        content: `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-question-circle"></i> Common Interview Questions</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <strong style="color: white; font-size: 14px;">Q: What is the difference between inline and block-level elements?</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-top: 4px;">A: Block-level elements (like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>) start on a new line and stretch the full width available. Inline elements (like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>) stay on the same line and wrap to fit their content width.</p>
              </div>
              <div>
                <strong style="color: white; font-size: 14px;">Q: What does semantic mean in HTML?</strong>
                <p style="color: var(--text-muted); font-size: 13.5px; margin-top: 4px;">A: Semantic HTML means using tags that convey their structural meaning (like <code>&lt;article&gt;</code>) rather than just presentation (like <code>&lt;div&gt;</code>).</p>
              </div>
            </div>
          </div>

          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--accent-blue); font-size: 18px; margin-bottom: 12px;"><i class="fas fa-road"></i> Learning Roadmap</h3>
            <p style="color: var(--text-main); line-height: 1.6; margin-bottom: 12px;">
              To master HTML, follow this learning path:
            </p>
            <ol style="color: var(--text-muted); padding-left: 20px; line-height: 1.8;">
              <li>Learn basic document structures (head, body, titles).</li>
              <li>Learn basic text styling (headings, lists, links, paragraphs).</li>
              <li>Practice creating media tags (images, source lists).</li>
              <li>Master forms and user inputs.</li>
              <li>Shift completely to semantic layouts.</li>
              <li>Combine CSS styles with structural markup to build stunning frontends!</li>
            </ol>
          </div>
        `
      }
    ]
  },
  {
    category: "📦 Document Structure & Metadata",
    tags: [
      {
        name: "<html>",
        desc: "The container root element of all HTML webpages.",
        category: "Structure & Metadata",
        what: "The <html> tag wraps all the code of your webpage. It is the topmost parent container.",
        why: "We use it to declare the starting point of our document and help search engines identify the page language.",
        syntax: `<html lang="en">\n  <!-- All other web content goes here -->\n</html>`,
        attributes: [
          { name: "lang", desc: "Declares the language of the page content (e.g. lang=\"en\" for English)." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Putting code outside of the closing </html> tag.", "Forgetting the lang attribute."],
        practices: ["Always set a lang attribute to improve accessibility and SEO translation support."],
        accessibility: "Declaring the lang attribute allows screen readers to pronounce elements correctly.",
        seo: "Correct lang settings help search engines serve your pages to the correct geographical regions.",
        related: ["head", "body"]
      },
      {
        name: "<head>",
        desc: "Holds technical data (metadata) about the document that is not visible directly to users.",
        category: "Structure & Metadata",
        what: "The <head> tag holds important settings and configurations about the webpage.",
        why: "We use it to link styling files, set character encodings, and define the page title.",
        syntax: `<head>\n  <meta charset="UTF-8">\n  <title>Cool Webpage</title>\n</head>`,
        attributes: [
          { name: "profile", desc: "Deprecated. Specifies the URL of one or more metadata profiles." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Placing visible text tags (like <h1> or <p>) inside the head.", "Forgetting to close the head block before starting the body."],
        practices: ["Keep character set declarations at the absolute top of the head block."],
        accessibility: "Title tags within the head are read first by screen readers, orienting users.",
        seo: "Meta title and description tags in the head are highly critical SEO factors.",
        related: ["html", "title", "meta"]
      },
      {
        name: "<body>",
        desc: "Contains all the visible content (headings, paragraphs, images, buttons) of a webpage.",
        category: "Structure & Metadata",
        what: "The body tag acts as the main content box. Everything you see inside your browser is nested here.",
        why: "We use it to enclose all visible text, media players, forms, and layout containers.",
        syntax: `<body>\n  <h1>Welcome!</h1>\n  <p>Enjoy learning HTML.</p>\n</body>`,
        attributes: [
          { name: "onafterprint", desc: "Script to run after the document is printed." },
          { name: "onload", desc: "Script to run when the page finishes loading." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Having multiple body tags on a single page.", "Placing meta settings inside the body block."],
        practices: ["Only use a single body element per HTML page."],
        accessibility: "Ensure a logical semantic structure (header, main, footer) is inside the body.",
        seo: "All SEO-scanned visible keywords and content must sit directly within this tag.",
        related: ["html", "head"]
      },
      {
        name: "<title>",
        desc: "Defines the text shown in the browser's tab title bar and in search engine results.",
        category: "Structure & Metadata",
        what: "The <title> tag sets the name of the browser tab.",
        why: "We use it to name our page so users can find it in their open browser tabs.",
        syntax: `<title>HTML Reference Guide</title>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Putting other HTML tags inside the title.", "Forgetting to define a title, resulting in a blank tab or filename URL in search grids."],
        practices: ["Keep titles under 60 characters so search engines do not cut them short."],
        accessibility: "Screen readers read the title first. Make it descriptive and short.",
        seo: "Page titles are one of the most critical elements for search engine rankings.",
        related: ["head", "meta"]
      },
      {
        name: "<meta>",
        desc: "Specifies page descriptors like description, keywords, viewport scaling, and character set.",
        category: "Structure & Metadata",
        what: "The <meta> tag contains specific instructions for the browser and search engines.",
        why: "We use it to optimize mobile scaling, set character encoding, and provide search page snippets.",
        syntax: `<meta name="description" content="A comprehensive HTML reference guide.">`,
        attributes: [
          { name: "name", desc: "Specifies the name of the metadata property." },
          { name: "content", desc: "Specifies the value of the metadata property." },
          { name: "charset", desc: "Declares the character encoding (usually charset=\"UTF-8\")." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Defining metadata outside the head container.", "Missing the viewport meta, causing broken styling on mobile devices."],
        practices: ["Always include a viewport meta tag for responsive design support."],
        accessibility: "Proper viewport settings ensure mobile pinch-to-zoom accessibility works correctly.",
        seo: "Crucial for SEO. Set unique meta descriptions and Open Graph tags for social preview layouts.",
        related: ["head", "title"]
      },
      {
        name: "<link>",
        desc: "Links external resources (like CSS files, google fonts, and favicons) to the HTML document.",
        category: "Structure & Metadata",
        what: "The <link> tag is a bridge that connects outside files like stylesheets to your HTML.",
        why: "We use it to apply styling from external CSS files to keep our HTML files clean.",
        syntax: `<link rel="stylesheet" href="styles.css">`,
        attributes: [
          { name: "rel", desc: "Specifies the relationship between the document and linked file." },
          { name: "href", desc: "Specifies the URL target location of the linked file." },
          { name: "type", desc: "Specifies the MIME type of the linked resource." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it as a clickable link tag. Use <a> instead.", "Forgetting the rel=\"stylesheet\" attribute."],
        practices: ["Place style links inside the head so page designs load before page rendering starts."],
        accessibility: "No direct accessibility impact. Proper styling ensures color contrast.",
        seo: "Use link rel=\"canonical\" to inform search engines of the main duplicate page copy.",
        related: ["head", "style"]
      },
      {
        name: "<style>",
        desc: "Allows writing internal CSS stylesheet code directly inside an HTML file.",
        category: "Structure & Metadata",
        what: "The <style> tag holds CSS rules inside the HTML page.",
        why: "We use it to apply styling when we want to keep CSS rules in the same file rather than an external one.",
        syntax: `<style>\n  h1 {\n    color: cyan;\n  }\n</style>`,
        attributes: [
          { name: "media", desc: "Specifies what media device the styles are optimized for." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Writing HTML tags inside the style block.", "Writing styles inside the body block instead of the head."],
        practices: ["Keep style blocks inside the head. External stylesheets are generally preferred for larger sites."],
        accessibility: "Use style rules to implement visual elements without breaking accessibility trees.",
        seo: "Inline and internal styling can cause code bloat, slightly slowing crawl load times.",
        related: ["head", "link"]
      },
      {
        name: "<script>",
        desc: "Embeds client-side scripting files or inline JavaScript commands into the webpage.",
        category: "Structure & Metadata",
        what: "The <script> tag adds JavaScript code. It is the brain that makes things interactive.",
        why: "We use it to build actions, validate forms, play animations, and control page data.",
        syntax: `<script>\n  console.log('Script is active!');\n</script>`,
        attributes: [
          { name: "src", desc: "Specifies the URL target location of an external script file." },
          { name: "async", desc: "Loads scripts asynchronously while the browser builds the DOM tree." },
          { name: "defer", desc: "Loads scripts after the DOM document is fully built." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Adding html elements inside scripts.", "Forgetting defer attributes on head-based scripts, causing rendering blocks."],
        practices: ["Place heavy scripts at the end of the body or use the defer attribute in the head."],
        accessibility: "Use scripts to manage accessible dynamic focus toggles.",
        seo: "Ensure scripts do not hide main SEO text content from crawler indexing bots.",
        related: ["noscript"]
      },
      {
        name: "<base>",
        desc: "Specifies a base URL target for all relative hyperlink paths on a webpage.",
        category: "Structure & Metadata",
        what: "The <base> tag sets a starting path prefix for every hyperlink on your page.",
        why: "We use it to avoid typing long root URL paths repeatedly in anchor links.",
        syntax: `<base href="https://example.com/assets/" target="_blank">`,
        attributes: [
          { name: "href", desc: "The base URL for all relative URLs in the document." },
          { name: "target", desc: "The default target frame for all links." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using multiple base tags. Only one base tag is allowed per page.", "Forgetting that it affects all relative paths, including image paths."],
        practices: ["Only use a base tag if you need to resolve multiple asset subdirectories globally."],
        accessibility: "No direct accessibility impact. Make sure targets do not disorient screen users.",
        seo: "Can make crawler indexing path resolutions slightly more transparent.",
        related: ["head", "link"]
      },
      {
        name: "<noscript>",
        desc: "Defines alternative fallback content for users who have JavaScript deactivated in their browsers.",
        category: "Structure & Metadata",
        what: "The <noscript> tag displays a message if JavaScript is disabled in the browser.",
        why: "We use it to inform users that certain features will not work without JavaScript enabled.",
        syntax: `<noscript>\n  <p style="color: red;">JavaScript is required to view this app.</p>\n</noscript>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Putting scripts inside noscript blocks.", "Using it inside script blocks."],
        practices: ["Include helpful messages advising how to reactivate scripts in browser settings."],
        accessibility: "Essential fallback to help non-JS users navigate core web functionalities.",
        seo: "Provides text fallback descriptions that search engines can crawl even without executing JS.",
        related: ["script"]
      }
    ]
  },
  {
    category: "✏️ Text Content & Formatting",
    tags: [
      {
        name: "h1",
        desc: "Defines the most important (highest rank) heading on a webpage.",
        category: "Text Content",
        what: "The <h1> tag is like the main title of a book chapter. It should be the biggest heading on the page.",
        why: "We use it to establish clear context on what the page is about for both readers and search engines.",
        syntax: `<h1>HTML5 complete Reference</h1>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using multiple h1 tags on the same page.", "Using h1 tags simply to make text bigger. Use CSS size rules instead."],
        practices: ["Limit your page to one h1 element to ensure semantic clarity."],
        accessibility: "Screen readers rely heavily on headings to map page content for users.",
        seo: "The h1 is the single most important on-page text element for search engines.",
        related: ["h2", "h3", "h4", "h5", "h6"]
      },
      {
        name: "h2",
        desc: "Defines a second-level subheading on a webpage.",
        category: "Text Content",
        what: "The <h2> tag is like a chapter subtitle. It splits the page into main topics.",
        why: "We use it to group related paragraphs and content blocks into organized sections.",
        syntax: `<h2>Learning Text Content</h2>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Skipping heading hierarchy (e.g. skipping from an h1 directly to an h4)."],
        practices: ["Use h2 tags for all major sections of a page."],
        accessibility: "Helps screen reader users skip directly to relevant sections.",
        seo: "Useful for placing keyword variations into subheadings.",
        related: ["h1", "h3"]
      },
      {
        name: "h3",
        desc: "Defines a third-level subheading on a webpage.",
        category: "Text Content",
        what: "The <h3> tag acts as a subsection heading under an <h2> category.",
        why: "We use it to further organize large blocks of content into smaller parts.",
        syntax: `<h3>Void Tags Subsections</h3>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Nesting h3 headings directly under h1 headings without an h2 in between."],
        practices: ["Maintain sequential order when nesting subsections."],
        accessibility: "Contributes to a clear page heading map.",
        seo: "Signals subtopic relevance to search engine crawler bots.",
        related: ["h2", "h4"]
      },
      {
        name: "h4",
        desc: "Defines a fourth-level subheading on a webpage.",
        category: "Text Content",
        what: "The <h4> tag is a smaller subheading for nesting sub-topics inside an <h3>.",
        why: "We use it for highly granular content listings like widget titles or table subheadings.",
        syntax: `<h4>List element tag structure</h4>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for general bold text. Use <strong> instead."],
        practices: ["Only use h4 when you have deep nested content hierarchies."],
        accessibility: "Maintains screen reader structural map.",
        seo: "Allows optimizing deep subtopic index listings.",
        related: ["h3", "h5"]
      },
      {
        name: "h5",
        desc: "Defines a fifth-level subheading on a webpage.",
        category: "Text Content",
        what: "The <h5> tag is a deep subheading level, smaller than an <h4>.",
        why: "We use it for very deep technical document subdivisions.",
        syntax: `<h5>Subheading Level 5</h5>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it without establishing h1-h4 parent hierarchies first."],
        practices: ["Rarely needed; evaluate if layouts can be simplified before nesting this deeply."],
        accessibility: "Part of heading accessibility hierarchies.",
        seo: "Minor semantic index value.",
        related: ["h4", "h6"]
      },
      {
        name: "h6",
        desc: "Defines the sixth (lowest rank) heading level on a webpage.",
        category: "Text Content",
        what: "The <h6> tag is the smallest heading level supported by HTML.",
        why: "We use it for the deepest level of nested subheadings in complex documents.",
        syntax: `<h6>Subheading Level 6</h6>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for footer copyrights. Use <small> or <footer> instead."],
        practices: ["Only use in extremely complex nesting environments like technical manuals."],
        accessibility: "The final level in screen reader heading maps.",
        seo: "Very minor SEO weight.",
        related: ["h5"]
      },
      {
        name: "p",
        desc: "Defines a paragraph block of text.",
        category: "Text Content",
        what: "The <p> tag stands for paragraph. It wraps blocks of readable body text.",
        why: "We use it to group text lines together. Browsers automatically add spacing before and after paragraphs.",
        syntax: `<p>This is a paragraph of text explaining how HTML references work.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Nesting block-level elements like <div> or <table> inside a paragraph.", "Using empty <p></p> tags to create spacing. Use CSS margins instead."],
        practices: ["Keep paragraph blocks focused and limited to one main idea for readability."],
        accessibility: "Helps users parse body text smoothly. Never mix labels with structural paragraphs.",
        seo: "Contains the main body keywords that search engines index.",
        related: ["span", "br"]
      },
      {
        name: "span",
        desc: "An inline container used to group and style specific sections of text.",
        category: "Text Content",
        what: "The <span> tag is an inline box. It styles specific words within a sentence without breaking the line.",
        why: "We use it to color or style specific words or letters inside a paragraph.",
        syntax: `<p>Learn HTML at <span style="color: cyan; font-weight: bold;">CSS Studio</span> today!</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using span as a block-level container. Use <div> instead."],
        practices: ["Only use span for small, inline text groupings and styling modifications."],
        accessibility: "Adding a span does not change the accessibility tree unless roles are declared.",
        seo: "No direct SEO impact.",
        related: ["p", "div"]
      },
      {
        name: "br",
        desc: "Inserts a single line break in text content without starting a new paragraph.",
        category: "Text Content",
        what: "The <br> tag forces the text to start on a new line.",
        why: "We use it to format text lines where line spacing is critical, such as addresses or poems.",
        syntax: `<p>First Line<br>Second Line</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <br> to create vertical spacing between paragraphs. Use CSS margins instead."],
        practices: ["Only use br for structural text line splits (like writing addresses)."],
        accessibility: "Screen readers read line breaks as a brief pause. Do not overuse them.",
        seo: "No direct SEO impact.",
        related: ["p", "hr"]
      },
      {
        name: "hr",
        desc: "Renders a horizontal rule divider line to indicate a thematic break.",
        category: "Text Content",
        what: "The <hr> tag draws a line across the page to split sections.",
        why: "We use it to visually divide different topics or parts of a page.",
        syntax: `<p>Topic A</p>\n<hr>\n<p>Topic B</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using hr tags purely for borders. Use CSS border properties instead."],
        practices: ["Use hr to signal thematic content shifts in your document structure."],
        accessibility: "Browsers treat hr as a separator, notifying screen reader users of structural boundaries.",
        seo: "No direct SEO impact.",
        related: ["br", "div"]
      },
      {
        name: "pre",
        desc: "Renders preformatted text, preserving spaces, line breaks, and indentation exactly.",
        category: "Text Content",
        what: "The <pre> tag displays text exactly as you type it, including spaces and breaks.",
        why: "We use it to show code snippets or ASCII art where alignment is critical.",
        syntax: `<pre>\nLine 1\n  Indented Line 2\n</pre>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Nesting block-level elements inside a pre block."],
        practices: ["Combine pre with code tags to display programming source code on your pages."],
        accessibility: "Can cause wide horizontal scrolling on mobile devices, which can be difficult for some users.",
        seo: "No direct SEO weight.",
        related: ["code"]
      },
      {
        name: "code",
        desc: "Wraps text representing computer programming code, styled in a monospaced font.",
        category: "Text Content",
        what: "The <code> tag formats text to look like computer code.",
        why: "We use it to highlight code keywords or short code snippets inside a sentence.",
        syntax: `<p>Run the <code>npm run dev</code> command.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting that code is an inline tag. Wrap it in a <pre> tag for multi-line blocks."],
        practices: ["Use code for computer keywords, file names, and short programming snippets."],
        accessibility: "Screen readers recognize the code tag and notify users.",
        seo: "No direct SEO weight.",
        related: ["pre", "kbd"]
      },
      {
        name: "samp",
        desc: "Represents sample output from a computer program or system.",
        category: "Text Content",
        what: "The <samp> tag is used to show the result or output of running code.",
        why: "We use it to document system errors or success messages from code runs.",
        syntax: `<p>System says: <samp>Error 404: Page Not Found</samp></p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for input keys. Use <kbd> for inputs."],
        practices: ["Combine with pre or code tags for highly detailed terminal log documentation."],
        accessibility: "Helps users distinguish computer output from the rest of the text.",
        seo: "No direct SEO impact.",
        related: ["code", "kbd"]
      },
      {
        name: "kbd",
        desc: "Represents keyboard keys or user inputs that should be pressed.",
        category: "Text Content",
        what: "The <kbd> tag formats text to show keys you need to press on your keyboard.",
        why: "We use it to document keyboard shortcuts clearly (like Ctrl + C).",
        syntax: `<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for output message text. Use <samp> instead."],
        practices: ["Style keyboard keys in CSS to look like physical buttons."],
        accessibility: "Indicates user input requirements clearly to screen readers.",
        seo: "No direct SEO impact.",
        related: ["code", "samp"]
      },
      {
        name: "var",
        desc: "Represents a variable in a mathematical expression or programming context.",
        category: "Text Content",
        what: "The <var> tag formats text to look like a variable (usually in italic font).",
        why: "We use it when explaining algebra formulas or coding equations.",
        syntax: `<p>Find the value of <var>x</var> in <var>y</var> = <var>mx</var> + <var>b</var>.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it as a styling tag for italic text. Use <em> or CSS instead."],
        practices: ["Only use for mathematical formulas or programming variables."],
        accessibility: "Helps screen readers define mathematical variables.",
        seo: "No direct SEO impact.",
        related: ["code"]
      },
      {
        name: "blockquote",
        desc: "Represents a section of content quoted from another source.",
        category: "Text Content",
        what: "The <blockquote> tag wraps long quotes that come from other books or websites.",
        why: "We use it to indent and highlight quotes in a distinct block-level container.",
        syntax: `<blockquote cite="https://example.com">\n  "Learning HTML is the key to web design."\n</blockquote>`,
        attributes: [
          { name: "cite", desc: "Specifies the URL source of the quoted content." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it simply to indent text. Use CSS margin padding instead."],
        practices: ["Always provide the cite attribute pointing to the source URL if applicable."],
        accessibility: "Screen readers announce quotes, giving users helpful structural cues.",
        seo: "Search engines recognize quoted blocks and credit sources correctly.",
        related: ["q", "cite"]
      },
      {
        name: "q",
        desc: "Defines a short inline quotation.",
        category: "Text Content",
        what: "The <q> tag is used for short quotes within a sentence. Browsers automatically put quotes around it.",
        why: "We use it to quote small phrases without breaking the text flow onto a new line.",
        syntax: `<p>My teacher said, <q>Practice makes perfect</q> and I agree.</p>`,
        attributes: [
          { name: "cite", desc: "Specifies the URL source of the quote." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Manually typing quotation marks inside the <q> tag. The browser adds them automatically."],
        practices: ["Use for inline quotes only. For block-level quotes, use <blockquote>."],
        accessibility: "Announced as a quote by screen readers.",
        seo: "No direct SEO impact.",
        related: ["blockquote", "cite"]
      },
      {
        name: "cite",
        desc: "Defines the title of a work (e.g. book, film, song, painting).",
        category: "Text Content",
        what: "The <cite> tag indicates the name of a book, movie, or song.",
        why: "We use it to cite and italicize creative works that we reference.",
        syntax: `<p>I read <cite>The HTML Guide</cite> last week.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for a person's name. It should only be used for the title of a work."],
        practices: ["Use it to wrap titles of creative works for proper semantics."],
        accessibility: "Screen readers read cited titles with distinct emphasis.",
        seo: "No direct SEO weight.",
        related: ["blockquote", "q"]
      },
      {
        name: "abbr",
        desc: "Defines an abbreviation or an acronym.",
        category: "Text Content",
        what: "The <abbr> tag marks acronyms and shows their full meaning when you hover over them.",
        why: "We use it to define acronyms (like HTML) so users can see what they stand for.",
        syntax: `<p>I love <abbr title="HyperText Markup Language">HTML</abbr>!</p>`,
        attributes: [
          { name: "title", desc: "Specifies the full expansion or definition of the abbreviation." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting the title attribute, which makes the tag useless for definition hover lookups."],
        practices: ["Always provide the full title definition inside the title attribute."],
        accessibility: "Highly critical for screen reader users to understand acronyms.",
        seo: "Helps search engines map keywords to their full abbreviations.",
        related: ["dfn"]
      },
      {
        name: "address",
        desc: "Provides contact information for a person or organization.",
        category: "Text Content",
        what: "The <address> tag holds contact details like physical addresses, phone numbers, or emails.",
        why: "We use it to group contact information semantically in footers or contact pages.",
        syntax: `<address>\n  Email: <a href="mailto:info@example.com">info@example.com</a><br>\n  New York, USA\n</address>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for random physical addresses that do not represent contact info for the site owner."],
        practices: ["Wrap your main business contact info in an address tag inside the footer."],
        accessibility: "Screen readers declare the address block boundaries to users.",
        seo: "Highly useful for local SEO and mapping business directories.",
        related: ["footer"]
      },
      {
        name: "b",
        desc: "Draws attention to text by rendering it bold, without implying extra importance.",
        category: "Text Content",
        what: "The <b> tag makes text bold.",
        why: "We use it to make text stand out visually without signaling that it is highly important.",
        syntax: `<p>This is <b>bold</b> text.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <b> for highly important text. Use <strong> instead so screen readers emphasize it."],
        practices: ["Use <b> as a styling fallback only. Use CSS font-weight for layout bolding."],
        accessibility: "Screen readers do not emphasize <b> tags. Use <strong> for emphasis.",
        seo: "No SEO weight.",
        related: ["strong", "i"]
      },
      {
        name: "strong",
        desc: "Renders text bold and signals that the content has high importance or urgency.",
        category: "Text Content",
        what: "The <strong> tag makes text bold and tells screen readers that this text is super important.",
        why: "We use it for warning messages or critical words in a sentence.",
        syntax: `<p><strong>Warning:</strong> Don't touch the wires.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using strong purely for styling bold headers. Use heading tags instead."],
        practices: ["Only wrap words that need genuine semantic emphasis inside strong."],
        accessibility: "Screen readers emphasize strong words when reading sentences.",
        seo: "Signals keyword importance to search engine bots.",
        related: ["b", "em"]
      },
      {
        name: "i",
        desc: "Renders text in italics, typically used to indicate a technical term or alternative voice.",
        category: "Text Content",
        what: "The <i> tag makes text italic.",
        why: "We use it to show technical terms, foreign words, or thoughts in italic without implying emphasis.",
        syntax: `<p>The word <i>HTML</i> is an acronym.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <i> for emphasized terms. Use <em> instead for semantic emphasis."],
        practices: ["Commonly used by developers to wrap font icon classes (e.g. <i class=\"fa fa-home\"></i>)."],
        accessibility: "Screen readers read it without emphasis. Use <em> for vocal emphasis.",
        seo: "No direct SEO impact.",
        related: ["em", "b"]
      },
      {
        name: "em",
        desc: "Italicizes text and indicates semantic emphasis or stress.",
        category: "Text Content",
        what: "The <em> tag makes text italic and tells screen readers to stress these words vocally.",
        why: "We use it when the meaning of a sentence shifts depending on which words are stressed.",
        syntax: `<p>You <em>must</em> complete this step.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using em for book titles. Use <cite> instead."],
        practices: ["Use em when vocal stress on a word changes the semantic context."],
        accessibility: "Announced with emphasis by screen readers.",
        seo: "Slight search crawler weight.",
        related: ["i", "strong"]
      },
      {
        name: "u",
        desc: "Renders text with an underline, representing non-textual annotations (like misspelling).",
        category: "Text Content",
        what: "The <u> tag underlines text.",
        why: "We use it to label misspelled words or specify book citations.",
        syntax: `<p>Correct the <u>misspelled</u> word.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <u> in body paragraphs. It makes users think the text is a link, leading to frustration."],
        practices: ["Avoid using <u> where it can be confused with hyperlinks."],
        accessibility: "Can cause confusion for colorblind users who identify links by underlines.",
        seo: "No direct SEO impact.",
        related: ["a", "ins"]
      },
      {
        name: "mark",
        desc: "Defines text marked or highlighted for reference purposes.",
        category: "Text Content",
        what: "The <mark> tag highlights text in yellow, like a physical highlighter pen.",
        why: "We use it to show search match highlights or draw quick attention to specific terms.",
        syntax: `<p>Search results: We found <mark>HTML</mark> details.</p>`,
        attributes: [],
        support: { chrome: "6.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Using mark for general text block styling. Use CSS background-color instead."],
        practices: ["Use for temporary highlights like matching search keyword terms."],
        accessibility: "Screen readers announce highlighted text blocks to users.",
        seo: "No direct SEO weight.",
        related: ["span"]
      },
      {
        name: "small",
        desc: "Renders text one size smaller, representing side-comments or fine print (like copyrights).",
        category: "Text Content",
        what: "The <small> tag makes text smaller, typically used for legal disclaimers or copyright text.",
        why: "We use it to format fine print at the bottom of forms or footers.",
        syntax: `<p><small>© 2026 CSS Studio. All rights reserved.</small></p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <small> repeatedly for main body paragraphs to save space. Use CSS font-size instead."],
        practices: ["Only use for fine print, disclaimers, or licensing notes."],
        accessibility: "Visually indicates secondary importance. Ensure text remains readable.",
        seo: "No direct SEO impact.",
        related: ["sub", "sup"]
      },
      {
        name: "del",
        desc: "Represents text deleted from a document, typically rendered with a strikethrough.",
        category: "Text Content",
        what: "The <del> tag draws a line through text, showing that it was deleted or changed.",
        why: "We use it for shopping discounts or version updates to show what was removed.",
        syntax: `<p>Was <del>$50</del> now $30!</p>`,
        attributes: [
          { name: "cite", desc: "A URL explaining the reason for deletion." },
          { name: "datetime", desc: "Specifies the date and time when the deletion was made." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for style strikethrough. Use CSS text-decoration instead."],
        practices: ["Combine with <ins> to show old and new values side-by-side."],
        accessibility: "Screen readers notify users of deleted text segments.",
        seo: "No direct SEO impact.",
        related: ["ins", "strike"]
      },
      {
        name: "ins",
        desc: "Represents text inserted into a document, typically rendered with an underline.",
        category: "Text Content",
        what: "The <ins> tag underlines text to show it was added to the document.",
        why: "We use it in combination with <del> to track editorial changes or updates.",
        syntax: `<p>Price: <del>$50</del> <ins>$30</ins></p>`,
        attributes: [
          { name: "cite", desc: "A URL explaining the reason for the insertion." },
          { name: "datetime", desc: "Specifies the date and time when the insertion was made." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Confusing it with <u>. Use <ins> when content is actually added to a document update."],
        practices: ["Use the datetime attribute to track document changes over time."],
        accessibility: "Screen readers announce inserted text to users.",
        seo: "No direct SEO impact.",
        related: ["del", "u"]
      },
      {
        name: "sub",
        desc: "Renders text as a subscript (slightly lower than normal text line).",
        category: "Text Content",
        what: "The <sub> tag pushes text slightly lower, making it smaller (like the 2 in H2O).",
        why: "We use it for chemical formulas and scientific indexing.",
        syntax: `<p>Water formula is H<sub>2</sub>O.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for layout adjustments. Use CSS alignment instead."],
        practices: ["Only use for scientific formulas or mathematical index subscripts."],
        accessibility: "Helps screen readers pronounce formulas correctly.",
        seo: "No direct SEO impact.",
        related: ["sup", "small"]
      },
      {
        name: "sup",
        desc: "Renders text as a superscript (slightly higher than normal text line).",
        category: "Text Content",
        what: "The <sup> tag pushes text higher, making it smaller (like the exponent in x²).",
        why: "We use it for footnotes or mathematical exponents.",
        syntax: `<p>Equation: x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup></p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for layout styling. Use CSS instead."],
        practices: ["Use for footnotes and mathematical equations."],
        accessibility: "Allows screen readers to read mathematical exponents correctly.",
        seo: "No direct SEO impact.",
        related: ["sub"]
      },
      {
        name: "bdi",
        desc: "Isolates a span of text that might be formatted in a different direction (like Arabic or Hebrew).",
        category: "Text Content",
        what: "The <bdi> tag isolates text that reads right-to-left, preventing it from messing up left-to-right text.",
        why: "We use it when rendering user-submitted names or text in multiple languages on the same page.",
        syntax: `<p>User <bdi>إيان</bdi> has posted a comment.</p>`,
        attributes: [],
        support: { chrome: "16.0+", firefox: "10.0+", safari: "6.0+", edge: "79.0+" },
        mistakes: ["Confusing <bdi> with <bdo>. Use <bdi> when you don't know the exact text direction in advance."],
        practices: ["Wrap user-generated content that could contain international characters in bdi tags."],
        accessibility: "Ensures screen readers read international languages in the correct direction.",
        seo: "No direct SEO impact.",
        related: ["bdo"]
      },
      {
        name: "bdo",
        desc: "Overrides the current text direction, forcing layout rendering in a specified direction.",
        category: "Text Content",
        what: "The <bdo> tag overrides the text direction, forcing it left-to-right or right-to-left.",
        why: "We use it when we want to explicitly flip the writing direction of a word.",
        syntax: `<bdo dir="rtl">This text will be reversed</bdo>`,
        attributes: [
          { name: "dir", desc: "Required. Specifies the text direction: 'ltr' (left-to-right) or 'rtl' (right-to-left)." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting the dir attribute, which renders the tag useless."],
        practices: ["Only use when you need to force a text direction override."],
        accessibility: "Forces screen readers to speak the text in the specified direction.",
        seo: "No direct SEO impact.",
        related: ["bdi"]
      },
      {
        name: "ruby",
        desc: "Wraps text that has small pronunciation characters printed above it, common in East Asian languages.",
        category: "Text Content",
        what: "The <ruby> tag is used to display pronunciation guides above Japanese or Chinese characters.",
        why: "We use it to help readers pronounce foreign characters correctly.",
        syntax: `<ruby>\n  漢 <rt>かん</rt>\n</ruby>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "38.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Forgetting to wrap individual guides in <rt> tags."],
        practices: ["Provide <rp> tags as fallbacks for older web browsers."],
        accessibility: "Helps users reading East Asian characters pronounce them.",
        seo: "No direct SEO impact.",
        related: ["rt", "rp"]
      },
      {
        name: "rt",
        desc: "Defines the pronunciation explanation text inside a <ruby> element.",
        category: "Text Content",
        what: "The <rt> tag holds the pronunciation guide text that floats above East Asian characters.",
        why: "We use it inside <ruby> to specify the pronunciation of characters.",
        syntax: `<ruby>日 <rt>に</rt></ruby>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "38.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Using it outside of a <ruby> tag structure."],
        practices: ["Keep phonetic helper characters clean and accurate."],
        accessibility: "Assists assistive screen readers in pronouncing East Asian text.",
        seo: "No direct SEO impact.",
        related: ["ruby", "rp"]
      },
      {
        name: "rp",
        desc: "Defines parentheses fallbacks to display around ruby characters in browsers that do not support ruby rendering.",
        category: "Text Content",
        what: "The <rp> tag hides parenthetical fallbacks from ruby-supporting browsers.",
        why: "We use it to show parentheses around the phonetic text on older web browsers.",
        syntax: `<ruby>\n  漢 <rp>(</rp><rt>かん</rt><rp>)</rp>\n</ruby>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "38.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Putting main content inside <rp> tags. Only put fallback parentheses inside them."],
        practices: ["Always include rp fallbacks to ensure compatibility with older browser systems."],
        accessibility: "Provides readable fallback structure for screen readers on unsupported devices.",
        seo: "No direct SEO impact.",
        related: ["ruby", "rt"]
      },
      {
        name: "wbr",
        desc: "Defines a word-break opportunity where the browser can wrap lines if needed.",
        category: "Text Content",
        what: "The <wbr> tag tells the browser: 'If this word is too long, wrap it here.'",
        why: "We use it to prevent long URLs or terms from breaking page layouts on small screens.",
        syntax: `<p>ThisIsAVeryLongWordThatWeCan<wbr>BreakIfNecessary.</p>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "3.0+", safari: "4.0+", edge: "12.0+" },
        mistakes: ["Using it like a <br> tag. It only breaks if there is not enough space on the line."],
        practices: ["Use wbr inside long URLs or technical words to keep layouts responsive on mobile."],
        accessibility: "Keeps layouts readable and prevents overflow issues on mobile screens.",
        seo: "No direct SEO impact.",
        related: ["br"]
      }
    ]
  },
  {
    category: "📋 Lists",
    tags: [
      {
        name: "ul",
        desc: "Defines an unordered (bulleted) list.",
        category: "Lists",
        what: "The <ul> tag stands for Unordered List. It creates a list with bullet points.",
        why: "We use it to group related items together when their order does not matter.",
        syntax: `<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Placing text directly inside the <ul> tag without wrapping it in an <li> tag."],
        practices: ["Only nesting <li> elements directly as immediate children of ul."],
        accessibility: "Screen readers notify users of lists and announce the total item count.",
        seo: "Helps search engine web crawlers index content lists cleanly.",
        related: ["ol", "li"]
      },
      {
        name: "ol",
        desc: "Defines an ordered (numbered) list.",
        category: "Lists",
        what: "The <ol> tag stands for Ordered List. It creates a list numbered 1, 2, 3.",
        why: "We use it for step-by-step instructions or recipe tutorials where order is critical.",
        syntax: `<ol>\n  <li>Step One</li>\n  <li>Step Two</li>\n</ol>`,
        attributes: [
          { name: "type", desc: "Sets numbering style: '1', 'a', 'A', 'i', or 'I'." },
          { name: "reversed", desc: "Reverses numbering order (e.g. 3, 2, 1)." },
          { name: "start", desc: "Sets a custom starting number." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using manually typed numbers in list items instead of letting <ol> generate them."],
        practices: ["Use the start attribute if you need to split a list but continue numbering."],
        accessibility: "Notifies screen readers of list sequences and order.",
        seo: "Helps web crawlers parse step-by-step instructions.",
        related: ["ul", "li"]
      },
      {
        name: "li",
        desc: "Defines a list item inside an ordered or unordered list.",
        category: "Lists",
        what: "The <li> tag stands for List Item. It holds the content of an item in a list.",
        why: "We use it to wrap individual entries inside <ul> or <ol> elements.",
        syntax: `<ul>\n  <li>Item Content</li>\n</ul>`,
        attributes: [
          { name: "value", desc: "Sets a custom value override for ordered list numbering." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <li> tags outside of a <ul> or <ol> parent container."],
        practices: ["Always keep li tags nested directly inside list parent elements."],
        accessibility: "Proper nesting allows screen readers to announce list structures.",
        seo: "No direct SEO weight.",
        related: ["ul", "ol"]
      },
      {
        name: "dl",
        desc: "Defines a description list, wrapping terms and descriptions.",
        category: "Lists",
        what: "The <dl> tag wraps description lists, like dictionary terms and their definitions.",
        why: "We use it to group glossary terms with their explanations.",
        syntax: `<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <li> elements inside a description list."],
        practices: ["Only nest dt and dd elements inside dl structures."],
        accessibility: "Assists screen readers in defining key terms.",
        seo: "Helps search engines understand terminology structures.",
        related: ["dt", "dd"]
      },
      {
        name: "dt",
        desc: "Defines a term (name) inside a description list.",
        category: "Lists",
        what: "The <dt> tag marks a term or word that will be defined.",
        why: "We use it to label words inside a <dl> glossary list.",
        syntax: `<dl>\n  <dt>CSS</dt>\n  <dd>Styles the webpage</dd>\n</dl>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <dt> outside of a <dl> parent element."],
        practices: ["Always follow a dt element with at least one dd definition element."],
        accessibility: "Allows screen reader navigation directly to glossary terms.",
        seo: "Associates terms with descriptions for semantic crawling.",
        related: ["dl", "dd"]
      },
      {
        name: "dd",
        desc: "Defines the description or definition of a term inside a description list.",
        category: "Lists",
        what: "The <dd> tag holds the definition text for the term in a glossary list.",
        why: "We use it to explain terms labeled by <dt> elements.",
        syntax: `<dl>\n  <dt>HTML</dt>\n  <dd>Web page structure language</dd>\n</dl>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it without an preceding <dt> tag."],
        practices: ["Keep definitions clear and relevant to the term block."],
        accessibility: "Nests the explanation under the term in screen readers.",
        seo: "No direct SEO weight.",
        related: ["dl", "dt"]
      }
    ]
  },
  {
    category: "🔗 Links & Navigation",
    tags: [
      {
        name: "a",
        desc: "Defines a hyperlink to connect to other webpages, files, email addresses, or locations.",
        category: "Links & Navigation",
        what: "The <a> tag creates clickable link buttons.",
        why: "We use it to navigate users to other websites or sections of our own site.",
        syntax: `<a href="https://example.com" target="_blank">Go to website</a>`,
        attributes: [
          { name: "href", desc: "Required. Specifies the target URL of the link." },
          { name: "target", desc: "Specifies where to open the link (e.g. target=\"_blank\" for new tab)." },
          { name: "download", desc: "Informs the browser to download the link target file instead of navigating to it." },
          { name: "rel", desc: "Specifies relationship. (e.g. rel=\"noopener\" for security)." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting the href attribute, rendering the link unclickable.", "Using target=\"_blank\" without rel=\"noopener\" for security."],
        practices: ["Make link text descriptive. Avoid generic 'click here' labels."],
        accessibility: "Ensure screen reader users know link destinations by using descriptive text.",
        seo: "Allows search engines to crawl between pages. Backlinks transfer SEO page weight.",
        related: ["nav"]
      },
      {
        name: "nav",
        desc: "Defines a section containing navigation links.",
        category: "Links & Navigation",
        what: "The <nav> tag holds navigation menus (like headers or sidebar menus).",
        why: "We use it to help search engines and screen readers find the main site navigation immediately.",
        syntax: `<nav>\n  <a href="#home">Home</a> |\n  <a href="#about">About</a>\n</nav>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Putting all page link elements inside a nav tag. Only use it for main navigation menus."],
        practices: ["Wrap main header menus and footer utility link blocks inside nav elements."],
        accessibility: "Screen readers announce the nav section, allowing users to jump straight to site navigation links.",
        seo: "Helps search engine bots map the core page architecture index.",
        related: ["a"]
      }
    ]
  },
  {
    category: "🖼️ Images & Multimedia",
    tags: [
      {
        name: "img",
        desc: "Embeds an image into the webpage document.",
        category: "Images & Multimedia",
        what: "The <img> tag places a picture onto the page.",
        why: "We use it to display visual diagrams, logos, and photos.",
        syntax: `<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" alt="Graphic background" width="200" />`,
        attributes: [
          { name: "src", desc: "Required. Specifies the path path/URL of the image." },
          { name: "alt", desc: "Required. Alternative text description for screen readers and search bots." },
          { name: "width", desc: "Sets width height in pixels." },
          { name: "height", desc: "Sets vertical height." },
          { name: "loading", desc: "Set loading=\"lazy\" to defer downloading offscreen images." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting the alt attribute, which breaks accessibility compliance.", "Omitting width/height, causing layout shifts as images download."],
        practices: ["Always use loading=\"lazy\" for non-hero images to speed up loading times."],
        accessibility: "alt text is read by screen readers. Make it descriptive or set it to blank (alt=\"\") if purely decorative.",
        seo: "Google indexes alt text descriptions, so optimize them with relevant keywords.",
        related: ["figure", "picture"]
      },
      {
        name: "figure",
        desc: "Encapsulates self-contained media content (like photos, illustrations, code snippets) with an optional caption.",
        category: "Images & Multimedia",
        what: "The <figure> tag is a visual container for pictures, charts, or code diagrams.",
        why: "We use it to group images and diagrams with their descriptions.",
        syntax: `<figure>\n  <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200" alt="Vibrant Graphic">\n  <figcaption>Fig 1: Abstract vector design.</figcaption>\n</figure>`,
        attributes: [],
        support: { chrome: "8.0+", firefox: "4.0+", safari: "5.1+", edge: "12.0+" },
        mistakes: ["Putting non-media content inside figure structures."],
        practices: ["Nesting caption element directly inside to make descriptions clean."],
        accessibility: "Associates image descriptions to screen reader outputs.",
        seo: "Helps search engines understand media subject matter.",
        related: ["figcaption", "img"]
      },
      {
        name: "figcaption",
        desc: "Defines a caption or description for a <figure> element.",
        category: "Images & Multimedia",
        what: "The <figcaption> tag writes a text description for a <figure> media box.",
        why: "We use it to display visible text descriptions below photos or charts.",
        syntax: `<figure>\n  <img src="..." alt="Chart">\n  <figcaption>Annual sales chart.</figcaption>\n</figure>`,
        attributes: [],
        support: { chrome: "8.0+", firefox: "4.0+", safari: "5.1+", edge: "12.0+" },
        mistakes: ["Using it outside of a <figure> element container."],
        practices: ["Place at either the very top or bottom inside the figure tag."],
        accessibility: "Reads description immediately when screen readers land on target figure.",
        seo: "No direct SEO weight.",
        related: ["figure"]
      },
      {
        name: "picture",
        desc: "Wraps multiple source files to serve optimized images depending on device screen sizes.",
        category: "Images & Multimedia",
        what: "The <picture> tag serves different image sizes based on screen widths (perfect for mobile design).",
        why: "We use it to save mobile bandwidth by downloading smaller photos on phones while serving large ones on desktops.",
        syntax: `<picture>\n  <source media="(min-width: 600px)" srcset="large.jpg">\n  <img src="small.jpg" alt="Responsive">\n</picture>`,
        attributes: [],
        support: { chrome: "38.0+", firefox: "38.0+", safari: "9.0+", edge: "13.0+" },
        mistakes: ["Forgetting to include the fallback <img> element inside the picture tags. Nothing will render without it."],
        practices: ["Use picture to serve next-gen formats (like WebP) with JPEG fallback support."],
        accessibility: "Uses the alt text defined in the fallback img element.",
        seo: "Improves page load speeds, which is a ranking factor.",
        related: ["source", "img"]
      },
      {
        name: "source",
        desc: "Defines media source paths for <picture>, <video>, or <audio> tags.",
        category: "Images & Multimedia",
        what: "The <source> tag specifies media file options for player or picture tags.",
        why: "We use it to offer different formats so browsers select the one they support.",
        syntax: `<video controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>`,
        attributes: [
          { name: "src", desc: "URL of the media file." },
          { name: "srcset", desc: "Required for picture source. Specifies image paths for media queries." },
          { name: "media", desc: "Media query checks (e.g. min-width limits)." },
          { name: "type", desc: "MIME type description (e.g. type=\"video/mp4\")." }
        ],
        support: { chrome: "8.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Forgetting the type attribute when listing media video links."],
        practices: ["List highest quality or modern formats first in sequence."],
        accessibility: "No direct accessibility impact.",
        seo: "No direct SEO impact.",
        related: ["picture", "video", "audio"]
      },
      {
        name: "map",
        desc: "Defines an image map with clickable region areas.",
        category: "Images & Multimedia",
        what: "The <map> tag turns parts of a single image into clickable link regions.",
        why: "We use it for maps or product images where clicking different details links to different pages.",
        syntax: `<map name="workmap">\n  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.html">\n</map>`,
        attributes: [
          { name: "name", desc: "Required. Unique identifier link to image's usemap attribute." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Mismatching the map's name with the image's usemap attribute."],
        practices: ["Keep area coordinates precise. Modern layouts often prefer SVG over image maps for responsiveness."],
        accessibility: "Requires strict alt text on each nested <area> tag for screen readers.",
        seo: "No direct SEO weight.",
        related: ["area", "img"]
      },
      {
        name: "area",
        desc: "Defines clickable coordinates regions inside an image map.",
        category: "Images & Multimedia",
        what: "The <area> tag shapes the clickable hotspots on an image map.",
        why: "We use it to define coordinates and shapes (circle, rect, poly) for image links.",
        syntax: `<area shape="circle" coords="90,58,3" alt="Cup" href="cup.html">`,
        attributes: [
          { name: "shape", desc: "Shape type: 'default', 'rect', 'circle', or 'poly'." },
          { name: "coords", desc: "X,Y coordinates list matching the shape limits." },
          { name: "href", desc: "Target link URL." },
          { name: "alt", desc: "Alternative text describing the region." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Omitting alt tags, which leaves screen readers blind to links."],
        practices: ["Always test clickable areas on multiple screen resolutions."],
        accessibility: "Each area must have alternative text to support keyboard tab navigations.",
        seo: "Links are crawled by search engine indexers.",
        related: ["map"]
      }
    ]
  },
  {
    category: "📊 Tables",
    tags: [
      {
        name: "table",
        desc: "Creates data tables.",
        category: "Tables",
        what: "The <table> tag creates a grid layout for displaying rows and columns of data.",
        why: "We use it to present technical statistics, pricing matrix lists, or logs clearly.",
        syntax: `<table>\n  <tr>\n    <th>Name</th>\n    <td>John</td>\n  </tr>\n</table>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using table elements to build webpage layouts. Use flexbox or CSS grid instead."],
        practices: ["Always include table header th tags and structure them with thead and tbody."],
        accessibility: "Use caption and th tags so screen reader users can make sense of tabular grids.",
        seo: "No direct SEO weight, but structured data formats are preferred by search bots.",
        related: ["tr", "td", "th"]
      },
      {
        name: "caption",
        desc: "Provides a title/description for a table.",
        category: "Tables",
        what: "The <caption> tag sets a visible title centered at the top of a table.",
        why: "We use it to explain what data is displayed inside the table.",
        syntax: `<table>\n  <caption>Monthly Budgets</caption>\n  <!-- Table rows here -->\n</table>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Nesting the caption inside a row (tr) instead of immediately after the opening table tag."],
        practices: ["Always place <caption> immediately after the opening <table> tag."],
        accessibility: "Screen readers read the table caption first, providing essential context.",
        seo: "No direct SEO weight.",
        related: ["table"]
      },
      {
        name: "colgroup",
        desc: "Groups columns in a table to apply formatting styles to them collectively.",
        category: "Tables",
        what: "The <colgroup> tag groups table columns together for styling.",
        why: "We use it to apply styles (like background color or widths) to entire columns at once, saving code.",
        syntax: `<table>\n  <colgroup>\n    <col style="background: rgba(0,0,0,0.2);">\n  </colgroup>\n  <!-- Rows -->\n</table>`,
        attributes: [
          { name: "span", desc: "Specifies the number of columns the group spans." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Putting it inside tbody or thead blocks. It must reside before them."],
        practices: ["Use for styling columns collectively rather than applying classes to every td."],
        accessibility: "Does not change screen reader structures, only visual layouts.",
        seo: "No direct SEO impact.",
        related: ["col", "table"]
      },
      {
        name: "col",
        desc: "Defines properties for columns inside a <colgroup>.",
        category: "Tables",
        what: "The <col> tag represents a single column within a table column group.",
        why: "We use it to set custom widths or styles for columns in sequence.",
        syntax: `<colgroup>\n  <col span="2" style="background: yellow;">\n  <col style="background: red;">\n</colgroup>`,
        attributes: [
          { name: "span", desc: "Specifies the number of columns the tag properties apply to." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using <col> tags outside of a <colgroup> container."],
        practices: ["Use span attributes to style multiple columns quickly."],
        accessibility: "No direct impact on accessibility.",
        seo: "No direct SEO impact.",
        related: ["colgroup"]
      },
      {
        name: "thead",
        desc: "Groups the header rows of a table.",
        category: "Tables",
        what: "The <thead> tag groups the title headers at the top of a table.",
        why: "We use it to separate title rows from the main body content rows.",
        syntax: `<table>\n  <thead>\n    <tr><th>Header</th></tr>\n  </thead>\n</table>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting to use th tags inside the head block."],
        practices: ["Include <thead> to allow browsers to repeat table headers on printed pages."],
        accessibility: "Highly useful for screen reader grid navigation.",
        seo: "No direct SEO weight.",
        related: ["tbody", "tfoot"]
      },
      {
        name: "tbody",
        desc: "Groups the main body data rows of a table.",
        category: "Tables",
        what: "The <tbody> tag groups the main rows of data inside your table.",
        why: "We use it to isolate data body rows from headers and footers.",
        syntax: `<table>\n  <tbody>\n    <tr><td>Data Cell</td></tr>\n  </tbody>\n</table>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Including footer totals inside the tbody. Use tfoot instead."],
        practices: ["Wrap all data rows in a tbody element for code cleanliness."],
        accessibility: "Supports table navigation workflows for screen reader users.",
        seo: "No direct SEO weight.",
        related: ["thead", "tfoot"]
      },
      {
        name: "tfoot",
        desc: "Groups summary/total calculation footer rows of a table.",
        category: "Tables",
        what: "The <tfoot> tag groups summary rows at the bottom of a table, like transaction totals.",
        why: "We use it to separate totals calculations from the main data rows.",
        syntax: `<table>\n  <tfoot>\n    <tr><td>Total: $100</td></tr>\n  </tfoot>\n</table>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Mismatching column counts in tfoot cells. Use colspan to align them."],
        practices: ["Always place tfoot totals aligned with columns."],
        accessibility: "Enables screen reader users to skip straight to table summary totals.",
        seo: "No direct SEO weight.",
        related: ["thead", "tbody"]
      },
      {
        name: "tr",
        desc: "Defines a single row of cells inside a table.",
        category: "Tables",
        what: "The <tr> tag stands for Table Row. It creates a horizontal row of cells.",
        why: "We use it to group th or td cells together in horizontal lines.",
        syntax: `<tr>\n  <th>Title</th>\n  <td>Description</td>\n</tr>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Putting text content directly inside tr without wrapping in th or td elements."],
        practices: ["Keep column cell counts equal in every row unless utilizing colspan/rowspan properties."],
        accessibility: "Structural element for grid screen readers.",
        seo: "No direct SEO weight.",
        related: ["table", "td", "th"]
      },
      {
        name: "th",
        desc: "Defines a header cell inside a table row.",
        category: "Tables",
        what: "The <th> tag stands for Table Header. It creates a bold, centered header cell.",
        why: "We use it to label the name of a column or row.",
        syntax: `<tr>\n  <th>Column Name</th>\n</tr>`,
        attributes: [
          { name: "colspan", desc: "Specifies the number of columns the cell spans." },
          { name: "rowspan", desc: "Specifies the number of rows the cell spans." },
          { name: "scope", desc: "Associates header cells to columns or rows ('col', 'row')." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using td tags for headers and styling them manually with bold CSS. Use th instead."],
        practices: ["Use scope attribute (e.g. scope=\"col\") to explicitly connect headers to their cells."],
        accessibility: "Essential for screen readers to map out column relationships correctly.",
        seo: "No direct SEO weight.",
        related: ["tr", "td"]
      },
      {
        name: "td",
        desc: "Defines a standard data cell inside a table row.",
        category: "Tables",
        what: "The <td> tag stands for Table Data. It holds the individual data values in your table.",
        why: "We use it to wrap numbers, text, or links inside table rows.",
        syntax: `<tr>\n  <td>$50.00</td>\n</tr>`,
        attributes: [
          { name: "colspan", desc: "Specifies the number of columns the cell spans." },
          { name: "rowspan", desc: "Specifies the number of rows the cell spans." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting to close td tags, causing table layouts to break."],
        practices: ["Use align alignments in CSS rather than obsolete attributes."],
        accessibility: "Standard grid cells parsed by screen readers.",
        seo: "No direct SEO weight.",
        related: ["tr", "th"]
      }
    ]
  },
  {
    category: "📝 Forms",
    tags: [
      {
        name: "form",
        desc: "Creates interactive forms.",
        category: "Forms",
        what: "The <form> tag is a wrapper for input fields, letting users submit text, files, and selections.",
        why: "We use it to gather user inputs (like contact forms or logins) and send them to server endpoints.",
        syntax: `<form action="/submit" method="POST">\n  <!-- Inputs here -->\n</form>`,
        attributes: [
          { name: "action", desc: "Specifies the server URL endpoint where form data is sent." },
          { name: "method", desc: "Specifies HTTP submission method: GET or POST." },
          { name: "enctype", desc: "Specifies how form data should be encoded when submitting (e.g. multipart/form-data for file uploads)." },
          { name: "novalidate", desc: "Deactivates browser-default validation checks." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Putting a form inside another form. Nested forms are invalid HTML.", "Forgetting type=\"submit\" on buttons inside forms."],
        practices: ["Always declare appropriate POST methods when handling private data like logins."],
        accessibility: "Allows keyboard navigations (pressing Enter key to submit).",
        seo: "No direct SEO weight.",
        related: ["input", "button"]
      },
      {
        name: "label",
        desc: "Defines a text label for a form element, linking them for accessibility.",
        category: "Forms",
        what: "The <label> tag names a form field, letting users click the text to select the input.",
        why: "We use it to make forms accessible and make checkboxes easier to click on mobile screens.",
        syntax: `<label for="email-field">Email:</label>\n<input type="email" id="email-field">`,
        attributes: [
          { name: "for", desc: "Specifies the id of the target element this label belongs to." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Mismatching the label's 'for' attribute with the input's 'name' attribute instead of its 'id'."],
        practices: ["Always provide matching label tags for every input field."],
        accessibility: "Critical for screen readers. It pronounces the label text when focus lands on the input.",
        seo: "No direct SEO impact.",
        related: ["input"]
      },
      {
        name: "input",
        desc: "Defines interactive controls to collect data from users, varying based on the type attribute.",
        category: "Forms",
        what: "The <input> tag is a blank field where users type text, check boxes, or select dates.",
        why: "We use it to collect text, passwords, files, selections, and slider values.",
        syntax: `<input type="text" placeholder="Enter name" required>`,
        attributes: [
          { name: "type", desc: "Defines control type: 'text', 'password', 'email', 'checkbox', 'radio', 'file', etc." },
          { name: "name", desc: "Sets field identifier sent to the server." },
          { name: "value", desc: "Sets default or current input value." },
          { name: "placeholder", desc: "Hint text displayed inside field before typing." },
          { name: "required", desc: "Boolean. Blocks form submission if empty." },
          { name: "disabled", desc: "Boolean. Deactivates input control." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using wrong type formats (e.g. type=\"text\" for numeric phone values, which blocks numeric keyboards on mobile devices)."],
        practices: ["Use input type=\"email\" or type=\"number\" to trigger optimized touch keyboard layouts on mobile devices."],
        accessibility: "Always connect inputs to labels. Use autocomplete attributes where applicable.",
        seo: "No direct SEO weight.",
        related: ["label", "textarea"]
      },
      {
        name: "textarea",
        desc: "Defines a multi-line text input field.",
        category: "Forms",
        what: "The <textarea> tag creates a big box for typing multi-line text, like messages or comments.",
        why: "We use it when a single-line text input is too small for the description needed.",
        syntax: `<textarea placeholder="Enter message" rows="4" cols="30"></textarea>`,
        attributes: [
          { name: "name", desc: "Sets field identifier." },
          { name: "rows", desc: "Specifies visible number of text lines." },
          { name: "cols", desc: "Specifies visible column width in character sizes." },
          { name: "required", desc: "Boolean. Requires input before submitting." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Adding default value text inside a value attribute. Place default text between opening and closing tags instead."],
        practices: ["Use CSS resize properties to control whether users can resize the box on screen."],
        accessibility: "Ensure placeholder text does not replace standard label tags.",
        seo: "No direct SEO impact.",
        related: ["input"]
      },
      {
        name: "button",
        desc: "Defines a clickable button to submit forms or trigger actions.",
        category: "Forms",
        what: "The <button> tag creates a clickable button.",
        why: "We use it to submit form data, close dialog boxes, or trigger JavaScript actions.",
        syntax: `<button type="submit">Submit Form</button>`,
        attributes: [
          { name: "type", desc: "Defines behavior: 'submit' (submits form), 'reset' (resets fields), or 'button' (JS control)." },
          { name: "disabled", desc: "Boolean. Deactivates the button." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting to specify type=\"button\" on non-form buttons, causing them to submit forms by default."],
        practices: ["Always explicitly state type=\"submit\" or type=\"button\" to avoid side-effects."],
        accessibility: "Buttons are highly navigable by keyboard tabs. Always ensure clear labels.",
        seo: "No direct SEO weight.",
        related: ["input", "form"]
      },
      {
        name: "select",
        desc: "Creates drop-down option selection menus.",
        category: "Forms",
        what: "The <select> tag builds a clickable dropdown menu list.",
        why: "We use it to let users pick one option from a list, saving screen space.",
        syntax: `<select>\n  <option value="usa">USA</option>\n  <option value="uk">UK</option>\n</select>`,
        attributes: [
          { name: "name", desc: "Sets input data key value." },
          { name: "multiple", desc: "Boolean. Allows selecting multiple list options." },
          { name: "disabled", desc: "Boolean. Deactivates select menu." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting to wrap options in option tags, leaving menus blank."],
        practices: ["Use a blank default option (e.g. 'Select Country') at the top of lists."],
        accessibility: "Highly accessible. Screen readers read selections clearly.",
        seo: "No direct SEO impact.",
        related: ["option", "optgroup"]
      },
      {
        name: "option",
        desc: "Defines selectable items inside a <select>, <optgroup>, or <datalist> tag.",
        category: "Forms",
        what: "The <option> tag represents a single list item within a dropdown menu.",
        why: "We use it to define target values and text inside dropdown selections.",
        syntax: `<option value="apple">Apple fruit</option>`,
        attributes: [
          { name: "value", desc: "Specifies the value sent to the server." },
          { name: "selected", desc: "Boolean. Sets this option as the default selected item." },
          { name: "disabled", desc: "Boolean. Deactivates specific list option." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Omitting the value attribute, forcing servers to parse user-facing text."],
        practices: ["Keep values short and URL-friendly, using text for user labels."],
        accessibility: "Announced as list options by screen readers.",
        seo: "No direct SEO impact.",
        related: ["select", "optgroup"]
      },
      {
        name: "optgroup",
        desc: "Groups related options inside a <select> dropdown list.",
        category: "Forms",
        what: "The <optgroup> tag groups dropdown choices into categories with labels.",
        why: "We use it to organize long dropdown menus (like grouping cars by brand).",
        syntax: `<select>\n  <optgroup label="Fruits">\n    <option value="apple">Apple</option>\n  </optgroup>\n</select>`,
        attributes: [
          { name: "label", desc: "Required. Category header title text." },
          { name: "disabled", desc: "Boolean. Disables the entire group selection." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using optgroup without a label attribute, leaving categories blank."],
        practices: ["Keep option grouping logical to help users browse lists faster."],
        accessibility: "Screen readers read category labels, keeping navigations clear.",
        seo: "No direct SEO impact.",
        related: ["select", "option"]
      },
      {
        name: "datalist",
        desc: "Provides autocomplete suggestions for <input> elements.",
        category: "Forms",
        what: "The <datalist> tag gives users a search suggestion list as they type in an input box.",
        why: "We use it to create searchable dropdowns where users can select suggestions or type custom text.",
        syntax: `<input list="browsers">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n</datalist>`,
        attributes: [],
        support: { chrome: "20.0+", firefox: "4.0+", safari: "9.0+", edge: "12.0+" },
        mistakes: ["Mismatching the input's 'list' attribute with the datalist's 'id'."],
        practices: ["Use as a search suggestion database for quick country or category entries."],
        accessibility: "Screen readers announce suggest lists to users.",
        seo: "No direct SEO weight.",
        related: ["input", "select"]
      },
      {
        name: "output",
        desc: "Renders mathematical calculation or script result outputs.",
        category: "Forms",
        what: "The <output> tag displays the mathematical result of a form action (like a price sum).",
        why: "We use it to show live calculations dynamically.",
        syntax: `<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">\n  <input type="range" id="a" value="50"> +\n  <input type="number" id="b" value="10">\n  = <output name="x" for="a b">60</output>\n</form>`,
        attributes: [
          { name: "for", desc: "Specifies connection ids to input sources." },
          { name: "name", desc: "Identifier name for script retrieval." }
        ],
        support: { chrome: "10.0+", firefox: "4.0+", safari: "5.1+", edge: "12.0+" },
        mistakes: ["Writing mathematical calculations inside <output> without script bindings."],
        practices: ["Always provide default calculation fallback numbers inside the tag."],
        accessibility: "Screen readers immediately announce calculated output changes to users.",
        seo: "No direct SEO weight.",
        related: ["input", "form"]
      },
      {
        name: "fieldset",
        desc: "Groups related form elements together inside a visual box.",
        category: "Forms",
        what: "The <fieldset> tag draws a border around related form inputs (like address details).",
        why: "We use it to visually group inputs and make complex forms easier to read.",
        syntax: `<fieldset>\n  <legend>Login Details</legend>\n  <input type="text" placeholder="User">\n</fieldset>`,
        attributes: [
          { name: "disabled", desc: "Boolean. Disables all nested input controls at once." },
          { name: "name", desc: "Identifier name for scripts." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Omitting the legend tag, which defeats the semantic purpose of grouping."],
        practices: ["Use legend tags inside fieldsets to label each group clearly."],
        accessibility: "Crucial for screen readers, which announce the legend label for all fields inside.",
        seo: "No direct SEO weight.",
        related: ["legend", "form"]
      },
      {
        name: "legend",
        desc: "Defines the caption/title for a <fieldset> element.",
        category: "Forms",
        what: "The <legend> tag writes the title on the border of a <fieldset> input box.",
        why: "We use it to label input groups clearly.",
        syntax: `<fieldset>\n  <legend>User Account Info</legend>\n</fieldset>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it outside of a <fieldset> element block."],
        practices: ["Keep legend text short and descriptive."],
        accessibility: "Announced immediately by screen readers, orienting users.",
        seo: "No direct SEO weight.",
        related: ["fieldset"]
      },
      {
        name: "meter",
        desc: "Represents a scalar measurement within a known range (like disc space).",
        category: "Forms",
        what: "The <meter> tag displays a progress bar representing a fixed score or measurement.",
        why: "We use it to show storage usage, temperature, or exam scores.",
        syntax: `<meter value="0.6" min="0" max="1">60%</meter>`,
        attributes: [
          { name: "value", desc: "Required. Current measurement value." },
          { name: "min", desc: "Minimum value boundary." },
          { name: "max", desc: "Maximum value boundary." },
          { name: "low", desc: "Threshold for low levels." },
          { name: "high", desc: "Threshold for high levels." },
          { name: "optimum", desc: "Target optimal score value." }
        ],
        support: { chrome: "8.0+", firefox: "16.0+", safari: "6.0+", edge: "12.0+" },
        mistakes: ["Using <meter> for loading progress. Use <progress> instead."],
        practices: ["Always type fallback text inside the tag for browsers that do not support meters."],
        accessibility: "Ensure screen reader users can identify values through clear text tags.",
        seo: "No direct SEO weight.",
        related: ["progress"]
      },
      {
        name: "progress",
        desc: "Represents the completion progress of a task (like downloads).",
        category: "Forms",
        what: "The <progress> tag displays a loading progress bar.",
        why: "We use it to show file download progress or step completion states.",
        syntax: `<progress value="70" max="100">70%</progress>`,
        attributes: [
          { name: "value", desc: "Current loading status value." },
          { name: "max", desc: "Goal limit value." }
        ],
        support: { chrome: "8.0+", firefox: "16.0+", safari: "6.0+", edge: "12.0+" },
        mistakes: ["Using progress elements to show fixed measurements like battery percentages. Use <meter> instead."],
        practices: ["Update progress values dynamically in JavaScript during file actions."],
        accessibility: "Screen readers read progress status. Provide clear fallback text labels.",
        seo: "No direct SEO weight.",
        related: ["meter"]
      }
    ]
  },
  {
    category: "🏛️ Semantic & Layout",
    tags: [
      {
        name: "header",
        desc: "Defines introductory content or navigation links at the top of a page or section.",
        category: "Semantic & Layout",
        what: "The <header> tag holds logo graphics, site titles, and main navigation links.",
        why: "We use it to group page intro elements together at the top of the webpage.",
        syntax: `<header>\n  <h1>CSS Studio</h1>\n  <nav><a href="#home">Home</a></nav>\n</header>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Nesting a header inside another header, or using it inside footers."],
        practices: ["Use one global header for your page, and optionally sub-headers inside article structures."],
        accessibility: "Defines landmark banners. Screen readers can skip straight to navigation menus.",
        seo: "Guides search engines through page hierarchies.",
        related: ["footer", "main"]
      },
      {
        name: "footer",
        desc: "Defines a footer block for page copyright, contacts, and fine print listings.",
        category: "Semantic & Layout",
        what: "The <footer> tag holds site legal terms, copyright text, and contact links.",
        why: "We use it to wrap the bottom credits section of our pages.",
        syntax: `<footer>\n  <p>© 2026 CSS Studio</p>\n</footer>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Nesting footer elements inside main content blocks."],
        practices: ["Place secondary links, copyright notes, and address listings here."],
        accessibility: "Defines contentinfo landmarks for assistive screen reader users.",
        seo: "Helps crawler bots find business contact details and site index links.",
        related: ["header", "address"]
      },
      {
        name: "main",
        desc: "Defines the primary, non-repeated content area of a webpage.",
        category: "Semantic & Layout",
        what: "The <main> tag wraps the core, unique content of a webpage.",
        why: "We use it to separate the main article content from headers, footers, and sidebars.",
        syntax: `<main>\n  <h2>Page Main Article</h2>\n  <p>Main content goes here.</p>\n</main>`,
        attributes: [],
        support: { chrome: "26.0+", firefox: "21.0+", safari: "7.0+", edge: "12.0+" },
        mistakes: ["Using multiple main elements on a single page. Only one main element is allowed per page."],
        practices: ["Keep sidebars, headers, and footers outside the main element block."],
        accessibility: "Key landmark element. Screen readers allow users to skip directly to the main content.",
        seo: "Crucial for search engines to isolate your page's unique text content.",
        related: ["article", "section"]
      },
      {
        name: "article",
        desc: "Represents a self-contained composition that can be independently distributed or reused.",
        category: "Semantic & Layout",
        what: "The <article> tag wraps independent content blocks, like blog posts, news stories, or forum threads.",
        why: "We use it to separate individual stories or articles from the rest of the page.",
        syntax: `<article>\n  <h2>Blog Title</h2>\n  <p>Article text details.</p>\n</article>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Using article tags for generic layout grids. Use section or div instead."],
        practices: ["Ensure articles have heading tags (h1-h6) inside them for clean structure."],
        accessibility: "Allows screen reader users to jump between different articles on a page.",
        seo: "Identifies unique, indexable editorial text blocks to search engine crawlers.",
        related: ["section", "main"]
      },
      {
        name: "section",
        desc: "Defines a generic thematic grouping of content inside a webpage.",
        category: "Semantic & Layout",
        what: "The <section> tag groups related paragraphs and media together under a heading.",
        why: "We use it to break a long page into clear chapters or subtopics.",
        syntax: `<section>\n  <h2>Contact US</h2>\n  <p>Form details go here.</p>\n</section>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Using section tags as generic wrapper styling divs. Use <div> for layout styling instead."],
        practices: ["Always include a heading element (h2-h6) inside every section tag."],
        accessibility: "Defines page section blocks, making reading structures more transparent.",
        seo: "Organizes page content into clear thematic topics.",
        related: ["article", "div"]
      },
      {
        name: "aside",
        desc: "Defines content aside from the main text, like sidebars or advertising callout blocks.",
        category: "Semantic & Layout",
        what: "The <aside> tag holds secondary information like sidebars, link widgets, or ad boxes.",
        why: "We use it to keep supplementary details from cluttering the main content text.",
        syntax: `<aside>\n  <h4>Related Posts</h4>\n  <a href="#">Link A</a>\n</aside>`,
        attributes: [],
        support: { chrome: "5.0+", firefox: "4.0+", safari: "5.0+", edge: "12.0+" },
        mistakes: ["Putting main content paragraphs inside aside tags."],
        practices: ["Use for sidebar navigation blocks, glossaries, or author bio widgets."],
        accessibility: "Defines complementary landmarks, letting screen reader users skip them easily.",
        seo: "Indicates non-core content to search engines.",
        related: ["main"]
      },
      {
        name: "details",
        desc: "Creates disclosure widgets that expand/collapse to show content when toggled.",
        category: "Semantic & Layout",
        what: "The <details> tag creates an accordion dropdown that opens when clicked.",
        why: "We use it to hide long descriptions or answers (like FAQs) until users click to open them.",
        syntax: `<details>\n  <summary>Click for FAQ</summary>\n  <p>This is the FAQ answer details text.</p>\n</details>`,
        attributes: [
          { name: "open", desc: "Boolean. Forces the accordion open by default." }
        ],
        support: { chrome: "12.0+", firefox: "49.0+", safari: "6.0+", edge: "79.0+" },
        mistakes: ["Forgetting to use the summary tag, which results in a default browser 'Details' label."],
        practices: ["Nesting a single summary tag at the top of the details tag structure."],
        accessibility: "Native keyboard tab controls. Screen readers announce expand/collapse states.",
        seo: "No direct SEO impact.",
        related: ["summary"]
      },
      {
        name: "summary",
        desc: "Defines the visible header label for a <details> disclosure element.",
        category: "Semantic & Layout",
        what: "The <summary> tag writes the clickable heading for a <details> accordion box.",
        why: "We use it to label the button that users click to expand details.",
        syntax: `<details>\n  <summary>Read More</summary>\n  <p>Extra details text.</p>\n</details>`,
        attributes: [],
        support: { chrome: "12.0+", firefox: "49.0+", safari: "6.0+", edge: "79.0+" },
        mistakes: ["Using it outside of a <details> parent element block."],
        practices: ["Keep summary text short and descriptive."],
        accessibility: "Acts as a button control in screen reader lists.",
        seo: "No direct SEO impact.",
        related: ["details"]
      },
      {
        name: "dialog",
        desc: "Defines a native modal dialog box or subwindow overlay.",
        category: "Semantic & Layout",
        what: "The <dialog> tag creates native modal popup windows without needing heavy libraries.",
        why: "We use it for warning popups, login forms, or user modals.",
        syntax: `<dialog id="favDialog" open>\n  <p>This is a native modal!</p>\n  <button onclick="this.closest('dialog').removeAttribute('open')">Close</button>\n</dialog>`,
        attributes: [
          { name: "open", desc: "Boolean. Forces the popup open on screen." }
        ],
        support: { chrome: "37.0+", firefox: "98.0+", safari: "15.4+", edge: "79.0+" },
        mistakes: ["Omitting close button actions inside scripting handlers, locking user screens."],
        practices: ["Use dialog.showModal() in JS to automatically handle esc-to-close behavior."],
        accessibility: "Native focus traps make it highly accessible for screen reader navigations.",
        seo: "No direct SEO impact.",
        related: ["div", "button"]
      },
      {
        name: "search",
        desc: "Defines a structural section containing search utilities (forms or input fields).",
        category: "Semantic & Layout",
        what: "The <search> tag groups search forms and inputs together semantically.",
        why: "We use it to help accessibility tools identify search functionality on a page.",
        syntax: `<search>\n  <form>\n    <input type="search" name="q">\n  </form>\n</search>`,
        attributes: [],
        support: { chrome: "118.0+", firefox: "118.0+", safari: "17.0+", edge: "118.0+" },
        mistakes: ["Using search tags for general navigation bars. Use nav instead."],
        practices: ["Wrap search bars inside headers or sidebars with search tags."],
        accessibility: "Screen readers announce search landmark zones immediately to users.",
        seo: "Helps Google identify search bars on site layouts.",
        related: ["form", "input"]
      },
      {
        name: "div",
        desc: "A generic block-level container used to group elements for styling and layout purposes.",
        category: "Semantic & Layout",
        what: "The <div> tag stands for Division. It is an empty box used to wrap elements for layout layouts or CSS designs.",
        why: "We use it as a generic box when no other semantic tag (like section or header) is appropriate.",
        syntax: `<div class="card-box" style="border:1px solid #ddd; padding: 20px;">\n  <h3>Title</h3>\n</div>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using divs for everything ('div soup'). Avoid generic divs when semantic elements (like section or main) fit the content better."],
        practices: ["Only use div for layout styling grids, flex rows, and alignment purposes."],
        accessibility: "Div has no semantic meaning. Screen readers treat it as an empty box.",
        seo: "No direct SEO weight.",
        related: ["span", "section"]
      }
    ]
  },
  {
    category: "🕹️ Interactive & Scripting",
    tags: [
      {
        name: "menu",
        desc: "Defines a semantic list of interactive command buttons.",
        category: "Interactive & Scripting",
        what: "The <menu> tag behaves like a unordered list, specifically meant for interactive command buttons.",
        why: "We use it to group button options for context menus or toolbars.",
        syntax: `<menu>\n  <li><button onclick="save()">Save</button></li>\n  <li><button onclick="share()">Share</button></li>\n</menu>`,
        attributes: [],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using menu for general navigation links. Use <nav> instead."],
        practices: ["Wrap interactive toolbar widgets in menu tags for semantic clarity."],
        accessibility: "Identifies list as a menu toolbar to screen readers.",
        seo: "No direct SEO impact.",
        related: ["ul", "button"]
      },
      {
        name: "canvas",
        desc: "Provides a scriptable, pixel-level drawing area controlled by JavaScript.",
        category: "Interactive & Scripting",
        what: "The <canvas> tag creates a blank area where JavaScript code can draw pictures, graphics, or run games.",
        why: "We use it to generate custom charts, process image filters, or build interactive web games.",
        syntax: `<canvas id="myCanvas" width="200" height="100" style="border: 1px solid var(--accent-cyan);"></canvas>\n<script>\n  const c = document.getElementById("myCanvas");\n  const ctx = c.getContext("2d");\n  ctx.fillStyle = "#00f2fe";\n  ctx.fillRect(10, 10, 150, 80);\n</script>`,
        attributes: [
          { name: "width", desc: "Sets drawing width in pixels." },
          { name: "height", desc: "Sets drawing height in pixels." }
        ],
        support: { chrome: "4.0+", firefox: "2.0+", safari: "3.1+", edge: "12.0+" },
        mistakes: ["Using CSS width/height on canvas instead of canvas attributes. Doing so stretches and distort pixels."],
        practices: ["Always provide fallback text inside canvas tags for unsupported browsers."],
        accessibility: "Canvases are invisible to screen readers. Provide text descriptions next to them.",
        seo: "Search engines cannot crawl text content drawn inside canvases.",
        related: ["svg"]
      },
      {
        name: "svg",
        desc: "Embeds scalable vector graphics natively as XML markup.",
        category: "Interactive & Scripting",
        what: "The <svg> tag lets you draw crisp, scalable shapes (like lines or circles) that never lose quality when scaled.",
        why: "We use it for UI icons, logos, and illustration vectors.",
        syntax: `<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="cyan" stroke-width="4" fill="transparent" />\n</svg>`,
        attributes: [
          { name: "width", desc: "Sets graphic width." },
          { name: "height", desc: "Sets graphic height." },
          { name: "viewBox", desc: "Sets aspect ratio grid boundaries." }
        ],
        support: { chrome: "4.0+", firefox: "3.0+", safari: "3.0+", edge: "12.0+" },
        mistakes: ["Omitting viewBox, which blocks SVGs from resizing responsively inside CSS grids."],
        practices: ["Keep paths optimized. Set alt titles on SVGs used as main image items."],
        accessibility: "Add role=\"img\" and a <title> element inside SVGs to make them accessible.",
        seo: "SVGs in HTML are indexable and can be crawled for keyword content.",
        related: ["canvas"]
      },
      {
        name: "audio",
        desc: "Embeds sound clips natively on a webpage.",
        category: "Interactive & Scripting",
        what: "The <audio> tag puts a music or podcast player onto a webpage.",
        why: "We use it to play sound recordings directly in the browser.",
        syntax: `<audio src="music.mp3" controls>Your browser does not support audio players.</audio>`,
        attributes: [
          { name: "src", desc: "URL of the audio file." },
          { name: "controls", desc: "Boolean. Displays the volume and play buttons." },
          { name: "autoplay", desc: "Boolean. Starts playing sound instantly on page load." },
          { name: "loop", desc: "Boolean. Repeats audio playback." }
        ],
        support: { chrome: "4.0+", firefox: "3.5+", safari: "4.0+", edge: "12.0+" },
        mistakes: ["Omitting the controls attribute, which hides the play buttons entirely."],
        practices: ["Avoid using autoplay, as it annoys users and is blocked by most modern browsers."],
        accessibility: "Provide transcripts or text captions for hearing-impaired users.",
        seo: "No direct SEO weight.",
        related: ["video"]
      },
      {
        name: "video",
        desc: "Embeds video clips natively on a webpage.",
        category: "Interactive & Scripting",
        what: "The <video> tag puts a video player onto a webpage.",
        why: "We use it to play video tutorials or animations natively without needing Flash players.",
        syntax: `<video src="movie.mp4" controls width="320">Video player support required.</video>`,
        attributes: [
          { name: "src", desc: "URL of the video file." },
          { name: "controls", desc: "Boolean. Displays volume, play, and fullscreen buttons." },
          { name: "width", desc: "Sets player width." },
          { name: "muted", desc: "Boolean. Mutes video audio by default (required for autoplay)." }
        ],
        support: { chrome: "4.0+", firefox: "3.5+", safari: "4.0+", edge: "12.0+" },
        mistakes: ["Using autoplay without the muted attribute. Browsers block autoplaying videos that have sound enabled."],
        practices: ["Always provide multiple <source> tags to support mp4, WebM, and other video formats."],
        accessibility: "Use the <track> tag to provide captions for hearing-impaired users.",
        seo: "Optimized video metadata helps rank media in Google Video Search.",
        related: ["audio", "track"]
      },
      {
        name: "track",
        desc: "Defines text tracks (like subtitles) for video or audio elements.",
        category: "Interactive & Scripting",
        what: "The <track> tag adds subtitles or captions to a video player.",
        why: "We use it to write text translations for video files.",
        syntax: `<video src="movie.mp4" controls>\n  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">\n</video>`,
        attributes: [
          { name: "src", desc: "Required. URL target of WebVTT subtitle track file." },
          { name: "kind", desc: "Type of text track (e.g., 'subtitles', 'captions', 'descriptions')." },
          { name: "srclang", desc: "Language code (e.g. 'en')." },
          { name: "label", desc: "Title shown to users in subtitle selection menus." }
        ],
        support: { chrome: "18.0+", firefox: "31.0+", safari: "6.0+", edge: "12.0+" },
        mistakes: ["Using raw text files instead of standard WebVTT format files for subtitles."],
        practices: ["Provide translation tracks in multiple languages to support international audiences."],
        accessibility: "Highly critical accessibility feature to support hearing-impaired users.",
        seo: "Subtitles are crawled, allowing search engines to index video script keywords.",
        related: ["video"]
      }
    ]
  },
  {
    category: "🔌 Embedded Content",
    tags: [
      {
        name: "iframe",
        desc: "Embeds another webpage inside the current page.",
        category: "Embedded Content",
        what: "The <iframe> tag is a mini-window showing another website inside your webpage.",
        why: "We use it to embed Google Maps, YouTube videos, or external widgets on our site.",
        syntax: `<iframe src="https://example.com" width="300" height="200" style="border:none;"></iframe>`,
        attributes: [
          { name: "src", desc: "The URL of the webpage to embed." },
          { name: "width", desc: "Width size in pixels." },
          { name: "height", desc: "Height size in pixels." },
          { name: "sandbox", desc: "Applies security restrictions to the embedded page content." },
          { name: "loading", desc: "Set loading=\"lazy\" to load the iframe only as users scroll to it." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Embedding sites that block iframes via security headers (X-Frame-Options), resulting in blank boxes."],
        practices: ["Always use the sandbox attribute to prevent embedded pages from executing malicious scripts on your site."],
        accessibility: "Always include a title attribute (e.g. title=\"Google Map\") to explain the iframe content to screen readers.",
        seo: "Crawlers do not index content inside iframes as part of your webpage content.",
        related: ["embed", "object"]
      },
      {
        name: "embed",
        desc: "Defines a container for external resources or interactive plugins.",
        category: "Embedded Content",
        what: "The <embed> tag inserts external media players or flash plugins into the page.",
        why: "We use it to play old Flash games or load custom browser plugin resources.",
        syntax: `<embed type="video/webm" src="video.webm" width="200" height="200">`,
        attributes: [
          { name: "src", desc: "URL source of resource." },
          { name: "type", desc: "MIME type specification." },
          { name: "width", desc: "Width size." },
          { name: "height", desc: "Height size." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it for video/audio. Modern HTML5 video/audio elements are preferred over embed."],
        practices: ["Avoid using embed where native tags like iframe or video work better."],
        accessibility: "Hard for screen readers to navigate inside. Provide text summaries.",
        seo: "No direct SEO benefit.",
        related: ["iframe", "object"]
      },
      {
        name: "object",
        desc: "Embeds external multimedia files or plugins, allowing fallback content.",
        category: "Embedded Content",
        what: "The <object> tag inserts files like PDFs or videos, showing a message if the browser can't load them.",
        why: "We use it to embed PDFs directly on a page with built-in download fallback links.",
        syntax: `<object data="document.pdf" type="application/pdf" width="300" height="200">\n  <p>Preview unavailable. <a href="document.pdf">Download PDF</a></p>\n</object>`,
        attributes: [
          { name: "data", desc: "The URL source address of the resource." },
          { name: "type", desc: "MIME type specification." },
          { name: "width", desc: "Width size." },
          { name: "height", desc: "Height size." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Forgetting to write fallback link descriptions inside the tag block."],
        practices: ["Use for embedding PDF documents with a clear fallback download link."],
        accessibility: "Fallback text inside the tag is read by screen readers if loading fails.",
        seo: "No direct SEO weight.",
        related: ["iframe", "embed", "param"]
      },
      {
        name: "param",
        desc: "Defines parameters for plugins loaded by the <object> element.",
        category: "Embedded Content",
        what: "The <param> tag passes settings (like volume or autoplay) to an <object> plugin.",
        why: "We use it to adjust settings for external media players inside objects.",
        syntax: `<object data="player.swf">\n  <param name="autoplay" value="true">\n</object>`,
        attributes: [
          { name: "name", desc: "Name of the parameter parameter." },
          { name: "value", desc: "Value of the parameter." }
        ],
        support: { chrome: "1.0+", firefox: "1.0+", safari: "1.0+", edge: "12.0+" },
        mistakes: ["Using it outside of <object> tag structures."],
        practices: ["Rarely used in modern web development; replaced by video and script parameters."],
        accessibility: "No direct accessibility impact.",
        seo: "No direct SEO impact.",
        related: ["object"]
      }
    ]
  },
  {
    category: "🧩 Templates & Web Components",
    tags: [
      {
        name: "template",
        desc: "Holds HTML content client-side that is not rendered on page load, used as blueprint markup for scripting.",
        category: "Templates & Web Components",
        what: "The <template> tag holds HTML code invisible on load, serving as a blueprint script can copy and insert later.",
        why: "We use it to create reusable card layouts that JavaScript can populate and duplicate dynamically.",
        syntax: `<template id="card-template">\n  <div class="card">\n    <h3>Name</h3>\n  </div>\n</template>`,
        attributes: [],
        support: { chrome: "26.0+", firefox: "22.0+", safari: "8.0+", edge: "13.0+" },
        mistakes: ["Putting main content inside template blocks and expecting it to display automatically on load."],
        practices: ["Use template tags inside single-page applications for clean dynamic DOM updates."],
        accessibility: "Invisible to screen readers until activated and injected into the DOM.",
        seo: "Content inside templates is not indexed or ranked by search engine crawlers.",
        related: ["slot", "custom-elements"]
      },
      {
        name: "slot",
        desc: "Defines a placeholder inside a Web Component shadow DOM template where custom HTML can be injected.",
        category: "Templates & Web Components",
        what: "The <slot> tag is a placeholder. It lets you inject text into specific spots inside a custom Web Component.",
        why: "We use it to build flexible Web Components where contents can vary per instance.",
        syntax: `<template id="my-element">\n  <p>Welcome, <slot name="username">Guest</slot>!</p>\n</template>`,
        attributes: [
          { name: "name", desc: "Specifies slot identifier corresponding to slot attribute in target injection elements." }
        ],
        support: { chrome: "53.0+", firefox: "63.0+", safari: "10.0+", edge: "79.0+" },
        mistakes: ["Using slot tags outside shadow DOM templates."],
        practices: ["Define fallback values inside slot tags to display if no content is injected."],
        accessibility: "Accessibility depends on custom component role definitions.",
        seo: "No direct SEO weight.",
        related: ["template", "custom-elements"]
      },
      {
        name: "custom-elements",
        desc: "Custom HTML elements created via JavaScript to bundle structure, styles, and logic.",
        category: "Templates & Web Components",
        what: "Custom Elements let you define your own HTML tags (like <user-card>) using JavaScript.",
        why: "We use it to build encapsulated, reusable components (like buttons or cards) that work across different pages.",
        syntax: `<script>\n  class UserCard extends HTMLElement {\n    connectedCallback() {\n      this.innerHTML = '<p>Custom Card Component</p>';\n    }\n  }\n  customElements.define('user-card', UserCard);\n</script>\n\n<user-card></user-card>`,
        attributes: [],
        support: { chrome: "54.0+", firefox: "63.0+", safari: "10.1+", edge: "79.0+" },
        mistakes: ["Creating custom tag names that do not contain a hyphen. Custom tags MUST contain a hyphen (e.g. <my-card>, not <mycard>)."],
        practices: ["Keep component code modular and style them internally using Shadow DOM."],
        accessibility: "Must use ARIA roles and keyboard listeners to make interactive custom components accessible.",
        seo: "Ensure search engine crawlers can index dynamic element content by optimizing script loading.",
        related: ["template", "slot"]
      }
    ]
  },
  {
    category: "⚠️ Deprecated HTML Tags",
    tags: [
      {
        name: "font",
        desc: "OBSOLETE. Was used to style text color, face, and size.",
        category: "Deprecated Tags",
        what: "The <font> tag was used to set text color or size. It is now deprecated.",
        why: "Deprecated. **Use CSS styling rules instead** (e.g. color, font-family, font-size).",
        syntax: `<p><font color="red" size="5">Obsolete Bold Text</font></p>`,
        attributes: [
          { name: "color", desc: "Sets text color." },
          { name: "face", desc: "Sets font family." },
          { name: "size", desc: "Sets font size." }
        ],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using <font> in modern code. Style text in CSS instead."],
        practices: ["Never use. Apply styling rules using classes and CSS stylesheets."],
        accessibility: "Breaks clean separation of structure and presentation, complicating screen reader parsers.",
        seo: "Causes code bloat, negatively impacting page speeds and search rankings.",
        related: ["span", "style"]
      },
      {
        name: "center",
        desc: "OBSOLETE. Centered text or elements horizontally on the page.",
        category: "Deprecated Tags",
        what: "The <center> tag centered text horizontally. It is now deprecated.",
        why: "Deprecated. **Use CSS layout properties instead** (e.g. text-align: center, margin: auto, display: flex).",
        syntax: `<center>\n  <p>Obsolete Centering</p>\n</center>`,
        attributes: [],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using <center> tags to align content blocks on modern pages."],
        practices: ["Never use. Center layouts using Flexbox or margin alignments in CSS."],
        accessibility: "Style layout configurations should reside in stylesheets, keeping HTML structure clean.",
        seo: "Obsolete tags look unprofessional and can flag websites on code validity checks.",
        related: ["div", "style"]
      },
      {
        name: "big",
        desc: "OBSOLETE. Increased text size by one relative scale.",
        category: "Deprecated Tags",
        what: "The <big> tag was used to make text slightly larger. It is now deprecated.",
        why: "Deprecated. **Use CSS font-size rules instead**.",
        syntax: `<p>Normal <big>Large</big> text</p>`,
        attributes: [],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using <big> for subheaders. Use heading tags instead."],
        practices: ["Never use. Change text size using CSS font-size properties."],
        accessibility: "Breaks semantic structure, mixing style presentation into HTML code.",
        seo: "No direct SEO benefit.",
        related: ["small", "span"]
      },
      {
        name: "tt",
        desc: "OBSOLETE. Styled text in a teletype (monospaced) font.",
        category: "Deprecated Tags",
        what: "The <tt> tag formatted text to look like a teletype machine (monospaced font). It is now deprecated.",
        why: "Deprecated. **Use <code> or <kbd> tags for code, and CSS font-family for general teletype styling**.",
        syntax: `<p>Teletype <tt>text</tt></p>`,
        attributes: [],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using <tt> to style code blocks. Use <code> instead."],
        practices: ["Never use. Wrap code in <code> tags and configure fonts in stylesheets."],
        accessibility: "Provides no semantic structural markers to screen readers.",
        seo: "No direct SEO benefit.",
        related: ["code", "kbd"]
      },
      {
        name: "strike",
        desc: "OBSOLETE. Drew a line through text.",
        category: "Deprecated Tags",
        what: "The <strike> tag drew a line through text. It is now deprecated.",
        why: "Deprecated. **Use <del> to represent deleted text, or CSS text-decoration: line-through for style lines**.",
        syntax: `<p><strike>Strikethrough text</strike></p>`,
        attributes: [],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using strike in document updates. Use <del> instead."],
        practices: ["Never use. Use del for semantic deletion, or CSS for design lines."],
        accessibility: "Screen readers do not declare strike tags, but they do declare del tags.",
        seo: "No direct SEO benefit.",
        related: ["del", "ins"]
      },
      {
        name: "acronym",
        desc: "OBSOLETE. Defined acronyms.",
        category: "Deprecated Tags",
        what: "The <acronym> tag defined acronyms on a page. It is now deprecated.",
        why: "Deprecated. **Use the <abbr> tag instead**.",
        syntax: `<p><acronym title="HyperText Markup Language">HTML</acronym></p>`,
        attributes: [
          { name: "title", desc: "Full definition expansion." }
        ],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using <acronym> in modern code. Use <abbr> instead."],
        practices: ["Never use. The <abbr> element is the official replacement for abbreviations and acronyms."],
        accessibility: "Screen readers might fail to parse definitions in acronym tags. Use <abbr>.",
        seo: "No direct SEO benefit.",
        related: ["abbr"]
      },
      {
        name: "applet",
        desc: "OBSOLETE. Embedded Java applets in webpages.",
        category: "Deprecated Tags",
        what: "The <applet> tag embedded Java applet programs. It is now deprecated.",
        why: "Deprecated. **Use <embed> or <object> elements instead, or compile interactive content into native JavaScript**.",
        syntax: `<applet code="Main.class" width="200" height="200"></applet>`,
        attributes: [
          { name: "code", desc: "Java class filename." },
          { name: "width", desc: "Width size." },
          { name: "height", desc: "Height size." }
        ],
        support: { chrome: "No", firefox: "No", safari: "No", edge: "No" },
        mistakes: ["Using applet tags in modern sites. Most modern browsers have completely dropped support for Java applets."],
        practices: ["Never use. Re-code Java applet components into HTML5 and Javascript applications."],
        accessibility: "Unusable by accessibility tools.",
        seo: "Blocked or ignored by search engine indexing bots.",
        related: ["object", "embed"]
      },
      {
        name: "dir",
        desc: "OBSOLETE. Created directory lists.",
        category: "Deprecated Tags",
        what: "The <dir> tag created lists. It is now deprecated.",
        why: "Deprecated. **Use standard <ul> lists instead**.",
        syntax: `<dir>\n  <li>Item</li>\n</dir>`,
        attributes: [],
        support: { chrome: "Yes (not recommended)", firefox: "Yes (not recommended)", safari: "Yes (not recommended)", edge: "Yes (not recommended)" },
        mistakes: ["Using dir tags to format list menus."],
        practices: ["Never use. Standardize list menus using <ul> and <li> elements."],
        accessibility: "Breaks clean semantic list structures in assistive screen reader tools.",
        seo: "No direct SEO benefit.",
        related: ["ul", "ol"]
      },
      {
        name: "frame",
        desc: "OBSOLETE. Defined a single frame window layout region inside a frameset.",
        category: "Deprecated Tags",
        what: "The <frame> tag defined layout regions for loading external pages. It is now deprecated.",
        why: "Deprecated. **Use modern CSS layouts (flexbox, grid) and <iframe> tags instead**.",
        syntax: `<frame src="page.html">`,
        attributes: [
          { name: "src", desc: "URL of page to load." }
        ],
        support: { chrome: "No", firefox: "No", safari: "No", edge: "No" },
        mistakes: ["Building multi-frame layouts. Modern browsers have removed support for frame files."],
        practices: ["Never use. Build templates using modern CSS layouts."],
        accessibility: "Extremely difficult for screen reader users to navigate between multiple page frames.",
        seo: "Search engines find multi-frame sites difficult to crawl and index.",
        related: ["frameset", "iframe"]
      },
      {
        name: "frameset",
        desc: "OBSOLETE. Configured grid structures for multiple page frames.",
        category: "Deprecated Tags",
        what: "The <frameset> tag divided a page into multiple frame panels. It is now deprecated.",
        why: "Deprecated. **Use CSS layouts (flexbox, grid) to structure page templates**.",
        syntax: `<frameset cols="50%,50%">\n  <frame src="left.html">\n  <frame src="right.html">\n</frameset>`,
        attributes: [
          { name: "cols", desc: "Specifies frame column sizes." }
        ],
        support: { chrome: "No", firefox: "No", safari: "No", edge: "No" },
        mistakes: ["Using framesets in website navigation layouts."],
        practices: ["Never use. Build responsive templates using CSS flexbox grids."],
        accessibility: "Completely breaks page landmarks and focus navigations for screen readers.",
        seo: "Blocks crawler indexing bots from understanding page context paths.",
        related: ["frame", "noframes"]
      },
      {
        name: "noframes",
        desc: "OBSOLETE. Provided alternative fallback text for browsers that do not support frameset sites.",
        category: "Deprecated Tags",
        what: "The <noframes> tag displayed messages if the browser did not support frame page grids. It is now deprecated.",
        why: "Deprecated. **Never use, as frameset structures are no longer supported in modern web development**.",
        syntax: `<noframes>\n  <p>This page requires frames support.</p>\n</noframes>`,
        attributes: [],
        support: { chrome: "No", firefox: "No", safari: "No", edge: "No" },
        mistakes: ["Including modern page content inside noframes fallback blocks."],
        practices: ["Never use. Standardize page templates on modern layouts."],
        accessibility: "Unnecessary since frames are obsolete.",
        seo: "No direct SEO benefit.",
        related: ["frameset"]
      }
    ]
  }
];
