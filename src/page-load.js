import loadHomeTab from './home-tab.js';

export default function initialPageLoad() {
  const navigation = document.getElementById('navigation');

  const topNav = document.createElement('nav');
  const navList = document.createElement('ul');

  const home = document.createElement('a');
  const menu = document.createElement('a');
  const locations = document.createElement('a');
  const story = document.createElement('a');
  const careers = document.createElement('a');
  const catering = document.createElement('a');

  home.id = 'home';
  home.href = '#home';
  home.innerText = 'Home';
  home.addEventListener('click', loadHomeTab);

  menu.id = 'menu';
  menu.href = '#menu';
  menu.innerText = 'Menu';
  // menu.addEventListener('click', loadMenuTab);

  locations.id = 'locations';
  locations.href = '#locations';
  locations.innerText = 'Locations';
  // locations.addEventListener('click', loadLocationsTab);

  story.id = 'story';
  story.href = '#story';
  story.innerText = 'Story';
  // story.addEventListener('click', loadStoryTab);

  careers.id = 'careers';
  careers.href = '#careers';
  careers.innerText = 'Careers';
  // careers.addEventListener('click', loadCareersTab);

  catering.id = 'catering';
  catering.href = '#catering';
  catering.innerText = 'Catering';
  // catering.addEventListener('click', loadCateringTab);

  const anchor = [home, menu, locations, story, careers, catering];

  for (let i = 0; i < anchor.length; i++) {
    const li = document.createElement('li');
    li.appendChild(anchor[i]);
    navList.appendChild(li);
  }

  topNav.id = 'topNav';
  navList.id = 'navList';

  topNav.appendChild(navList);
  navigation.appendChild(topNav);

  loadHomeTab();
}
