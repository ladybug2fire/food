import {getUser} from '@/api/user'
export default {
  state: {
    userInfo: {
      username: '星期三的猫'
    }
  },
  mutations: {
    logout (state) {
      state.userInfo = {}
    }
  },
  actions: {
    getUser ({commit, state}, payload) {
      getUser().then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  getters: {
    username (state) {
      return state.userInfo.username
    }
  }
}
