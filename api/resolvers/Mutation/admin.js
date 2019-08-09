const { getUserId } = require("../../services/auth/utils")
const slugify = require("@sindresorhus/slugify")

const admin = {
  async updateUserRole(parent, { userId, role }, ctx, info) {
    return await ctx.db.mutation.updateUser(
      {
        data: { role },
        where: { id: userId }
      },
      info
    )
  },
  async saveProject(parent, { input }, ctx, info) {
    // console.log('INPUTTTTT', input);
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    let cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== "id") Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    let connections = {}
    // let categoryCreateConnections = {}
    // let categoryUpdateConnections = {}
    // if (input.category) {
    //   Object.assign(categoryCreateConnections, {
    //     category: {
    //       connect: {
    //         id: input.category
    //       }
    //     }
    //   })
    //   Object.assign(categoryUpdateConnections, {
    //     category: {
    //       connect: {
    //         id: input.category
    //       }
    //     }
    //   })
    // }
    if (input.photos) {
      Object.assign(connections, {
        photos: {
          set: input.photos ? input.photos : null
        }
      })
    }
    let tagsCreateConnections = {}
    let tagsUpdateConnections = {}

    if (input.tags) {
      Object.assign(tagsUpdateConnections, {
        tags: {
          set: input.tags.map(t => {
            return { id: t }
          })
        }
      })
      Object.assign(tagsCreateConnections, {
        tags: {
          connect: input.tags.map(t => {
            return { id: t }
          })
        }
      })
    }
    const where = input.id ? { id: input.id } : { slug: input.slug }
    return await ctx.db.mutation.upsertProject(
      {
        update: {
          ...cleanInput,
          ...connections,
          ...tagsUpdateConnections
          // ...categoryUpdateConnections
        },
        where,
        create: {
          ...input,
          ...connections,
          ...tagsCreateConnections
          // ...categoryCreateConnections
        }
      },
      info
    )
  },
  async saveCategory(parent, { input }, ctx, info) {
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    const cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== "id") Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    return await ctx.db.mutation.upsertCategory(
      {
        update: cleanInput,
        where: { id: input.id || "" },
        create: input
      },
      info
    )
  },
  async saveProjectTag(parent, { input }, ctx, info) {
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    const cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== "id") Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    return await ctx.db.mutation.upsertProjectTag(
      {
        update: cleanInput,
        where: { id: input.id || "" },
        create: input
      },
      info
    )
  },
  async saveVillage(parent, { input }, ctx, info) {
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    const cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== "id") Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    return await ctx.db.mutation.upsertVillage(
      {
        update: cleanInput,
        where: { id: input.id || "" },
        create: input
      },
      info
    )
  },
  async saveNews(parent, { input }, ctx, info) {
    const cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== "id") Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    return await ctx.db.mutation.upsertNews(
      {
        update: cleanInput,
        where: { id: input.id || "" },
        create: input
      },
      info
    )
  },
  async removeProject(parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteProject({
      where: { id },
      data: { variants: { disconnect: true } }
    })
    console.log("ID", res.id)
    return res.id
  },
  // async removeProjectCategory(parent, { id }, ctx, info) {
  //   const res = await ctx.db.mutation.deleteProjectCategory({ where: { id } })
  //   console.log("ID", res.id)
  //   return res.id
  // },
  async removeProjectTag(parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteProjectTag({ where: { id } })
    console.log("ID", res.id)
    return res.id
  },
  async removeVillage(parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteVillage({ where: { id } })
    console.log("ID", res.id)
    return res.id
  },
  async removeNews(parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteNews({ where: { id } })
    console.log("ID", res.id)
    return res.id
  },
  async updateContent(parent, { input }, ctx, info) {
    const where = input.id
      ? { id: input.id }
      : { createdAt_not: "1900-01-01T00:00:00.263Z" }
    const goodValues = {}
    Object.keys(input).map(key => {
      if (key !== "id") {
        return Object.assign(goodValues, { [key]: input[key] })
      }
    })
    const update = await ctx.db.mutation.updateManyContents(
      {
        where,
        data: { ...goodValues }
      },
      `{ count }`
    )
    if (update.count === 1) {
      const contents = await ctx.db.query.contents({}, info)
      return contents[0]
    } else {
      throw "Error on updating content."
    }
  }
}

module.exports = { admin }
