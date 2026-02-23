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
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
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
