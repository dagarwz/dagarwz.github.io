let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

timeline
  .to(".person", 3, { y: -200 }, "-=3")
  .fromTo(".background", { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(".itinSection", { opacity: 0.8 }, { opacity: 1, duration: 1 })
// .fromTo("", { opacity: 0.5 }, { opacity: 1, duration: 1 })
// .fromTo(".main-title", { y: -50 }, { y: 0, duration: 3 }, "-=3")

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})

  .setTween(timeline)
  .setPin("section")
  .addTo(controller)

// function scrolltoSection(id) {
//   var page = document.getElementById(id)
//   console.log(page)
//   page.scrollIntoView()
// }

// Init controller
var controller2 = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $("section").height(),
    triggerHook: 0.025,
    reverse: true,
  },
})

var scenes = {
  intro: {
    intro: "intro-anchor",
  },
  scene2: {
    contentSection: "anchor1",
  },
  // scene3: {
  //   itinSection: "anchor2",
  // },
}

for (var key in scenes) {
  // skip loop if the property is from prototype
  if (!scenes.hasOwnProperty(key)) continue

  var obj = scenes[key]

  for (var prop in obj) {
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(prop)) continue

    new ScrollMagic.Scene({ triggerElement: "#" + prop })
      .setClassToggle("#" + obj[prop], "active")
      .addTo(controller2)
  }
}

controller2.scrollTo(function (target) {
  console.log("target", target)
  // TweenMax.to(window, 0.5, {
  //   scrollTo: {
  //     y: 740,
  //     autoKill: true, // Allow scroll position to change outside itself
  //   },
  //   ease: Cubic.easeInOut,
  // })
  scrollOptions = {
    top: target,
    behavior: "smooth",
  }

  window.scrollTo(scrollOptions)
})

var anchor_nav = document.querySelector(".anchor-nav")

anchor_nav.addEventListener("click", function (e) {
  var target = e.target,
    id = target.getAttribute("href")
  console.log(id)
  let top = 0
  if (id !== null) {
    if (id.length > 0) {
      e.preventDefault()
      if (id == "#contentSection") top = 2000
      if (id == "#itinSection") top = 20000
      scrollOptions = {
        top: top,
        behavior: "smooth",
      }

      window.scrollTo(scrollOptions)
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id)
      }
    }
  }
})

// document.getElementById("anchor2").addEventListener("click", function (e) {
//   console.log("yo")
//   document.getElementById("anchor2").click()
// })

function runAgain(e) {
  var target = e.target,
    id = target.getAttribute("href")
  console.log(id)
  let top = 0
  if (id !== null) {
    if (id.length > 0) {
      e.preventDefault()
      if (id == "#contentSection") top = 2000
      if (id == "#itinSection") top = 20000
      scrollOptions = {
        top: top,
        behavior: "smooth",
      }

      window.scrollTo(scrollOptions)
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id)
      }
    }
  }
}
