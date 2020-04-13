import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    finished: false,
    id: null

  },
  mutations: {
    changes(state, finished){
      state.finished = finished
    }
  },
  getters: {
    finished: state => state.finished
  }
})
