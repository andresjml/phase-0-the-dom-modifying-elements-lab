// Write your code here!
const main = document.querySelector('main');
main.remove();

const h1 = document.createElement('h1');
h1.id ='victory';
document.body.appendChild(h1);

const newHeader = document.getElementById('victory');
newHeader.innerHTML = 'Andres is the champion';

