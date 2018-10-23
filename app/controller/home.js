'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base/base_controller')

class HomeController extends BaseController {
  async index() {
    const {ctx} = this
    
    const data = {name: 'MrChang'}
    // this.ctx.body = 'hi, egg, yanchang123';
    ctx.body = await ctx.renderView('home/home.nj', data, {
      viewEngine: 'nunjucks',
    });
  }
  async login() {
    const {ctx} = this
    const {body} = ctx.request
    const data = {
      userName: body.username,
      password: body.password
    }
    // ctx.body = await '登录'
    this.success(data)
  }
}

module.exports = HomeController;
