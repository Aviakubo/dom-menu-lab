// alert("js is connected");

// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// console.log(menuLinks);

// create a variable to createElement('a')
// then setAttribute("href", href) ?
// 

// for(let menuLink of menuLinks) {
//     document.createElement('a');
// }

menuLinks.forEach(function (menuLinks) {
  var aTag = document.createElement("a");
  aTag.setAttribute("href", menuLinks.href)
  aTag.innerHTML = menuLinks.text;
  topMenuEl.appendChild(aTag);
});

// select and cache the nav id=sub-menu element in a var named subMenuEl

const subMenuEl = document.getElementById("sub-menu");

// Set the height subMenuElelement to be 100%

subMenuEl.style.height = '100%';

// Set the background color of subMenuElto the value stored in the --sub-menu-bg CSS custom property

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenu Elelement

subMenuEl.setAttribute("class", "flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = 'absolute';

// Set the CSS topproperty of subMenuElto the value of 0.

subMenuEl.style.topProperty = 0;

// update menu links array (done above)



// Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll('nav a');
// console.log(topMenuLinks);

// Declare a global showingSubMenu variable and initialize it to false;

var showingSubMenu = false;

// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working

topMenuEl.addEventListener('click', handleClick)

function handleClick(evt) {
  evt.preventDefault()
  const element = evt.target;
  if(element.nodeName !== 'A') {
    return;
  }
  console.log(element.text);
}


