gsap.registerPlugin(ScrollTrigger);

const pinBoxes = document.querySelectorAll(".pin-wrap > *");
const pinWrap = document.querySelector(".pin-wrap");

let pinWrapWidth;
let horizontalScrollLength;

function refresh() {
  pinWrapWidth = pinWrap.scrollWidth;
  horizontalScrollLength = pinWrapWidth - window.innerWidth;
  console.log(pinWrapWidth);
}

window.addEventListener("load", function () {
  console.log("live");
  refresh();

  // Pinning and horizontal scrolling
  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      pinSpacer: ".pin-spacer",
      pinSpacing: true,
      start: "center center",
      markers: true,
      onEnter: () => console.log("enter"),
      end: () => `+=${pinWrapWidth}`,
      invalidateOnRefresh: true,
    },
    x: () => -horizontalScrollLength,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refreshInit", refresh);
});
