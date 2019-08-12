const { rule, shield, and, or, not } = require("graphql-shield")
const { getUserId } = require("./utils")

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return getUserId(ctx) !== null
})

const isAdmin = rule()(async (parent, args, ctx, info) => {
  const id = getUserId(ctx)
  const user = await ctx.db.query.user({ where: { id } })
  console.log("=========================================>", user.role)
  return user.role === "ADMIN"
})

const isEditor = rule()(async (parent, args, ctx, info) => {
  const id = getUserId(ctx)
  const user = await ctx.db.query.user({ where: { id } })
  return user.role === "EDITOR"
})

module.exports = shield(
  {
    Query: {
      user: and(isAuthenticated),
      users: or(isEditor, isAdmin),
      drafts: and(isAuthenticated, or(isAdmin, isEditor)),
      admins: and(isAuthenticated, isAdmin)
    },
    Mutation: {
      updateUser: and(isAuthenticated),
      resetPassword: and(isAuthenticated),
      login: not(isAuthenticated),
      updateUserRole: and(isAuthenticated, isAdmin),
      saveAdmin: and(isAuthenticated, isAdmin),
      createDraft: or(isEditor, isAdmin),
      publish: or(isEditor, isAdmin),
      deletePost: or(isEditor, isAdmin),
      updateContent: or(isEditor, isAdmin),
      saveProject: or(isEditor, isAdmin),
      saveCategory: or(isEditor, isAdmin),
      saveProjectTag: or(isEditor, isAdmin),
      saveVillage: or(isEditor, isAdmin),
      removeProject: or(isEditor, isAdmin),
      removeProjectTag: or(isEditor, isAdmin),
      removeVillage: or(isEditor, isAdmin),
      // uploadFile: or(isEditor, isAdmin),
      uploadFiles: or(isEditor, isAdmin),
      renameFile: or(isEditor, isAdmin),
      deleteFile: or(isEditor, isAdmin),
      saveNews: or(isEditor, isAdmin),
      removeNews: or(isEditor, isAdmin)
    }
  },
  {
    allowExternalErrors: true
  }
)
