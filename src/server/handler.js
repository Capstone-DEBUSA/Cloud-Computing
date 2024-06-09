const { predictClassification, getWikipedia } = require('../services/inferenceService');
const storeData = require('../services/storeData');
const crypto = require('crypto');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;
 
  const { label, confidenceScore, manfaat } = await predictClassification(model, image);
  const { description, url } = await getWikipedia(label);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
 
  const data = {
    "id": id,
    "result": label,
    "description": description,
    "manfaat": manfaat,
    "url": url,
    "createdAt": createdAt,
    "confidenceScore": confidenceScore,
  }

  const response = h.response({
    status: 'success',
    message: confidenceScore > 99.50 ? 'Model is predicted successfully' : 'Model is predicted successfully but under threshold',
    data
  })
  response.code(201);
  await storeData(id, data);
  return response;
}
 
module.exports = postPredictHandler;
