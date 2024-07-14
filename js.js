function navAnimation() {
    let nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}


// nav Animaltion
// let relem = document.querySelector("#right-elem")
// let relemImg = document/querySelector("#right-elem img")

// relem.addEventListener("mouseenter", function() {
//     relemImg.style.opacity = 1
// })

function page2Animation() {
    // elem -- is div
let rightElems  = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to( elem.childNodes[3],{
        opacity: 0,
        scale: 0
    })
    })
    elem.addEventListener("mousemove", function(dets){ // dets -- giving mouse element
        // console.log(elem.getBoundingClientRect().y)

        gsap.to(elem.childNodes[3], {
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-190
        }) 

    })
})
}




navAnimation()
page2Animation()


