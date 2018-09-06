import Vue from 'vue'
import Router from 'vue-router'
import error from '@/views/error'

import index from '@/views/index'
import login from '@/views/login'
import register from '@/views/register'


import test1 from '@/views/test/test1'
import test2 from '@/views/test/test2'


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
  },

  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: test1,
      },
      {
        path: '/test2',
        name: 'test2',
        component: test2,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },

];


export default new Router({
  routes: sitemapRouters,
})
