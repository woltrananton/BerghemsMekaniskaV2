// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1e40af",
                industrial: "#475569",
                "steel": "#f1f5f9",
                "background-light": "#ffffff",
                "background-dark": "#0f172a",
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
};

// Dark Mode Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    // Desktop Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    // Mobile Theme Toggles
    const mobileThemeToggles = document.querySelectorAll('.mobile-theme-toggle');
    mobileThemeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuToggle && mobileMenu && menuIcon) {
        function toggleMenu() {
            const isOpen = !mobileMenu.classList.contains('translate-x-full');

            if (isOpen) {
                // Close menu
                mobileMenu.classList.add('translate-x-full');
                menuIcon.textContent = 'menu';
                menuIcon.classList.remove('rotate-90');
                document.body.style.overflow = '';
            } else {
                // Open menu
                mobileMenu.classList.remove('translate-x-full');
                menuIcon.textContent = 'close';
                menuIcon.classList.add('rotate-90');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            }
        }

        mobileMenuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('translate-x-full')) {
                    toggleMenu();
                }
            });
        });
    }

    // Form submission prevention
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Optional: Add form submission logic here
            alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
        });
    }
});
