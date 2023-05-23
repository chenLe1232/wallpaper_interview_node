'use strict';

const { Controller } = require('egg');
const { getUrl } = require('./help');

class HomeController extends Controller {
  async index() {
    const { ctx, } = this;
    // 获取query参数
    const { category, pageSize, pageStart } = ctx.query;
    try {
      const url = getUrl(category, pageSize, pageStart)
      const res = await this.ctx.curl(url, {
        dataType: 'json',
      });
      ctx.body = res.data
    } catch (error) {
      ctx.body = '请求失败'
    }

  }
}

module.exports = HomeController;
