'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {ctx} = this
    const data = {name: 'MrChang'}
    // this.ctx.body = 'hi, egg, yanchang123';
    ctx.body = await ctx.renderString('hi, {{ name }}', data, {
      viewEngine: 'nunjucks',
    });
  }
}

module.exports = HomeController;
