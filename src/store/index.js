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