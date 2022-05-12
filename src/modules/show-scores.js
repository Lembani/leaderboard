import scores from './scores.js';

const scoresContainer = document.querySelector('.scores');

const showScores = () => {
  scores.forEach((v, index) => {
    let scoreList = '';
    if (index % 2 === 0) {
      scoreList = `
      <li class="score-item" id="${index}">${v.name}: ${v.score}</li>
  `;
    } else {
      scoreList = `
      <li class="score-item shade" id="${index}">${v.name}: ${v.score}</li>
  `;
    }
    scoresContainer.innerHTML += scoreList;
  });

  return scoresContainer;
};

export default showScores;