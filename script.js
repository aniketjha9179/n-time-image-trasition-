var tl = gsap.timeline({
    repeat: -1
});


// document.querySelectorAll(".imagecontainer")
//     .forEach(function (elem) {


//     })
tl
.to(".imagecontainer", {
    easa: Expo.easaInOut,
    width: "100%",
    // duration: 2,
    stagger: 2
},'a')
.to(".text h1", {
    ease: Expo.easaInOut,
    // duration: 2,
    stagger: 2,
    top: 0
},'a')
.to(".text h1", {
    delay: 2,
    ease: Expo.easaInOut,
    // duration: 2,
    stagger: 2,
    top: "-100%"
},'a')

