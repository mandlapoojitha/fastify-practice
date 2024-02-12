const fastify = require('fastify')({ logger: true })

fastify.register(require('./plugin/route'), { prefix: '/v1' })

fastify.register(require('./plugin/route1'), { prefix: '/v2' })

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (error) {
    console.log(error)
    fastify.log.error(error)
  }
}

start()
