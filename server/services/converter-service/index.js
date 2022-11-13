'use strict';

const _ = require('lodash');
const google_myanmar_tools = require("myanmar-tools"); 
const { convertToUnicode } = require('./converter');
// const { getPluginService } = require('../../utils/getPluginService');
module.exports = ({ strapi }) => ({
	async convert(ctx) {
		const { params, model: entityModel } = ctx;
		const { data } = params;
		// console.log('convert data', data);
		// console.log('entityModel', entityModel);
		const {attributes} = entityModel;

		const convertableFields = Object.entries(attributes)
                .filter(([key, value]) => value.pluginOptions?.unicode_converter?.enabled === true)
                .map((field) => field[0]);
		console.log('convertableFields', convertableFields)

		if (ctx.action === 'beforeCreate' || ctx.action === 'beforeUpdate') {
			convertableFields.forEach(field => {
				data[field] = convertToUnicode(data[field])
			});
		}
	},
});
