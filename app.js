const flightPath = {
    curviness: 1.35, //adds curviness to the movement of the image
    autoRotate: false,
    values: [
        {x: 1000, y: 200}
    ],
};


const tween = new TimelineLite();

tween.add(
    TweenLite.to('.mars', 2, {
        bezier: flightPath,
        ease: Power1.easeInOut,
        opacity: 1
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '#animation',
    duration: 500,
    triggerHook: 0.5,
})
.setTween(tween)
.addTo(controller);
