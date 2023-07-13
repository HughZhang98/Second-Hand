import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phoneList: []
  },
  mutations: {
    addPhone(state, data) {
      state.phoneList.push(data)
    }
  },
  actions: {

  }
})
