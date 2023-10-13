console.log('JavaScript file successfully served and linked!');

const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener( 'click', function() {
  body.classList.toggle('darkmode');
  this.classList.toggle('btn-darkmode');
  if (this.textContent === 'Dark Mode') {
    this.textContent = 'Light Mode';
  } else {
    this.textContent = 'Dark Mode';
  }
});
