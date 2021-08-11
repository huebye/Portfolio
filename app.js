window.addEventListener('resize', getRightFlightPath());
window.onresize = function(){ location.reload(); }

function getRightFlightPath() {
    x = window.innerWidth;
    if (x > 1500) {
       var  flightPathNav = {
            curviness: 0,
            autoRotate: false,
            values: [
                {x: -220,y: -200}
            ],
        };
        return flightPathNav;
    } else if (x < 1550 && x > 1350) {
        var flightPathNav = {
             curviness: 0,
             autoRotate:false,
             values:[
                 {x: -120 ,y: -200}
             ],
         };
         return flightPathNav;
     } else if (x < 1350 && x > 1090) {
       var flightPathNav = {
            curviness: 0,
            autoRotate:false,
            values:[
                {x: -90 ,y: -200}
            ],
        };
        return flightPathNav;
    } else if (x < 1090 && x > 765) {
        var flightPathNav = {
            curviness: 0,
            autoRotate:false,
            values:[
                {x: -54 ,y: -210}
            ],
        };
        return flightPathNav;
    } else if (x < 765) {
        var flightPathNav = {
            curviness: 0,
            autoRotate:false,
            values:[
                {x: 0 ,y: -150}
            ],
        };
        return flightPathNav;
    }

}


const tween1 = new TimelineLite();

tween1.add(
    TweenLite.to('nav', 25, {
        bezier: getRightFlightPath(),
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();

const sceneNav = new ScrollMagic.Scene({
    triggerElement: '#header_trigger',
    duration: "100%",
    triggerHook: 0
})
.setTween(tween1)
.addTo(controller)

