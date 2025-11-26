// --- HERO SLIDER ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 5000; // Change every 5 seconds

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Start Slider
setInterval(nextSlide, slideInterval);


// --- COUNTER ANIMATION ---
const counters = document.querySelectorAll('.count');
const speed = 200; // The lower the slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Trigger counters when scrolled into view
let scrolled = false;
window.onscroll = function() {
    const counterSection = document.querySelector('.counters');
    if(counterSection) {
        if (window.scrollY + window.innerHeight > counterSection.offsetTop && !scrolled) {
            animateCounters();
            scrolled = true;
        }
    }
};

// --- MOBILE MENU TOGGLE (Optional simple version) ---
// For a fully responsive menu toggle, you would add a hamburger button listener here.
