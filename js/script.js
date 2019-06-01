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

const scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 100
  });
}

next.addEventListener('click', function() {
  scrollTo(aboutUs);
});

aboutUSNav.addEventListener('click', function() {
  scrollTo(aboutUs);
});

offerNav.addEventListener('click', function() {
  scrollTo(offer);
});

homeNav.addEventListener('click', function() {
  scrollTo(home);
});

serviceNav.addEventListener('click', function() {
  scrollTo(service);
});
