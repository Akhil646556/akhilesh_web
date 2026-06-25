========================================================================
             ak.css & ak-bootstrap JIT Framework - Instructions
========================================================================

Welcome to the ak.css Framework! This offline package contains the styling
grid and dynamic JS scripts needed to build ultra-responsive web applications.

------------------------------------------------------------------------
1. Directory Structure:
------------------------------------------------------------------------
* ak-bootstrap.min.css  -> Core CSS containing the 12-column responsive grid,
                           layout components (cards, forms, buttons), and base variables.
* ak-bootstrap.min.js   -> Core JS script containing the JIT (Just-in-Time)
                           Runtime Spacing compiler, alert triggers, dialog modals,
                           and toast components.
* ak-icons-[set].min.js -> Dynamic vector icon datasets loaded in-memory.
                           Includes Lucide, FontAwesome Solid, Bootstrap Icons,
                           and Material Icons.

------------------------------------------------------------------------
2. Quick Integration & Usage Example:
------------------------------------------------------------------------
To use the framework, copy the files to your project directories and link
them inside your HTML files:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your App</title>
  <!-- 1. Include core CSS stylesheet -->
  <link rel="stylesheet" href="ak-bootstrap.min.css">
</head>
<body>

  <!-- Example: Grid Layout -->
  <div class="ak-container ak-py-40">
    <div class="ak-row">
      <div class="ak-col-12 ak-col-md-6 ak-mb-20">
        <div class="ak-card">
          <div class="ak-card-body">
            <h5 class="ak-h5">Welcome to ak.css</h5>
            <p>Ready to build lightning-fast web interfaces.</p>
            <!-- Example: Dynamic Vector Icon -->
            <ak-icon name="lucide/star" size="20px" color="#00D4FF"></ak-icon>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. Include core JS script (Must load before icon scripts) -->
  <script src="ak-bootstrap.min.js"></script>

  <!-- 3. Include the icon pack you want to use (e.g., Lucide Icons) -->
  <script src="ak-icons-lucide.min.js"></script>

</body>
</html>

------------------------------------------------------------------------
3. How to use Icons:
------------------------------------------------------------------------
Use the custom tag <ak-icon> with the appropriate attributes:
* name  -> The name of the icon prefixed by its set (e.g., "lucide/heart", "fa-solid/user")
* size  -> Size in pixels (e.g., "24px")
* color -> CSS Color value (e.g., "#00D4FF", "red", "rgba(0,0,0,0.5)")
* stroke-> Border width of the icon outlines (e.g., "2")

Enjoy building with ak.css!
========================================================================
