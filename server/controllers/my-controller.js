'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-myanmar-unicode-converter')
      .service('myService')
      .getWelcomeMessage();
  },
});
