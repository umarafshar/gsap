
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
// gsap.to(selector, {duration: 1, toVars})

gsap.registerPlugin(ScrollTrigger);



let tl1 = gsap.timeline()

tl1.fromTo(".header__container", {y: -50, opacity: 0}, {duration: 2, y:0, opacity: 1, ease: "back.out(1.7)" })

.fromTo(".hero__title", {y: 50, opacity: 0}, {duration: 2, y:0, opacity: 1, ease: "back.out(1.7)" }, "-=1")
.fromTo(".hero__description", {y: 50, opacity: 0}, {duration: 2, y:0, opacity: 1, ease: "back.out(1.7)" }, "-=1.5")
.fromTo(".hero__cta", {y: 50, opacity: 0}, {duration: 2, y:0, opacity: 1, ease: "back.out(1.7)" }, "-=1.5")

.fromTo(".hero__img-01", {x: -1000, opacity: 0}, {duration: 1.5, x:0, opacity: 1, ease: "back.out(1.7)" }, "-=1")
.fromTo(".hero__img-02", {x: -1000, opacity: 0}, {duration: 1.5, x:0, opacity: 1, ease: "back.out(1.7)" }, "-=1")
.fromTo(".hero__img-03", {x: 400, opacity: 0}, {duration: 1.5, x:0, opacity: 1, ease: "back.out(1.7)" }, "-=1")

.fromTo(".hero__video", {scale: 0.3, opacity: 0}, {duration: 1.5, scale:1, opacity: 1, ease: "back.out(1.7)" }, "-=1");


let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "-11% 0%",
    end: "150% 100%",
    scrub: 1,
    // markers: true,
    pin: true,
  }
})

tl2.to(".hero__video", {scale: 3, y: 50},'scroll')
.to(".hero__img-01", {x: -700, rotate: "-35deg"},'scroll')
.to(".hero__img-02", {x: -700, rotate: "-35deg"},'scroll')
.to(".hero__img-03", {x: 400, rotate: "35deg"},'scroll')


});
