import _ from 'lodash'
export default {
  state: {
    goodlist: []
  },
  mutations: {
    addGood (state, payload) {
      let goodlist = state.goodlist
      let find = goodlist.find(e => e.goodid === payload.goodid)
      if (find) {
        let newCount = find.count + payload.count
        find.count = newCount >= 0 ? newCount : 0
      } else {
        state.goodlist.push(payload)
      }
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
