const header = document.createElement('header');
header.className = 'header';

const sectionLeft = document.createElement('section');
sectionLeft.className = 'header__left';

const divLogo = document.createElement('div');
divLogo.className = 'header__logo';
const imgLogo = document.createElement('img');
imgLogo.src = 'img/IconoH.png';
imgLogo.alt = 'Logo';
divLogo.appendChild(imgLogo);

const titleLink = document.createElement('a');
titleLink.href = 'Landing.html';
titleLink.className = 'header__title';
titleLink.textContent = 'PLANT DEFENDERS';

const ulNav = document.createElement('ul');
ulNav.className = 'header__nav';

const liDropdown = document.createElement('li');
liDropdown.className = 'header__nav-item';
const dropdown = document.createElement('div');
dropdown.className = 'dropdown';
const dropdownButton = document.createElement('button');
dropdownButton.className = 'dropdown__button';
dropdownButton.textContent = 'About Us';
const dropdownContent = document.createElement('div');
dropdownContent.className = 'dropdown__content';
const aboutUsImg = document.createElement('img');
aboutUsImg.src = 'img/Sth.png';
aboutUsImg.alt = 'About Us Image';
const aboutUsTitle = document.createElement('h1');
aboutUsTitle.textContent = '-Mastermind-';
const aboutUsText = document.createElement('p');
aboutUsText.textContent = `Meet the creative force behind this page: Our fearless creator, an inquisitive orange cat with an unyielding passion for Plants vs. Zombies...`; // Texto abreviado por motivos de espacio

dropdownContent.appendChild(aboutUsImg);
dropdownContent.appendChild(aboutUsTitle);
dropdownContent.appendChild(aboutUsText);
dropdown.appendChild(dropdownButton);
dropdown.appendChild(dropdownContent);
liDropdown.appendChild(dropdown);

const liContact = document.createElement('li');
liContact.className = 'header__nav-item';
const aContact = document.createElement('a');
aContact.href = 'Contactus.html';
aContact.textContent = 'Contact Us';
liContact.appendChild(aContact);


sectionLeft.appendChild(divLogo);
sectionLeft.appendChild(titleLink);
sectionLeft.appendChild(ulNav);
ulNav.appendChild(liDropdown);
ulNav.appendChild(liContact);


header.appendChild(sectionLeft);


document.body.appendChild(header);

