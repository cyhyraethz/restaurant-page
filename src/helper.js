const selectNavItem = (tab) => {
  const selected = document.getElementById(tab);
  const topNav = document.getElementById('topNav');
  const content = document.getElementById('content');
  const active = document.getElementsByClassName('active');
  for (let element of active) {
    element.classList.remove('active');
  }
  content.innerHTML = '';
  selected.className = 'active';
  topNav.classList.remove('responsive');
};

export { selectNavItem };
