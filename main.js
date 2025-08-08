const keyPoints = [
    'Learn Digital Marketing the 2025 Way — with GenAI at the Core',
    'Small Batch Sizes (50 Only)',
    'Learn from Industry Leaders with 100% Live Doubt-Solving',
    '100+ Hours of Live Sessions and Real-World Projects',
    'Placement Support That Actually Works'
];

const fileExtensions = {
    1: "jpeg",
    2: "png",
    3: "png",
    4: "jpg",
    5: "png",
    6: "png",
    7: "jpg",
    8: "jpg",
    9: "png",
    10: "jpeg",
    11: "png",
    12: "png",
    13: "png",
    14: "jpeg",
    15: "png",
    16: "png",
    17: "jpg",
    18: "jpeg",
    19: "png",
    20: "png",
    21: "png",
    22: "jpg",
    23: "png",
    24: "png",
    25: "jpg",
};

const container = document.getElementById("keyPoint");

keyPoints.forEach(text => {
    const box = document.createElement("strong");
    box.className = "badge-glow rounded p-3 text-dark";
    box.innerText = text;
    container.appendChild(box);
});



// Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

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

document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.getElementById("closeFormBtn");
    const popup = document.getElementById("ijaPopup");

    // Open Popup
    openBtn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Close Popup on X
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close Popup if Click Outside
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});



// REcruiters


const marqueeTrack = document.getElementById("marqueeTrack");

function addImages() {
    for (let i = 1; i <= 25; i++) {
        const ext = fileExtensions[i];
        const img = document.createElement("img");
        img.src = `images/recruiters/${i}.${ext}`;
        img.alt = `Recruiter ${i}`;
        marqueeTrack.appendChild(img);
    }
}
addImages();
addImages();

// Pie chart 
const ctx = document.getElementById("audiencePieChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "Marketing & Sales Professionals",
        "Non-tech Working Professionals",
        "Fresh Graduates (Engineering/MBA)",
        "Small Business Owners / Entrepreneurs",
        "Operations / HR / Admin",
        "Finance & Accounting Professionals",
        "IT & Software Engineers",
        "Others",
      ],
      datasets: [
        {
          data: [25, 20, 18, 15, 8, 5, 4, 5],
          backgroundColor: [
            "#FF8000",
            "#122E5D",
            "#f7b733",
            "#4CAF50",
            "#e91e63",
            "#9c27b0",
            "#00bcd4",
            "#ccc",
          ],
          borderWidth: 2,
          borderColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#333",
            font: {
              size: 14,
              weight: "500",
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.parsed}%`;
            },
          },
        },
      },
    },
  });