export default function loadTopNav() {
  const navigation = document.getElementById('navigation');

  const topNav = document.createElement('nav');
  const navList = document.createElement('ul');

  const tabs = ['home', 'menu', 'contact', 'icon'];

  topNav.id = 'topNav';

  topNav.appendChild(navList);
  navigation.appendChild(topNav);

  for (let tab of tabs) {
    window[tab] = document.createElement('a');
    window[tab].id = tab;
    if (tab == 'icon') {
      window[tab + 'Symbol'] = document.createElement('i');
      window[tab + 'Text'] = document.createElement('span');
      window[tab + 'Symbol'].className = 'fa fa-bars';
      window[tab + 'Symbol'].setAttribute('aria-hidden', 'true');
      window[tab + 'Text'].className = 'sr-only';
      window[tab + 'Text'].innerText = 'Navigation Links';
      window[tab].href = 'javascript:void(0);';
      window[tab].appendChild(window[tab + 'Symbol']);
      window[tab].appendChild(window[tab + 'Text']);
    } else {
      window[tab].href = '#' + tab;
      window[tab].innerText = tab[0].toUpperCase() + tab.slice(1);
    }
    const li = document.createElement('li');
    li.appendChild(window[tab]);
    navList.appendChild(li);
  }
}
