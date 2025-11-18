document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  
  gsap.registerPlugin(ScrollTrigger)
  

  let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.banner',
		pin: true,
        start: 'top top', // when the top of the trigger hits the top of the viewport
		end: '+=1500', // end after scrolling 500px beyond the start
		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		// markers: true,
        // snap: {
		// 	snapTo: 'labels', // snap to the closest label in the timeline
		// 	duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
		// 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
		// 	ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
		// }
	}
});


tl.to(".blade", {x:1800, rotate: "360deg"})
// tl.to(".box-top", {y: "-100%", x: "100%", rotate:"15deg", scale: 3}, 'first')
// .to(".box-bottom", {y: "100%", x: "-100%", rotate:"15deg", scale: 3}, 'first')


tl.to(".box-top", {y: "-100%",}, 'first')
.to(".box-bottom", {y: "100%",}, 'first')

.to(".top-text", {x: "-100%", scale: 0.3}, 'first')
.to(".bottom-text", {x: "100%", scale: 0.3}, 'first')

.to(".top-img", {y: "-100%", x: "100%", scale: 0.3, rotate: "15deg"}, 'first')
.to(".bottom-img", {y: "-100%", x: "100%", scale: 0.3, rotate: "15deg"}, 'first')

.to(".center-img", {scale: 8, x: -150}, 'first')



});