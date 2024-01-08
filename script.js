const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl= gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    delay:0,
    scale:0.5
})
tl.to("#page1",{
    y:"30vh",
    delay:1,
    duration:1,
})
tl.to("#page1",{
    y:"0vh",
    delay:1,
    duration:1,
    rotate:360,
    scale:1
})


