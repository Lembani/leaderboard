import showScores from './show-scores.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XTo7fg7oWPnx9JO7IbQr/scores/';

const getScores = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    showScores(data.result);
  } catch (err) {
    throw new Error('Request error: ', err);
  }
};

export default getScores;
