# Developer Guide & Walkthrough: ak Custom CSS/JS Framework (v1.1.0)

This guide documents the usage of the **ak** framework—a custom, responsive, lightweight styling framework featuring a **Dynamic CSS Spacing Engine** (unlimited pixel sizes 1 to 30,000+) and a local, offline **Dynamic Icon Customizer** loaded with over **30,000+ vector SVG icons** (Lucide, FontAwesome, Material Design, Tabler, Remix, Ionicons, Octicons, Feather, Boxicons, Simple Brand Icons, and custom user-provided SVGs).

---

## 1. Getting Started

Include the compiled CSS and JS assets in your project root:
```html
<!-- Include responsive grid, cards, alert styles, and animations -->
<link rel="stylesheet" href="path/to/dist/ak-bootstrap.min.css">

<!-- Include Dynamic CSS Engine, dynamic icon loader, toasts, and popups -->
<script src="path/to/dist/ak-bootstrap.min.js"></script>
```

---

## 2. Dynamic Spacing Engine (1 to 30,000+)

Instead of relying on statically pre-generated classes (which would increase file sizes to hundreds of megabytes), this library features a Just-In-Time (JIT) utility compiler.

Whenever a class prefixed with `ak-` is added to any DOM element (either on page load, or dynamically via JS), the library intercepts it, compiles the corresponding CSS on-the-fly, and inserts it into a dynamic style block inside the document header.

### Spacing Syntax
You can specify **any value** from `1` to `30000` for the following categories:
*   **Margins (px)**: `ak-m-[value]`, `ak-mt-[value]`, `ak-mb-[value]`, `ak-ms-[value]`, `ak-me-[value]`, `ak-mx-[value]`, `ak-my-[value]`
*   **Paddings (px)**: `ak-p-[value]`, `ak-pt-[value]`, `ak-pb-[value]`, `ak-ps-[value]`, `ak-pe-[value]`, `ak-px-[value]`, `ak-py-[value]`
*   **Border Radius (px)**: `ak-rounded-[value]`
*   **Font Size (px)**: `ak-fs-[value]`
*   **Gap (px)**: `ak-gap-[value]`
*   **Width & Height (%)**: `ak-w-[value]`, `ak-h-[value]` (from 1 to 100%)
*   **Opacity (%)**: `ak-opacity-[value]` (from 1 to 100%)
*   **Z-Index (int)**: `ak-z-[value]`

### Responsive Modifiers
You can prepend responsive breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`) to any of these values:
*   *Example*: `ak-p-md-50` applies a padding of `50px` only on screens larger than `768px`.
*   *Example*: `ak-fs-lg-45` applies a font-size of `45px` only on screens larger than `992px`.
*   *Example*: `ak-rounded-xl-120` applies a border-radius of `120px` only on screens larger than `1200px`.

---

## 3. 30,000+ Offline Icon Loader

Over 30,000 open-source SVG vector icons are stored locally in the `dist/icons/` directory.

### Basic Usage
Use the custom `<ak-icon>` element to load and customize icons dynamically:
```html
<!-- Syntax format: name="set/iconName" -->
<ak-icon name="lucide/home"></ak-icon>
<ak-icon name="fa-solid/user"></ak-icon>
<ak-icon name="material/cart"></ak-icon>
```
Alternatively, you can specify `set` and `name` attributes separately:
```html
<ak-icon set="tabler" name="browser"></ak-icon>
```

### Supported Offline Icon Sets
*   `lucide` (Lucide Icons)
*   `fa-solid` (FontAwesome Solid)
*   `fa-regular` (FontAwesome Regular)
*   `fa-brands` (FontAwesome Brand Logos)
*   `material` (Material Design Icons)
*   `bootstrap` (Bootstrap Icons)
*   `remix` (Remixicon)
*   `simple` (Simple Icons Brand Logos)
*   `ionicons` (Ionicons)
*   `octicons` (GitHub Octicons)
*   `feather` (Feather Icons)
*   `box-solid` (Boxicons Solid)
*   `box-regular` (Boxicons Regular)
*   `box-logos` (Boxicons Logos)
*   `tabler` (Tabler Icons)
*   `custom` (For your own custom SVG icons)

### Icon Customizations
Icons are SVGs, meaning you can customize color, size, and outlines:
*   **Size**: Set size in pixels or standard units:
    ```html
    <ak-icon name="lucide/settings" size="32px"></ak-icon>
    ```
*   **Color**: Use HSL style variables, colors, or inline CSS:
    ```html
    <ak-icon name="lucide/heart" color="var(--ak-danger)" size="48px"></ak-icon>
    <!-- Or inherit from parent text color -->
    <div class="ak-text-success">
      <ak-icon name="lucide/check-circle"></ak-icon> Success
    </div>
    ```
*   **Stroke Width (Outline Only)**: Customize stroke weights for outline-based sets (like `lucide` and `feather`):
    ```html
    <ak-icon name="lucide/activity" stroke="3" size="40px"></ak-icon>
    ```

### Using HTML Tags
You can also use classic `<i>` tag selectors. The JS scanner will automatically convert them to `<ak-icon>` elements at runtime:
```html
<i class="ak-icon" data-name="lucide/search" data-size="24px" data-color="#4f46e5"></i>
```

### Custom SVG Compilation
Drop your own `.svg` files into the `./icons/` folder at the project root and run `npm run build`. Your icons will be automatically copied into `dist/icons/custom/` and can be used immediately:
```html
<ak-icon name="custom/my-logo"></ak-icon>
```

---

## 4. React Library Integration

The project has first-class support for React apps. You can install it locally as an NPM package:
```bash
# Install the custom library from the folder
npm install /path/to/ak-framework
```

### Usage in React Components

Once installed, import the React wrapper component and hooks directly:
```javascript
import React from 'react';
// Import the React components and controls
import { akIcon, akToast, akDialog } from 'ak-framework';
// Import styles
import 'ak-framework/dist/ak-bootstrap.min.css';

