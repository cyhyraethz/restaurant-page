import { Dining } from './images';

export default function loadHomeTab() {
  const homeTab = document.getElementById('home');
  const content = document.getElementById('content');
  const active = document.getElementsByClassName('active');

  const restaurantName = document.createElement('h1');
  const diningImg = document.createElement('img');
  const restaurantHeadline = document.createElement('h1');
  const restaurantDescription = document.createElement('p');

  for (let e of active) {
    e.classList.remove('active');
  }
  content.innerHTML = '';
  homeTab.className = 'active';

  restaurantName.id = 'restaurantName';
  restaurantName.innerText = 'The Green Sprout Restaurant';
  diningImg.id = 'diningImg';
  diningImg.src = Dining;
  diningImg.alt = 'People enjoying food in the dining area';
  restaurantHeadline.id = 'restaurantHeadline';
  restaurantHeadline.innerText = 'Real Organic Cuisine. Conscientiously Prepared.';
  restaurantDescription.id = 'restaurantDescription';
  restaurantDescription.innerText =
    'We create flavor-sophisticated scratch-made food using thoughtfully\
    chosen ingredients from the earth. Every dish reflects a multicultural\
    influence and features many of the vegetables, spices, and techniques\
    that truly inspire us to eat and serve beautiful food. Vegan, or not,\
    we promise you will enjoy your experience.';

  diningImg.classList.add('fullWidth');
  restaurantHeadline.classList.add('centered');
  restaurantName.classList.add('centered');

  content.appendChild(restaurantName);
  content.appendChild(diningImg);
  content.appendChild(restaurantHeadline);
  content.appendChild(restaurantDescription);
}
