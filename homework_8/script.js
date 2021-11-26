let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

timeline
  .to(".person", 3, { y: -200 })
  .to(".background", 3, { y: 50 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})

  .setTween(timeline)
  .setPin("section")
  .addTo(controller)
