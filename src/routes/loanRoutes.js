const loanController = require('../controllers/loanController');

async function routes(fastify, options) {

  fastify.post('/', loanController.createLoan);
}

module.exports = routes;

