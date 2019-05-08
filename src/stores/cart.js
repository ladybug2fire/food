import _ from 'lodash'
export default {
  state: {
    goodlist: []
  },
  mutations: {
    addGood (state, payload) {
      let goodlist = state.goodlist
      let find = goodlist.find(e => e._id === payload._id)
      if (find) {
        let newCount = find.count + payload.count
        if (newCount > find.amount) return
        find.count = newCount >= 0 ? newCount : 0
      } else {
        if (payload.amount < 1) return
        state.goodlist.push(payload)
      }
    },
    clearCart (state) {
      state.goodlist = []
    }
  },
  actions: {

  },
  getters: {
    goodcount (state) {
      return state.goodlist.reduce((sum, e) => sum + e.count, 0)
    },
    goodlist (state) {
      return state.goodlist
    }

  }
}
