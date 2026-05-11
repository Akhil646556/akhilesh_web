# Project Plan: Personal Portfolio Website

## 1. Overview
A high-end, premium personal portfolio website designed to showcase personal details, skills, projects, and professional presence. The site will feature a modern "Glassmorphism" aesthetic with smooth animations and a responsive layout.

## 2. Objectives
- **Professional Identity**: Present a cohesive brand for Akhilesh.
- **Dynamic Content**: Showcase projects and skills effectively.
- **Social Integration**: Link and pull data from LinkedIn, Indeed, and Sarkari profiles.
- **Visual Excellence**: Use vibrant colors, dark mode, and premium typography.

## 3. Technology Stack
- **Framework**: Bootstrap 5 (Latest).
- **Icons**: FontAwesome 6 (Latest).
- **Scripting**: jQuery (Latest), SweetAlert2 for notifications.
- **Communication**: AJAX (following the user's established pattern).
- **Styling**: Strict **External CSS only**. (No inline or internal CSS allowed).
- **Assets**: Local images (e.g., `akhilesh.jpeg`) and remote CDNs for libraries.

## 4. Implementation Roadmap

### Phase 1: Planning & Setup [DONE]
- [x] Create `PROJECT_PLAN.md`.
- [x] Update plan with technical constraints (Bootstrap, jQuery, AJAX pattern).
- [x] Add enhancements (Theme Switcher, SEO, Filtering) with "Static-First" priority.
- [x] Initialize directory structure (`assets/css`, `assets/js`, `assets/img`, `assets/vendors`).

### Phase 2: Static Foundation & Design System (UI First) [DONE]
- [x] Create `index.php` with basic Bootstrap layout and SEO meta tags.
- [x] Link external CSS files: `assets/css/variables.css`, `assets/css/styles.css`, `assets/css/components.css`.
- [x] Build **Static Navigation**: Bootstrap navbar with glassmorphism (fixed at top).
- [x] Build **Static Hero Section**: Impactful intro with `akhilesh.jpeg`.
- [x] Build **Static About Section**: Bio and professional narrative.

### Phase 3: Component UI Development (Static & Responsive) [DONE]
- [x] **Skills Section**: Static layout for expertise cards/bars (Grid-responsive).
- [x] **Projects Section**: Static card layout for portfolio items (Stack on mobile).
- [x] **Mobile Design Optimization**:
    - [x] Implement a **Hamburger Menu** for mobile navigation.
    - [x] Ensure **Touch-friendly** button sizes (min 44x44px).
    - [x] Optimize typography scales for smaller screens.
    - [x] Custom mobile-only adjustments (e.g., hidden secondary info).
- [x] **Contact Section**: UI for the contact form (Static & Full-width on mobile).
- [x] **Footer**: Simple, clean footer with social icons.
- [x] **Responsive Audit**: Thorough check on Mobile (iPhone/Android), Tablet, and Desktop.

### Phase 4: Dynamic Features & Logic (After Static is verified) [DONE]
- [x] **Theme Switcher**: Implement Light/Dark mode toggle (jQuery + LocalStorage).
- [x] **Project Filtering**: Implement live filtering for the Projects section (jQuery).
- [x] **AJAX Integration**: Implement the user's specific AJAX pattern for dynamic updates.
- [x] **Interactive Elements**: Add SweetAlert2 for form submissions and project details.
- [x] **Scroll Animations**: Add smooth scroll and entrance effects.

### Phase 5: External Data Integration (Dynamic)
- [ ] Request specific links for LinkedIn, Indeed, and Sarkari.
- [ ] Extract and map professional data into the UI via AJAX/Dynamic JS.
- [ ] Finalize "Live" project feeds or profile summaries.

### Phase 6: Performance & SEO Polish
- [ ] **Lazy Loading**: Implement for all images (`akhilesh.jpeg` and project thumbs).
- [ ] **SEO Optimization**: Final check of Open Graph tags and meta descriptions.
- [ ] **Code Cleanup**: Ensure strict external CSS usage and clean jQuery logic.

## 6. Directory Structure
```text
akhilesh_web/
├── ajax/
│   └── ajax.php             # Central AJAX controller
├── assets/
│   ├── css/
│   │   ├── variables.css    # Design tokens (Colors, Fonts)
│   │   ├── styles.css       # Global styles & layout
│   │   └── components.css   # Reusable UI components
│   ├── js/
│   │   └── jquery.js        # Main custom jQuery logic & AJAX calls
│   ├── img/
│   │   └── akhilesh.jpeg    # Profile assets
│   └── vendors/             # Offline Libraries (Latest)
│       ├── bootstrap/       # Bootstrap 5 CSS/JS
│       ├── fontawesome/     # FontAwesome 6 Icons
│       ├── sweetalert2/     # SweetAlert2 JS/CSS
│       └── jquery/          # jQuery Library Core
├── include/
│   ├── connection.php       # Database connection
│   └── functions.php        # Core logic & 'source' class
├── index.php                # Main landing page
├── header.php               # Shared header & navigation
├── footer.php               # Shared footer & scripts
└── PROJECT_PLAN.md          # Project roadmap
```

## 7. Maintenance Workflow
1. If any changes are needed, **update this file first**.
2. Propose the updated plan to the user.
3. Execute the implementation based on the approved plan.

---
*Created on: 2026-04-22*
