let time = gsap.timeline();

time.from("#carddiv>*", {
  duration: 0.6,
  x:-109,
  delay: 0.1,
  opacity:0,
  stagger:0.3,

});

let btn = document.querySelector("#buttonlogin").addEventListener("click",()=>{
  alert("Soon");
  alert("Make by ahsan")
})