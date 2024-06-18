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
        allow: 'application/json',
        parse: true,
        output: 'data'
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