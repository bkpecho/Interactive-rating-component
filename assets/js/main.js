const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');

const rating = [one, two, three, four, five];

rating.forEach(function changeColor(number) {
  number.addEventListener('click', function () {
    rating.forEach(function resetColor(number) {
      number.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});

document.querySelector('button').addEventListener('click', showThankYou);

let selectedValue;

rating.forEach(function (number) {
  number.addEventListener('click', function () {
    rating.forEach(function (number) {
      number.classList.remove('selected');
    });
    this.classList.add('selected');
    selectedValue = this.textContent;
  });
});

function showThankYou() {
  if (selectedValue) {
    const ratingComponent = document.querySelector('.rating');
    const thankYouComponent = document.querySelector('.thank-you');
    const showSelectedValue = document.querySelector('#rating-number');

    ratingComponent.style.display = 'none';
    thankYouComponent.style.display = 'flex';
    showSelectedValue.textContent = ` ${selectedValue} `;
  } else {
    const button = document.querySelector('button');
    button.classList.add('wiggle');
    button.addEventListener('animationend', function () {
      button.classList.remove('wiggle');
    });
  }
}
