import './style.css';
import loadTopNav from './top-nav.js';
import loadHomeTab from './home-tab.js';
import loadMenuTab from './menu-tab.js';
// import loadContactTab from './contact-tab.js';

loadTopNav();
loadHomeTab();
// loadMenuTab();
// loadContactTab();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
// const contact = document.getElementById('contact');

home.addEventListener('click', loadHomeTab);
menu.addEventListener('click', loadMenuTab);
// contact.addEventListener('click', loadContactTab);
