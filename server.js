require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const connectDB = require('./src/config/database');


const PORT = process.env.PORT || 3000;

connectDB();

fastify.get('/', async (request, reply) => {
  return { message: 'Library API is running!' };
});

fastify.register(require('./src/routes/authorRoutes'), { prefix: '/authors' });
fastify.register(require('./src/routes/bookRoutes'), { prefix: '/books' });
fastify.register(require('./src/routes/userRoutes'), { prefix: '/users' });
fastify.register(require('./src/routes/loanRoutes'), { prefix: '/loans' });

const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(` Server running on http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();