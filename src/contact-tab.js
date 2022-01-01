import { selectNavItem } from './helper.js';

export default function loadContactTab() {
  selectNavItem('contact');

  const content = document.getElementById('content');

  const contactName = document.createElement('h1');

  const contactContainer = document.createElement('div');

  const contactList = ['orderPhone', 'dylanMail', 'arloMail', 'officePhone'];

  for (let contact of contactList) {
    window[contact + 'Container'] = document.createElement('div');
    window[contact + 'IconContainer'] = document.createElement('p');
    window[contact + 'IconLink'] = document.createElement('a');
    window[contact + 'Icon'] = document.createElement('i');
    window[contact + 'IconText'] = document.createElement('Span');
    window[contact + 'Text'] = document.createElement('p');
    window[contact + 'Container'].className = 'contactItemContainer';
    window[contact + 'Icon'].setAttribute('aria-hidden', 'true');
    window[contact + 'IconText'].className = 'sr-only';
  }

  contactName.id = 'contactName';
  contactName.innerText = 'Contact Us';
  contactName.className = 'centered';

  contactContainer.className = 'contactContainer';

  orderPhoneIconLink.href = 'tel:8315550189';
  orderPhoneIcon.className = 'fas fa-phone-alt';
  orderPhoneIconText.innerText = 'Call to Place an Order';
  orderPhoneText.innerText = 'Call to Place an Order: 831.555.0189';

  dylanMailIconLink.href = 'mailto:dylan@thegreensproutrestaurant.com';
  dylanMailIcon.className = 'fas fa-envelope';
  dylanMailIconText.innerText = 'dylan@thegreensproutrestaurant.com';
  dylanMailText.innerText = 'dylan@thegreensproutrestaurant.com';

  arloMailIconLink.href = 'mailto:arlo@thegreensproutrestaurant.com';
  arloMailIcon.className = 'fas fa-envelope';
  arloMailIconText.innerText = 'arlo@thegreensproutrestaurant.com';
  arloMailText.innerText = 'arlo@thegreensproutrestaurant.com';

  officePhoneIconLink.href = 'tel:8315550190';
  officePhoneIcon.className = 'fas fa-phone-alt';
  officePhoneIconText.innerText = 'Office Number';
  officePhoneText.innerText = 'Office Number: 831.555.0190';

  content.appendChild(contactName);

  content.appendChild(contactContainer);

  for (let contact of contactList) {
    contactContainer.appendChild(window[contact + 'Container']);
    window[contact + 'Container'].appendChild(window[contact + 'IconContainer']);
    window[contact + 'IconContainer'].appendChild(window[contact + 'IconLink']);
    window[contact + 'IconLink'].appendChild(window[contact + 'Icon']);
    window[contact + 'Container'].appendChild(window[contact + 'Text']);
  }
}
