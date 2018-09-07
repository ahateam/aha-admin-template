import Vue from 'vue'
import Router from 'vue-router'
import error from '@/views/error'

import index from '@/views/index'
import login from '@/views/login'
import register from '@/views/register'

import home from '@/views/home/home'
import manage from  '@/views/manage/manage'


Vue.use(Router);


//网站地图路由表
export const sitemapRouters = [
  {
    path: '/',
    redirect: '/home',
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
        path: '/home',
        name: 'home',
        component: home,
      },
      {
        path: '/manage',
        name: 'manage',
        component: manage,
      }
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
