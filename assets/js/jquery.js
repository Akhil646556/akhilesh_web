$(function() {
    console.log("Portfolio Loaded Successfully");

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
                if (response.status == "success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.message,
                        confirmButtonColor: '#6366f1'
                    });
                    $('#contactForm')[0].reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.message
                    });
                }
            }
        });
    });

    // Theme Switcher Logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        $('body').addClass('light-mode');
        $('#themeToggle i').removeClass('fa-moon').addClass('fa-sun');
    }

    $(document).on('click', '#themeToggle', function() {
        $('body').toggleClass('light-mode');
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
});
