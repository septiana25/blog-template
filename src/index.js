import './styles/main.css';

const hamburgerButtonElement = document.querySelector('#menu');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const heroElement = document.querySelector('.hero');
 
hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});
 
heroElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
  })

mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})