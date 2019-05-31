const { Query } = require('./Query')
const { GraphQLUpload } = require('graphql-upload')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
// const { admin } = require('./Mutation/admin')
// const { shop } = require('./Mutation/shop')
const { upload } = require('./Mutation/upload')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    // ...admin,
    // ...shop,
    ...upload,
  },
  Subscription,
  Upload: GraphQLUpload,
  AuthPayload,
  Node: {
    __resolveType() {
      return null;
    }
  }
}
