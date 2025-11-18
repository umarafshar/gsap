var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
    }
})

tl.to(".hero__3d-bird", {
    top: "110%",
    right: "15%",
    scale: 0.8,
},'fanta')

tl.to(".hero__3d-model", {
    top: "130%",
    left: "0%",
    rotate: "360deg",
    scale: 0.8,
},'fanta')    

tl.to(".fanta1", {
    top: "125%",
    left: "13%",
    rotate: "360deg",
    scale: 0.8,
},'fanta')

tl.to(".orange2", {
    top: "120%",
    left: "20%",
    rotate: "180deg",
    scale: 0.8,
},'fanta')

tl.to(".orange1", {
    top: "165%",
    left: "70%",
    scale: 1.3,
},'fanta')

tl.to(".leaf1", {
    top: "120%",
    left: "75%",
    rotate: "-400deg",
    scale: 1.5,
},'fanta')

tl.to(".leaf2", {
    top: "150%",
    left: "5%",
    rotate: "-100deg",
    scale: .7,
},'fanta')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".products",
        start: "0% 30%",
        end: "00% 00%",
        scrub: 1,
        // markers: true,
    }
})

tl2.from(".lemon1", {
    top: "15rem",
    left: "-15rem",
    rotate: "-90deg",
    scale: 0.8,
},'bottle')

tl2.from(".sprite", {
    top: "15rem",
    left: "-15rem",
    rotate: "90deg",
    scale: 0.8,
},'bottle')

tl2.from(".lemon2", {
    top: "15rem",
    right: "-15rem",
    rotate: "-90deg",
    scale: 0.7,
},'bottle')

tl2.from(".cocacola", {
    top: "15rem",
    right: "-15rem",
    rotate: "-90deg",
    scale: 0.7,
},'bottle')


tl2.to(".hero__3d-model", {
    top: "225%",
    left: "27%",
    // rotate: "360deg",
    scale: 1,
},'bottle')


tl2.to(".fanta1", {
    top: "223%",
    left: "42.5%",
    // rotate: "360deg",
    scale: 0.95,
},'bottle')

tl2.to(".orange2", {
    top: "213%",
    left: "44%",
    rotate: "-180deg",
    scale: 1.2,
},'bottle')