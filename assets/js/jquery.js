$(function() {
    // console.log("Portfolio Loaded Successfully");

    // Smooth Scrolling for Nav Links
    $(document).on('click', 'a.nav-link', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Contact Form Submission (Pattern Check)
    $(document).on("submit", "#contactForm", function(event) {
        event.preventDefault();
        const btn = $(this).find('button[type="submit"]');
        const originalBtnText = btn.html();
        
        // Show button spinner & disable it
        btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i> Sending...');
        
        // Show SweetAlert2 loading overlay
        Swal.fire({
            title: 'Sending Message...',
            html: '<p style="margin-top: 15px; color: #94a3b8; font-size: 14px;">Please wait while we transmit your message.</p>',
            imageUrl: 'assets/img/loader.svg',
            imageWidth: 80,
            imageHeight: 80,
            imageAlt: 'Loading...',
            showConfirmButton: false,
            allowOutsideClick: false,
            background: '#0f172a',
            color: '#f8fafc',
            customClass: {
                popup: 'border border-secondary'
            }
        });
        
        const formData = new FormData(this);
        formData.append('action', 'contact_submit');
        
        $.ajax({
            url: "ajax/ajax.php",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function(response) {
                // Restore button state
                btn.prop('disabled', false).html(originalBtnText);
                
                if (response.status == "success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sent Successfully!',
                        text: response.message,
                        confirmButtonColor: '#6366f1'
                    });
                    $('#contactForm')[0].reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Send',
                        text: response.message,
                        confirmButtonColor: '#ef4444'
                    });
                }
            },
            error: function() {
                btn.prop('disabled', false).html(originalBtnText);
                Swal.fire({
                    icon: 'error',
                    title: 'System Error',
                    text: 'An error occurred while connecting to the server. Please try again.',
                    confirmButtonColor: '#ef4444'
                });
            }
        });
    });

    // Theme Switcher Logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        $('html, body').addClass('light-mode');
        $('#themeToggle i').removeClass('fa-moon').addClass('fa-sun');
    }

    $(document).on('click', '#themeToggle', function() {
        $('html, body').toggleClass('light-mode');
        let theme = 'dark';
        if ($('body').hasClass('light-mode')) {
            theme = 'light';
            $(this).find('i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            $(this).find('i').removeClass('fa-sun').addClass('fa-moon');
        }
        localStorage.setItem('theme', theme);
    });

    // Project Filtering (Static for now)
    $(document).on('click', '.filter-btn', function() {
        const filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.project-card').fadeIn();
        } else {
            $('.project-card').hide();
            $(`.project-card[data-category="${filter}"]`).fadeIn();
        }
    });

    // Scroll Reveal Effect
    const revealOnScroll = function() {
        $('.glass-card').each(function() {
            const bottomOfObject = $(this).offset().top + $(this).outerHeight() / 4;
            const bottomOfWindow = $(window).scrollTop() + $(window).height();
            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('reveal');
            }
        });
    };

    $(window).on('scroll', function() {
        revealOnScroll();
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Initial check
    revealOnScroll();

    // ==========================================
    // 3D Particles Background (Code Universe)
    // ==========================================
    const canvas = document.getElementById('particles-3d');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        // Track resize
        $(window).on('resize', function() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
        
        const numParticles = 65; // Font rendering is heavier; 65 is optimized for smooth 60fps
        const maxDepth = 1000;
        const particles = [];
        const fov = 300; // Field of view (perspective focal length)
        
        // Dynamic camera parallax offsets and angles
        let targetCamX = 0;
        let targetCamY = 0;
        let currentCamX = 0;
        let currentCamY = 0;
        
        let targetAngleX = 0;
        let targetAngleY = 0;
        let currentAngleX = 0;
        let currentAngleY = 0;
        
        $(window).on('mousemove', function(e) {
            // Camera position offsets
            targetCamX = (e.clientX - width / 2) * 0.2;
            targetCamY = (e.clientY - height / 2) * 0.2;
            
            // Camera 3D rotation angles (yaw and pitch)
            // Limit angles to +/-0.55 radians to keep simulation natural
            targetAngleY = (e.clientX / width - 0.5) * 0.55;
            targetAngleX = (e.clientY / height - 0.5) * 0.55;
        });
        
        // Define FontAwesome code icons
        const iconList = [
            { char: '\uf3e2', font: 'Brands', name: 'Python' },      // Python
            { char: '\uf1c0', font: 'Free', name: 'MySQL' },        // Database / MySQL
            { char: '\uf13b', font: 'Brands', name: 'HTML5' },       // HTML5
            { char: '\uf38b', font: 'Brands', name: 'CSS3' },        // CSS3
            { char: '\uf3b8', font: 'Brands', name: 'JS' },          // JavaScript
            { char: '\uf836', font: 'Brands', name: 'Bootstrap' },   // Bootstrap
            { char: '\uf41b', font: 'Brands', name: 'React' },       // React
            { char: '\uf3d3', font: 'Brands', name: 'Node.js' },     // Node.js
            { char: '\uf457', font: 'Brands', name: 'PHP' },         // PHP
            { char: '\uf121', font: 'Free', name: 'jQuery' },        // Code / jQuery
            { char: '\uf3cd', font: 'Free', name: 'Flutter' },       // Mobile / Flutter
            { char: '\uf1b3', font: 'Free', name: 'Django' },        // Cubes / Django
            { char: '\uf1c0', font: 'Free', name: 'PostgreSQL' }     // Database / PostgreSQL
        ];

        // Define code syntax and language snippets
        const textList = [
            'JS', 'React', 'Node.js', 'Python', 'PHP', 'Django', 'MySQL', 'Postgres', 'HTML5', 'CSS3', 'Flutter',
            'console.log()', 'import', 'def', '<?php', 'SELECT', '<div>', 'const', 'await', 'return', 'print()',
            'fn', 'npm run', 'git commit', '{ json }', '$()', 'flex', 'async/await', 'map()', '[]', '{}', '=>',
            '<ul>', '<p>', 'SQL'
        ];
        
        // Palette of glowing code colors
        const colors = [
            '#6366f1', // Indigo (Primary)
            '#ec4899', // Pink (Secondary)
            '#a855f7', // Purple
            '#06b6d4', // Cyan
            '#10b981', // Emerald
            '#f59e0b'  // Amber
        ];
        
        // Initialize particles in 3D
        for (let i = 0; i < numParticles; i++) {
            const isIcon = Math.random() > 0.5;
            let pData = {};
            
            if (isIcon) {
                const icon = iconList[Math.floor(Math.random() * iconList.length)];
                pData = {
                    type: 'icon',
                    char: icon.char,
                    fontFamily: icon.font === 'Brands' ? '"Font Awesome 5 Brands", "Font Awesome 6 Brands"' : '"Font Awesome 5 Free", "Font Awesome 6 Free"',
                    weight: '900'
                };
            } else {
                pData = {
                    type: 'text',
                    text: textList[Math.floor(Math.random() * textList.length)]
                };
            }
            
            particles.push({
                ...pData,
                x: (Math.random() - 0.5) * 3000,
                y: (Math.random() - 0.5) * 3000,
                z: Math.random() * maxDepth,
                baseSize: Math.random() * 12 + 10,
                speed: Math.random() * 4.0 + 3.0, // 2x faster forward velocity
                rotPhase: Math.random() * Math.PI * 2,
                rotSpeed: Math.random() * 0.024 + 0.012, // Faster oscillating sway
                rotAmplitude: Math.random() * 0.25 + 0.08,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        
        function animateParticles() {
            currentCamX += (targetCamX - currentCamX) * 0.05;
            currentCamY += (targetCamY - currentCamY) * 0.05;
            
            currentAngleX += (targetAngleX - currentAngleX) * 0.05;
            currentAngleY += (targetAngleY - currentAngleY) * 0.05;
            
            ctx.clearRect(0, 0, width, height);
            
            const isLightMode = $('body').hasClass('light-mode');
            const centerX = width / 2 - currentCamX;
            const centerY = height / 2 - currentCamY;
            
            const cosX = Math.cos(currentAngleX);
            const sinX = Math.sin(currentAngleX);
            const cosY = Math.cos(currentAngleY);
            const sinY = Math.sin(currentAngleY);
            
            for (let i = 0; i < numParticles; i++) {
                const p = particles[i];
                
                p.z -= p.speed;
                p.rotPhase += p.rotSpeed;
                const currentRot = Math.sin(p.rotPhase) * p.rotAmplitude;
                
                if (p.z <= 0) {
                    p.z = maxDepth;
                    p.x = (Math.random() - 0.5) * 3000;
                    p.y = (Math.random() - 0.5) * 3000;
                }
                
                // 3D rotation based on mouse yaw and pitch
                const rx1 = p.x * cosY - p.z * sinY;
                const rz1 = p.x * sinY + p.z * cosY;
                
                const ry2 = p.y * cosX - rz1 * sinX;
                const rz2 = p.y * sinX + rz1 * cosX;
                
                if (rz2 <= 10) continue;
                
                const scale = fov / (fov + rz2);
                const screenX = centerX + rx1 * scale;
                const screenY = centerY + ry2 * scale;
                
                const fontSize = p.baseSize * scale * 2.2;
                
                let opacity = 1;
                if (rz2 > maxDepth * 0.8) {
                    opacity = (maxDepth - rz2) / (maxDepth * 0.2);
                } else if (rz2 < 120) {
                    opacity = rz2 / 120;
                }
                
                if (screenX >= -100 && screenX <= width + 100 && screenY >= -100 && screenY <= height + 100) {
                    ctx.save();
                    ctx.translate(screenX, screenY);
                    ctx.rotate(currentRot);
                    
                    if (p.type === 'icon') {
                        ctx.font = `${p.weight} ${fontSize}px ${p.fontFamily}, sans-serif`;
                    } else {
                        ctx.font = `600 ${fontSize}px "Inter", "Courier New", monospace`;
                    }
                    
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    if (isLightMode) {
                        ctx.fillStyle = `rgba(15, 23, 42, ${0.4 * opacity})`;
                        ctx.shadowBlur = 0;
                    } else {
                        ctx.fillStyle = p.color;
                        if (rz2 < 600) {
                            ctx.shadowColor = p.color;
                            ctx.shadowBlur = 8 * scale;
                        } else {
                            ctx.shadowBlur = 0;
                        }
                        ctx.globalAlpha = opacity;
                    }
                    
                    if (p.type === 'icon') {
                        ctx.fillText(p.char, 0, 0);
                    } else {
                        ctx.fillText(p.text, 0, 0);
                    }
                    
                    ctx.restore();
                    ctx.globalAlpha = 1.0;
                }
            }
            requestAnimationFrame(animateParticles);
        }
        
        if (document.fonts) {
            document.fonts.ready.then(function() {
                setTimeout(animateParticles, 100);
            }).catch(function() {
                setTimeout(animateParticles, 500);
            });
        } else {
            setTimeout(animateParticles, 500);
        }
    }

    // ==========================================
    // 3D Card Tilt & Glare Effect
    // ==========================================
    // Inject glare element to all cards dynamically
    $('.glass-card').each(function() {
        if ($(this).find('.card-glare').length === 0) {
            $(this).append('<div class="card-glare"></div>');
        }
    });

    // Tilt handler function
    function apply3DTilt(element, cardToTilt, maxRot = 12) {
        $(element).on('mousemove', function(e) {
            const card = $(cardToTilt || this);
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const width = rect.width;
            const height = rect.height;
            
            // Normalized relative coordinates (-0.5 to 0.5)
            const nx = (x / width) - 0.5;
            const ny = (y / height) - 0.5;
            
            // Calculate rotations
            const rotX = -(ny * maxRot).toFixed(2);
            const rotY = (nx * maxRot).toFixed(2);
            
            card.addClass('tilting');
            card.css('transform', `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03, 1.03, 1.03)`);
            
            // Dynamic glare spot
            const glare = card.find('.card-glare');
            if (glare.length > 0) {
                glare.css('background', `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 75%)`);
            }
        });
        
        $(element).on('mouseleave', function() {
            const card = $(cardToTilt || this);
            card.removeClass('tilting');
            card.css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        });
    }

    // Apply tilt to standard glass cards
    $('.glass-card').each(function() {
        apply3DTilt(this, null, 12);
    });

    // Apply tilt to the hero 3D avatar card
    if ($('.hero-image-container').length > 0) {
        apply3DTilt('.hero-image-container', '.hero-image-card', 15);
    }
});
