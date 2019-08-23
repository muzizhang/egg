/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.proxy = true;

  // use for cookie sign key, should change to your own and keep security
  // 密钥
  config.keys = appInfo.name + '_dsf54641ds13155f';

  // add your middleware config here
  // 数组的顺序为中间件执行的顺序
  config.middleware = [ 'token', 'proxy' ];

  // 配置表单提交的最大限制
  config.bodyParser = {
    jsonLimit: '50mb',
  };

  // view
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // 配置cors  跨域
  // config.security = {
  //   csrf: {
  //     enable: false,
  //     ignoreJSON: true,
  //   },
  // };

  // config.cors = {
  //   origin: '*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
