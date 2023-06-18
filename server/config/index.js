'use strict';

module.exports = {
  default: ({ env }) => ({ score: 0.8 }),
  validator: (config) => { 
    if (typeof config.score !== 'number') {
      throw new Error('Score has to be a number format');
    }
    if (config.score < 0.1 || config.score > 0.9) {
      throw new Error('Score value must be between 0 and 1');
    }
  },
};
