import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'hoge',
      name: 'りんごちゃん',
      image: ''
    }
  },
  mutations: {
    setName(state, name) {
      state.user.name = name
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
