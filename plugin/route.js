const opts = {
  schema: {
    querystring: {
      id: { type: 'number' }
    },
    body: {
      type: 'object',
      properties: {
        postName: { type: 'string' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {

          id: { type: 'number' },
          name: { type: 'string' }

        }
      }
    }
  }
}

function routes (fastify, options, done) {
  fastify.decorate('addsum', (num1, num2) => { return num1 + num2 })

  fastify.get('/', async (req, res) => {
    const sum = fastify.addsum(1, 2)
    console.log(sum)
    return ({ hello: 'poojitha' })
  })

  fastify.post('/post/:id', opts, async (req, res) => {
    const data = req.params.id
    res.send({ id: data, name: 'poojitha' })
  })

  done()
}

module.exports = routes
