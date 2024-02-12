function routes (fastify, options, done) {
  fastify.get('/', async (req, res) => {
    res.send({ hello: 'world' })
  })

  done()
}

module.exports = routes
