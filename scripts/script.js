const contacts = document.querySelector('.contacts');
const sazinies = document.querySelector('.sazinies');
const directions = document.querySelector('.directions');
const info = document.querySelector('.info');
const main = document.querySelector(".main");
const title = document.querySelector('#name');
const description = document.querySelector('#description');
const par = document.querySelector(".par");
const intro = document.querySelector('.intro');
const map = document.querySelector(".map");
const wolf = document.querySelector(".wolf");
const apple = document.querySelector(".apple");

sazinies.addEventListener('mouseover', () => {
  contacts.style.opacity = 1;
  wolf.style.opacity = 1;
});
sazinies.addEventListener('mouseleave', () => {
  contacts.style.opacity = 0;
  wolf.style.opacity = 0;
});


directions.addEventListener('click', () => {
  if (map.style.opacity == 0) {
    main.style.opacity = 0;
    map.style.opacity = 1;
    intro.style.opacity = 0;
  } else {
    main.style.opacity = 0;
    map.style.opacity = 0;
    intro.style.opacity = 1;
  }
});

directions.addEventListener('mouseover', () => {
  apple.style.opacity = 1;
});
directions.addEventListener('mouseleave', () => {
  apple.style.opacity = 0;
});


par.addEventListener('click', () => {
  if (main.style.opacity == 0) {
    main.style.opacity = 1;
    map.style.opacity = 0;
    intro.style.opacity = 0;
  } else {
    main.style.opacity = 0;
    map.style.opacity = 0;
    intro.style.opacity = 1;
  }
});