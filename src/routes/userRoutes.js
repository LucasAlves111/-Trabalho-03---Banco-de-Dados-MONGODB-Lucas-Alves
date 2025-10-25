const userController = require('../controllers/userController');

async function routes(fastify, options) {

  fastify.post('/', userController.createUser);


  fastify.get('/', userController.getAllUsers);
}

module.exports = routes;