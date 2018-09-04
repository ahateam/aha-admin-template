import Vue from 'vue'
import Router from 'vue-router'
import error from '@/views/error'

import index from '@/views/index'
import login from '@/views/login'
import register from '@/views/register'


Vue.use(Router);


//网站地图路由表
export const sitemapRouters = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/error',
    name: 'error',
    component: error,
    meta: {title: '错误'},
  },

  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {title: '首页'}
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {title: '登录'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {title: '注册'}
  },

];


export default new Router({
  routes: sitemapRouters,
})
