// CSS/HTML Combined Designs Library
const webDesignsData = [
  {
    category: "Components",
    title: "Glassmorphism Profile Card",
    desc: "A sleek modern profile card using glassmorphism backdrop-filters, subtle gradients, animations, and hover effects.",
    notes: "Uses backdrop-filter blur, radial gradient backgrounds, absolute positioning for decoration glowing circles, and CSS transition on hover for scaling.",
    html: `<div class="card-wrapper">
  <!-- Glowing circles behind card -->
  <div class="glow-circle blue"></div>
  <div class="glow-circle purple"></div>
  
  <div class="profile-card">
    <div class="avatar-area">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=120" alt="Avatar" />
    </div>
    <h2>Alexa Sterling</h2>
    <p class="role">Lead UX Architect</p>
    <p class="bio">Building high-fidelity design systems and responsive layout structures for SaaS products.</p>
    
    <div class="social-row">
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </div>
    
    <button class="btn-profile">View Full Case Studies</button>
  </div>
</div>`,
    css: `/* Container Wrapper */
.card-wrapper {
  position: relative;
  width: 320px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

/* Back Decoration Glowing Circles */
.glow-circle {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  filter: blur(25px);
  z-index: 1;
}

.glow-circle.blue {
  background: #00f2fe;
  top: 10px;
  left: 10px;
}

.glow-circle.purple {
  background: #7f00ff;
  bottom: 10px;
  right: 10px;
}

/* Glassmorphism Card style */
.profile-card {
  position: relative;
  width: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  text-align: center;
  z-index: 2;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 242, 254, 0.3);
}

/* Avatar details */
.avatar-area img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #00f2fe;
  padding: 3px;
  object-fit: cover;
  margin-bottom: 15px;
}

.profile-card h2 {
  color: white;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
}

.profile-card .role {
  color: #00f2fe;
  font-size: 13px;
  margin: 5px 0 15px 0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.profile-card .bio {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* Social link icons */
.social-row {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.social-row a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.social-row a:hover {
  background: #00f2fe;
  color: #0f172a;
  transform: rotate(360deg);
}

/* Button link */
.btn-profile {
  width: 100%;
  background: linear-gradient(135deg, #00f2fe, #7f00ff);
  border: none;
  border-radius: 8px;
  padding: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
  transition: all 0.3s ease;
}

.btn-profile:hover {
  opacity: 0.9;
  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.35);
}`
  },
  {
    category: "Components",
    title: "Premium Pricing Cards",
    desc: "A highly responsive subscription tier selector with glowing accents, pricing value updates, list features, and a highlighted 'popular' plan.",
    notes: "Demonstrates nested flex structures, layout spacing, highlight scaling transforms, border-radius rounding, and premium drop shadow effects.",
    html: `<div class="pricing-container">
  <div class="pricing-card">
    <div class="tier">Free Plan</div>
    <div class="price">$0<span>/mo</span></div>
    <ul class="features">
      <li><i class="fas fa-check"></i> 3 Sandbox Projects</li>
      <li><i class="fas fa-check"></i> Basic CSS Reference</li>
      <li class="disabled"><i class="fas fa-times"></i> A-Z Classroom Tests</li>
    </ul>
    <button class="btn-tier">Get Started</button>
  </div>
  
  <div class="pricing-card popular">
    <div class="badge">Most Popular</div>
    <div class="tier">Pro Academy</div>
    <div class="price">$19<span>/mo</span></div>
    <ul class="features">
      <li><i class="fas fa-check"></i> Unlimited Sandboxes</li>
      <li><i class="fas fa-check"></i> Full Classroom Syllabus</li>
      <li><i class="fas fa-check"></i> Custom Code Generators</li>
    </ul>
    <button class="btn-tier primary">Upgrade to Pro</button>
  </div>
</div>`,
    css: `/* Layout centering */
.pricing-container {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: auto;
}

/* Normal Card */
.pricing-card {
  flex: 1;
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,255,255,0.15);
}

/* Popular Highlight plan */
.pricing-card.popular {
  border-color: #00f2fe;
  background: linear-gradient(180deg, #1e293b, #0f172a);
  box-shadow: 0 10px 30px rgba(0, 242, 254, 0.1);
  transform: scale(1.05);
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 242, 254, 0.15);
}

/* Popular badge ribbon */
.badge {
  position: absolute;
  top: -12px;
  align-self: center;
  background: #00f2fe;
  color: #0f172a;
  font-weight: 700;
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Typography styles */
.tier {
  font-size: 14px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.price {
  font-size: 36px;
  font-weight: 800;
  color: white;
  margin: 15px 0 20px 0;
}

.price span {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

/* Features List styling */
.features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.features li {
  font-size: 13.5px;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.features li i {
  font-size: 11px;
}

.features li i.fa-check {
  color: #10b981;
}

.features li i.fa-times {
  color: #ef4444;
}

.features li.disabled {
  color: #64748b;
}

/* Button tiers */
.btn-tier {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: transparent;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-tier:hover {
  background: rgba(255,255,255,0.03);
}

.btn-tier.primary {
  background: #00f2fe;
  color: #0f172a;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
}

.btn-tier.primary:hover {
  opacity: 0.9;
  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.35);
}`
  },
  {
    category: "Navigation & Headers",
    title: "Responsive Tech Navbar",
    desc: "A header navbar featuring clean logo typography, dynamic links highlighting, a Call-To-Action login button, and a layout wrapper.",
    notes: "Utilizes CSS Flexbox space-between positioning, hover transitions with color sweeps, border-radius controls, and flex alignment vertically.",
    html: `<header class="tech-header">
  <div class="logo-group">
    <div class="logo-box">C</div>
    <span class="logo-text">CSS Studio</span>
  </div>
  
  <nav class="nav-links">
    <a href="#" class="active">Home</a>
    <a href="#">Guides</a>
    <a href="#">Showcase</a>
    <a href="#">FAQ</a>
  </nav>
  
  <div class="action-group">
    <button class="btn-login">Open Portal</button>
  </div>
</header>`,
    css: `/* Lock margins */
.tech-header {
  width: 100%;
  max-width: 720px;
  background: #11131a;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 14px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
  margin: auto;
}

/* Logo block */
.logo-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-box {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #00f2fe, #7f00ff);
  color: #0f172a;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.logo-text {
  color: white;
  font-weight: 700;
  font-size: 15px;
}

/* Nav links list */
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #00f2fe;
}

.nav-links a.active {
  color: #00f2fe;
  font-weight: 600;
}

/* CTA login button */
.btn-login {
  background: rgba(0, 242, 254, 0.08);
  border: 1px solid rgba(0, 242, 254, 0.25);
  color: #00f2fe;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: #00f2fe;
  color: #0f172a;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
}`
  },
  {
    category: "Page Sections",
    title: "Hero Banner Grid",
    desc: "A responsive split hero area utilizing CSS grids for text content on one side and a stylized image placeholder on the other.",
    notes: "Demonstrates 2D Grid layouts with responsive columns, align-items alignments, font sizing scales, and button gradients.",
    html: `<div class="hero-wrapper">
  <div class="hero-grid">
    <div class="hero-text-side">
      <div class="tagline">Interactive CSS Platform</div>
      <h1>Master Frontend Design in Real-Time</h1>
      <p>Play with live inputs, explore properties, build components, and test styles against automatic validation checks.</p>
      
      <div class="btn-row">
        <button class="btn-cta primary">Start Learning</button>
        <button class="btn-cta secondary">Documentation</button>
      </div>
    </div>
    
    <div class="hero-visual-side">
      <div class="abstract-box">
        <div class="inner-circle"></div>
        <div class="floating-badge">99% Grid</div>
      </div>
    </div>
  </div>
</div>`,
    css: `/* Centered layout box */
.hero-wrapper {
  width: 100%;
  max-width: 760px;
  background: #0d0f14;
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 40px;
  margin: auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: center;
}

/* Left details side */
.hero-text-side {
  text-align: left;
}

.tagline {
  font-size: 11px;
  font-weight: 700;
  color: #00f2fe;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
}

.hero-text-side h1 {
  font-size: 26px;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 15px;
}

.hero-text-side p {
  font-size: 13.5px;
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 25px;
}

/* Button rows */
.btn-row {
  display: flex;
  gap: 12px;
}

.btn-cta {
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta.primary {
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  border: none;
  color: #0f172a;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.15);
}

.btn-cta.primary:hover {
  opacity: 0.95;
  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.25);
}

.btn-cta.secondary {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #cbd5e1;
}

.btn-cta.secondary:hover {
  background: rgba(255,255,255,0.08);
}

/* Right graphics side */
.hero-visual-side {
  display: flex;
  justify-content: center;
}

.abstract-box {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #7f00ff, #e100ff);
  border-radius: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px rgba(127,0,255,0.3);
}

.inner-circle {
  width: 80px;
  height: 80px;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
}

.floating-badge {
  position: absolute;
  bottom: 15px;
  right: -10px;
  background: #00f2fe;
  color: #0f172a;
  font-weight: bold;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}`
  },
  {
    category: "Forms & Inputs",
    title: "Sleek Glassmorphism Login",
    desc: "A form login module designed to floating look in front of dark background wallpaper, with neon blur effects, field focus active triggers.",
    notes: "Uses focus-within CSS rules to glow input fields, border-radius rounding, backdrop-blur levels, and gradient overlay styles.",
    html: `<div class="login-wrapper">
  <form class="login-form" onsubmit="event.preventDefault();">
    <h2>Access Portal</h2>
    <p class="subtitle">Complete credentials to enter workspace</p>
    
    <div class="input-group">
      <label>Email Address</label>
      <input type="email" placeholder="alex@webdev.com" required />
    </div>
    
    <div class="input-group">
      <label>Secret Password</label>
      <input type="password" placeholder="••••••••" required />
    </div>
    
    <div class="forgot-row">
      <label class="chk-lbl">
        <input type="checkbox" /> Remember me
      </label>
      <a href="#">Forgot?</a>
    </div>
    
    <button type="submit" class="btn-submit">Authenticate Key</button>
  </form>
</div>`,
    css: `/* Centering form */
.login-wrapper {
  width: 100%;
  max-width: 380px;
  margin: auto;
}

.login-form {
  background: rgba(17, 19, 26, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.login-form h2 {
  color: white;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}

.subtitle {
  font-size: 12.5px;
  color: #64748b;
  margin: 6px 0 25px 0;
  text-align: center;
}

/* Input rows */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  font-size: 11.5px;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.input-group input {
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  padding: 12px;
  border-radius: 8px;
  outline: none;
  font-size: 13.5px;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #00f2fe;
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.15);
}

/* Remember me row */
.forgot-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12.5px;
  color: #cbd5e1;
  margin-bottom: 25px;
}

.chk-lbl {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.forgot-row a {
  color: #00f2fe;
  text-decoration: none;
}

.forgot-row a:hover {
  text-decoration: underline;
}

/* Submit button */
.btn-submit {
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #00f2fe, #7f00ff);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 13.5px;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
  transition: all 0.3s ease;
}

.btn-submit:hover {
  opacity: 0.95;
  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.35);
}`
  }
];
