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

// Add scroll effect to floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".floating-element");

  parallax.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Button hover effects
document.querySelectorAll(".btn-hero").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Card hover animations
document.querySelectorAll(".card-elevated").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
document
  .querySelectorAll(".card, .stats-card, .testimonial-card, .roadmap-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Form Logic
document.addEventListener("DOMContentLoaded", function () {
  // Grab elements
  const formOverlay = document.querySelector(".ija-popup-overlay");
  const thankYouPopup = document.getElementById("thank-you-popup");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const closeThanksBtn = document.getElementById("closeThanksBtn");
  const openFormBtn = document.getElementById("openFormBtn");
  const secondButton = document.getElementById("secondButton");
  const thirdButton = document.getElementById("thirdButton");
  const fourthButton = document.getElementById("fourthButton");
  const form = document.getElementById("theForm");

  // Helper: Show/Hide popups
  const showPopup = (el) => el && (el.style.display = "flex");
  const hidePopup = (el) => el && (el.style.display = "none");

  // Open form popup
  if (openFormBtn) {
    openFormBtn.addEventListener("click", () => showPopup(formOverlay));
  }

  if (secondButton) {
    secondButton.addEventListener("click", () => showPopup(formOverlay));
  }
  if (thirdButton) {
    thirdButton.addEventListener("click", () => showPopup(formOverlay));
  }
  if (fourthButton) {
    fourthButton.addEventListener("click", () => showPopup(formOverlay));
  }

  // Close form popup
  if (closeFormBtn) {
    closeFormBtn.addEventListener("click", () => hidePopup(formOverlay));
  }

  // Close thank-you popup
  if (closeThanksBtn) {
    closeThanksBtn.addEventListener("click", () => hidePopup(thankYouPopup));
  }

  // Form submission (validation + sending)
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // Always stop default until validation passes

      // Regex patterns
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[6-9]\d{9}$/;

      // Values
      const fName = form.fName.value.trim();
      const lName = form.lName.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();

      // Validation
      if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
        alert("Name must contain only letters.");
        return;
      }
      if (!emailRegex.test(email)) {
        alert("Enter a valid email.");
        return;
      }
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }

      // If we reach here, validation passed
      const formData = new FormData(form);

      // Log form data properly
      console.log("Form Data:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      try {
        const res = await fetch("mail.php", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log("HTTP Status Code:", data.statusCode);
        console.log("API Response:", data.apiResponse);

        if (data.statusCode === 200) {
          hidePopup(formOverlay);
          showPopup(thankYouPopup);
          form.reset();
        } else {
          window.location.href = "error.html";
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    });
  }
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

// Sticky Footer CTA 
document.addEventListener("DOMContentLoaded", function () {
  const mobileCTA = document.getElementById("mobile-cta");
  const heroSection = document.getElementById("heroSection");

  if (mobileCTA && heroSection) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        mobileCTA.classList.add("show");
      } else {
        mobileCTA.classList.remove("show");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to get URL parameter
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name) || "";
    }

    // List of UTM parameters
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

    utmParams.forEach(param => {
        const value = getParameterByName(param);
        if (value) {
            document.getElementById(param).value = value;
        }
    });
});
