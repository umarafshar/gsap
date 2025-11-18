document.addEventListener("DOMContentLoaded", (event) => {  
gsap.registerPlugin(ScrollTrigger);

let count = 1;
let con = document.querySelector(".counter");

let alpha = setInterval(() => {
  if (count <= 100) {
    con.textContent = count; // show the value inside paragraph
    count++;
  } else {
    clearInterval(alpha);
  }
}, 10); // 50ms makes the animation visible

gsap.to(".counter", {y:-650, duration: 1.3})

  let tlPreloader = gsap.timeline();

  tlPreloader.to(".preloader__logo", {
    y: -150,
    // transformOrigin: "top center",
    duration: 1.8,
    opacity: 1,
    ease: "power1.inOut",
    // delay: 1,
  })
  
 .to(".preloader", {
  y: "-100%",
  // duration: 1,
  ease: "power1.inOut",
  delay: 1,
 })
  
  
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
  }, 3000); // Match this duration with the preloader animation duration
});

  let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".hero",
        start: "top top",
        end: "+=250",
        // markers: true,
        scrub: 1,
        ease: "power1.in",
    }
  })

  tl.to(".hero__highlight-scroll", {
    y: "-76%",
  })

    let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".about",
        start: "-15% 20%",
        end: "+=450",
        // markers: true,
        scrub: 1.5,
        ease: "power1.in",
    }

  })

  tl2.to(".about__left img", {y:-500})


let feature = document.querySelector('.tab-01');
let target = document.querySelector('.tab-09');

feature.addEventListener('click', function(dets) {
  // target.setAttribute('src', dets.target.img);
  });


});

