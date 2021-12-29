export default function loadTopNav() {
  const navigation = document.getElementById('navigation');

  const topNav = document.createElement('nav');
  const navList = document.createElement('ul');

  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  const icon = document.createElement('a');
  const bars = document.createElement('i');
  const barsText = document.createElement('span');

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

  menu.id = 'menu';
  menu.href = '#menu';
  menu.innerText = 'Menu';

  contact.id = 'contact';
  contact.href = '#contact';
  contact.innerText = 'Contact';

  icon.href = 'javascript:void(0);';
  icon.addEventListener('click', displayNav);
  icon.className = 'icon';

  bars.className = 'fa fa-bars';
  bars.setAttribute('aria-hidden', 'true');

  barsText.className = 'sr-only';
  barsText.innerText = 'Navigation Links';

  icon.appendChild(bars);
  icon.appendChild(barsText);

  const anchor = [home, menu, contact, icon];

  for (let i = 0; i < anchor.length; i++) {
    const li = document.createElement('li');
    li.appendChild(anchor[i]);
    navList.appendChild(li);
  }

  topNav.id = 'topNav';
  navList.id = 'navList';

  topNav.appendChild(navList);
  navigation.appendChild(topNav);
}
