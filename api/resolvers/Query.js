const { getUserId } = require("../services/auth/utils")
// const fetch = require('node-fetch')

const Query = {
  async content(parent, args, ctx, info) {
    const res = await ctx.db.query.contents({}, info)
    return res[0]
  },
  posts(parent, args, ctx, info) {
    const { page } = args
    const pagination = page
      ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
      : {}
    const input = Object.assign(
      pagination,
      { orderBy: "createdAt_DESC" },
      { where: { isPublished: true } }
    )
    return ctx.db.query.posts(input, info)
  },

  drafts(parent, args, ctx, info) {
    const { page } = args
    const pagination = page
      ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
      : {}
    const input = Object.assign(
      pagination,
      { orderBy: "createdAt_DESC" },
      { where: { isPublished: false } }
    )
    return ctx.db.query.posts(input, info)
  },

  post(parent, { id }, ctx, info) {
    return ctx.db.query.post(
      {
        where: {
          id
        }
      },
      info
    )
  },

  async admins(parent, args, ctx, info) {
    const { page, id } = args
    let input = {
      orderBy: "createdAt_DESC",
      where: { role_in: ["ADMIN", "EDITOR"] }
    }
    if (page) {
      const pagination = page
        ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
        : {}
      Object.assign(input, pagination)
    } else if (id) {
      Object.assign(input, {
        where: {
          id
        }
      })
    }
    return await ctx.db.query.users(input, info)
  },

  user(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user(
      {
        where: {
          id
        }
      },
      info
    )
  },
  categories(parent, args, ctx, info) {
    const { category, id, slug } = args
    const where = category ? { category } : slug ? { slug } : { id }
    return ctx.db.query.categories({ where }, info)
  },

  project(parent, args, ctx, info) {
    const { id, slug } = args
    if (id) {
      return ctx.db.query.project({ where: { id } }, info)
    } else if (slug) {
      return ctx.db.query.project({ where: { slug } }, info)
    }
  },

  projects(parent, args, ctx, info) {
    const { page } = args
    const pagination = page
      ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
      : {}
    const input = Object.assign(pagination, { orderBy: "createdAt_DESC" })
    return ctx.db.query.projects(input, info)
  },
  // projectCategories(parent, args, ctx, info) {
  //   const { id, slug } = args
  //   if (id) {
  //     return ctx.db.query.projectCategory({ where: { id } }, info)
  //   } else if (slug) {
  //     return ctx.db.query.projectCategories({ where: { slug } }, info)
  //   }
  //   return ctx.db.query.projectCategories(null, info)
  // },
  projectTags(parent, args, ctx, info) {
    const { id, slug, page } = args
    const pagination = page
      ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
      : {}
    let input = Object.assign(pagination, { orderBy: "name_ASC" })
    if (id) {
      return ctx.db.query.projectTags({ where: { id } }, info)
    } else if (slug) {
      return ctx.db.query.projectTags({ where: { slug } }, info)
    }
    return ctx.db.query.projectTags(input, info)
  },
  village(parent, args, ctx, info) {
    const { id, slug } = args
    if (id) {
      return ctx.db.query.village({ where: { id } }, info)
    } else if (slug) {
      return ctx.db.query.village({ where: { slug } }, info)
    }
  },
  villages(parent, args, ctx, info) {
    const { page } = args
    const pagination = page
      ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
      : {}
    const input = Object.assign(pagination, { orderBy: "name_ASC" })
    return ctx.db.query.villages(input, info)
  },
  news(parent, args, ctx, info) {
    const { id } = args
    if (id) {
      return ctx.db.query.news({ where: { id } }, info)
    }
  },
  newsAll(parent, args, ctx, info) {
    const { page } = args
    const pagination = page
      ? { skip: page > 1 ? page * 3 - 3 : 0, first: 3 }
      : {}
    const input = Object.assign(pagination, { orderBy: "createdAt_DESC" })
    return ctx.db.query.newses(input, info)
  }
}

module.exports = {
  Query
}
