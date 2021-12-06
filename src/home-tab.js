import diningSrc from './dining.jpg';

export default function loadHomeTab() {
  const home = document.getElementById('home');
  const content = document.getElementById('content');
  const active = document.getElementsByClassName('active');

  const restaurantName = document.createElement('h1');
  const dining = document.createElement('img');
  const restaurantHeadline = document.createElement('h1');
  const restaurantDescription = document.createElement('p');

  content.innerHTML = '';

  home.className = 'active';
  active.className = 'inactive';

  restaurantName.id = 'restaurantName';
  restaurantName.innerText = 'The Green Sprout Restaurant';
  dining.id = 'dining';
  dining.src = diningSrc;
  dining.alt = 'People enjoying food in the dining area';
  restaurantHeadline.id = 'restaurantHeadline';
  restaurantHeadline.innerText = 'Real Organic Cuisine. Conscientiously Prepared.';
  restaurantDescription.id = 'restaurantDescription';
  restaurantDescription.innerText =
    'We create flavor-sophisticated scratch-made food using thoughtfully\
    chosen ingredients from the earth. Every dish reflects a multicultural\
    influence and features many of the vegetables, spices, and techniques\
    that truly inspire us to eat and serve beautiful food. Vegan, or not,\
    we promise you will enjoy your experience.';

  content.appendChild(restaurantName);
  content.appendChild(dining);
  content.appendChild(restaurantHeadline);
  content.appendChild(restaurantDescription);
}
