import { Dining } from './images';
import { selectNavItem } from './helper.js';

export default function loadHomeTab() {
  selectNavItem('home');

  const content = document.getElementById('content');

  const restaurantName = document.createElement('h1');
  const diningImg = document.createElement('img');
  const restaurantHeadline = document.createElement('h1');
  const restaurantDescription = document.createElement('p');

  restaurantName.id = 'restaurantName';
  restaurantName.innerText = 'The Green Sprout Restaurant';
  restaurantName.classList.add('centered');

  diningImg.id = 'diningImg';
  diningImg.src = Dining;
  diningImg.alt = 'People enjoying food in the dining area';
  diningImg.classList.add('fullWidth');

  restaurantHeadline.id = 'restaurantHeadline';
  restaurantHeadline.innerText = 'Real Organic Cuisine. Conscientiously Prepared.';
  restaurantHeadline.classList.add('centered');

  restaurantDescription.id = 'restaurantDescription';
  restaurantDescription.innerText =
    'We create flavor-sophisticated scratch-made food using thoughtfully\
    chosen ingredients from the earth. Every dish reflects a multicultural\
    influence and features many of the vegetables, spices, and techniques\
    that truly inspire us to eat and serve beautiful food. Vegan, or not,\
    we promise you will enjoy your experience.';

  content.appendChild(restaurantName);
  content.appendChild(diningImg);
  content.appendChild(restaurantHeadline);
  content.appendChild(restaurantDescription);
}
