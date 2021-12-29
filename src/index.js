import './style.css';
import loadTopNav from './top-nav.js';
import loadHomeTab from './home-tab.js';
import loadMenuTab from './menu-tab.js';
import loadContactTab from './contact-tab.js';
import { displayNav } from './helper.js';

loadTopNav();
loadHomeTab();
// loadMenuTab();
// loadContactTab();

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const icon = document.getElementById('icon');

home.addEventListener('click', loadHomeTab);
menu.addEventListener('click', loadMenuTab);
contact.addEventListener('click', loadContactTab);
icon.addEventListener('click', displayNav);