export default function MyReactApp() {
  const triggerAlert = async () => {
    await akDialog.alert("Action completed successfully!", "Alert title");
    akToast.success("Successfully completed task!");
  };

  return (
    <div className="ak-container ak-py-40">
      <h1 className="ak-h1">Welcome to My React App</h1>
      <button className="ak-btn ak-btn-primary" onClick={triggerAlert}>
        <akIcon set="lucide" name="bell" size="18px" /> Click Me
      </button>
    </div>
  );
}
```

### TypeScript Support
The package is bundled with a root-level `index.d.ts` declaration file providing complete IDE autocomplete suggestions and lint verification.

---

## 5. 100% Offline Portability & Standalone Icon Bundles

To support pure offline usage without CORS constraints (e.g. running by double-clicking `.html` files via the `file://` protocol or in offline intranet portals), you can avoid JSON/fetch requests entirely by using **Standalone Icon JS Bundles**.

The build pipeline compiles each icon library into a single javascript script:
- `dist/ak-icons-lucide.min.js`
- `dist/ak-icons-bootstrap.min.js`
- `dist/ak-icons-material.min.js`
- `dist/ak-icons-fa-solid.min.js`
- (And all other sets...)

### Offline HTML Implementation
Simply load the script bundle for the set you want. It registers all the SVGs directly into memory. The `<ak-icon>` custom element will immediately resolve them locally:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="dist/ak-bootstrap.min.css">
</head>
<body>

  <!-- Render offline icon (loads from window.akIcons in-memory cache) -->
  <ak-icon set="lucide" name="home" size="32px"></ak-icon>

  <!-- Core library logic -->
  <script src="dist/ak-bootstrap.min.js"></script>
  <!-- Standalone icon set bundle -->
  <script src="dist/ak-icons-lucide.min.js"></script>
</body>
</html>
```

### Offline React Implementation
Similarly, in React you can import the standalone bundle to bypass fetches:
```javascript
import { akIcon } from 'ak-framework';
import 'ak-framework/dist/ak-bootstrap.min.css';
// Pre-loads the Lucide set in-memory for instant CORS-free offline rendering
import 'ak-framework/dist/ak-icons-lucide.min.js';

export function HomeIcon() {
  return <akIcon set="lucide" name="home" size="32px" />;
}
```

---

## 6. Live Icon Customization & Code Generation Panel

When browsing the icon catalog on the local search interface, clicking on any icon opens a **100% Free Live Customizer Panel** matching the style of premium libraries (like FontAwesome Pro but fully open and unrestricted).

### Features of the Customizer Panel
1. **Interactive Real-Time Preview**: The icon is rendered dynamically inside a preview frame that scales, recolors, and animates instantly.
2. **Visual Controls**:
   * **Size Slider**: Interactively scale the icon size between `16px` and `256px`.
   * **Stroke Width Slider**: Adjust the line thickness for outline-based sets (automatically hidden for solid sets).
   * **Color Presets**: Choose preset brand colors (Indigo, Emerald, Rose, Amber, Cyan, Slate) or use the custom **HTML Color Picker** for precise hex color definitions.
   * **Transformations (Rotate & Flip)**: Apply classes to rotate the icon by `90°`, `180°`, `270°`, or flip it horizontally and vertically.
   * **Animations**: Apply live motion styles like:
     * `ak-spin`: Smooth 360° continuous rotation.
     * `ak-spin-pulse`: 8-step step-rotation.
     * `ak-beat`: Smooth scaling heartbeat animation.
     * `ak-bounce`: Bouncy up-and-down animation.
     * `ak-shake`: Playful left-right shaking.
     * `ak-fade`: Breathing opacity transition.
3. **Multi-Format Code Generator**:
   * **Custom HTML element**: Generates `<ak-icon set="..." name="..." size="..." color="..." stroke="..." class="..."></ak-icon>`
   * **Class-based tag**: Generates `<i class="ak-icon ..." data-name="..." ...></i>`
   * **React wrapper**: Generates `<AkIcon set="..." name="..." size="..." color="..." stroke="..." className="..." />`
4. **Instant Clipboard Copier**: Click the copy button to copy the snippet to your clipboard.


