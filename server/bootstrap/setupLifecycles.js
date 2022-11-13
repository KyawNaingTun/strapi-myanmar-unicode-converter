const _ = require('lodash');
const { getPluginService } = require('../utils/getPluginService');
const setupLifecycles = (models) => {
	// console.log('setupLifecycles', models);
	// set up lifecycles
	const subscribe = {
		models: _.map(models, (model) => model.uid),
	};

	['beforeCreate', 'beforeUpdate'].forEach((lifecycle, idx) => {
		subscribe[lifecycle] = (ctx) => getPluginService('converterService').convert(ctx);
	});

	// console.log('subscribe', subscribe);

	strapi.db.lifecycles.subscribe(subscribe);
};

module.exports = {
	setupLifecycles,
};
