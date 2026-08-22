/**
 * Scroll Animations & UI Interactions
 * Handles scroll-based animations, navbar behavior, and custom cursor
 */

class ScrollAnimations {
    constructor() {
        this.navbar = document.getElementById('mainNav');
        this.backToTopBtn = document.getElementById('backToTop');
        this.customCursor = document.getElementById('customCursor');
        this.cursorDot = document.getElementById('cursorDot');
        this.revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleCursor();
        this.handleSmoothScroll();
        this.handleActiveNav();
        
        // Trigger initial check
        this.handleScroll();
    }

    handleScroll() {
        let lastScroll = 0;
        const threshold = 50;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Navbar scroll effect
            if (this.navbar) {
                if (currentScroll > threshold) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
            }

            // Back to top button
            if (this.backToTopBtn) {
                if (currentScroll > 500) {
                    this.backToTopBtn.classList.add('visible');
                } else {
                    this.backToTopBtn.classList.remove('visible');
                }
            }

            // Reveal animations on scroll
            this.revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });

            lastScroll = currentScroll;
        });
    }

    handleCursor() {
        if (!this.customCursor || !this.cursorDot) return;

        // Only enable custom cursor on non-touch devices
        if (window.matchMedia('(pointer: fine)').matches) {
            window.addEventListener('mousemove', (e) => {
                this.customCursor.style.left = e.clientX + 'px';
                this.customCursor.style.top = e.clientY + 'px';
                this.cursorDot.style.left = e.clientX + 'px';
                this.cursorDot.style.top = e.clientY + 'px';
            });

            // Add hover effect to interactive elements
            const interactiveElements = document.querySelectorAll(
                'a, button, .skill-tag, .project-card, .filter-btn, input, textarea'
            );

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    this.customCursor.classList.add('hover');
                });
                el.addEventListener('mouseleave', () => {
                    this.customCursor.classList.remove('hover');
                });
            });
        } else {
            // Hide custom cursor on touch devices
            this.customCursor.style.display = 'none';
            this.cursorDot.style.display = 'none';
        }
    }

    handleSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    handleActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link-custom');

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Initialize back to top button
    initBackToTop() {
        if (this.backToTopBtn) {
            this.backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const scrollAnimations = new ScrollAnimations();
    scrollAnimations.initBackToTop();

    // Hide preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1500);
    }
});

/**
 * Skill Bars Animation
 * Animates skill bars when they come into view
 */
class SkillBars {
    constructor() {
        this.bars = document.querySelectorAll('.skill-bar-fill');
        this.animationTriggered = false;
        this.init();
    }

    init() {
        if (this.bars.length === 0) return;

        window.addEventListener('scroll', () => {
            if (this.animationTriggered) return;

            const skillsSection = document.getElementById('skills');
            if (!skillsSection) return;

            const sectionTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                this.animateBars();
                this.animationTriggered = true;
            }
        });
    }

    animateBars() {
        this.bars.forEach((bar, index) => {
            const percentage = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = percentage;
            }, index * 100);
        });
    }
}

// Initialize skill bars
document.addEventListener('DOMContentLoaded', () => {
    new SkillBars();
});

/**
 * Contact Form Handler
 * Prevents page reload and shows success feedback
 */
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const name = this.form.querySelector('#name').value.trim();
        const email = this.form.querySelector('#email').value.trim();
        const subject = this.form.querySelector('#subject').value.trim();
        const message = this.form.querySelector('#message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            this.showFeedback('error', 'Por favor, completa todos los campos.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showFeedback('error', 'Por favor, ingresa un email válido.');
            return;
        }

        // Simulate sending (you can replace this with actual API call later)
        const submitBtn = this.form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i>Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Reset form
            this.form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Show success message
            this.showFeedback('success', '¡Mensaje enviado correctamente! Gracias por contactarme.');
        }, 1500);
    }

    showFeedback(type, message) {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast-custom');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast-custom';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');

        const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';
        const iconColor = type === 'success' ? 'var(--secondary)' : '#f87171';

        toast.innerHTML = `
            <i class="bi ${icon}" style="color: ${iconColor}; font-size: 1.3rem;"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(toast);

        // Show toast with animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        // Auto-hide after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 4000);
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});

/**
 * Project Filters
 * Filters projects by category
 */
class ProjectFilters {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectColumns = document.querySelectorAll('.col-lg-4.col-md-6.reveal');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                this.filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                this.projectColumns.forEach(column => {
                    const card = column.querySelector('.project-card');
                    if (!card) return;
                    
                    const cardCategory = card.getAttribute('data-category') || '';
                    if (filter === 'all' || cardCategory.includes(filter)) {
                        column.style.display = '';
                        column.style.animation = '';
                    } else {
                        column.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Initialize project filters
document.addEventListener('DOMContentLoaded', () => {
    new ProjectFilters();
});
