import { selectNavItem } from './helper.js';
import { Cauliflower, Oatmeal, Salad, SpringRolls } from './images';

export default function loadMenuTab() {
  selectNavItem('menu');

  const content = document.getElementById('content');

  const menuList = [
    'breakfast',
    {
      name: 'oatmeal',
      properties: {
        'Img.src': Oatmeal,
        'Img.alt': 'A bowl of oatmeal with berries and pecans.',
        'Name.innerText': 'Very Berry Oatmeal',
        'Text.innerText': 'Oatmeal topped with mixed berries and roasted pecans.',
        'Price.innerText': '$9.95',
      },
    },
    'lunch',
    {
      name: 'salad',
      properties: {
        'Img.src': Salad,
        'Img.alt': 'A vegetable salad with lettuce, tomato, and avocado.',
        'Name.innerText': 'Chickpea Garden Salad',
        'Text.innerText':
          'Lettuce, tomato, avocado, roasted sweet potato, chickpeas, purple cabbage, \
          radish, microgreens, and yellow bell pepper slices, topped with our special \
          garlic tahini sauce or our spicy cashew sauce.',
        'Price.innerText': '$11.95',
      },
    },
    {
      name: 'springRolls',
      properties: {
        'Img.src': SpringRolls,
        'Img.alt': 'A dish of spring rolls garnished with lettuce and mint.',
        'Name.innerText': 'Vegetable Spring Rolls',
        'Text.innerText':
          'Avocado, radish, purple cabbage, sprouts, carrots, and cucumber. \
          Comes with a peanut dipping sauce. Garnished with lettuce and mint.',
        'Price.innerText': '$11.95',
      },
    },
    'dinner',
    {
      name: 'cauliflower',
      properties: {
        'Img.src': Cauliflower,
        'Img.alt': 'A plate of roasted cauliflower, lentils, and salad.',
        'Name.innerText': 'Roasted Cauliflower',
        'Text.innerText': 'Roasted cauliflower with brown lentils, green salad, and cashew sauce.',
        'Price.innerText': '$14.95',
      },
    },
  ];

  for (let item of menuList) {
    switch (item) {
      case 'breakfast':
      case 'lunch':
      case 'dinner':
        window[item + 'Name'] = document.createElement('h1');
        window[item + 'Name'].innerText = item[0].toUpperCase() + item.slice(1) + ' Menu';
        window[item + 'Name'].className = 'centered';
        content.appendChild(window[item + 'Name']);
        break;
      default:
        window[item.name + 'Container'] = document.createElement('div');
        window[item.name + 'ImgContainer'] = document.createElement('div');
        window[item.name + 'Img'] = document.createElement('img');
        window[item.name + 'TextContainer'] = document.createElement('div');
        window[item.name + 'Name'] = document.createElement('h2');
        window[item.name + 'Text'] = document.createElement('p');
        window[item.name + 'Price'] = document.createElement('p');
        content.appendChild(window[item.name + 'Container']);
        window[item.name + 'Container'].className = 'menuContainer';
        window[item.name + 'ImgContainer'].className = 'menuImgContainer';
        window[item.name + 'Img'].className = 'menuImage';
        window[item.name + 'TextContainer'].className = 'menuTextContainer';
        for (let property in item.properties) {
          window[item.name + property.split('.')[0]][property.split('.')[1]] = item.properties[property];
        }
        window[item.name + 'Container'].appendChild(window[item.name + 'ImgContainer']);
        window[item.name + 'ImgContainer'].appendChild(window[item.name + 'Img']);
        window[item.name + 'Container'].appendChild(window[item.name + 'TextContainer']);
        window[item.name + 'TextContainer'].appendChild(window[item.name + 'Name']);
        window[item.name + 'TextContainer'].appendChild(window[item.name + 'Text']);
        window[item.name + 'TextContainer'].appendChild(window[item.name + 'Price']);
    }
  }
}
