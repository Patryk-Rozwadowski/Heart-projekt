const aboutUs = document.querySelector('.about-us');
const offer = document.querySelector('.offer');
const description = document.querySelector('.description');
const home = document.querySelector('.hero-container');
const next = document.getElementById('next-section');
const service = document.querySelector('.description');
// MENU
const aboutUSNav = document.getElementById('about-us');
const offerNav = document.getElementById('offer');
const homeNav = document.getElementById('home');
const serviceNav = document.getElementById('service');


// form btn
const contactButton = document.getElementById('contact-show');

contactButton.addEventListener('click', () => {
  document.querySelector('.form-container').classList.toggle('show');

})

const changeOption = () => {
  if (contactButton.innerHTML === 'Schowaj') {
    contactButton.textContent = 'Pokaż';
  } else {
    contactButton.textContent = 'Schowaj';
  }
}
const scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 100
  });
}

next.addEventListener('click', () => {
  next.stopPropagation();
  scrollTo(aboutUs);
});

aboutUSNav.addEventListener('click', () => {
  scrollTo(aboutUs);
});

offerNav.addEventListener('click', () => {
  scrollTo(offer);
});

homeNav.addEventListener('click',  () => {
  scrollTo(home);
});

serviceNav.addEventListener('click',  () => {
  scrollTo(service);
});
