const state = {
  userName: '',
  isOpen:'',
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_IS_OPEN(state, name) {
    state.isOpen = name
  }
  
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setIsOpen({ commit }, name) {
    commit('SET_IS_OPEN', name)
  }
}
export default {
  state,
  mutations,
  actions
}
