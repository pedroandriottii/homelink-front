document.getElementById('hamburger-icon').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('navbar-links').classList.toggle('active');
});

const counterNumber = document.getElementById("counterNumber");
const yearsCounter = document.getElementById("yearsCounter");
const targetNumber = 125;
const targetYear = 6;
let currentNumber = 0;

const incrementCounter = () => {
  if (currentNumber < targetNumber) {
    currentNumber++;
    counterNumber.textContent = currentNumber;
  }
  if (currentNumber < targetYear) {
    yearsCounter.textContent = currentNumber;
  }
};

setInterval(incrementCounter, 50);