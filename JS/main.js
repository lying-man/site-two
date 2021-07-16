"use strict";

const mask = document.querySelector(".mask");
window.addEventListener("load", () => {
    mask.classList.add("mask-animation");

    setTimeout( () => mask.classList.add("mask-disabled"), 300);
});
// document.body.onscroll = function () {
//     document.body.scrollTop = pageYOffset;
// }
const closeMenu = document.querySelector(".close-menu");
const zoneClose = document.querySelector(".zone-close");

const btnMenu = document.querySelector(".burger-menu");
const menu = document.querySelector("nav");

btnMenu.addEventListener("click", () => {

    zoneClose.classList.toggle("zone-close-active");

    menu.classList.toggle("nav-active");
    closeMenu.classList.toggle("close-menu-active");

    let burgerLine = document.querySelectorAll(".burger-line");

    for (let i = 0; i < burgerLine.length; i++) {
        burgerLine[i].classList.toggle("burger-line-disabled");
    }

});

zoneClose.addEventListener("click", () => {
    zoneClose.classList.toggle("zone-close-active");
    menu.classList.toggle("nav-active");
    closeMenu.classList.toggle("close-menu-active");

    let burgerLine = document.querySelectorAll(".burger-line");

    for (let i = 0; i < burgerLine.length; i++) {
        burgerLine[i].classList.toggle("burger-line-disabled");
    }

});

//list buttons
const volcanoButton = document.querySelector(".volcano_btn");
const tsunamiButton = document.querySelector(".tsunami_btn");
const eaquakeButton = document.querySelector(".earthquake_btn");
const eclipseButton = document.querySelector(".eclipse_btn");


//list blocks
const volcano = document.querySelector(".volcano");
const tsunami = document.querySelector(".tsunami");
const earthquake = document.querySelector(".earthquake");
const eclipse = document.querySelector(".eclipse");

//remove scroll
document.body.style.overflowY = "hidden";

//moves to blocks
volcanoButton.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
    volcano.scrollIntoView(true);
    setTimeout( () => document.body.style.overflowY = "hidden", 0 );
});

tsunamiButton.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
    tsunami.scrollIntoView(true);
    setTimeout( () => document.body.style.overflowY = "hidden", 0 );
});

eaquakeButton.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
    earthquake.scrollIntoView(true);
    setTimeout( () => document.body.style.overflowY = "hidden", 0 );
});

eclipseButton.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
    eclipse.scrollIntoView(true);
    setTimeout( () => document.body.style.overflowY = "hidden", 0 );
});




