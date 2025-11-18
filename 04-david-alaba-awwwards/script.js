
// GSAP ANIMATION TIMELINE
// ===================================

// Create main timeline with default settings
const mainTimeline = gsap.timeline({
  defaults: {
    ease: "power3.out"
  }
});


// Image Shutter Effect (Bottom to Top)

mainTimeline
  // Wait 1 second, then hide image 4 (bottom layer)
  .to(".preloader__image--4", {
    delay: 1,
    duration: 1.2,
    height: 0,
  })
  
  .to(".preloader__image--3", {
    duration: 1.2,
    height: 0,
  }, "-=0.3") // Overlap slightly for smoother transition

  .to(".preloader__image--2", {
    duration: 1.2,
    height: 0,
  }, "-=0.3")

  .to(".preloader__image--1", {
    duration: 1.2,
    height: 0,
  }, "-=0.3")

    .to(".preloader__title-text", {
    duration: 1,
    opacity: 1,
    display: "none",
  }, "-=0.5")

    .to(".preloader__title", {
    duration: 1,
    y: -570,
    scale: 0.3,
    // position: "fixed",
    zIndex: 50,
  }, "+=0.5")

  
  // Hold title for a moment
  .to({}, { duration: 0.5, ease: "power2.out" })

  
  // Move Video Section Up
    .to(".video-section", {
    duration: 1.5,
    y: "-100vh",
    ease: "power2.inOut"
  }, "-=0.3")

  // Change Background of Header
  .to([".nav__item", ".preloader__title"], {
    duration: 0.3,
    color: "#000",
    ease: "power2.inOut"
  }, )


// RESPONSIVE ADJUSTMENTS
// ===================================

// Adjust logo position for mobile devices
const updateLogoPosition = () => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    gsap.set(".preloader__title", {
      onComplete: () => {
        // Adjust transform values for mobile if needed
      }
    });
  }
};

// Update on resize
window.addEventListener('resize', updateLogoPosition);
updateLogoPosition();