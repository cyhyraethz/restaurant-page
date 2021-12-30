import { selectNavItem } from './helper.js';
import { Cauliflower, Oatmeal, Salad, SpringRolls } from './images';

export default function loadMenuTab() {
  selectNavItem('menu');

  const content = document.getElementById('content');

  const breakfastName = document.createElement('h1');

  const oatmealContainer = document.createElement('div');
  const oatmealImgContainer = document.createElement('div');
  const oatmealImg = document.createElement('img');
  const oatmealTextContainer = document.createElement('div');
  const oatmealName = document.createElement('h2');
  const oatmealText = document.createElement('p');
  const oatmealPrice = document.createElement('p');

  const lunchName = document.createElement('h1');

  const saladContainer = document.createElement('div');
  const saladImgContainer = document.createElement('div');
  const saladImg = document.createElement('img');
  const saladTextContainer = document.createElement('div');
  const saladName = document.createElement('h2');
  const saladText = document.createElement('p');
  const saladPrice = document.createElement('p');

  const springRollsContainer = document.createElement('div');
  const springRollsImgContainer = document.createElement('div');
  const springRollsImg = document.createElement('img');
  const springRollsTextContainer = document.createElement('div');
  const springRollsName = document.createElement('h2');
  const springRollsText = document.createElement('p');
  const springRollsPrice = document.createElement('p');

  const dinnerName = document.createElement('h1');

  const cauliflowerContainer = document.createElement('div');
  const cauliflowerImgContainer = document.createElement('div');
  const cauliflowerImg = document.createElement('img');
  const cauliflowerTextContainer = document.createElement('div');
  const cauliflowerName = document.createElement('h2');
  const cauliflowerText = document.createElement('p');
  const cauliflowerPrice = document.createElement('p');

  breakfastName.id = 'breakfastName';
  breakfastName.innerText = 'Breakfast Menu';
  breakfastName.className = 'centered';

  oatmealContainer.className = 'menuContainer';
  oatmealImgContainer.className = 'menuImgContainer';
  oatmealImg.id = 'oatmealImg';
  oatmealImg.src = Oatmeal;
  oatmealImg.alt = 'A bowl of oatmeal with berries  and pecans.';
  oatmealImg.className = 'menuImage';
  oatmealTextContainer.className = 'menuTextContainer';
  oatmealName.innerText = 'Very Berry Oatmeal';
  oatmealName.className = 'menuName';
  oatmealText.innerText = 'Oatmeal topped with mixed berries and roasted pecans.';
  oatmealText.className = 'menuText';
  oatmealPrice.innerText = '$9.95';
  oatmealPrice.className = 'menuPrice';

  lunchName.id = 'lunchName';
  lunchName.innerText = 'Lunch Menu';
  lunchName.className = 'centered';

  saladContainer.className = 'menuContainer';
  saladImgContainer.className = 'menuImgContainer';
  saladImg.id = 'saladImg';
  saladImg.src = Salad;
  saladImg.alt = 'A vegetable salad with lettuce, tomato, and avocado.';
  saladImg.className = 'menuImage';
  saladTextContainer.className = 'menuTextContainer';
  saladName.innerText = 'Chickpea Garden Salad';
  saladName.className = 'menuName';
  saladText.innerText =
    'Lettuce, tomato, avocado, roasted sweet potato, chickpeas, purple cabbage, \
    radish, microgreens, and yellow bell pepper slices, topped with our special \
    garlic tahini sauce or our spicy cashew sauce.';
  saladText.className = 'menuText';
  saladPrice.innerText = '$11.95';
  saladPrice.className = 'menuPrice';

  springRollsContainer.className = 'menuContainer';
  springRollsImgContainer.className = 'menuImgContainer';
  springRollsImg.id = 'springRollsImg';
  springRollsImg.src = SpringRolls;
  springRollsImg.alt = 'A dish of spring rolls garnished with lettuce and mint.';
  springRollsImg.className = 'menuImage';
  springRollsTextContainer.className = 'menuTextContainer';
  springRollsName.innerText = 'Vegetable Spring Rolls';
  springRollsName.className = 'menuName';
  springRollsText.innerText =
    'Avocado, radish, purple cabbage, sprouts, carrots, and cucumber. \
    Comes with a peanut dipping sauce. Garnished with lettuce and mint.';
  springRollsText.className = 'menuText';
  springRollsPrice.innerText = '$11.95';
  springRollsPrice.className = 'menuPrice';

  dinnerName.id = 'dinnerName';
  dinnerName.innerText = 'Dinner Menu';
  dinnerName.className = 'centered';

  cauliflowerContainer.className = 'menuContainer';
  cauliflowerImgContainer.className = 'menuImgContainer';
  cauliflowerImg.id = 'cauliflowerImg';
  cauliflowerImg.src = Cauliflower;
  cauliflowerImg.alt = 'A plate of roasted cauliflower, lentils, and salad.';
  cauliflowerImg.className = 'menuImage';
  cauliflowerTextContainer.className = 'menuTextContainer';
  cauliflowerName.innerText = 'Roasted Cauliflower';
  cauliflowerName.className = 'menuName';
  cauliflowerText.innerText = 'Roasted cauliflower with brown lentils, green salad, and cashew sauce.';
  cauliflowerText.className = 'menuText';
  cauliflowerPrice.innerText = '$14.95';
  cauliflowerPrice.className = 'menuPrice';

  content.appendChild(breakfastName);

  content.appendChild(oatmealContainer);
  oatmealContainer.appendChild(oatmealImgContainer);
  oatmealImgContainer.appendChild(oatmealImg);
  oatmealContainer.appendChild(oatmealTextContainer);
  oatmealTextContainer.appendChild(oatmealName);
  oatmealTextContainer.appendChild(oatmealText);
  oatmealTextContainer.appendChild(oatmealPrice);

  content.appendChild(lunchName);

  content.appendChild(saladContainer);
  saladContainer.appendChild(saladImgContainer);
  saladImgContainer.appendChild(saladImg);
  saladContainer.appendChild(saladTextContainer);
  saladTextContainer.appendChild(saladName);
  saladTextContainer.appendChild(saladText);
  saladTextContainer.appendChild(saladPrice);

  content.appendChild(springRollsContainer);
  springRollsContainer.appendChild(springRollsImgContainer);
  springRollsImgContainer.appendChild(springRollsImg);
  springRollsContainer.appendChild(springRollsTextContainer);
  springRollsTextContainer.appendChild(springRollsName);
  springRollsTextContainer.appendChild(springRollsText);
  springRollsTextContainer.appendChild(springRollsPrice);

  content.appendChild(dinnerName);

  content.appendChild(cauliflowerContainer);
  cauliflowerContainer.appendChild(cauliflowerImgContainer);
  cauliflowerImgContainer.appendChild(cauliflowerImg);
  cauliflowerContainer.appendChild(cauliflowerTextContainer);
  cauliflowerTextContainer.appendChild(cauliflowerName);
  cauliflowerTextContainer.appendChild(cauliflowerText);
  cauliflowerTextContainer.appendChild(cauliflowerPrice);
}
