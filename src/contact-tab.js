import { selectNavItem } from './helper.js';

export default function loadContactTab() {
  selectNavItem('contact');

  const content = document.getElementById('content');

  const contactName = document.createElement('h1');

  const contactContainer = document.createElement('div');

  const contactList = [
    {
      name: 'orderPhone',
      properties: {
        'IconLink.href': 'tel:8315550189',
        'Icon.className': 'fas fa-phone-alt',
        'IconText.innerText': 'Call to Place an Order',
        'Text.innerText': 'Call to Place an Order: 831.555.0189',
      },
    },
    {
      name: 'dylanMail',
      properties: {
        'IconLink.href': 'mailto:dylan@thegreensproutrestaurant.com',
        'Icon.className': 'fas fa-envelope',
        'IconText.innerText': 'dylan@thegreensproutrestaurant.com',
        'Text.innerText': 'dylan@thegreensproutrestaurant.com',
      },
    },
    {
      name: 'arloMail',
      properties: {
        'IconLink.href': 'mailto:arlo@thegreensproutrestaurant.com',
        'Icon.className': 'fas fa-envelope',
        'IconText.innerText': 'arlo@thegreensproutrestaurant.com',
        'Text.innerText': 'arlo@thegreensproutrestaurant.com',
      },
    },
    {
      name: 'officePhone',
      properties: {
        'IconLink.href': 'tel:8315550190',
        'Icon.className': 'fas fa-phone-alt',
        'IconText.innerText': 'Office Number',
        'Text.innerText': 'Office Number: 831.555.0190',
      },
    },
  ];

  contactName.innerText = 'Contact Us';
  contactName.className = 'centered';

  contactContainer.className = 'contactContainer';

  content.appendChild(contactName);

  content.appendChild(contactContainer);

  for (let contact of contactList) {
    window[contact.name + 'Container'] = document.createElement('div');
    window[contact.name + 'IconContainer'] = document.createElement('p');
    window[contact.name + 'IconLink'] = document.createElement('a');
    window[contact.name + 'Icon'] = document.createElement('i');
    window[contact.name + 'IconText'] = document.createElement('Span');
    window[contact.name + 'Text'] = document.createElement('p');
    window[contact.name + 'Container'].className = 'contactItemContainer';
    window[contact.name + 'Icon'].setAttribute('aria-hidden', 'true');
    window[contact.name + 'IconText'].className = 'sr-only';
    for (let property in contact.properties) {
      window[contact.name + property.split('.')[0]][property.split('.')[1]] = contact.properties[property];
    }
    contactContainer.appendChild(window[contact.name + 'Container']);
    window[contact.name + 'Container'].appendChild(window[contact.name + 'IconContainer']);
    window[contact.name + 'IconContainer'].appendChild(window[contact.name + 'IconLink']);
    window[contact.name + 'IconLink'].appendChild(window[contact.name + 'Icon']);
    window[contact.name + 'Container'].appendChild(window[contact.name + 'Text']);
  }
}
