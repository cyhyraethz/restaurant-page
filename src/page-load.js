import loadHomeTab from './home-tab.js';
import loadMenuTab from './menu-tab.js';

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

  const icon = document.createElement('a');
  const bars = document.createElement('i');

  const displayNav = () => {
    if (topNav.className !== 'responsive') {
      topNav.classList.add('responsive');
    } else {
      topNav.classList.remove('responsive');
    }
  };

  home.id = 'home';
  home.href = '#home';
  home.innerText = 'Home';
  home.addEventListener('click', loadHomeTab);

  menu.id = 'menu';
  menu.href = '#menu';
  menu.innerText = 'Menu';
  menu.addEventListener('click', loadMenuTab);

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

  icon.href = 'javascript:void(0);';
  icon.addEventListener('click', displayNav);
  icon.className = 'icon';

  bars.className = 'fa fa-bars';

  icon.appendChild(bars);

  const anchor = [home, menu, locations, story, careers, catering, icon];

  for (let i = 0; i < anchor.length; i++) {
    const li = document.createElement('li');
    li.appendChild(anchor[i]);
    navList.appendChild(li);
  }

  topNav.id = 'topNav';
  navList.id = 'navList';

  topNav.appendChild(navList);
  navigation.appendChild(topNav);

  // loadHomeTab();
  loadMenuTab();
  // loadLocationsTab();
  // loadStoryTab();
  // loadCareersTab();
  // loadCateringTab();
}
