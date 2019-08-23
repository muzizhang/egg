'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('controller======>', ctx);
    console.count();
    ctx.body = 'hi, egg' + ctx.url;
  }
}

module.exports = HomeController;
