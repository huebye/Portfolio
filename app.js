const flightPathNav = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: -260,y: -200}
    ],
};


const tween1 = new TimelineLite();


tween1.add(
    TweenLite.to('nav', 25, {
        bezier: flightPathNav,
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();

const sceneNav = new ScrollMagic.Scene({
    triggerElement: '#header_trigger',
    duration: "100%",
    triggerHook: 0,
})
.setTween(tween1)
.addTo(controller)