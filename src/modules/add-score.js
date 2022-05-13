import getScores from './get-scores.js';

const user = document.getElementById('userInput');
const score = document.getElementById('scoreInput');

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XTo7fg7oWPnx9JO7IbQr/scores/';

const addScore = async () => {
  if (user.value !== '' || score.value !== '') {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ user: user.value, score: score.value }),
      });
      if (response.ok) {
        user.value = '';
        score.value = '';
        const res = response.json();
        getScores();
        return res;
      }
    } catch (err) {
      throw new Error('Request failed: ', err);
    }
    return true;
  }
  return false;
};

export default addScore;