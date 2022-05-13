import './style.css';
import getScores from './modules/get-scores.js';
import addScore from './modules/add-score.js';

const resetBtn = document.querySelector('.reset-btn');
const submitBtn = document.querySelector('.submit-btn');

getScores();

resetBtn.addEventListener('click', () => {
  getScores();
});

submitBtn.addEventListener('click', () => {
  addScore();
});
