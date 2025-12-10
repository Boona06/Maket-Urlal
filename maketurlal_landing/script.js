document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Number Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;
            const increment = target / 100;

            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.innerText = target;
            }
        });
    };

    const onScroll = () => {
        const aboutSection = document.querySelector('.about');
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !hasAnimated) {
            animateStats();
            hasAnimated = true;
        }
    };

    window.addEventListener('scroll', onScroll);

    // Form Submission (Placeholder)
    // Form Submission to Google Sheets
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Илгээж байна...';
            btn.disabled = true;

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxHY2Budj5DsqzdsiA3Fvq86E7U0OUcNgZ_N0hQ0prnBigELGmmUw61EUkvH5okJwdk/exec';

            console.log('Sending data to:', SCRIPT_URL);

            // Use simple fetch without complex headers to avoid CORS preflight issues
            fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    // With no-cors, we get an opaque response, so we can't check response.ok
                    console.log('Request sent successfully');
                    alert('Таны хүсэлтийг хүлээн авлаа! Бид тантай удахгүй холбогдох болно.');
                    form.reset();
                })
                .catch(error => {
                    console.error('Fetch Error:', error);
                    alert('Алдаа гарлаа. Та дахин оролдоно уу.');
                })
                .finally(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    } else {
        console.error('Contact form not found!');
    }
    // Initialize Swiper
    const swiper = new Swiper('.portfolio-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
});
