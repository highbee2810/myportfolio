// Smooth Scrolling for Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = createDarkModeToggle();

    // Skill Progress Animations
    animateSkillProgress();

    // Project Hover Effects
    addProjectHoverEffects();

    // Scroll-triggered Animations
    setupScrollAnimations();
});

// Create Dark Mode Toggle
function createDarkModeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🌓 Toggle Dark Mode';
    toggleButton.classList.add('dark-mode-toggle');
    
    document.querySelector('header .container').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    // Check user's previous preference
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    return toggleButton;
}

// Animate Skill Progress (Simulated)
function animateSkillProgress() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        const skillList = item.querySelector('ul');
        skillList.style.opacity = '0';
        skillList.style.transform = 'translateY(20px)';

        // Staggered animation
        setTimeout(() => {
            skillList.style.transition = 'all 0.5s ease-out';
            skillList.style.opacity = '1';
            skillList.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
}

// Add Hover Effects to Project Cards
function addProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
}

// Scroll-triggered Animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of section is visible
    });

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Form Submission Handler (if you add a contact form)
function handleContactForm() {
    const form = document.querySelector('#contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic form validation
        if (validateForm(data)) {
            // Simulate form submission
            console.log('Form submitted:', data);
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
}

// Basic Form Validation
function validateForm(data) {
    const { name, email, message } = data;
    
    if (!name || name.trim() === '') {
        alert('Please enter your name');
        return false;
    }

    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!message || message.trim() === '') {
        alert('Please enter a message');
        return false;
    }

    return true;
}

// Optional: Analytics and Performance Tracking
function initAnalytics() {
    // Placeholder for Google Analytics or custom tracking
    console.log('Page viewed at:', new Date().toLocaleString());
}

// Error Logging
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
    // Optional: Send error to logging service
});
document.addEventListener('DOMContentLoaded', () => {
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Project Modal Functionality
    const projectDetailButtons = document.querySelectorAll('.project-details-btn');
    const projectModals = document.querySelectorAll('.project-modal');

    projectDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('href');
            const modal = document.querySelector(modalId);
            modal.style.display = 'block';
        });
    });

    // Close Modal
    const closeModalButtons = document.querySelectorAll('.close-modal');
    closeModalButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.project-modal');
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        projectModals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});