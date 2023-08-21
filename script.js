var cursor = document.querySelector("#cursor");
var cursorblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    cursorblur.style.left = dets.x -70 +"px"
    cursorblur.style.top = dets.y - 70 +"px"
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav",{

backgroundColor : "#000",
height : "100px",
duration : 0.7,
scrollTrigger : {
    trigger:"#nav",
    scroller: "body",
    start : "top -10%",
    end : "top -11%",
    scrub : 1,
}
})

gsap.to("#main",{

    backgroundColor : "#000",
    scrollTrigger : {
    trigger :  "#main",
    scroller : "body",
    start : "top -25%",
    end : "top -70%",
    scrub : 2,}
})

gsap.from("#about-us img,#about-us-details", {
  y: 90,
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
// gsap.from(".card", {
//   transform: "-webkit-rotate3d(-1, 1, 0, 360deg)",
//   scale: 0.8,
//   // opacity:0,
//   duration: 1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     // markers:false,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });

gsap.from("#colone-left", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colone-left",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colone-right", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colone-left",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
