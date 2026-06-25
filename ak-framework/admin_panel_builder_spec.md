# Custom Admin Panel Builder Specification

This specification outlines the technical plan and reference implementation blueprints for building a **Visual Admin Panel Builder** using our custom library. It enables users to visually design layouts, configure sidebars, topbars, footers, branding, and export a ready-to-run HTML file.

---

## 1. Builder Core Architecture & Preview Model

To build the editor interface, follow a state-driven architecture:

```
[ Builder Controls Panel ]  ──(Update JSON Config)──>  [ State Manager ]
                                                             │
[ Download HTML Exporter ]  <──(Inject Config Bundle)───────┼───(Generate HTML String)
                                                             ▼
                                                [ Sandboxed IFrame Preview ]
```

### The Sandboxed Preview Canvas
The preview workspace should run inside an `<iframe>` to isolate the generated admin panel's styles and scripts from the builder UI.
```javascript
function updatePreview(config) {
  const iframe = document.getElementById('previewCanvas');
  const previewDoc = iframe.contentDocument || iframe.contentWindow.document;

  const html = compileAdminPanelHTML(config);

  previewDoc.open();
  previewDoc.write(html);
  previewDoc.close();
}
```

---

## 2. Layout & Customization Features

### A. Branding & Fonts
Users can configure the branding options inside a panel:
* **Custom Google Fonts**: Selection dropdown (e.g., *Outfit*, *Inter*, *Plus Jakarta Sans*, *Cabinet Grotesque*).
* **Logo Configuration**: Upload/Link field for Logo Image, Text Brand Name, and toggle to position it:
  * Option 1: Top of Sidebar.
  * Option 2: Left of Topbar.

### B. Topbar Customization
* **Sticky/Fluid Position**: Toggle between fixed top (`position: sticky; top: 0; z-index: 100;`) or scrolling.
* **Component Builder**: Checkboxes to toggle what elements show in the Topbar:
  * Global Search Bar (with search input styling).
  * Notification Badge dropdown widget.
  * User profile dropdown widget.

### C. Footer Customization
* **Placement**: Scrollable static footer or fixed-to-bottom wrapper.
* **Content**: Text area inputs for Copyright text (left-aligned) and legal/privacy links (right-aligned).

---

## 3. Advanced Collapsible Sidebar Specification (Desktop Only-Icon Hover)

This is the most critical UI configuration. The sidebar can be set to **Toggleable**. When collapsed in desktop mode:
1. The sidebar width shrinks from `260px` to `70px`.
2. Text labels next to icons are hidden (`display: none`).
3. **Hover Behavior**: Hovering over a collapsed sidebar item must **NOT** expand the sidebar width. Instead, a clean floating tooltip/sub-menu element appears immediately to the right of the icon, overlaying the content.

### CSS Implementation Blueprint (Add to Library Styles)
```css
/* Sidebar Container */
.ak-admin-sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0f172a; /* Slate 900 */
  color: #94a3b8;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1010;
  display: flex;
  flex-direction: column;
}

/* Collapsed State Class */
.ak-admin-sidebar.collapsed {
  width: 70px;
}

/* Sidebar Menu Items */
.ak-sidebar-menu-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #94a3b8;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
}

.ak-sidebar-menu-item:hover {
  background-color: #1e293b; /* Slate 800 */
  color: #ffffff;
}

/* Menu Text Label */
.ak-sidebar-menu-item .menu-text {
  margin-left: 12px;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.2s;
}

/* Hide Text when Collapsed */
.ak-admin-sidebar.collapsed .ak-sidebar-menu-item .menu-text {
  opacity: 0;
  pointer-events: none;
  width: 0;
  margin: 0;
  display: none;
}

/* Floating Hover Tooltip/Dropdown Menu on Collapsed */
.ak-admin-sidebar.collapsed .ak-sidebar-menu-item .floating-menu {
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

/* Trigger visibility of submenus/tooltips on Hover when Collapsed */
.ak-admin-sidebar.collapsed .ak-sidebar-menu-item:hover .floating-menu {
  display: block;
}
```

---

## 4. Blank Page & Drag-and-Drop Workspace Canvas

The center area functions as a **Blank Page Grid Layout**. The builder should allow dragging/inserting template widgets:
* **Metric Cards Grid**: Multi-column grids (1/2/3/4-col options) containing custom solid, soft, or gradient styled cards with counts and percentage badges.
* **Form Widgets**: Pre-designed login panels, profile editing blocks, or setting controls.
* **Data Panels**: Custom tables containing mockup data and dynamic search inputs.
* **Interactive Toolbars**: Page headers with primary/gradient action buttons.

---

## 5. Download Export Engine

When the user clicks the **"Download Design"** button, the builder compiles the final HTML file on the fly. 

To ensure the exported project works flawlessly, it links directly to your custom library assets (relative paths):

```html
<!-- Example of compiled headers -->
<link rel="stylesheet" href="../dist/ak-bootstrap.min.css">
<script src="../dist/ak-bootstrap.min.js"></script>
```

