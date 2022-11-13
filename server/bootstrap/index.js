'use strict';

const { getModels } = require('./getModels');
const { setupLifecycles } = require('./setupLifecycles');

module.exports = async ({ strapi }) => {
	const models = await getModels(strapi);
	setupLifecycles(models);
};
