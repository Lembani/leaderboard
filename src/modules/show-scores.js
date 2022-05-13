const scoresContainer = document.querySelector('.scores');

const showScores = (scores) => {
  scoresContainer.innerHTML = '';
  if (scores.length !== 0) {
    scores.forEach((v, index) => {
      let scoreList = '';
      if (index % 2 === 0) {
        scoreList = `
        <li class="score-item" id="${index}">${v.user}: ${v.score}</li>
    `;
      } else {
        scoreList = `
        <li class="score-item shade" id="${index}">${v.user}: ${v.score}</li>
    `;
      }
      scoresContainer.innerHTML += scoreList;
    });
  } else {
    scoresContainer.innerHTML = '<li class="score-item">No scores at the moment.</li>';
  }
  return scoresContainer;
};

export default showScores;