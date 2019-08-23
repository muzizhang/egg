'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  console.log(app.middlewares.proxy());
  router.get('/gateway/*', app.middlewares.proxy(), controller.home.index);
};
