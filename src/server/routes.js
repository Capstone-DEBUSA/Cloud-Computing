const { postPredictHandler, 
        submitAnswerHandler,
        /*getRecipesHandler*/ } = require('../server/handler');
 
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
  },
  {
    path: '/submit',
    method: 'POST',
    handler: submitAnswerHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      }
    }
  },
  /*
  {
    path: '/recipes/{label}',
    method: 'GET',
    handler: getRecipesHandler
  }
  */
]
 
module.exports = routes;