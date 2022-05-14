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

const footer = document.querySelector('.footer');
const date = new Date();
const footerContent = `
<p>Copyright &copy ${date.getFullYear()}. All rights reserved.</p>
`;
footer.innerHTML = footerContent;
