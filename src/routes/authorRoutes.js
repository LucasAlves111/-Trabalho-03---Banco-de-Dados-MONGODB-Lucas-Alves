const authorController = require('../controllers/authorController');

async function routes(fastify, options) {

  fastify.post('/', authorController.createAuthor);


  fastify.get('/', authorController.getAllAuthors);
}

module.exports = routes;