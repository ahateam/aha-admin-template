import Vue from 'vue'
import Router from 'vue-router'
import error from '@/views/error'

import index from '@/views/index'
import login from '@/views/login'
import register from '@/views/register'

import home from '@/views/home/home'
import document from '@/views/document/document'
import componentsDocument from '@/views/document/componentsDocument'
import checkedComponents from '@/views/components/checkedComponents'
import inputComponents from '@/views/components/inputComponents'
import selectComponents from  '@/views/components/selectComponents'
import timerComponents from  '@/views/components/timerComponents'
import uploadComponents from  '@/views/components/uploadComponents'
import formCenter from  '@/views/form/formCenter'
import btnComponents from  '@/views/components/btnComponents'
import tableCenter from  '@/views/table/tableCenter'
import VCharts from  '@/views/table/VCharts'
import zyProductCenter from '@/views/showPage/zyProductCenter'
import zyProductList from '@/views/showPage/zyProductList'
import layout from '@/views/layout/layout'
import teachingTest from '@/views/teaching/test/test'
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
        path: '/document',
        name: 'document',
        component: document,
      },
      {
        path:'/componentsDocument',
        name:'componentsDocument',
        component:componentsDocument
      },
      {
        path:'/checkedComponents',
        name:'checkedComponents',
        component:checkedComponents
      },
      {
        path:'/inputComponents',
        name:'inputComponents',
        component:inputComponents
      },
      {
        path:'/selectComponents',
        name:'selectComponents',
        component:selectComponents
      },
      {
        path:'/timerComponents',
        name:'timerComponents',
        component:timerComponents
      },
      {
        path:'/uploadComponents',
        name:'uploadComponents',
        component:uploadComponents
      },
      {
        path:'/formCenter',
        name:'formCenter',
        component:formCenter
      },
      {
        path:'/btnComponents',
        name:'btnComponents',
        component:btnComponents
      },
      {
        path:'/tableCenter',
        name:'tableCenter',
        component:tableCenter
      },
      {
        path:'/VCharts',
        name:'VCharts',
        component:VCharts
      },
      {
        path:'/zyProductCenter',
        name:'zyProductCenter',
        component:zyProductCenter
      },
      {
        path:'/zyProductList',
        name:'zyProductList',
        component:zyProductList
      },
      {
        path:'/layout',
        name:'layout',
        component:layout
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
  {
    path: '/teaching/test',
    name: 'teachingTest',
    component: teachingTest,
  },

];


export default new Router({
  routes: sitemapRouters,
})
