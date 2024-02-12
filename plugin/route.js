function routes (fastify, options, done) {
  fastify.get('/', async (req, res) => {
    return ({ hello: 'poojitha' })
  })

  done()
}

module.exports = routes
