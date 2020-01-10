/*
 * @Author: huangzibin
 * @Date: 2020-01-10 12:50:16
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-10 17:16:23
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI,{
  size: 'small'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
