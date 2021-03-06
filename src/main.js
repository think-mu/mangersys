/*
 * @Author: huangzibin
 * @Date: 2020-01-10 12:50:16
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-06-08 09:46:02
 */

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(ElementUI,{
  size: 'small'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
