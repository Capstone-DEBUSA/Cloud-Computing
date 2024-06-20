const predictClassification = require('../services/postPrediction');
const getWikipedia = require('../services/wikipediaApi');
const storeData = require('../services/storeData');
const getQuestion = require('../features/quiz/index');
const questions = require('../features/quiz/questions');
// const recipes = require('../features/recipes/recipeList');
const crypto = require('crypto');
const { request } = require('http');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;
 
  const { label, confidenceScore, manfaat } = await predictClassification(model, image);
  const { description, url } = await getWikipedia(label);
  const quiz = await getQuestion(label);
  const id = crypto.randomUUID();
  const createdAt = new Date();

  const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDate = createdAt.toLocaleDateString('en-GB', options);
  const formattedDateTime = `${formattedDate}`;
 
  const data = {
    "id": id,
    "result": label,
    "description": description,
    "benefit": manfaat,
    "url": url,
    "createdAt": formattedDateTime,
    "quiz": quiz
  }

  const response = h.response({
    status: 'success',
    message: confidenceScore > 99.50 ? 'Model is predicted successfully' : 'Model is predicted successfully but under threshold',
    data
  })
  response.code(201);
  await storeData(id, data);
  return response;
};

const submitAnswerHandler = (request, h) => {
  const { question, option } = request.payload;

  for (const label in questions) {
    const questionPool = questions[label];
    const foundQuestion = questionPool.find(q => q.question === question);

    if (foundQuestion) {
      const isCorrect = foundQuestion.answer === option;
      
      if (isCorrect) {
        responseExplanation = foundQuestion.explanation;
        return h.response({
          status: 'success',
          message: "Selamat! Kamu menjawab dengan benar!",
          "explanation": responseExplanation
        }).code(200);
      }
      return h.response ({
        status: 'fail',
        message: "Yah, jawaban salah. Ayo coba lagi!"
      }).code(200);
    }
  }

  return h.response({
    ErrorEvent: "Question not found."
  }).code(404);
};
/*
const getRecipesHandler = (request, h) => {
  const { label } = request.params;
  const selectedRecipes = recipes[label];

  if (selectedRecipes) {
    return h.response(recipe).code(200);
  }

  return h.response({
    error: "Recipe not found."
  }).code(404);
}
*/

module.exports = { postPredictHandler, submitAnswerHandler, /*getRecipesHandler*/ };