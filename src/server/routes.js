const postPredictHandler = require('../server/handler');
const getResultHandler = require('../services/getResult')
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 5000000
      }
    }
  }
]
 
module.exports = routes;