// FROM THIS JAVASCRIPT CODE IS STARTED WHERE ALL THE ANIMATION IS DONE
let button =document.querySelector(".button");
let backbutton=document.querySelector(".leftArrow");
let tl=gsap.timeline({paused:true,reverse:true});
button.addEventListener("click",function(e){
      tl.play()
})
backbutton.addEventListener("click",function(e){
    // console.log("hey");
     tl.reverse();
})
//screen 1 arrow rotate 
tl.to(".button .ri-arrow-right-s-line",{
      ease:"power1.inOut",
      rotate:90
})
//screen 1 Arrow Rotatation hide
tl.to(".button .ri-arrow-right-s-line",{
    duration:0.2,
    y:-10,
    opacity:0
})
//screen 1 y-axis and on this particular animation arrow moving in the y direction
tl.to(".button",{
    ease:"power1.inOut",
    yPercent:114,
})
tl.to(".top",{
    ease:"power1.inOut",
    height:380
},0.6)

tl.to(".top img",{
    ease:"power1.inOut",
    scale:1.2,
    yPercent:40
},0.8)

//Screen 1 Article Fetching
tl.to(".button",{
    ease:"power1.inOut",
    yPercent:130,
    borderRadius:0,
    scaleX:10,
    scaleY:2.6,
},1.1)

tl.from(".loading",{
    ease:"power1.inOut",
    opacity:0,
    y:50,
})
tl.to(".loading",{
    ease:"power1.inOut",
    opacity:0,
    x:200,
    delay:0.5
})
tl.from(".next-screen",{
    ease:"power1.inOut",
    yPercent:100,
    duration:0.5
})

tl.from(".next-screen .leftArrow",{
    ease:"power1.inOut",
    xPercent:-250,
    duration:0.5
})
tl.from(".next-screen h1",{
    ease:"power1.inOut",
    scale:0,
    opacity:0,
    duration:0.3
})
tl.from(".header",{
    ease:"power1.inOut",
    scale:0,
    opacity:0,
    duration:0.3
})
tl.from(".next-screen p",{
    ease:"power1.inOut",
    scale:0,
    opacity:0,
    duration:0.3
})
tl.to(".next-screen",{
    ease:"power1.inOut",
    yPercent:-10,
    duration:1
})
tl.to(".next-screen",{
    ease:"power1.inOut",
    yPercent:0,
    duration:1
})
