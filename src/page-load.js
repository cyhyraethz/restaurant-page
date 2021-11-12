import diningSrc from './dining.jpg';

export default function initialPageLoad() {
  const content = document.getElementById('content');

  const topNav = document.createElement('nav');
  const navList = document.createElement('ul');
  const restaurantName = document.createElement('h1');
  const dining = document.createElement('img');
  const restaurantHeadline = document.createElement('h1');
  const restaurantDescription = document.createElement('p');

  const home = document.createElement('a');
  const menu = document.createElement('a');
  const locations = document.createElement('a');
  const story = document.createElement('a');
  const careers = document.createElement('a');
  const catering = document.createElement('a');

  home.className = 'active';
  home.href = '#home';
  home.innerText = 'Home';

  menu.href = '#menu';
  menu.innerText = 'Menu';

  locations.href = '#locations';
  locations.innerText = 'Locations';

  story.href = '#story';
  story.innerText = 'Story';

  careers.href = '#careers';
  careers.innerText = 'Careers';

  catering.href = '#catering';
  catering.innerText = 'Catering';

  const anchor = [home, menu, locations, story, careers, catering];

  for (let i = 0; i < anchor.length; i++) {
    const li = document.createElement('li');
    li.appendChild(anchor[i]);
    navList.appendChild(li);
  }

  topNav.id = 'topNav';
  navList.id = 'navList';
  restaurantName.id = 'restaurantName';
  restaurantName.innerText = 'The Green Sprout Restaurant';
  dining.id = 'dining';
  dining.src = diningSrc;
  dining.alt = 'People enjoying food in the dining area';
  restaurantHeadline.id = 'restaurantHeadline';
  restaurantHeadline.innerText =
    'Real Organic Cuisine. Conscientiously Prepared.';
  restaurantDescription.id = 'restaurantDescription';
  restaurantDescription.innerText =
    'We create flavor-sophisticated scratch-made food using thoughtfully\
    chosen ingredients from the earth. Every dish reflects a multicultural\
    influence and features many of the vegetables, spices, and techniques\
    that truly inspire us to eat and serve beautiful food. Vegan, or not,\
    we promise you will enjoy your experience.';

  topNav.appendChild(navList);
  content.appendChild(topNav);
  content.appendChild(restaurantName);
  content.appendChild(dining);
  content.appendChild(restaurantHeadline);
  content.appendChild(restaurantDescription);
}
