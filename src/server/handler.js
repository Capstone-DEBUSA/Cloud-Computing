const { predictClassification, getWikipedia } = require('../services/inferenceService');
const crypto = require('crypto');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;
 
  const { label, confidenceScore } = await predictClassification(model, image);
  const { description, url } = await getWikipedia(label);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
 
  const data = {
    "id": id,
    "result": label,
    "description": description,
    "url": url,
    "createdAt": createdAt,
    "confidenceScore": confidenceScore
  }

  const response = h.response({
    status: 'success',
    message: confidenceScore > 99.50 ? 'Model is predicted successfully' : 'Model is predicted successfully but under threshold',
    data
  })
  response.code(201);
  return response;
}

async function getHistoriesHandler(_request, h) {
    histories = await getHistories()
    const response = h.response({
        status: 'success',
        data: histories
    })
    return response;
}
 
module.exports = {postPredictHandler, getHistoriesHandler};