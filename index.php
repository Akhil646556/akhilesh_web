<?php require_once 'header.php'; ?>

<!-- Hero Section -->
<section id="home" class="section-padding d-flex align-items-center min-vh-100">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <h1 class="display-1 fw-bold mb-4">Hello, I'm <br><span class="text-primary">Akhilesh</span> Kumar <span class="text-primary">Prajapati</span></h1>
                <p class="lead text-muted mb-5">A passionate professional dedicated to creating exceptional digital experiences. Specialized in web development and data integration.</p>
                <div class="d-flex flex-wrap gap-3">
                    <a href="#projects" class="btn btn-premium">View Projects</a>
                    <a href="#contact" class="btn btn-outline-light rounded-pill px-4">Get in Touch</a>
                </div>
            </div>
            <div class="col-lg-5 text-center mt-5 mt-lg-0">
                <div class="hero-image-container">
                    <div class="hero-image-bg"></div>
                    <div class="hero-image-card">
                        <img src="assets/img/akhilesh.png" alt="Akhilesh" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section-padding bg-black bg-opacity-25">
    <div class="container">
        <h2 class="section-title text-center">About Me</h2>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="glass-card text-center">
                    <p>Building high-performance web applications with a focus on clean code and user-centric design. I believe in continuous learning and pushing the boundaries of what's possible on the web.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section-padding">
    <div class="container">
        <h2 class="section-title text-center">Technical Expertise</h2>
        <div class="row g-4 justify-content-center">
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-python fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">Python</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fas fa-database fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">MySQL</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fas fa-database fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">PostgreSQL</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-html5 fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">HTML5</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-css3-alt fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">CSS3</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-js fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">JavaScript</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-bootstrap fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">Bootstrap</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-react fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">React</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-node-js fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">Node.js</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fab fa-php fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">PHP</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fas fa-code fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">jQuery</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fas fa-mobile-alt fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">Flutter</h6>
                </div>
            </div>
            <div class="col-6 col-md-3 col-lg-2">
                <div class="glass-card text-center p-4 h-100">
                    <i class="fas fa-cubes fa-3x mb-3 skill-icon"></i>
                    <h6 class="mb-0">Django</h6>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section id="projects" class="section-padding bg-black bg-opacity-25">
    <div class="container">
        <h2 class="section-title text-center">Featured Projects</h2>
        
        <!-- Project Filter -->
        <div class="d-flex justify-content-center flex-wrap gap-2 mb-5">
            <button class="btn btn-outline-primary rounded-pill px-4 filter-btn active" data-filter="all">All</button>
            <button class="btn btn-outline-primary rounded-pill px-4 filter-btn" data-filter="web">Web</button>
            <button class="btn btn-outline-primary rounded-pill px-4 filter-btn" data-filter="blockchain">Blockchain</button>
            <button class="btn btn-outline-primary rounded-pill px-4 filter-btn" data-filter="design">Design</button>
        </div>

        <div class="row g-4">
            <!-- Project 1 -->
            <div class="col-md-6 col-lg-4 project-card" data-category="web">
                <div class="glass-card h-100 p-0 overflow-hidden">
                    <div class="p-4">
                        <div class="badge bg-primary mb-2">Web App</div>
                        <h4 class="mb-3">RSNEW Audit System</h4>
                        <p class="text-muted small">A secure auditing platform for internal codebases with AJAX-driven security checks.</p>
                        <div class="d-flex gap-2 mt-4">
                            <span class="badge border border-secondary text-muted">PHP</span>
                            <span class="badge border border-secondary text-muted">jQuery</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="col-md-6 col-lg-4 project-card" data-category="blockchain">
                <div class="glass-card h-100 p-0 overflow-hidden">
                    <div class="p-4">
                        <div class="badge bg-primary mb-2">E-Commerce</div>
                        <h4 class="mb-3">Pharma Chain Platform</h4>
                        <p class="text-muted small">Blockchain-integrated pharmaceutical procurement system with real-time tracking.</p>
                        <div class="d-flex gap-2 mt-4">
                            <span class="badge border border-secondary text-muted">Python</span>
                            <span class="badge border border-secondary text-muted">Django</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Project 3 -->
            <div class="col-md-6 col-lg-4 project-card" data-category="design">
                <div class="glass-card h-100 p-0 overflow-hidden">
                    <div class="p-4">
                        <div class="badge bg-primary mb-2">UI/UX</div>
                        <h4 class="mb-3">Technix Design System</h4>
                        <p class="text-muted small">A minimal brutalist design system focused on performance and accessibility.</p>
                        <div class="d-flex gap-2 mt-4">
                            <span class="badge border border-secondary text-muted">CSS3</span>
                            <span class="badge border border-secondary text-muted">HTML5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section-padding">
    <div class="container">
        <h2 class="section-title text-center">Let's Connect</h2>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="glass-card">
                    <form id="contactForm">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" name="name" class="form-control bg-transparent text-white border-secondary" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control bg-transparent text-white border-secondary" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mobile Number</label>
                            <input type="tel" name="mobile" class="form-control bg-transparent text-white border-secondary" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message</label>
                            <textarea name="message" class="form-control bg-transparent text-white border-secondary" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-premium w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'footer.php'; ?>
