import { selectNavItem } from './helper.js';

export default function loadContactTab() {
  selectNavItem('contact');

  const content = document.getElementById('content');

  const contactName = document.createElement('h1');

  const contactContainer = document.createElement('div');

  const orderPhoneContainer = document.createElement('div');
  const orderPhoneText = document.createElement('p');
  const orderPhoneIcon = document.createElement('i');

  const officePhoneContainer = document.createElement('div');
  const officePhoneText = document.createElement('p');
  const officePhoneIcon = document.createElement('i');

  const arloMailContainer = document.createElement('div');
  const arloMailText = document.createElement('p');
  const arloMailIcon = document.createElement('i');

  const dylanMailContainer = document.createElement('div');
  const dylanMailText = document.createElement('p');
  const dylanMailIcon = document.createElement('i');

  contactName.id = 'contactName';
  contactName.innerText = 'Contact Us';
  contactName.className = 'centered';

  contactContainer.className = 'contactContainer';

  orderPhoneContainer.className = 'contactItemContainer';
  orderPhoneIcon.className = 'fas fa-phone-alt';
  orderPhoneIcon.setAttribute('aria-hidden', 'true');
  orderPhoneText.innerText = 'Call to Place an Order: 831.555.0189';

  dylanMailContainer.className = 'contactItemContainer';
  dylanMailIcon.className = 'fas fa-envelope';
  dylanMailIcon.setAttribute('aria-hidden', 'true');
  dylanMailText.innerText = 'dylan@thegreensproutrestaurant.com';

  arloMailContainer.className = 'contactItemContainer';
  arloMailIcon.className = 'fas fa-envelope';
  arloMailIcon.setAttribute('aria-hidden', 'true');
  arloMailText.innerText = 'arlo@thegreensproutrestaurant.com';

  officePhoneContainer.className = 'contactItemContainer';
  officePhoneIcon.className = 'fas fa-phone-alt';
  officePhoneIcon.setAttribute('aria-hidden', 'true');
  officePhoneText.innerText = 'Office Number: 831.555.0190';

  content.appendChild(contactName);

  content.appendChild(contactContainer);

  contactContainer.appendChild(orderPhoneContainer);
  orderPhoneContainer.appendChild(orderPhoneIcon);
  orderPhoneContainer.appendChild(orderPhoneText);

  contactContainer.appendChild(dylanMailContainer);
  dylanMailContainer.appendChild(dylanMailIcon);
  dylanMailContainer.appendChild(dylanMailText);

  contactContainer.appendChild(arloMailContainer);
  arloMailContainer.appendChild(arloMailIcon);
  arloMailContainer.appendChild(arloMailText);

  contactContainer.appendChild(officePhoneContainer);
  officePhoneContainer.appendChild(officePhoneIcon);
  officePhoneContainer.appendChild(officePhoneText);
}
