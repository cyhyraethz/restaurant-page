import { selectNavItem } from './helper.js';

export default function loadContactTab() {
  selectNavItem('contact');

  const content = document.getElementById('content');

  const contactName = document.createElement('h1');

  const contactContainer = document.createElement('div');

  const orderPhoneContainer = document.createElement('div');
  const orderPhoneLink = document.createElement('a');
  const orderPhoneIcon = document.createElement('i');
  const orderPhoneIconText = document.createElement('Span');
  const orderPhoneText = document.createElement('p');

  const dylanMailContainer = document.createElement('div');
  const dylanMailLink = document.createElement('a');
  const dylanMailIcon = document.createElement('i');
  const dylanMailIconText = document.createElement('Span');
  const dylanMailText = document.createElement('p');

  const arloMailContainer = document.createElement('div');
  const arloMailLink = document.createElement('a');
  const arloMailIcon = document.createElement('i');
  const arloMailIconText = document.createElement('Span');
  const arloMailText = document.createElement('p');

  const officePhoneContainer = document.createElement('div');
  const officePhoneLink = document.createElement('a');
  const officePhoneIcon = document.createElement('i');
  const officePhoneIconText = document.createElement('Span');
  const officePhoneText = document.createElement('p');

  contactName.id = 'contactName';
  contactName.innerText = 'Contact Us';
  contactName.className = 'centered';

  contactContainer.className = 'contactContainer';

  orderPhoneContainer.className = 'contactItemContainer';
  orderPhoneLink.href = 'tel:8315550189';
  orderPhoneIcon.className = 'fas fa-phone-alt';
  orderPhoneIcon.setAttribute('aria-hidden', 'true');
  orderPhoneIconText.className = 'sr-only';
  orderPhoneIconText.innerText = 'Call to Place an Order';
  orderPhoneText.innerText = 'Call to Place an Order: 831.555.0189';

  dylanMailContainer.className = 'contactItemContainer';
  dylanMailLink.href = 'mailto:dylan@thegreensproutrestaurant.com';
  dylanMailIcon.className = 'fas fa-envelope';
  dylanMailIcon.setAttribute('aria-hidden', 'true');
  dylanMailIconText.className = 'sr-only';
  dylanMailIconText.innerText = 'dylan@thegreensproutrestaurant.com';
  dylanMailText.innerText = 'dylan@thegreensproutrestaurant.com';

  arloMailContainer.className = 'contactItemContainer';
  arloMailLink.href = 'mailto:arlo@thegreensproutrestaurant.com';
  arloMailIcon.className = 'fas fa-envelope';
  arloMailIcon.setAttribute('aria-hidden', 'true');
  arloMailIconText.className = 'sr-only';
  arloMailIconText.innerText = 'arlo@thegreensproutrestaurant.com';
  arloMailText.innerText = 'arlo@thegreensproutrestaurant.com';

  officePhoneContainer.className = 'contactItemContainer';
  officePhoneLink.href = 'tel:8315550190';
  officePhoneIcon.className = 'fas fa-phone-alt';
  officePhoneIcon.setAttribute('aria-hidden', 'true');
  officePhoneIconText.className = 'sr-only';
  officePhoneIconText.innerText = 'Office Number';
  officePhoneText.innerText = 'Office Number: 831.555.0190';

  content.appendChild(contactName);

  content.appendChild(contactContainer);

  contactContainer.appendChild(orderPhoneContainer);
  orderPhoneContainer.appendChild(orderPhoneLink);
  orderPhoneLink.appendChild(orderPhoneIcon);
  orderPhoneContainer.appendChild(orderPhoneText);

  contactContainer.appendChild(dylanMailContainer);
  dylanMailContainer.appendChild(dylanMailLink);
  dylanMailLink.appendChild(dylanMailIcon);
  dylanMailContainer.appendChild(dylanMailText);

  contactContainer.appendChild(arloMailContainer);
  arloMailContainer.appendChild(arloMailLink);
  arloMailLink.appendChild(arloMailIcon);
  arloMailContainer.appendChild(arloMailText);

  contactContainer.appendChild(officePhoneContainer);
  officePhoneContainer.appendChild(officePhoneLink);
  officePhoneLink.appendChild(officePhoneIcon);
  officePhoneContainer.appendChild(officePhoneText);
}
