const bookController = require('../controllers/bookController');

async function routes(fastify, options) {

  fastify.post('/', bookController.createBook);

  fastify.get('/:id', bookController.getOneBook);
  fastify.get('/', bookController.getAllBooks);
}

module.exports = routes;