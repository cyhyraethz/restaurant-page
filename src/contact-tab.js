import { selectNavItem } from './helper.js';

export default function loadContactTab() {
  selectNavItem('contact');

  const content = document.getElementById('content');

  const contactName = document.createElement('h1');

  const contactContainer = document.createElement('div');

  const orderPhoneContainer = document.createElement('div');
  const orderPhoneIconContainer = document.createElement('div');
  const orderPhoneIconLink = document.createElement('a');
  const orderPhoneIcon = document.createElement('i');
  const orderPhoneIconText = document.createElement('Span');
  const orderPhoneText = document.createElement('p');

  const dylanMailContainer = document.createElement('div');
  const dylanMailIconContainer = document.createElement('div');
  const dylanMailIconLink = document.createElement('a');
  const dylanMailIcon = document.createElement('i');
  const dylanMailIconText = document.createElement('Span');
  const dylanMailText = document.createElement('p');

  const arloMailContainer = document.createElement('div');
  const arloMailIconContainer = document.createElement('div');
  const arloMailIconLink = document.createElement('a');
  const arloMailIcon = document.createElement('i');
  const arloMailIconText = document.createElement('Span');
  const arloMailText = document.createElement('p');

  const officePhoneContainer = document.createElement('div');
  const officePhoneIconContainer = document.createElement('div');
  const officePhoneIconLink = document.createElement('a');
  const officePhoneIcon = document.createElement('i');
  const officePhoneIconText = document.createElement('Span');
  const officePhoneText = document.createElement('p');

  contactName.id = 'contactName';
  contactName.innerText = 'Contact Us';
  contactName.className = 'centered';

  contactContainer.className = 'contactContainer';

  orderPhoneContainer.className = 'contactItemContainer';
  orderPhoneIconLink.href = 'tel:8315550189';
  orderPhoneIcon.className = 'fas fa-phone-alt';
  orderPhoneIcon.setAttribute('aria-hidden', 'true');
  orderPhoneIconText.className = 'sr-only';
  orderPhoneIconText.innerText = 'Call to Place an Order';
  orderPhoneText.innerText = 'Call to Place an Order: 831.555.0189';

  dylanMailContainer.className = 'contactItemContainer';
  dylanMailIconLink.href = 'mailto:dylan@thegreensproutrestaurant.com';
  dylanMailIcon.className = 'fas fa-envelope';
  dylanMailIcon.setAttribute('aria-hidden', 'true');
  dylanMailIconText.className = 'sr-only';
  dylanMailIconText.innerText = 'dylan@thegreensproutrestaurant.com';
  dylanMailText.innerText = 'dylan@thegreensproutrestaurant.com';

  arloMailContainer.className = 'contactItemContainer';
  arloMailIconLink.href = 'mailto:arlo@thegreensproutrestaurant.com';
  arloMailIcon.className = 'fas fa-envelope';
  arloMailIcon.setAttribute('aria-hidden', 'true');
  arloMailIconText.className = 'sr-only';
  arloMailIconText.innerText = 'arlo@thegreensproutrestaurant.com';
  arloMailText.innerText = 'arlo@thegreensproutrestaurant.com';

  officePhoneContainer.className = 'contactItemContainer';
  officePhoneIconLink.href = 'tel:8315550190';
  officePhoneIcon.className = 'fas fa-phone-alt';
  officePhoneIcon.setAttribute('aria-hidden', 'true');
  officePhoneIconText.className = 'sr-only';
  officePhoneIconText.innerText = 'Office Number';
  officePhoneText.innerText = 'Office Number: 831.555.0190';

  content.appendChild(contactName);

  content.appendChild(contactContainer);

  contactContainer.appendChild(orderPhoneContainer);
  orderPhoneContainer.appendChild(orderPhoneIconContainer);
  orderPhoneIconContainer.appendChild(orderPhoneIconLink);
  orderPhoneIconLink.appendChild(orderPhoneIcon);
  orderPhoneContainer.appendChild(orderPhoneText);

  contactContainer.appendChild(dylanMailContainer);
  dylanMailContainer.appendChild(dylanMailIconContainer);
  dylanMailIconContainer.appendChild(dylanMailIconLink);
  dylanMailIconLink.appendChild(dylanMailIcon);
  dylanMailContainer.appendChild(dylanMailText);

  contactContainer.appendChild(arloMailContainer);
  arloMailContainer.appendChild(arloMailIconContainer);
  arloMailIconContainer.appendChild(arloMailIconLink);
  arloMailIconLink.appendChild(arloMailIcon);
  arloMailContainer.appendChild(arloMailText);

  contactContainer.appendChild(officePhoneContainer);
  officePhoneContainer.appendChild(officePhoneIconContainer);
  officePhoneIconContainer.appendChild(officePhoneIconLink);
  officePhoneIconLink.appendChild(officePhoneIcon);
  officePhoneContainer.appendChild(officePhoneText);
}
