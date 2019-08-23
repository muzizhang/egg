'use strict';
const proxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');
const pathMatching = require('egg-path-matching');
const assert = require('power-assert');

const urlArray = [
  '/gateway/guest/.*',
  '/gateway/staff/.*',
  '/gateway/.*',
];

module.exports = () => {
  return async (ctx, next) => {
    const match0 = pathMatching({ ignore: urlArray[0] });
    const match1 = pathMatching({ ignore: urlArray[1] });
    const match2 = pathMatching({ ignore: urlArray[2] });
    // console.log('proxy====ctx', ctx);
    const url = ctx.request.originalUrl;
    // console.log('url-==proxy', url);
    console.log('match===proxy ', assert(match0(url) === true));
    if (!(assert(match0(url) === true))) {
      k2c(proxy({
        target: 'http://172.18.10.20:8080',
        changeOrigin: true,
      }))(ctx, next);
    } else if (!(assert(match1(url) === true))) {
      console.log(456789);
      k2c(proxy({
        target: 'http://172.18.10.20:8084',
        changeOrigin: true,
      }))(ctx, next);
    } else if (!(assert(match2(url) === true))) {
      k2c(proxy({
        target: 'http://172.18.19.3:8080',
        changeOrigin: true,
      }))(ctx, next);
    } else {
      await next();
    }
  };
};
