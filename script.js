
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
document.addEventListener("DOMContentLoaded", () => {

 
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
  
  if (navToggle) {
      navToggle.addEventListener('click', () => {
          navMenu.classList.toggle('show-menu');
      });
  }
  
  if (navClose) {
      navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
      });
  }
  
  
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
      });
  });
  
  
  window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
          header.classList.add('scroll-header');
      } else {
          header.classList.remove('scroll-header');
      }
  });
  
 
  window.addEventListener('scroll', () => {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 200) {
          scrollUp.classList.add('show-scroll');
      } else {
          scrollUp.classList.remove('show-scroll');
      }
  });
  
  
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
          const sectionHeight = section.offsetHeight,
                sectionTop = section.offsetTop - 50,
                sectionId = section.getAttribute('id');
                
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
          } else {
              document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
          }
      });
  });
  
  
  const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
  });

  sr.reveal(`.home__header, .section__title`, {delay: 600});
  sr.reveal(`.home__footer`, {delay: 700});
 

});


const elements = {
  navMenu: document.getElementById('nav-menu'),
  navToggle: document.getElementById('nav-toggle'),
  navClose: document.getElementById('nav-close'),
  navLink: document.querySelectorAll('.nav__link'),
  header: document.getElementById('header'),
  scrollUp: document.getElementById('scroll-up'),
  sections: document.querySelectorAll('section[id]')
};


function toggleMenu() {
  elements.navMenu.classList.toggle('show-menu');
}

if (elements.navToggle) {
  elements.navToggle.addEventListener('click', toggleMenu);
}

if (elements.navClose) {
  elements.navClose.addEventListener('click', toggleMenu);
}


elements.navLink.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Change Header Background on Scroll
function checkHeaderScroll() {
  if (window.scrollY >= 50) {
      elements.header.classList.add('scroll-header');
  } else {
      elements.header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', checkHeaderScroll);


function checkScrollUp() {
  if (window.scrollY >= 200) {
      elements.scrollUp.classList.add('show-scroll');
  } else {
      elements.scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', checkScrollUp);


function highlightActiveLink() {
  const yOffset = window.pageYOffset;

  elements.sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute('id');

      const correspondingLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      
      if (yOffset > sectionTop && yOffset <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active-link');
      } else {
          correspondingLink.classList.remove('active-link');
      }
  });
}

window.addEventListener('scroll', highlightActiveLink);


const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400
});

sr.reveal('.home__header, .section__title', { delay: 600 });
sr.reveal('.home__footer', { delay: 700 });
sr.reveal('.home__img', { delay: 900, origin: 'top' });
sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', { origin: 'top', interval: 100 });
sr.reveal('.specs__data, .discount__animate', { origin: 'left', interval: 100 });
sr.reveal('.specs__img, .discount__img', { origin: 'right' });
sr.reveal('.case__img', { origin: 'top' });
sr.reveal('.case__data');

