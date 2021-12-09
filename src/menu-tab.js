import { Cauliflower, Menu, Oatmeal, Salad, SpringRolls } from './images';

export default function loadMenuTab() {
  const menuTab = document.getElementById('menu');
  const content = document.getElementById('content');
  const active = document.getElementsByClassName('active');

  const menuImg = document.createElement('img');
  const cauliflowerImg = document.createElement('img');
  const oatmealImg = document.createElement('img');
  const saladImg = document.createElement('img');
  const springRollsImg = document.createElement('img');

  for (let e of active) {
    e.classList.remove('active');
  }
  content.innerHTML = '';
  menuTab.className = 'active';

  menuImg.id = 'menuImg';
  menuImg.src = Menu;
  menuImg.alt = 'People enjoying food in the dining area';
  cauliflowerImg.id = 'cauliflowerImg';
  cauliflowerImg.src = Cauliflower;
  cauliflowerImg.alt = 'People enjoying food in the dining area';
  oatmealImg.id = 'oatmealImg';
  oatmealImg.src = Oatmeal;
  oatmealImg.alt = 'People enjoying food in the dining area';
  saladImg.id = 'saladImg';
  saladImg.src = Salad;
  saladImg.alt = 'People enjoying food in the dining area';
  springRollsImg.id = 'springRollsImg';
  springRollsImg.src = SpringRolls;
  springRollsImg.alt = 'People enjoying food in the dining area';

  content.appendChild(menuImg);
  content.appendChild(cauliflowerImg);
  content.appendChild(oatmealImg);
  content.appendChild(saladImg);
  content.appendChild(springRollsImg);
}
