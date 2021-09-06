// alert("js is connected");

// set main element to mainEl
const mainEl = document.querySelector('main');

// set background of mainEl to --main-bg CSS custom property

let bg = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
mainEl.style.background = bg;

// set content of mainEl to <h1>SEI Rocks!</h1>

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// add a class of 'flex-ctr' to mainEl

mainEl.setAttribute("class", "flex-ctr");

// select and cache the <nav id="top-menu"> element in variable named topMenuEl

const topMenuEl = document.querySelectorAll(".top-menu");
// console.log(topMenuEl);

// set the height topMenuEl element to be 100%

document.getElementById('.top-menu').style.height = "100%";

// set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property

document.getElementById('.top-menu')

// add a class of flex-around to topMenuEl


