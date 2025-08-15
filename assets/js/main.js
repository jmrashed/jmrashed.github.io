/**
 * @file main.js
 * @description This file contains all the core JavaScript functionalities for the portfolio website,
 * including UI interactions, animations, data loading, and performance optimizations.
 *
 * It is structured to ensure readability, maintainability, and efficient execution.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio scripting initialized. All DOM elements are loaded.');

    /**
     * Toggles the mobile navigation menu visibility.
     */
    function setupMobileMenuToggle() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Log for debugging: Check if elements exist
        if (!mobileMenuButton) {
            console.warn('Mobile menu button element not found. ID: mobile-menu-button');
            return;
        }
        if (!mobileMenu) {
            console.warn('Mobile menu element not found. ID: mobile-menu');
            return;
        }

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            console.log(`Mobile menu toggled. Current state visible: ${!mobileMenu.classList.contains('hidden')}`);
        });

        // Close mobile menu on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    console.log('Mobile menu closed via Escape key.');
                }
            }
        });
    }

    /**
     * Initializes smooth scrolling for all anchor links pointing to hash IDs.
     * Also closes the mobile menu after navigation.
     */
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    console.log(`Smooth scroll to: ${targetId}`);
                } else {
                    console.warn(`Scroll target not found for: ${targetId}`);
                }

                // Close mobile menu if open after clicking a link
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    console.log('Mobile menu closed after navigation click.');
                }
            });
        });
    }

    /**
     * Implements a typing animation for a given set of roles.
     * @param {string[]} roles - An array of strings to be typed.
     * @param {HTMLElement} typedTextElement - The DOM element where text will be typed.
     */
    function setupTypingAnimation(roles, typedTextElement) {
        if (!typedTextElement) {
            console.warn('Typed text element not found. ID: typed-text');
            return;
        }

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            const displayChar = isDeleting ? currentRole.substring(0, charIndex - 1) : currentRole.substring(0, charIndex + 1);
            typedTextElement.textContent = displayChar;

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing next
            }
            setTimeout(type, typeSpeed);
        }

        console.log('Starting typing animation...');
        type();
    }

    /**
     * Sets up Intersection Observer for scroll-triggered animations on specified elements.
     * Applies initial styles and observes them for intersection.
     * @param {string} selector - CSS selector for elements to observe.
     * @param {object} initialStyles - Object of CSS properties to apply initially.
     * @param {string} animateClass - Class to add when element is intersecting.
     * @param {object} observerOptions - Options for IntersectionObserver.
     */
    function setupScrollAnimations(selector, initialStyles, animateClass, observerOptions = {}) {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) {
            console.info(`No elements found for scroll animation with selector: ${selector}`);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (animateClass) {
                        entry.target.classList.add(animateClass);
                    } else {
                        // Apply direct styles if no class is provided
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    observer.unobserve(entry.target); // Stop observing once animated
                    console.log(`Element intersecting: ${entry.target.className}. Animation triggered.`);
                }
            });
        }, observerOptions);

        elements.forEach(el => {
            // Apply initial styles and transitions
            if (initialStyles) {
                Object.assign(el.style, initialStyles);
            }
            observer.observe(el);
        });
        console.log(`Scroll animations set up for: ${selector}`);
    }

    /**
     * Manages the navbar's background and blur effect based on scroll position.
     */
    function setupNavbarScrollEffect() {
        const nav = document.querySelector('nav');
        if (!nav) {
            console.warn('Navigation bar element not found. Selector: nav');
            return;
        }

        const applyNavbarStyles = () => {
            if (window.scrollY > 100) {
                nav.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                nav.style.backdropFilter = 'blur(10px)';
            }
        };

        // Initialize on load
        applyNavbarStyles();
        // Optimize scroll event with requestAnimationFrame
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    applyNavbarStyles();
                    ticking = false;
                });
                ticking = true;
            }
        });
        console.log('Navbar scroll effect initialized.');
    }

    /**
     * Creates and animates small particle div elements for a background effect.
     */
    function setupParticleBackground() {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'fixed w-1 h-1 bg-blue-400 rounded-full opacity-30 pointer-events-none';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            particle.style.animation = `float ${Math.random() * 3 + 2}s linear infinite`; // Random duration for float animation

            document.body.appendChild(particle);

            // Remove particle after its animation ends (or a fixed time)
            setTimeout(() => {
                particle.remove();
            }, 5000); // Particles live for 5 seconds
        };

        // Add CSS for particle animation if not already present
        if (!document.getElementById('particle-float-style')) {
            const style = document.createElement('style');
            style.id = 'particle-float-style';
            style.textContent = `
                @keyframes float {
                    0% { transform: translateY(0); opacity: 0.3; }
                    50% { opacity: 0.6; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }`;
            document.head.appendChild(style);
        }

        // Create particles periodically
        setInterval(createParticle, 2000); // Create a new particle every 2 seconds
        console.log('Particle background effect initialized.');
    }

    /**
     * Handles form submission, including basic validation and a simulated loading state.
     */
    function setupFormSubmission() {
        const form = document.querySelector('form');
        if (!form) {
            console.warn('Contact form element not found. Selector: form');
            return;
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Form submission attempted.');

            // Get form data (using name attributes for robustness)
            const nameInput = this.querySelector('[name="name"]');
            const emailInput = this.querySelector('[name="email"]');
            const subjectInput = this.querySelector('[name="subject"]');
            const messageInput = this.querySelector('[name="message"]');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                console.warn('Form validation failed: Missing fields.');
                return;
            }

            const submitBtn = this.querySelector('button[type="submit"]');
            if (!submitBtn) {
                console.warn('Submit button not found within form.');
                return;
            }
            const originalText = submitBtn.innerHTML;

            // Simulate form submission visually
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            console.log('Form submission simulated: Sending...');

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
                submitBtn.style.background = 'linear-gradient(to right, #10b981, #059669)';
                console.log('Form submission simulated: Sent successfully!');

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = ''; // Reset background
                    form.reset(); // Reset form fields
                    console.log('Form state reset.');
                }, 2000); // Display "Message Sent!" for 2 seconds
            }, 1000); // Simulate network delay for 1.5 seconds
        });
        console.log('Form submission handler initialized.');
    }

    /**
     * Applies staggered floating animation delays to elements.
     * @param {string} selector - CSS selector for elements to animate.
     */
    function setupFloatingAnimation(selector) {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) {
            console.info(`No elements found for floating animation with selector: ${selector}`);
            return;
        }
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`; // Stagger delay by 0.2 seconds
        });
        console.log(`Floating animations set up for: ${selector}`);
    }

    /**
     * Animates numerical counters when they become visible in the viewport.
     * @param {HTMLElement} element - The counter element.
     * @param {number} target - The final target number.
     * @param {number} duration - Animation duration in milliseconds.
     */
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16); // Approximately 60 frames per second over duration

        const updateCounter = () => {
            start += increment;
            let current = Math.floor(start);
            if (current < target) {
                element.textContent = current + (element.dataset.suffix || ''); // Use data-suffix for +, % etc.
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (element.dataset.suffix || ''); // Ensure final value is accurate
            }
        };
        console.log(`Animating counter for element: ${element.id || element.className}, Target: ${target}`);
        updateCounter();
    }

    /**
     * Sets up Intersection Observer to trigger counter animations when the stats section is visible.
     */
    function setupStatsCounterAnimation() {
        const statsSection = document.querySelector('#about .grid.grid-cols-2');
        if (!statsSection) {
            console.warn('Stats section not found for counter animations.');
            return;
        }

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.text-3xl[data-target]'); // Counters with a data-target attribute
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.target); // Read target from data attribute
                        if (!isNaN(target)) {
                            animateCounter(counter, target);
                        } else {
                            console.warn(`Invalid data-target for counter: ${counter.textContent}`);
                        }
                    });
                    statsObserver.unobserve(entry.target); // Only animate once
                    console.log('Stats section intersected, triggering counter animations.');
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        statsObserver.observe(statsSection);
        console.log('Stats counter animation observer initialized.');
    }

    /**
     * Adds a ripple effect to buttons on click.
     * Requires the .ripple CSS to be defined.
     */
    function setupRippleEffect() {
        // Inject ripple CSS directly into the head if not already present
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    pointer-events: none;
                }
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                button, .btn {
                    position: relative;
                    overflow: hidden;
                    transform: translate3d(0, 0, 0); /* Force GPU acceleration */
                }
            `;
            document.head.appendChild(style);
            console.log('Ripple effect CSS injected.');
        }

        document.querySelectorAll('button, .btn').forEach(button => {
            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height); // Determine size from button dimensions

                // Calculate click position relative to the button
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                // Remove ripple element after animation
                ripple.addEventListener('animationend', () => {
                    ripple.remove();
                }, { once: true }); // Ensure event listener is removed

                console.log(`Ripple effect triggered on button: ${this.textContent.trim() || this.className}`);
            });
        });
        console.log('Ripple effect listeners initialized for buttons.');
    }

    /**
     * Adds hover effects to project cards.
     */
    function setupProjectCardHoverEffects() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 25px 50px -12px rgba(59, 130, 246, 0.25)';
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Ensure smooth transition
                console.log('Project card hover: entered');
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
                console.log('Project card hover: exited');
            });
        });
        console.log('Project card hover effects initialized.');
    }

    /**
     * Initializes AOS (Animate On Scroll) alternative using Intersection Observer.
     * Elements with `data-animate` attribute will have the corresponding animation class added.
     */
    function initAOSAlternative() {
        const animateElements = document.querySelectorAll('[data-animate]');
        if (animateElements.length === 0) {
            console.info('No elements with data-animate attribute found for AOS alternative.');
            return;
        }

        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.dataset.animate;
                    entry.target.classList.add(`animate-${animation}`); // Assuming CSS classes like .animate-fade-in
                    animateObserver.unobserve(entry.target); // Stop observing once animated
                    console.log(`Element with data-animate="${animation}" intersected. Animation triggered.`);
                }
            });
        }, { threshold: 0.1 });

        animateElements.forEach(element => {
            // Optionally set initial state if needed, e.g., opacity: 0; for fade-in animations
            // element.style.opacity = '0';
            animateObserver.observe(element);
        });
        console.log('AOS alternative scroll animations initialized.');
    }

    /**
     * Sets up the preloader to hide once the page is fully loaded.
     */
    function setupPreloader() {
        window.addEventListener('load', () => {
            const body = document.body;
            body.classList.add('loaded'); // Assumes 'loaded' class hides the preloader
            console.log('Page fully loaded. Preloader hidden.');
        });
    }

    /**
     * Handles dynamic loading of project data from projects.json and appends to the DOM.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadProjects() {
        const $projectsContainer = $('#projects-grid'); // Use the specific ID
        if ($projectsContainer.length === 0) {
            console.info('Projects grid container not found. Skipping project loading.');
            return; // Exit if not on the projects page
        }

        // Show loading UI
        $projectsContainer.html(`
            <div class="loader-wrapper">
                <div class="lds-ripple"><div></div><div></div></div>
                <p class="loader-text">Loading projects...</p>
            </div>
        `);

        $.getJSON('assets/data/projects.json', function (projects) {
            $projectsContainer.empty(); // clear loader
            projects.forEach(project => {
                const techBadges = Array.isArray(project.Technology)
                    ? project.Technology.map(tech =>
                        `<span class="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs border border-green-500/30">${tech}</span>`
                    ).join('')
                    : '';

                const projectCard = `
                    <div class="project-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:shadow-lg transition-all duration-300">
                      <div class="mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <i class="fas fa-project-diagram text-white text-2xl"></i>
                        </div>
                       <a href="project-details.html?id=${project.id}" class="block text-blue-400 hover:text-blue-500 transform hover:scale-[1.02] transition-all duration-200">
                        <h3 class="text-2xl font-bold text-blue-300">${project['Product Name'] || 'Untitled Project'}</h3>
                        </a>
                        <p class="text-gray-400 text-sm">${project.Category || ''}</p>
                      </div>
                      <p class="text-white-300 mb-6 leading-relaxed">${project.Description || ''}</p>
                      <div class="flex flex-wrap gap-2 mb-6">${techBadges}</div>
                      <div class="flex space-x-4">
                        <a href="project-details.html?id=${project.id}" 
   class="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
  <i class="fas fa-desktop"></i> Details
</a>

<a href="${project.CodeLink || '#'}" target="_blank"
   class="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
  <i class="fab fa-github"></i> Code
</a>

                      </div>
                    </div>
                `;
                $projectsContainer.append(projectCard);
            });
            // Re-apply hover effects for newly added cards
            try { setupProjectCardHoverEffects(); } catch (e) { /* ignore if function not present */ }
            console.log(`Loaded ${projects.length} projects successfully.`);
        }).fail(function () {
            console.error('Failed to load projects.json!');
            $projectsContainer.html('<p class="text-red-400">Failed to load projects. Please try again later.</p>');
        });
    }

    /**
     * Handles dynamic loading of projects specifically for the home page from projects.json.
     * Appends to the #home-page-projects-container.
     */
    function loadHomepageProjects() {
        const $homePageProjectsContainer = $('#home-page-projects-container');
        if ($homePageProjectsContainer.length === 0) {
            console.info('Home page projects container not found. Skipping homepage project loading.');
            return; // Exit if not on the homepage or container is missing
        }

        $.getJSON('assets/data/projects.json', function (projects) {
            // Take only the first 3 projects for the homepage, if available
            const homepageProjects = projects.slice(0, 3);
            homepageProjects.forEach(project => {
                const techBadges = Array.isArray(project.Technology)
                    ? project.Technology.map(tech =>
                        `<span class="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs border border-green-500/30">${tech}</span>`
                    ).join('')
                    : '';

                const projectCard = `
                    <div class="project-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:shadow-lg transition-all duration-300">
                      <div class="mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <i class="fas fa-project-diagram text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-blue-300">${project['Product Name'] || 'Untitled Project'}</h3>
                        <p class="text-gray-400 text-sm">${project.Category || ''}</p>
                      </div>
                      <p class="text-white-300 mb-6 leading-relaxed">${project.Description || ''}</p>
                      <div class="flex flex-wrap gap-2 mb-6">${techBadges}</div>
                      <div class="flex space-x-4">
                        <a href="project-details.html?id=${project.id}" class="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">View Details</a>
                        <a href="${project.CodeLink || '#'}" target="_blank"
                          class="px-4 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg text-sm font-semibold transition-all duration-300">
                          <i class="fab fa-github mr-2"></i>Code
                        </a>
                      </div>
                    </div>
                `;
                $homePageProjectsContainer.append(projectCard);
            });
            console.log(`Loaded ${homepageProjects.length} homepage projects successfully.`);
            setupProjectCardHoverEffects(); // Re-apply hover effects to new cards
        }).fail(function () {
            console.error('Failed to load projects.json for homepage projects!');
            $homePageProjectsContainer.html('<p class="text-red-400">Failed to load projects.</p>');
        });
    }

    /**
     * Handles dynamic loading of skills data from skills.json and appends to the DOM.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadSkills() {
        $.getJSON("assets/data/skills.json", function (data) {
            let html = "";
            const $skillsContainer = $("#appendBySkillContent");
            if ($skillsContainer.length === 0) {
                console.warn('Skills container not found. ID: #appendBySkillContent');
                return;
            }

            // Loop technical_skills
            if (data.technical_skills && data.technical_skills.length > 0) {
                $.each(data.technical_skills, function (i, category) {
                    html += `
                        <div class="p-6 border ${category.border_color} rounded-2xl bg-gradient-to-br ${category.background_gradient} shadow-lg">
                            <div class="flex items-center mb-4">
                                <i class="${category.icon_class} ${category.icon_color} text-3xl mr-3"></i>
                                <h3 class="text-xl font-semibold">${category.category}</h3>
                            </div>
                            <ul class="space-y-2">
                                ${category.skills.map(skill => `
                                    <li class="flex items-center space-x-2">
                                        <i class="${skill.icon_class} ${skill.icon_color} text-lg"></i>
                                        <span>${skill.name}</span>
                                    </li>
                                `).join("")}
                            </ul>
                        </div>
                    `;
                });
                console.log(`Loaded ${data.technical_skills.length} technical skills categories.`);
            } else {
                console.info('No technical skills data found.');
            }

            // Leadership skills
            if (data.leadership_skills && data.leadership_skills.length > 0) {
                html += `
                    <div class="p-6 border border-gray-500/30 rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 shadow-lg col-span-full">
                        <h3 class="text-xl font-semibold mb-4">Leadership Skills</h3>
                        <div class="flex flex-wrap gap-3">
                            ${data.leadership_skills.map(skill => `
                                <span class="px-3 py-1 border ${skill.border_color} ${skill.text_color} rounded-full text-sm font-medium bg-gradient-to-br ${skill.background_gradient}">
                                    ${skill.name}
                                </span>
                            `).join("")}
                        </div>
                    </div>
                `;
                console.log(`Loaded ${data.leadership_skills.length} leadership skills.`);
            } else {
                console.info('No leadership skills data found.');
            }

            $skillsContainer.html(html);
        }).fail(function () {
            console.error('Failed to load skills.json!');
            $("#appendBySkillContent").html(`<p class="text-red-400">Failed to load skills data.</p>`);
        });
    }

    /**
     * Handles dynamic loading of achievements data from achivements.json and appends to the DOM.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadAchievements() {
        $.getJSON("assets/data/achivements.json", function (data) {
            const $container = $("#achievements-container");
            if ($container.length === 0) {
                console.warn('Achievements container not found. ID: #achievements-container');
                return;
            }

            if (data && data.length > 0) {
                data.forEach(category => {
                    const categoryBlock = `
                        <div>
                            <h5 class="text-xl font-semibold text-blue-400 mb-4 border-b border-blue-500/30 pb-2">
                                ${category.category}
                            </h5>
                            <ul class="space-y-4">
                                ${category.items.map(item => `
                                    <li class="flex items-start space-x-3">
                                        <i class="fas fa-check-circle text-green-400 mt-1"></i>
                                        <span class="text-gray-300">${item.description}</span>
                                    </li>
                                `).join("")}
                            </ul>
                        </div>
                    `;
                    $container.append(categoryBlock);
                });
                console.log(`Loaded ${data.length} achievement categories.`);
            } else {
                console.info('No achievements data found.');
            }
        }).fail(function () {
            console.error('Failed to load achivements.json!');
            $("#achievements-container").html(`<p class="text-red-400">Failed to load achievements data.</p>`);
        });
    }

    /**
     * Handles dynamic loading of experience data from experience.json and appends to the DOM.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadExperience() {
        $.getJSON("assets/data/experience.json", function (data) {
            const $container = $("#appendByExperienceContent");
            if ($container.length === 0) {
                console.warn('Experience container not found. ID: #appendByExperienceContent');
                return;
            }

            if (data && data.length > 0) {
                $.each(data, function (index, exp) {
                    const expId = `exp-${index}`;

                    // Create stack badges
                    const stackHTML = (exp.stack && exp.stack.length > 0)
                        ? `<div class="mt-2"><h4 class="uppercase font-semibold text-blue-400 mb-2">Stack</h4>${exp.stack.map(tech => `<span class="inline-block bg-purple-600/20 text-purple-300 px-2 py-1 mr-1 rounded-full text-xs">${tech}</span>`).join('')
                        }</div>`
                        : '';

                    // Create skills badges
                    const skillsHTML = (exp.skills && exp.skills.length > 0)
                        ? `<div class="mt-2"> <h4 class="uppercase font-semibold text-blue-400 mb-2"> Skills</h4> ${exp.skills.map(skill => `<span class="inline-block bg-green-600/20 text-green-300 px-2 py-1 mr-1 rounded-full text-xs">${skill}</span>`).join('')
                        }</div>`
                        : '';

                    // Create responsibilities list
                    const responsibilitiesHTML = (exp.responsibilities && exp.responsibilities.length > 0)
                        ? `<ul class="list-disc list-inside text-gray-300 space-y-2">${exp.responsibilities.map(res => `<li>${res}</li>`).join('')
                        }</ul>`
                        : '';

                    // Dynamic icon (fallback to fa-briefcase if not specified)
                    const iconClass = exp.icon ? exp.icon : 'fa-briefcase';

                    // Build the experience card
                    const expHTML = `
                        <div id="${expId}" class="relative flex items-start space-x-8">
                            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20">
                                <i class="fas ${iconClass} text-white text-xl"></i>
                            </div>
                            <div class="flex-grow bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                    <div>
                                        <h3 class="text-2xl font-bold text-blue-300">${exp.role}</h3>
                                        <p class="text-xl text-gray-300">${exp.company}, ${exp.location}</p>
                                    </div>
                                    <div class="text-right">
                                        <span class="bg-gray-600/20 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-500/30">${exp.duration}</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <h4 class="uppercase font-semibold text-blue-400 mb-2">Responsibilities</h4>
                                    ${responsibilitiesHTML}</div>
                                ${stackHTML}
                                ${skillsHTML}
                            </div>
                        </div>
                    `;
                    $container.append(expHTML);
                });
                console.log(`Loaded ${data.length} experience entries.`);
            } else {
                console.info('No experience data found.');
            }
        }).fail(function () {
            console.error('Failed to load experience.json!');
            $("#appendByExperienceContent").html(`<p class="text-red-400">Failed to load experience data.</p>`);
        });
    }

    /**
     * Handles dynamic loading of menu data from menu.json for desktop and mobile navigation.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadMenu() {
        $.getJSON('assets/data/menu.json', function (menuData) {
            const desktopMenuContainer = $('#desktop-menu-container');
            const mobileMenuContainer = $('#mobile-menu-container');

            if (desktopMenuContainer.length === 0 || mobileMenuContainer.length === 0) {
                console.warn('Menu containers not found. Ensure #desktop-menu-container and #mobile-menu-container exist.');
                return;
            }

            if (menuData && menuData.length > 0) {
                menuData.forEach(item => {
                    // Desktop menu item
                    const desktopLink = $('<a>')
                        .attr('href', item.href)
                        .addClass('nav-link px-3 py-2 text-sm font-medium hover:text-accent transition-colors')
                        .text(item.label);
                    desktopMenuContainer.append(desktopLink);

                    // Mobile menu item
                    const mobileLink = $('<a>')
                        .attr('href', item.href)
                        .addClass('block px-3 py-2 text-base font-medium hover:text-accent transition-colors')
                        .text(item.label);
                    mobileMenuContainer.append(mobileLink);
                });
                console.log(`Loaded ${menuData.length} menu items.`);
            } else {
                console.info('No menu data found.');
            }
        }).fail(function () {
            console.error('Failed to load menu.json!');
            // No specific error display needed for menu, as it might fallback to static HTML
        });
    }

    /**
     * Handles dynamic loading and display of blog details based on URL parameters.
     * Handles dynamic loading of blog data from blogs.json and appends to the DOM for blogs.html.
     */
    function loadBlogsMainPage() {
        const $blogsGrid = $('#blogs-grid');
        if ($blogsGrid.length === 0) {
            console.info('Blogs grid container not found. Skipping blog main page loading.');
            return; // Exit if not on the blogs page
        }

        // Show loading UI
        $blogsGrid.html(`
            <div class="loader-wrapper">
                <div class="lds-ripple"><div></div><div></div></div>
                <p class="loader-text">Loading blogs...</p>
            </div>
        `);

  function checkImageExists(url, callback) {
    fetch(url, { method: 'HEAD' })
        .then(res => callback(res.ok))
        .catch(() => callback(false));
}

$.getJSON('assets/data/blogs.json', function (blogs) {
    $blogsGrid.empty(); // clear loader

    blogs.forEach(blog => {
        const tagsBadges = Array.isArray(blog.tags)
            ? blog.tags.map(tag =>
                `<span class="bg-green-100/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-400/30">
                    ${tag}
                </span>`
            ).join('')
            : '';

        const imagePath = `assets/images/${blog.featured_image}`;
        
        checkImageExists(imagePath, function (exists) {
            const blogImage = exists
                ? `<img src="${imagePath}" alt="${blog.title}" 
                         class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">`
                : `
                    <div class="w-full h-full bg-[url('assets/images/glass-texture.avif')] bg-cover bg-center flex items-center justify-center">
                        <span class="bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Image not found!
                        </span>
                    </div>
                  `;

            const blogCard = `
                <div class="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 shadow-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                    
                    <!-- Image Section with fixed ratio -->
                    <div class="aspect-[16/9] overflow-hidden">
                        ${blogImage}
                    </div>

                    <!-- Content Section -->
                    <div class="p-6 flex flex-col h-full">
                        
                        <!-- Category Badge -->
                        <span class="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30 mb-3">
                            ${blog.category || 'Uncategorized'}
                        </span>

                        <!-- Title -->
                        <a href="blog-details.html?id=${blog.id}" 
                           class="block text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            <h2 class="text-2xl font-bold mb-3 group-hover:underline underline-offset-4">
                                ${blog.title || 'Untitled Blog Post'}
                            </h2>
                        </a>

                        <!-- Excerpt -->
                        <p class="text-gray-400 text-sm mb-4 line-clamp-3">${blog.excerpt || ''}</p>
                        
                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${tagsBadges}
                        </div>

                        <!-- Footer -->
                        <div class="mt-auto flex justify-between items-center">
                            <span class="text-xs text-gray-500">
                                ${new Date(blog.published_at).toLocaleDateString()}
                            </span>
                            <a href="blog-details.html?id=${blog.id}" 
                               class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-all duration-200">
                                Read More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            $blogsGrid.append(blogCard);
        });
    });

    console.log(`Loaded ${blogs.length} blog posts for the main blogs page.`);
}).fail(function () {
    console.error('Failed to load blogs.json for blogs main page!');
    $blogsGrid.html('<p class="text-red-500 text-center col-span-full">Error loading blogs. Please try again later.</p>');
});


    }

    /**
     * Handles dynamic loading and display of blog details based on URL parameters.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadBlogDetails() {
        const blogDetailsContainer = $('#blog-details');
        if (blogDetailsContainer.length === 0) {
            console.info('Blog details container not found. Skipping blog details loading.');
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');

        if (!blogId) {
            blogDetailsContainer.html('<p class="text-red-500 text-center">Blog ID not found in URL.</p>');
            console.warn('Blog ID not found in URL for blog details page.');
            return;
        }

      function checkImageExists(url, callback) {
    fetch(url, { method: 'HEAD' })
        .then(res => callback(res.ok))
        .catch(() => callback(false));
}

$.getJSON('assets/data/blogs.json', function (data) {
    const blog = data.find(b => b.id === blogId);

    if (blog) {
        // Meta tags
        document.title = blog.meta_title || blog.title;
        $('meta[name="description"]').attr('content', blog.meta_description || 'A blog post.');
        $('meta[name="keywords"]').attr('content', blog.meta_keywords || 'blog, technology');
        console.log(`Displaying blog: "${blog.title}". Meta tags updated.`);

        // Blog details
        $('#blog-title').text(blog.title);
        $('#published-date').text(new Date(blog.published_at).toLocaleDateString());
        $('#blog-category').text(blog.category);

        const imagePath = `assets/images/${blog.featured_image}`;

        // Check if image exists
        checkImageExists(imagePath, function (exists) {
            if (exists) {
                $('#featured-image').attr('src', imagePath);
            } else {
                $('#featured-image')
                    .replaceWith(`
                        <div class="aspect-[16/9] bg-[url('assets/images/glass-texture.avif')] bg-cover bg-center flex items-center justify-center rounded-lg">
                            <span class="bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                Image not found!
                            </span>
                        </div>
                    `);
            }
        });

        // Blog content
        let formattedContent = blog.content.replace(/\n/g, '<br>');
        $('#blog-content').html(formattedContent);

        // Tags
        const tagsList = $('#blog-tags');
        tagsList.empty();
        if (blog.tags && blog.tags.length > 0) {
            blog.tags.forEach(tag => {
                tagsList.append(`
                    <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        ${tag}
                    </span>
                `);
            });
            console.log(`Loaded ${blog.tags.length} tags for blog.`);
        } else {
            console.info('No tags found for this blog post.');
        }

    } else {
        blogDetailsContainer.html('<p class="text-red-500 text-center">Blog post not found.</p>');
        console.warn(`Blog post with ID: ${blogId} not found.`);
    }
}).fail(function () {
    console.error('Failed to load blogs.json for blog details!');
    blogDetailsContainer.html('<p class="text-red-500 text-center">Error loading blog details. Please try again later.</p>');
});

    }

    /**
     * Handles dynamic loading and display of project details based on URL parameters.
     * Uses jQuery's $.getJSON for simplicity with existing code.
     */
    function loadProjectDetails() {
        const projectDetailsContainer = $('#project-details');
        if (projectDetailsContainer.length === 0) {
            console.info('Project details container not found. Skipping project details loading.');
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const projectId = parseInt(urlParams.get('id'));

        if (isNaN(projectId)) {
            projectDetailsContainer.html('<p class="text-red-500 text-center">Project ID not found in URL.</p>');
            console.warn('Project ID not found or invalid in URL for project details page.');
            return;
        }

        $.getJSON('assets/data/projects.json', function (data) {
            const project = data.find(p => p.id === projectId);

            if (project) {
                console.log(`Displaying project details for: "${project['Product Name']}".`);
                $('#product-name').text(project['Product Name']);
                $('#description').text(project.Description);
                $('#category').text(project.Category);
                $('#industry').text(project.Industry);

                // Technology badges
                const technologyList = $('#technology');
                technologyList.empty(); // Clear existing
                if (project.Technology && project.Technology.length > 0) {
                    project.Technology.forEach(tech => {
                        technologyList.append(`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tech}</span>`);
                    });
                }

                // Features list
                const featuresList = $('#features');
                featuresList.empty(); // Clear existing
                if (project.Features && project.Features.length > 0) {
                    project.Features.forEach(feature => {
                        featuresList.append(`<li>${feature}</li>`);
                    });
                }

                $('#target-audience').text(project['Target Audience'] || 'N/A');
                $('#pricing-model').text(project['Pricing Model'] || 'N/A');
                $('#price-range').text(project['Estimated Price Range'] || 'N/A');
                $('#development-time').text(project['Development Time'] || 'N/A');
                $('#team-size').text(project['Team Size'] || 'N/A');

                $('#market-size').text(project['Market Size'] || 'N/A');
                $('#growth-rate').text(project['Growth Rate'] || 'N/A');
                $('#competitors').text((project['Key Competitors'] && project['Key Competitors'].join(', ')) || 'N/A');
                $('#market-demand').text(project['Market Demand'] || 'N/A');
                $('#risk-level').text(project['Risk Level'] || 'N/A');
                $('#roi-potential').text(project['ROI Potential'] || 'N/A');

                $('#deployment-options').text((project['Deployment Options'] && project['Deployment Options'].join(', ')) || 'N/A');
                $('#scalability').text(project.Scalability || 'N/A');
                $('#security-features').text((project['Security Features'] && project['Security Features'].join(', ')) || 'N/A');
                $('#integration-capabilities').text((project['Integration Capabilities'] && project['Integration Capabilities'].join(', ')) || 'N/A');
                $('#support-languages').text((project['Support Languages'] && project['Support Languages'].join(', ')) || 'N/A');
                $('#mobile-support').text(project['Mobile Support'] || 'N/A');
                $('#database-requirements').text(project['Database Requirements'] || 'N/A');
                $('#server-requirements').text(project['Server Requirements'] || 'N/A');
                $('#compliance').text((project.Compliance && project.Compliance.join(', ')) || 'N/A');

                // Unique Selling Points
                const uspList = $('#unique-selling-points');
                uspList.empty(); // Clear existing
                if (project['Unique Selling Points'] && project['Unique Selling Points'].length > 0) {
                    project['Unique Selling Points'].forEach(usp => {
                        uspList.append(`<li>${usp}</li>`);
                    });
                }

                // Load related blogs based on product_id
                $.getJSON('assets/data/blogs.json', function (blogsData) {
                    const relatedBlogs = blogsData.filter(blog => blog.product_id === projectId).slice(0, 3);
                    const relatedBlogsGrid = $('#related-blogs-grid');
                    const noRelatedBlogsMsg = $('#no-related-blogs'); // Element to show if no related blogs

                    relatedBlogsGrid.empty(); // Clear existing
                    noRelatedBlogsMsg.addClass('hidden'); // Hide by default

                    if (relatedBlogs.length > 0) {
                        relatedBlogs.forEach(blog => {
                            const blogCard = `
                                <div class="bg-dark-80 rounded-lg shadow-md overflow-hidden p-4">
                                    <h3 class="text-xl font-semibold text-gray-300 mb-2">${blog.title}</h3>
                                    <p class="text-blue-300 text-sm mb-4">${blog.excerpt}</p>
                                    <a href="blog-details.html?id=${blog.id}" class="inline-block text-blue-600 hover:underline">Read Blog</a>
                                </div>
                            `;
                            relatedBlogsGrid.append(blogCard);
                        });
                        console.log(`Loaded ${relatedBlogs.length} related blogs for project ID ${projectId}.`);
                    } else {
                        noRelatedBlogsMsg.removeClass('hidden').text('No related blogs found.');
                        console.info(`No related blogs found for project ID ${projectId}.`);
                    }
                }).fail(function () {
                    console.error('Failed to load blogs.json for related blogs!');
                    $('#no-related-blogs').removeClass('hidden').text('Error loading related blogs.');
                });

                // Load related case studies based on projectId
                $.getJSON('assets/data/case-studies.json', function (caseStudiesData) {
                    const relatedCaseStudies = caseStudiesData.filter(cs => cs.projectId === projectId).slice(0, 3);
                    const relatedCaseStudiesGrid = $('#related-case-studies-grid');
                    const noRelatedCaseStudiesMsg = $('#no-related-case-studies');

                    relatedCaseStudiesGrid.empty(); // Clear existing
                    noRelatedCaseStudiesMsg.addClass('hidden'); // Hide by default

                    if (relatedCaseStudies.length > 0) {
                        relatedCaseStudies.forEach(cs => {
                            const csCard = `
                                <div class="bg-dark-80 rounded-lg shadow-md overflow-hidden p-4">
                                <a href="case-studies-details.html?id=${cs.id}" class="block text-blue-400 hover:text-blue-500 transform hover:scale-[1.02] transition-all duration-200">
                                    <h3 class="text-xl font-semibold text-gray-300 mb-2">${cs.title}</h3>
                                </a>
                                    <p class="text-blue-300 text-sm mb-2">Client: ${cs.client || ''}</p>
                                    <p class="text-gray-400 text-sm mb-4">${(cs.challenge && cs.challenge.substring(0, 120)) || ''}${cs.challenge && cs.challenge.length > 120 ? '...' : ''}</p>
                                    <a href="case-studies-details.html?id=${cs.id}" class="inline-block text-blue-600 hover:underline">View Case Study</a>
                                </div>
                            `;
                            relatedCaseStudiesGrid.append(csCard);
                        });
                        console.log(`Loaded ${relatedCaseStudies.length} related case studies for project ID ${projectId}.`);
                    } else {
                        noRelatedCaseStudiesMsg.removeClass('hidden').text('No related case studies found.');
                        console.info(`No related case studies found for project ID ${projectId}.`);
                    }
                }).fail(function () {
                    console.error('Failed to load case-studies.json for related case studies!');
                    $('#no-related-case-studies').removeClass('hidden').text('Error loading related case studies.');
                });

            } else {
                projectDetailsContainer.html('<p class="text-red-500 text-center">Project not found.</p>');
                console.warn(`Project with ID: ${projectId} not found.`);
            }
        }).fail(function () {
            console.error('Failed to load projects.json for project details!');
            projectDetailsContainer.html('<p class="text-red-500 text-center">Error loading project details. Please try again later.</p>');
        });
    }

    /**
     * Handles dynamic loading of case study data from case-studies.json and appends to the DOM.
     */
    function loadCaseStudies() {
        const $caseStudiesContainer = $('#case-studies-grid');
        if ($caseStudiesContainer.length === 0) {
            console.info('Case studies grid container not found. Skipping case study loading.');
            return;
        }

        // Show loading UI
        $caseStudiesContainer.html(`
            <div class="loader-wrapper">
                <div class="lds-ripple"><div></div><div></div></div>
                <p class="loader-text">Loading case studies...</p>
            </div>
        `);

        $.getJSON('assets/data/case-studies.json', function (caseStudies) {
            $caseStudiesContainer.empty(); // clear loader
            caseStudies.forEach(caseStudy => {
                const techBadges = Array.isArray(caseStudy.technologiesUsed)
                    ? caseStudy.technologiesUsed.map(tech =>
                        `<span class="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs border border-green-500/30">${tech}</span>`
                    ).join('')
                    : '';

                const caseStudyCard = `
                    <div class="case-study-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:shadow-lg transition-all duration-300">
                      <div class="mb-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <i class="fas fa-lightbulb text-white text-2xl"></i>
                        </div>
                     <a href="case-studies-details.html?id=${caseStudy.id}" 
   class="block text-blue-400 hover:text-blue-500 transition-colors duration-200">
  <h3 class="text-2xl font-bold">
    ${caseStudy.title || 'Untitled Case Study'}
  </h3>
</a>

                        <p class="text-gray-400 text-sm">Client: ${caseStudy.client || ''} | Industry: ${caseStudy.industry || ''}</p>
                      </div>
                      <p class="text-white-300 mb-6 leading-relaxed">${caseStudy.challenge || ''}</p>
                      <div class="flex flex-wrap gap-2 mb-6">${techBadges}</div>
                       
                    </div>
                `;
                $caseStudiesContainer.append(caseStudyCard);
            });
            console.log(`Loaded ${caseStudies.length} case studies successfully.`);
        }).fail(function () {
            console.error('Failed to load case-studies.json!');
            $caseStudiesContainer.html('<p class="text-red-400">Failed to load case studies. Please try again later.</p>');
        });
    }

    /**
     * Handles dynamic loading and display of case study details based on URL parameters.
     */
    function loadCaseStudyDetails() {
        const caseStudyDetailsContainer = $('#case-study-details');
        if (caseStudyDetailsContainer.length === 0) {
            console.info('Case study details container not found. Skipping case study details loading.');
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const caseStudyId = parseInt(urlParams.get('id'));

        if (isNaN(caseStudyId)) {
            caseStudyDetailsContainer.html('<p class="text-red-500 text-center">Case Study ID not found in URL.</p>');
            console.warn('Case Study ID not found or invalid in URL for case study details page.');
            return;
        }

        $.getJSON('assets/data/case-studies.json', function (data) {
            const caseStudy = data.find(cs => cs.id === caseStudyId);

            if (caseStudy) {
                console.log(`Displaying case study details for: "${caseStudy.title}".`);
                $('#case-study-title').text(caseStudy.title);
                $('#case-study-client-industry').text(`Client: ${caseStudy.client} | Industry: ${caseStudy.industry}`);
                $('#case-study-image').attr('src', `assets/images/${caseStudy.image || 'placeholder.jpg'}`);

                $('#client-name').text(caseStudy.client);
                $('#industry-name').text(caseStudy.industry);

                const technologiesUsedList = $('#technologies-used');
                technologiesUsedList.empty();
                if (caseStudy.technologiesUsed && caseStudy.technologiesUsed.length > 0) {
                    caseStudy.technologiesUsed.forEach(tech => {
                        technologiesUsedList.append(`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tech}</span>`);
                    });
                }

                $('#case-study-challenge').text(caseStudy.challenge);
                $('#case-study-solution').text(caseStudy.solution);

                const resultsList = $('#case-study-results');
                resultsList.empty();
                if (caseStudy.results && caseStudy.results.length > 0) {
                    caseStudy.results.forEach(result => {
                        resultsList.append(`<li>${result}</li>`);
                    });
                }

            } else {
                caseStudyDetailsContainer.html('<p class="text-red-500 text-center">Case study not found.</p>');
                console.warn(`Case study with ID: ${caseStudyId} not found.`);
            }
        }).fail(function () {
            console.error('Failed to load case-studies.json for case study details!');
            caseStudyDetailsContainer.html('<p class="text-red-500 text-center">Error loading case study details. Please try again later.</p>');
        });
    }

    // --- Function Calls to Initialize Script Modules ---
       /**
        * Initialize everything that depends on the navigation being present.
        * We load navigation.html into #nav-placeholder (if present) and only then
        * run the UI initializers and dynamic content loaders so elements like
        * #mobile-menu-button and #mobile-menu exist.
        */
       function initAllAfterNav() {
           setupMobileMenuToggle();
           setupSmoothScrolling();
           setupTypingAnimation(
               [
                   'Tech Lead & Full-Stack Developer',
                   'SaaS Architect & Innovator',
                   'AI/ML Enthusiast & Data Scientist',
                   'Full-Stack Engineer & Mentor'
               ],
               document.getElementById('typed-text')
           );
   
           // Initial styles for skill and project cards to enable fade-in/slide-up
           const cardInitialStyles = {
               opacity: '0',
               transform: 'translateY(30px)',
               transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
           };
           setupScrollAnimations('.skill-card, .project-card', cardInitialStyles, null, { threshold: 0.1 });
           setupScrollAnimations('section', null, 'animate-fade-in', { threshold: 0.1 }); // Smooth reveal for sections
   
           // Performance optimization: Using data-animate for AOS-like animations.
           // Ensure that elements with data-animate are initially hidden or correctly styled by CSS
           // to prevent FOUC (Flash Of Unstyled Content) before animation triggers.
           initAOSAlternative();
   
           setupNavbarScrollEffect();
           setupParticleBackground();
           setupFormSubmission();
           setupFloatingAnimation('.animate-float');
           setupStatsCounterAnimation();
           setupRippleEffect();
           setupProjectCardHoverEffects();
           setupPreloader();
   
           // Load dynamic content, ensure jQuery is available
           if (typeof jQuery !== 'undefined') {
               // These will run only if elements with target IDs are present on the page
               loadProjects(); // Now specific to projects.html
               loadHomepageProjects(); // Load projects for the home page
               loadSkills();
               loadAchievements();
               loadExperience();
               loadMenu();
               loadBlogDetails(); // Only runs on blog-details.html due to internal check
               loadProjectDetails(); // Only runs on project-details.html due to internal check
               loadBlogsMainPage(); // New function for blogs.html
               loadCaseStudies(); // Only runs on case-studies.html due to internal check
               loadCaseStudyDetails(); // Only runs on case-studies-details.html due to internal check
           } else {
               console.error('jQuery is not loaded. Dynamic content functions will not execute.');
           }
       }
   
       // If a placeholder exists, load navigation.html into it before initialization.
       // Prefer jQuery's load when available; fallback to fetch for environments without jQuery.
       if (document.getElementById('nav-placeholder')) {
           if (typeof jQuery !== 'undefined') {
               $('#nav-placeholder').load('navigation.html', function () {
                   console.log('Navigation loaded into #nav-placeholder (via jQuery).');
                   initAllAfterNav();
               });
           } else {
               // Fallback using fetch (vanilla)
               fetch('navigation.html')
                   .then(response => {
                       if (!response.ok) throw new Error('Network response was not ok');
                       return response.text();
                   })
                   .then(html => {
                       document.getElementById('nav-placeholder').innerHTML = html;
                       console.log('Navigation loaded into #nav-placeholder (via fetch).');
                       initAllAfterNav();
                   })
                   .catch(err => {
                       console.error('Failed to load navigation.html:', err);
                       // Proceed with initialization anyway so site doesn't hang
                       initAllAfterNav();
                   });
           }
       } else {
           // No placeholder — just initialize normally
           initAllAfterNav();
       }
   
       // Touch gesture setup (basic, can be expanded)
       let touchStartY = 0;
       document.addEventListener('touchstart', e => {
           touchStartY = e.changedTouches[0].screenY;
           console.log('Touch start detected.');
       });
   
       document.addEventListener('touchend', e => {
           const touchEndY = e.changedTouches[0].screenY;
           const swipeThreshold = 50;
           const diff = touchStartY - touchEndY;
   
           if (Math.abs(diff) > swipeThreshold) {
               if (diff > 0) {
                   console.log('Swipe up detected.');
                   // Add logic for swipe up (e.g., next section, scroll down)
               } else {
                   console.log('Swipe down detected.');
                   // Add logic for swipe down (e.g., previous section, scroll up)
               }
           }
       });
   
       console.log('✨ Core portfolio scripts fully executed.');
   });

// Global console logs for portfolio identity (outside DOMContentLoaded as they are meta)
console.log('Portfolio initialized.');
console.log('Rashed Zaman - Tech Lead & Full-Stack Developer');
console.log('Contact: jmrashed@gmail.com');


$(document).ready(function() {
    // Inject minimal styles for enhanced social icons (id prevents duplication)
    if (!document.getElementById('social-icons-style')) {
        const css = `
          
        `;
        const styleEl = document.createElement('style');
        styleEl.id = 'social-icons-style';
        styleEl.appendChild(document.createTextNode(css));
        document.head.appendChild(styleEl);
    }

    $.getJSON('assets/data/socialLinks.json', function(socialLinks) {
        // Clear container first (safe to call multiple times)
        $('.social-links').empty();

        socialLinks.forEach(function(link) {
            // Build accessible, attractive button-like link
            const $a = $('<a>')
                .attr('href', link.url || '#')
                .attr('target', link.target || '_blank')
                .attr('rel', 'noopener noreferrer')
                .attr('title', link.name || '')
                .attr('aria-label', link.name || '')
                .addClass('social-icon')
                .data('description', link.description || '');

            // Icon element; keep color class from JSON so icon color matches intent
            const $icon = $('<i>').addClass('bi ' + (link.icon || '') + ' ' + (link.colorClass || ''));

            // Optional small label (visually hidden) for screen readers
            const $sr = $('<span>').addClass('sr-only').text(link.name || '');

            $a.append($icon).append($sr);

            // Append to container
            $('.social-links').append($a);

            // Subtle accessible focus ring (added via JS to avoid relying on external CSS)
            $a.on('focus', function() {
                this.style.outline = '2px solid rgba(99,102,241,0.9)';
                this.style.outlineOffset = '3px';
            }).on('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });

        // Simple tooltip implementation using delegation
        let tooltipEl = null;
        $('.social-links').on('mouseenter focus', '.social-icon', function(e) {
            const desc = $(this).data('description');
            if (!desc) return;
            // create tooltip element
            tooltipEl = $('<div>').addClass('social-tooltip').text(desc);
            $('body').append(tooltipEl);
    
            // position
            const $el = $(this);
            const offset = $el.offset();
            const elW = $el.outerWidth();
            const elH = $el.outerHeight();
            const ttW = tooltipEl.outerWidth();
            const left = offset.left + elW / 2 - ttW / 2;
            const top = offset.top - tooltipEl.outerHeight() - 10;
    
            tooltipEl.css({ left: left + 'px', top: top + 'px' });
            // animate in — guard against tooltip being removed before RAF runs
            if (tooltipEl) {
                requestAnimationFrame(() => {
                    if (tooltipEl) tooltipEl.addClass('show');
                });
            }
        }).on('mouseleave blur', '.social-icon', function() {
            if (tooltipEl) {
                tooltipEl.remove();
                tooltipEl = null;
            }
        });

        // Small entrance animation: fade/slide each icon in sequence
        $('.social-links .social-icon').each(function(i, el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(8px)';
            setTimeout(() => {
                el.style.transition = 'opacity 360ms ease, transform 360ms ease';
                el.style.opacity = '1';
                el.style.transform = '';
            }, 80 * i);
        });
    }).fail(function() {
        console.error('Failed to load socialLinks.json for social icons!');
    });
});