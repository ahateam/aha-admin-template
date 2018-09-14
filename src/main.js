// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vcharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'


import i18n from './i18n/i18n'
import global from '@/config/Global'



Vue.config.productionTip = false
Vue.prototype.GLOBAL = global

Vue.use(ElementUI)
Vue.use(Vcharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
