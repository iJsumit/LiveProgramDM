const keyPoints = [
    'Learn Digital Marketing the 2025 Way — with GenAI at the Core',
    'Small Batch Sizes (50 Only)',
    'Learn from Industry Leaders with 100% Live Doubt-Solving',
    '100+ Hours of Live Sessions and Real-World Projects',
    'Placement Support That Actually Works'
];

const container = document.getElementById("keyPoint");

keyPoints.forEach(text => {
    const box = document.createElement("strong");
    box.className = "badge-glow rounded p-3 text-dark";
    box.innerText = text;
    container.appendChild(box);
});



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.floating-element');

    parallax.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Button hover effects
document.querySelectorAll('.btn-hero').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Card hover animations
document.querySelectorAll('.card-elevated').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .stats-card, .testimonial-card, .roadmap-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});