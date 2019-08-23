'use strict';

module.exports = () => {
  return async (ctx, next) => {
    console.log('ctx=====token', ctx);
    // 设置请求头信息
    ctx.cookies.set('BRS_TOKEN', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHlwZSI6InN0YWZmIiwiZXhwIjoxNTY2NTMzOTU1LCJ1c2VyTmFtZSI6IuW8oOaZk-aXrSIsImlhdCI6MTU2NjUzMjE1NSwidXNlcklkIjoiMTAwMDY4In0.r_O0_yPyYAd9mk2daRi2dB_tTEMqjJrPUG_BKCuU2ig');
    await next();
  };
};
