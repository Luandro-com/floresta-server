const { getUserId } = require('../../services/auth/utils')
const slugify = require('@sindresorhus/slugify')

const admin = {
  async updateUserRole (parent, { userId, role }, ctx, info) {
    return await ctx.db.mutation.updateUser(
      {
        data: { role },
        where: { id: userId }
      },
      info
    )
  },
  async saveProject (parent, { input }, ctx, info) {
    // console.log('INPUTTTTT', input);
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    let cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== 'id') Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    let connections = {}

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
    let categoriesUpdateConnections = {}
    let categoriesCreateConnections = {}

    if (input.categories.length > 0) {
      categoriesCreateConnections = {
        categories: {
          create: [],
          connect: []
        }
      }
      categoriesUpdateConnections = {
        categories: {
          set: []
        }
      }
      input.categories.map(c => {
        // categoriesCreateConnections.categories.create.push({
        //   category: c
        // })
        categoriesCreateConnections.categories.connect.push({
          category: c
        })
        categoriesUpdateConnections.categories.set.push({
          category: c
        })
      })
    }
    const where = input.id ? { id: input.id } : { slug: input.slug }
    const formatedInput = {
      update: {
        ...cleanInput,
        ...connections,
        ...tagsUpdateConnections,
        ...categoriesUpdateConnections
      },
      where,
      create: {
        ...input,
        ...connections,
        ...tagsCreateConnections,
        ...categoriesCreateConnections
      }
    }
    return await ctx.db.mutation.upsertProject(formatedInput, info)
  },
  async saveCategory (parent, { input }, ctx, info) {
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    const cleanInput = {}
    if (input.category) {
      Object.keys(input).map(i => {
        if (i !== 'category') Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    return await ctx.db.mutation.upsertCategory(
      {
        update: cleanInput,
        where: { category: input.category || '' },
        create: input
      },
      info
    )
  },
  async saveProjectTag (parent, { input }, ctx, info) {
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    const cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== 'id') Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    return await ctx.db.mutation.upsertProjectTag(
      {
        update: cleanInput,
        where: { id: input.id || '' },
        create: input
      },
      info
    )
  },
  async saveVillage (parent, { input }, ctx, info) {
    if (input.name && !input.slug) {
      input.slug = slugify(input.name)
    }
    const cleanInput = {}
    if (input.id) {
      Object.keys(input).map(i => {
        if (i !== 'id') Object.assign(cleanInput, { [i]: input[i] })
      })
    }
    if (input.photos) {
      Object.assign(cleanInput, {
        photos: {
          set: input.photos ? input.photos : null
        }
      })
    }
    return await ctx.db.mutation.upsertVillage(
      {
        update: cleanInput,
        where: { id: input.id || '' },
        create: cleanInput
      },
      info
    )
  },
  async saveNews (parent, { input }, ctx, info) {
    console.log()
    let cleanInput = {}
    Object.keys(input).map(i => {
      if (i !== 'id' && i !== 'post') { Object.assign(cleanInput, { [i]: input[i] }) }
    })
    if (input.post) {
      const postUpdate = {
        post: {
          update: {
            title: input.title,
            body: input.description
          }
        }
      }
      const postCreate = {
        post: {
          create: {
            title: input.title,
            body: input.description,
            author: {
              connect: {
                id: getUserId(ctx)
              }
            },
            isPublished: true,
            slug: slugify(input.title)
          }
        }
      }
      console.log({ ...cleanInput, ...postCreate })
      return await ctx.db.mutation.upsertNews(
        {
          update: { ...cleanInput, ...postUpdate },
          where: { id: input.id || '' },
          create: { ...cleanInput, ...postCreate }
        },
        info
      )
    } else {
      return await ctx.db.mutation.upsertNews(
        {
          update: cleanInput,
          where: { id: input.id || '' },
          create: input
        },
        info
      )
    }
  },
  async removeProject (parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteProject({
      where: { id },
      data: { variants: { disconnect: true } }
    })
    console.log('ID', res.id)
    return res.id
  },
  async removeProjectTag (parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteProjectTag({ where: { id } })
    console.log('ID', res.id)
    return res.id
  },
  async removeVillage (parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteVillage({ where: { id } })
    console.log('ID', res.id)
    return res.id
  },
  async removeNews (parent, { id }, ctx, info) {
    const res = await ctx.db.mutation.deleteNews({ where: { id } })
    console.log('ID', res.id)
    return res.id
  },
  async updateContent (parent, { input }, ctx, info) {
    console.log(' input', input)
    const where = input.id
      ? { id: input.id }
      : { createdAt_not: '1900-01-01T00:00:00.263Z' }
    let goodValues = {}
    Object.keys(input).map(key => {
      if (key === 'headerImages') {
        return Object.assign(goodValues, {
          [key]: {
            set: input[key]
          }
        })
      } else if (key !== 'id') {
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
      throw 'Error on updating content.'
    }
  }
}

module.exports = { admin }
