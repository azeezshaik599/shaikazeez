// JavaScript to trigger animation when elements come into view (scroll-triggered)
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, form");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const checkVisibility = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add("animate"); // Add a class to trigger animations
            }
        });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check in case elements are already in view
});
