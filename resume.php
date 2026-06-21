<?php
// Page content for printable resume
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akhilesh Kumar Prajapati - Resume</title>
    <!-- Google Fonts (Inter) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="assets/vendors/fontawesome/css/all.min.css">
    
    <style>
        :root {
            --primary: #4f46e5;
            --primary-dark: #3730a3;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --bg-light: #f8fafc;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text-main);
            background-color: #0f172a;
            line-height: 1.5;
            padding-top: 80px;
            padding-bottom: 40px;
        }

        /* Toolbar styles */
        .toolbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            z-index: 1000;
        }

        .toolbar-title {
            color: #ffffff;
            font-size: 1.1rem;
            font-weight: 700;
        }

        .toolbar-actions {
            display: flex;
            gap: 12px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
        }

        .btn-primary {
            background-color: var(--primary);
            color: #ffffff;
        }

        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-1px);
        }

        .btn-secondary {
            background-color: rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.15);
            color: #ffffff;
        }

        /* Page Container */
        .resume-page {
            max-width: 820px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
            min-height: 1060px; /* Standard A4 proportion */
        }

        /* Resume Layout */
        .resume-header {
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 16px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .header-left h1 {
            font-size: 2.1rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            color: #0f172a;
            line-height: 1.1;
        }

        .header-left h2 {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--primary);
            margin-top: 4px;
        }

        .header-right {
            text-align: right;
            font-size: 0.82rem;
            color: var(--text-muted);
        }

        .contact-item {
            margin-bottom: 3px;
        }

        .contact-item i {
            width: 14px;
            margin-right: 5px;
            color: var(--primary);
            text-align: center;
        }

        .contact-item a {
            color: var(--text-muted);
            text-decoration: none;
        }

        .contact-item a:hover {
            text-decoration: underline;
            color: var(--primary);
        }

        .resume-grid {
            display: grid;
            grid-template-columns: 230px 1fr;
            gap: 24px;
        }

        /* Left Column */
        .left-col {
            border-right: 1px solid var(--border-color);
            padding-right: 20px;
        }

        .section-title {
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.75px;
            color: #0f172a;
            border-bottom: 2.2px solid var(--border-color);
            padding-bottom: 4px;
            margin-bottom: 10px;
        }

        .skills-group {
            margin-bottom: 16px;
        }

        .skills-group-title {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text-muted);
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .skill-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-bottom: 12px;
        }

        .skill-badge {
            background-color: var(--bg-light);
            border: 1px solid var(--border-color);
            color: var(--text-main);
            padding: 2.5px 7px;
            border-radius: 4px;
            font-size: 0.72rem;
            font-weight: 500;
        }

        /* Right Column */
        .right-col {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .summary-box p {
            font-size: 0.85rem;
            color: var(--text-muted);
            line-height: 1.5;
        }

        .experience-timeline {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .timeline-item {
            position: relative;
            padding-left: 14px;
            border-left: 1.5px solid var(--border-color);
            page-break-inside: avoid;
            break-inside: avoid;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -5.5px;
            top: 4px;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: var(--primary);
        }

        .timeline-meta {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 3px;
        }

        .timeline-meta h3 {
            font-size: 0.9rem;
            font-weight: 700;
            color: #0f172a;
        }

        .timeline-date {
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--primary);
            font-family: monospace;
        }

        .timeline-desc {
            font-size: 0.82rem;
            color: var(--text-muted);
            line-height: 1.45;
        }

        .project-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .project-card {
            background-color: var(--bg-light);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            page-break-inside: avoid;
            break-inside: avoid;
        }

        .project-card h4 {
            font-size: 0.85rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 2px;
        }

        .project-card p {
            font-size: 0.75rem;
            color: var(--text-muted);
            line-height: 1.35;
            margin-bottom: 6px;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .tech-pill {
            background-color: rgba(79, 70, 229, 0.08);
            color: var(--primary);
            font-size: 0.62rem;
            padding: 1px 5px;
            border-radius: 30px;
            font-weight: 600;
        }

        /* Print Media Styles */
        @media print {
            body {
                background-color: #ffffff;
                color: #000000;
                padding-top: 0;
                padding-bottom: 0;
                line-height: 1.35;
            }

            .no-print {
                display: none !important;
            }

            .resume-page {
                box-shadow: none;
                padding: 10px 20px;
                max-width: 100%;
                border-radius: 0;
                min-height: auto;
            }

            .timeline-item::before {
                background-color: #000000 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .timeline-date {
                color: #000000 !important;
            }

            .tech-pill {
                background-color: #f1f5f9 !important;
                border: 1px solid #cbd5e1 !important;
                color: #000000 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            /* Adjust layouts for print paging */
            @page {
                size: A4 portrait;
                margin: 0.6cm 0.8cm;
            }
        }
    </style>
</head>
<body>

    <!-- Top Sticky Toolbar (Visible on web page only) -->
    <div class="toolbar no-print">
        <div class="toolbar-title">Akhilesh Kumar Prajapati</div>
        <div class="toolbar-actions">
            <a href="index.php" class="btn btn-secondary"><i class="fas fa-arrow-left me-2"></i>Back to Portfolio</a>
            <button onclick="window.print()" class="btn btn-primary"><i class="fas fa-print me-2"></i>Print / Save PDF</button>
        </div>
    </div>

    <!-- Main Resume Page Document -->
    <div class="resume-page">
        <!-- Header Section -->
        <div class="resume-header">
            <div class="header-left">
                <h1>Akhilesh Kumar Prajapati</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <div class="header-right">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i> <a href="mailto:akp646556@gmail.com">akp646556@gmail.com</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone-alt"></i> <a href="https://wa.me/917052547573" target="_blank">+91 70525 47573</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i> Uttar Pradesh, India
                </div>
                <div class="contact-item">
                    <i class="fas fa-globe"></i> <a href="index.php">akhilesh-portfolio.local</a>
                </div>
            </div>
        </div>

        <!-- Grid Layout -->
        <div class="resume-grid">
            
            <!-- Left Side: Profile info, Skills & education -->
            <div class="left-col">
                <!-- Education Section -->
                <div class="skills-group">
                    <h2 class="section-title">Education</h2>
                    <div style="margin-bottom: 12px; margin-top: 6px;">
                        <h4 style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">Bachelor of Arts (BA)</h4>
                        <p style="font-size: 0.78rem; color: var(--text-muted);">Siddhartha Nagar University</p>
                    </div>
                </div>

                <!-- Skills Section -->
                <div class="skills-group">
                    <h2 class="section-title">Core Skills</h2>
                    
                    <div class="skills-group-title">Languages</div>
                    <ul class="skill-list">
                        <li class="skill-badge">Python</li>
                        <li class="skill-badge">PHP</li>
                        <li class="skill-badge">JavaScript</li>
                        <li class="skill-badge">HTML5</li>
                        <li class="skill-badge">CSS3</li>
                    </ul>

                    <div class="skills-group-title">Frameworks</div>
                    <ul class="skill-list">
                        <li class="skill-badge">Django</li>
                        <li class="skill-badge">React.js</li>
                        <li class="skill-badge">Flutter</li>
                        <li class="skill-badge">Bootstrap</li>
                    </ul>

                    <div class="skills-group-title">Libraries & Databases</div>
                    <ul class="skill-list">
                        <li class="skill-badge">MySQL</li>
                        <li class="skill-badge">PostgreSQL</li>
                        <li class="skill-badge">Node.js</li>
                        <li class="skill-badge">jQuery</li>
                        <li class="skill-badge">AJAX</li>
                        <li class="skill-badge">DOMPDF</li>
                    </ul>

                    <div class="skills-group-title">Automation & Tools</div>
                    <ul class="skill-list">
                        <li class="skill-badge">Git / GitHub</li>
                        <li class="skill-badge">PyTest</li>
                        <li class="skill-badge">API Testing</li>
                        <li class="skill-badge">Voice Automation</li>
                    </ul>
                </div>
            </div>

            <!-- Right Side: Profile Summary, Journey (Experience), Featured Projects -->
            <div class="right-col">
                <!-- Executive Summary -->
                <div class="summary-box">
                    <h2 class="section-title">Summary</h2>
                    <p>Highly skilled Full Stack Developer with 2+ years of experience designing and implementing responsive web portals, robust backends, cross-platform mobile apps, and automated workflow scripts. Expert in Python/Django, PHP, and React, with a strong focus on clean code architectures, relational databases, and secure API integrations.</p>
                </div>

                <!-- Professional Journey -->
                <div>
                    <h2 class="section-title">Professional Journey</h2>
                    <div class="experience-timeline">
                        <div class="timeline-item">
                            <div class="timeline-meta">
                                <h3>AI Systems & Flutter Architectures</h3>
                                <span class="timeline-date">2026 - PRESENT</span>
                            </div>
                            <p class="timeline-desc">Engineered native cross-platform mobile apps using Flutter. Built automated system testing suites and integrated smart voice assistants (JARVIS) to optimize workflows.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-meta">
                                <h3>Full Stack & React Integration</h3>
                                <span class="timeline-date">2025</span>
                            </div>
                            <p class="timeline-desc">Architected single page web applications using React.js and Vite. Designed responsive customer panels and structured offline-first local database architectures.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-meta">
                                <h3>Django & Backend API Development</h3>
                                <span class="timeline-date">2024</span>
                            </div>
                            <p class="timeline-desc">Pivoted to Python/Django backends. Programmed secure transaction logging tools, reactive multi-role administrative databases, and automated validation scripts.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-meta">
                                <h3>PHP Web Portal Construction</h3>
                                <span class="timeline-date">2023</span>
                            </div>
                            <p class="timeline-desc">Mastered core technologies (HTML5, CSS3, JavaScript, jQuery, and PHP). Developed B2B portals, school administration panels, and inventory management systems.</p>
                        </div>
                    </div>
                </div>

                <!-- Featured Projects -->
                <div>
                    <h2 class="section-title">Featured Projects</h2>
                    <div class="project-list">
                        <div class="project-card">
                            <div>
                                <h4>Shiraz Hotel Management</h4>
                                <p>Role-based Property Management System (PMS) supporting rooms allocation, guest check-ins, billing, and report generation.</p>
                            </div>
                            <div class="project-tech">
                                <span class="tech-pill">PHP</span>
                                <span class="tech-pill">MySQL</span>
                                <span class="tech-pill">AJAX</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <div>
                                <h4>Technix React Dashboard</h4>
                                <p>Single Page Admin Dashboard built with Vite + React 18, featuring dynamic layouts, design tokens, and modular code.</p>
                            </div>
                            <div class="project-tech">
                                <span class="tech-pill">React</span>
                                <span class="tech-pill">Vite</span>
                                <span class="tech-pill">Bootstrap 5</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <div>
                                <h4>Singer Enterprise ERP</h4>
                                <p>Reactive multi-role system automating jobsheet generation, fault ticketing logs, and PDF dispatch outputs.</p>
                            </div>
                            <div class="project-tech">
                                <span class="tech-pill">PHP</span>
                                <span class="tech-pill">MySQL</span>
                                <span class="tech-pill">DOMPDF</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <div>
                                <h4>JARVIS Assistant & Testing</h4>
                                <p>Voice assistant automating OS operations and high-speed API validation suites with assertions.</p>
                            </div>
                            <div class="project-tech">
                                <span class="tech-pill">Python</span>
                                <span class="tech-pill">PyTest</span>
                                <span class="tech-pill">SpeechRec</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</body>
</html>
