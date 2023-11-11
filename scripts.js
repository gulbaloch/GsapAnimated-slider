gsap.to(".imagecontainer", {
  ease: Expo.EaseInOut,
  width: "100%",
  stagger: 2,

});

gsap.to(".text h1", {
  ease: Expo.EaseInOut,
  top: "0px",
  stagger: 2,

});
gsap.to(".text h1", {
  delay: 2,
  ease: Expo.EaseInOut,
  top: "-100%",
  stagger: 2,

});
