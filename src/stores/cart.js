export default {
  state: {
    goodlist: []
  },
  mutations: { },
  actions: { },
  getters: {
    goodcount (state) {
      return state.goodlist.length
    }
  }
}
