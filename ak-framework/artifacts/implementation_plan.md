# Updated Implementation Plan: Custom ak CSS & JS Library

We are updating the library architecture to support a massive range of utilities (1 to 30,000+) and a comprehensive local, offline set of over 36,000+ customizable vector icons. We will avoid large file sizes by using a **Dynamic CSS Utility Engine** and an **On-Demand Icon Loader**.

---

## 1. Core Updates

1.  **Dynamic CSS Utility Engine (1 to 30,000+)**:
    *   Instead of pre-generating 30,000+ spacing and sizing classes (which would bloat the stylesheet to hundreds of megabytes), the JS library will dynamically parse classes at runtime.
    *   Using a `MutationObserver` and initial DOM scanning, any class matching `ak-[utility]-[breakpoint]-[value]` (up to 30,000+) is compiled in real-time and injected into a dynamic `<style>` sheet.
    *   This provides infinite utility flexibility with zero file size overhead.
2.  **36,000+ Customizable Offline Icons**:
    *   We will copy over 36,000 vector icons from popular open-source packages (`lucide-static`, `@fortawesome/fontawesome-free`, `material-design-icons-svg`, `remixicon`, `bootstrap-icons`, `simple-icons`, `ionicons`, `@primer/octicons`, `feather-icons`, `boxicons`, `@tabler/icons`) into `dist/icons/` subdirectories.
    *   We will provide a custom HTML element `<ak-icon>` (and class `.ak-icon`) that fetches and embeds these SVGs on demand.
    *   The icons are fully customizable in terms of size, color (using HSL themes), stroke-width, and animations.
    *   Users can easily drop custom SVGs into a local `./icons` directory, which compiles automatically into `dist/icons/custom/`.

---

## 2. Directory Structure

```text
ak-framework/
├── dist/
│   ├── ak-bootstrap.css
│   ├── ak-bootstrap.min.css
│   ├── ak-bootstrap.js
│   ├── ak-bootstrap.min.js
│   └── icons/                # 36,000+ categorized SVG files
│       ├── lucide/
│       ├── fa-solid/
│       ├── material/
│       ├── remix/
│       ├── bootstrap/
│       ├── simple/
│       └── custom/           # User-added custom icons
├── scripts/
│   └── generate.js          # Compiles CSS, JS, and copies all 36,000+ SVGs
├── icons/                    # Folder where user drops their own custom SVGs
├── package.json             # Includes scripts & dependencies
└── demo/
    └── index.html           # Dashboard showcasing dynamic utilities and icon browser
```

---

## 3. Implementation Details

### Step 3.1: Package Installation
- Installed devDependencies: `lucide-static`, `@fortawesome/fontawesome-free`, `material-design-icons-svg`, `remixicon`, `bootstrap-icons`, `simple-icons`, `ionicons`, `@primer/octicons`, `feather-icons`, `boxicons`, `@tabler/icons`.

### Step 3.2: Compile Scripts (`scripts/generate.js`)
Update the script to:
1.  Generate the base static CSS containing resets, grid system, cards, custom alerts, toasts, and buttons.
2.  Include the **Dynamic CSS Utility Engine** and **`<ak-icon>` custom element** in the output JS file.
3.  Implement an SVG copying pipeline that reads from the `node_modules` folders and copies all SVGs into `dist/icons/`.
4.  Implement custom SVG compilation from the local `icons/` directory.

### Step 3.3: Interactive Icon Showcase
Update `demo/index.html` to:
1.  Showcase the dynamic CSS scaling by letting users type *any* number (e.g. `12345` or `450`) into a field and seeing the layout pad/margin immediately apply the class.
2.  Add an **Icon Browser** section showing categorized icons (e.g., Lucide, FA, Remix, Tabler) and letting the user search and display them in different colors and sizes.

