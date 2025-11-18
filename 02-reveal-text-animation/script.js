// To Ensure HTML Load 1st then GSAP Code
 document.addEventListener("DOMContentLoaded", (event) => {
  // Enter GSAP code after this!

gsap.to(".hero__circle", { 
    duration: 3, 
    delay: 0.5,
    x: 800, 
    ease: "slow(0.7,0.7,false)",
    yoyo: true,
    repeat: -1,

});


// gsap.fromTo(".agent__circle", { 
//         x: 0,
//         y: 0,
//         scale: 0.3,
//         opacity: 0.3,
//      }, 
    
//     { 
//         x: 1000,
//         y: 1000,
//         scale: 1.5,
//         opacity: 0.5, 
//         duration: 5,
//         yoyo: true,
//         repeat: -1,
//         ease: "power1.inOut",
//     });



 });