### Exporter JS Script Code
```javascript
function downloadFinalDesign(config) {
  const finalHTML = compileAdminPanelHTML(config);
  
  const blob = new Blob([finalHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'custom-admin-panel.html';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}
```

---

## 6. Complete Blueprint Example (Double-Menu Layout HTML)

Here is the exact reference template structure generated for a toggleable layout:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard Preview</title>
  <!-- Link to the local workspace library CSS files -->
  <link rel="stylesheet" href="../dist/ak-bootstrap.min.css">
  <style>
    /* Main Layout Wrappers */
    .ak-admin-wrapper {
      display: flex;
      min-height: 100vh;
      background-color: #f8fafc;
    }
    
    .ak-admin-main {
      flex-grow: 1;
      margin-left: 260px;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .ak-admin-main.sidebar-collapsed {
      margin-left: 70px;
    }
    
    .ak-admin-content {
      flex-grow: 1;
      padding: 30px;
    }

    .ak-admin-topbar {
      height: 70px;
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 0 30px;
    }
    
    .ak-admin-footer {
      background: #ffffff;
      border-top: 1px solid #e2e8f0;
      padding: 16px 30px;
    }
  </style>
</head>
<body>

  <div class="ak-admin-wrapper">
    
    <!-- Sidebar -->
    <aside class="ak-admin-sidebar" id="sidebarContainer">
      <!-- Sidebar Brand Logo -->
      <div class="ak-p-20 ak-d-flex ak-align-items-center" style="border-bottom: 1px solid #1e293b; height: 70px; overflow: hidden;">
        <span class="ak-badge ak-bg-primary-light ak-text-primary ak-fs-14 ak-fw-bold ak-px-10 ak-py-4 ak-rounded-4">AK</span>
        <span class="menu-text ak-text-white ak-fs-16 ak-fw-bold ak-ml-12">DashBuilder</span>
      </div>
      
      <!-- Menu Navigation Links -->
      <nav class="ak-mt-20 ak-d-flex ak-flex-column ak-gap-4">
        <a class="ak-sidebar-menu-item">
          <ak-icon set="lucide" name="layout-dashboard" size="18px" color="#94a3b8"></ak-icon>
          <span class="menu-text">Dashboard</span>
          <div class="floating-menu">Dashboard Overview</div>
        </a>
        <a class="ak-sidebar-menu-item">
          <ak-icon set="lucide" name="users" size="18px" color="#94a3b8"></ak-icon>
          <span class="menu-text">Users</span>
          <div class="floating-menu">Manage User Accounts</div>
        </a>
        <a class="ak-sidebar-menu-item">
          <ak-icon set="lucide" name="settings" size="18px" color="#94a3b8"></ak-icon>
          <span class="menu-text">Settings</span>
          <div class="floating-menu">Configuration Settings</div>
        </a>
      </nav>
    </aside>

    <!-- Main Content Panel Area -->
    <div class="ak-admin-main" id="mainPanel">
      
      <!-- Topbar Header -->
      <header class="ak-admin-topbar ak-d-flex ak-align-items-center ak-justify-content-between">
        <button class="ak-btn ak-btn-sm ak-btn-light" id="sidebarToggleBtn" style="padding: 8px 12px;">
          <ak-icon set="lucide" name="menu" size="16px"></ak-icon>
        </button>
        <div class="ak-d-flex ak-align-items-center ak-gap-16">
          <ak-icon set="lucide" name="bell" size="18px" class="ak-text-secondary"></ak-icon>
          <div class="ak-d-flex ak-align-items-center ak-gap-8">
            <div class="ak-badge ak-bg-dark ak-text-white ak-rounded-8 ak-p-8">Admin</div>
          </div>
        </div>
      </header>

      <!-- Blank Page Canvas -->
      <main class="ak-admin-content">
        <div class="ak-mb-24">
          <h1 class="ak-h1 ak-text-dark ak-mb-4">Blank Page Canvas</h1>
          <p class="ak-text-secondary">Drag and drop dashboard widgets here.</p>
        </div>
        
        <!-- Grid Widgets Canvas Block -->
        <div class="ak-row">
          <div class="ak-col-12 ak-col-md-4 ak-mb-20">
            <div class="ak-card">
              <div class="ak-card-body">
                <h5 class="ak-h5">Widget Canvas</h5>
                <p class="ak-text-secondary ak-fs-14">Configure metric grids, lists, or custom forms inside this zone.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="ak-admin-footer ak-d-flex ak-justify-content-between ak-align-items-center">
        <div class="ak-fs-12 ak-text-secondary">&copy; 2026 DashBuilder. All rights reserved.</div>
        <div class="ak-fs-12 ak-text-secondary">Version 1.0.0</div>
      </footer>
    </div>
  </div>

  <!-- Include library script -->
  <script src="../dist/ak-bootstrap.min.js"></script>
  <script>
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('sidebarContainer');
    const main = document.getElementById('mainPanel');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      main.classList.toggle('sidebar-collapsed');
    });
  </script>
</body>
</html>
```
