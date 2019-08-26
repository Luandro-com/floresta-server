process.env.NODE_ENV !== 'production' && require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const cors = require('cors')
const { Prisma } = require('prisma-binding')
// const { sentry } = require('graphql-middleware-sentry')
// const { forward } = require('graphql-middleware-forward-binding')
const permissions = require('./services/auth/permissions')

const db = new Prisma({
  typeDefs: 'api/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  debug: process.env.NODE_ENV !== 'production', // log all GraphQL queries & mutations sent to the Prisma API
  secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml` (value set in `.env`)
})

const server = new GraphQLServer({
  middlewares: [
    process.env.SENTRY_DSN
      ? sentry({
        dsn: process.env.SENTRY_DSN
      })
      : {},
    permissions
  ],
  typeDefs: './api/schema.graphql',
  resolvers: require('./resolvers'),
  context: req => ({
    ...req,
    db
  }),
  uploads: { maxFileSize: 10000000, maxFiles: 10 }
})

var whitelist = [
  'https://floresta-admin.encenar.tk',
  'https://floresta-web.encenar.tk'
]
var corsOptions = {
  origin: function (origin, callback) {
    if (process.env.NODE_ENV === 'production') {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    } else {
      callback(null, true)
    }
  }
}

server.use(cors(corsOptions))

server.start(() => console.log('Server is running on http://localhost:4000'))

/* Deploying with Now v2 */
// module.exports = server;
