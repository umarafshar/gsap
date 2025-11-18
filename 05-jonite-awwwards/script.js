tl = gsap.timeline()

tl.to(".hero__media", { duration: 2, y: 0, height: "30%", ease: "power3.Out" }, 'first_animation')
    .to(".hero__media", { duration: 1, height: "100%", ease: "power3.in" }, 'second_animation')

    .to(".hero__righ-wrapper", { duration: 2, y: 0, height: "21.7%", ease: "power3.Out" }, 'first_animation')
    .to(".hero__righ-wrapper", { duration: 1, height: "100%", ease: "power3.in" }, 'second_animation')

    .fromTo(".hero__inner", { y: 30, opacity: 0 }, { delay: 0.3, duration: 1, y: 0, opacity: 1, stagger: 1, ease: "power3.Out" },)


// tl.fromTo(".left__img", {y:500}, {duration: 2, y:0, height: "30%", ease: "power3.Out"}, 'first_animation')
// .to(".left__img", {duration: 1, height: "45%", ease: "power3.in"}, 'second_animation')

// .fromTo(".right_img", {y:500}, {duration: 2, y:0, height: "25%", ease: "power3.Out"}, 'first_animation')
// .to(".right_img", {duration: 1, height: "45%", ease: "power3.in"}, 'second_animation')

// .fromTo(".right_video", {y:500}, {duration: 2, y:0, height: "30%", ease: "power3.Out"}, 'first_animation')
// .to(".right_video", {duration: 1, height: "100%", ease: "power3.in"}, 'second_animation')

// .fromTo(".header", {y:-50}, {duration: 1, y:0, ease: "power3.Out"}, 'first_animation')
