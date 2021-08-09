window.addEventListener('resize', getRightFlightPath());
window.onresize = function(){ location.reload(); }

//window.onresize = function navBarResponsive(){
 //   let navBar = document.querySelector('#hex_span');
 //   let width = window.innerWidth;
 //   console.log(width);
 //   if(width < 1300) {
//        navBar.style.fontSize = "120px";
//    } else if (width > 1300) {
 //       navBar.style.fontSize = "135";
//    } 
 //   location.reload();
//}


function getRightFlightPath() {
    x = window.innerWidth;
    console.log(x);
    if (x > 1500) {
       var  flightPathNav = {
            curviness: 0,
            autoRotate: false,
            values: [
                {x: -260,y: -100}
            ],
        };
        return flightPathNav;
    } else if (x < 1500 && x > 1090) {
       var flightPathNav = {
            curviness: 0,
            autoRotate:false,
            values:[
                {x: -89 ,y: -150}
            ],
        };
        return flightPathNav;
    } else if (x < 1090) {
        var flightPathNav = {
            curviness: 0,
            autoRotate:false,
            values:[
                {x: -54 ,y: -150}
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

