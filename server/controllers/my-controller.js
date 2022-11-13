'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('myanmar-unicode-converter')
      .service('myService')
      .getWelcomeMessage();
  },
});
