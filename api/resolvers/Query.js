const {
  getUserId
} = require('../services/auth/utils')
// const fetch = require('node-fetch')

const Query = {
  async content(parent, args, ctx, info) {
    const res = await ctx.db.query.contents({}, info)
    return res[0]
  },
  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({
      where: {
        isPublished: true
      }
    }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({
      where
    }, info)
  },

  post(parent, {
    id
  }, ctx, info) {
    return ctx.db.query.post({
      where: {
        id
      }
    }, info)
  },

  async admins(parent, args, ctx, info) {
    return await ctx.db.query.users({ where: { role_in: ['ADMIN', 'EDITOR'] } }, info)
  },

  user(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({
      where: {
        id
      }
    }, info)
  },
  // projectCategories(parent, args, ctx, info) {
  //   return ctx.db.query.projectCategories(null, info)
  // },

  project(parent, args, ctx, info) {
    const { id, slug} = args
    if (id) {
      return ctx.db.query.project({ where: { id }}, info)
    } else if (slug) {
      return ctx.db.query.project({ where: { slug }}, info)
    }
  },

  projects(parent, args, ctx, info) {
    const { id, slug, category, subCategory } = args
    if (category) {
      return ctx.db.query.projects({ where: { category: { slug: category } }}, info)
    } else if (subCategory) {
      return ctx.db.query.projects({ where: { subCategories: { slug: subCategory } }}, info)
    }
    return ctx.db.query.projects(null, info)
  },
}

module.exports = {
  Query
}