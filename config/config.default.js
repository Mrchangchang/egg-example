'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  config.view = {
    defaultExtension: '.nj',
    defaultViewEngine: 'nunjucks',
    root: [
      path.join(appInfo.baseDir, 'app/view')
    ].join(',')
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539963719235_6303';

  // add your config here
  config.middleware = [];

  return config;
};
