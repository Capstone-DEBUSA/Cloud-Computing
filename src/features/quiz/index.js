const questions = require('./questions')

async function getQuestion(label) {
    if (questions[label]) {
        const questionPool = questions[label];
        const randomIndex = Math.floor(Math.random() * questionPool.length);
        const { question, options } = questionPool[randomIndex];
        return { question, options };
    } else {
        return null;
    }
};

module.exports = getQuestion;