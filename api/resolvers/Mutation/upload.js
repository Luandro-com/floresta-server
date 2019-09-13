const { processUpload } = require('../../services/upload')

const upload = {
  async uploadFile (parent, { file }, ctx, info) {
    return await processUpload(await file, ctx)
  },

  async uploadFiles (parent, { files }, ctx, info) {
    console.log('files', files)
    return Promise.all(files.map(file => processUpload(file, ctx)))
  },

  async renameFile (parent, { id, name }, ctx, info) {
    return ctx.db.mutation.updateFile({ data: { name }, where: { id } }, info)
  },

  async deleteFile (parent, { id }, ctx, info) {
    return await ctx.db.mutation.deleteFile({ where: { id } }, info)
  }
}

module.exports = {
  upload
}
