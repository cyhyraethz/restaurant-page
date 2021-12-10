import { Cauliflower, Menu, Oatmeal, Salad, SpringRolls } from './images';

export default function loadMenuTab() {
  const menuTab = document.getElementById('menu');
  const content = document.getElementById('content');
  const active = document.getElementsByClassName('active');

  const menuName = document.createElement('h1');
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

  menuName.id = 'menuName';
  menuName.innerText = 'Menu';
  menuImg.id = 'menuImg';
  menuImg.src = Menu;
  menuImg.alt = 'A spread of various food dishes.';
  cauliflowerImg.id = 'cauliflowerImg';
  cauliflowerImg.src = Cauliflower;
  cauliflowerImg.alt = 'A plate of roasted cauliflower, lentils, and salad.';
  oatmealImg.id = 'oatmealImg';
  oatmealImg.src = Oatmeal;
  oatmealImg.alt = 'A bowl of oatmeal with berries  and pecans.';
  saladImg.id = 'saladImg';
  saladImg.src = Salad;
  saladImg.alt = 'A vegetable salad with lettuce, tomato, and avocado.';
  springRollsImg.id = 'springRollsImg';
  springRollsImg.src = SpringRolls;
  springRollsImg.alt = 'A dish of spring rolls garnished with lettuce and mint.';

  menuName.classList.add('centered');

  content.appendChild(menuName);
  content.appendChild(menuImg);
  content.appendChild(cauliflowerImg);
  content.appendChild(oatmealImg);
  content.appendChild(saladImg);
  content.appendChild(springRollsImg);
}
