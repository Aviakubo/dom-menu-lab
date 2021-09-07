// alert("js is connected");

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// set main element to mainEl
const mainEl = document.querySelector('main');

// set background of mainEl to --main-bg CSS custom property

// let bg = window.getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
mainEl.style.backgroundColor = 'var(--main-bg)';

// set content of mainEl to <h1>SEI Rocks!</h1>

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// add a class of 'flex-ctr' to mainEl

mainEl.setAttribute("class", "flex-ctr");

// select and cache the <nav id="top-menu"> element in variable named topMenuEl

const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);

// set the height topMenuEl element to be 100%

topMenuEl.style.height = '100%';

// set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// add a class of flex-around to topMenuEl

topMenuEl.setAttribute("class", "flex-around");

// Iterate over the entire menuLinks array and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

console.log(menuLinks);

// create a variable to createElement('a')
// then setAttribute("href", href) ?
// 

for(let menuLink of menuLinks) {
    document.createElement('a');
}