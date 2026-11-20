// ================= SETTINGS =================
const PRELOADER_DELAY = 1500;      // Duration (ms) the cube spins before revealing the page
const PRELOADER_EXIT_TIME = 1000;  // Exit duration (ms): must match #preloader transition in CSS

// ================= ALWAYS START AT TOP =================
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// ================= LOADING SCREEN =================
function hidePreloader() {
    const preloader = document.getElementById('preloader');

    // Unlock page scrolling (even if #preloader was removed from the HTML)
    document.body.classList.remove('loading-active');
    if (!preloader) return;

    // Slide the overlay up, then remove it from the DOM so it never blocks clicks
    preloader.classList.add('slide-up');
    setTimeout(() => preloader.remove(), PRELOADER_EXIT_TIME);
}

function schedulePreloader() {
    setTimeout(hidePreloader, PRELOADER_DELAY);
}

if (document.readyState === 'complete') {
    schedulePreloader();
} else {
    window.addEventListener('load', schedulePreloader);
}

// ================= SCROLL REVEAL ANIMATION =================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    // Legacy browsers: reveal everything immediately
    if (!('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((el) => observer.observe(el));
}

initScrollAnimations();

// ================= YOUTUBE PLAYER (Long Videos & Shorts) =================
// The iframe is created on click to keep the initial page load lightweight.
// The video ID comes from the button's data-video-id attribute.
function loadVideo(button) {
    const container = button.parentElement.querySelector('.iframe-container');
    const videoId = encodeURIComponent(button.dataset.videoId);

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
    button.hidden = true;
    iframe.focus(); // Keep keyboard focus on the player
}

document.addEventListener('click', (event) => {
    const button = event.target.closest('.video-overlay[data-video-id]');
    if (button) loadVideo(button);
});
