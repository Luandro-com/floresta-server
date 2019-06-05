const { getUserId } = require('../../services/auth/utils');
const slugify = require('@sindresorhus/slugify');

const admin = {
	async updateUserRole(parent, { userId, role }, ctx, info) {
		return await ctx.db.mutation.updateUser(
			{
				data: { role },
				where: { id: userId }
			},
			info
		);
	},
	async saveProject(parent, { input }, ctx, info) {
		if (input.name && !input.slug) {
			input.slug = slugify(input.name);
		}
		return await ctx.db.mutation.upsertProject(
			{
				update: input,
				where: { id: input.projectId || '' },
				create: input
			},
			info
		);
	},
	async saveProjectCategory(parent, { input }, ctx, info) {
		console.log('INPUTTTTT', input);
		if (input.name && !input.slug) {
			input.slug = slugify(input.name);
		}
		const cleanInput = {};
		if (input.id) {
			Object.keys(input).map((i) => {
				if (i !== 'id') Object.assign(cleanInput, { [i]: input[i] });
			});
		}
		return await ctx.db.mutation.upsertProjectCategory(
			{
				update: cleanInput,
				where: { id: input.id || '' },
				create: input
			},
			info
		);
	},
	async saveProjectTag(parent, { input }, ctx, info) {
		if (input.name && !input.slug) {
			input.slug = slugify(input.name);
		}
		return await ctx.db.mutation.upsertProjectTag(
			{
				update: input,
				where: { id: input.projectId || '' },
				create: input
			},
			info
		);
	},
	async removeProject(parent, { projectId }, ctx, info) {
		const { id } = await ctx.db.mutation.deleteProject({
			where: { id: projectId },
			data: { variants: { disconnect: true } }
		});
		console.log('ID', id);
		return id;
	},
	async removeProjectCategory(parent, { categoryId }, ctx, info) {
		const { id } = await ctx.db.mutation.deleteProjectCategory({ where: { id: categoryId } });
		console.log('ID', id);
		return id;
	},
	async removeProjectTag(parent, { tagId }, ctx, info) {
		const { id } = await ctx.db.mutation.deleteProjectTag({ where: { id: categoryId } });
		console.log('ID', id);
		return id;
	},
	async updateContent(parent, { input }, ctx, info) {
		const where = input.id ? { id: input.id } : { createdAt_not: '1900-01-01T00:00:00.263Z' };
		const goodValues = {};
		Object.keys(input).map((key) => {
			if (key !== 'id') {
				return Object.assign(goodValues, { [key]: input[key] });
			}
		});
		const update = await ctx.db.mutation.updateManyContents(
			{
				where,
				data: { ...goodValues }
			},
			`{ count }`
		);
		if (update.count === 1) {
			const contents = await ctx.db.query.contents({}, info);
			return contents[0];
		} else {
			throw 'Error on updating content.';
		}
	}
};

module.exports = { admin };
