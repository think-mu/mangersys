/*
 * @Author: huangzibin
 * @Date: 2020-01-16 18:58:13
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-16 18:58:14
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collapse:false
  },
  mutations: {
    changeCollapse(state){
      state.collapse = !state.collapse
    }
  }
})

export default store