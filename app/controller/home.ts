/*
 * @Emall: 285840242@qq.com
 * @version: 
 * @Author: hukancheng
 * @Date: 2020-07-02 15:49:36
 * @LastEditors: hukancheng
 * @LastEditTime: 2020-07-02 15:58:23
 */ 
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg2');
  }
}
