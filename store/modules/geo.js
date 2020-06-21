const state = () => ({ position: {}, hots: {} })

const mutations = {
  setPosition (state, val) {
    state.position = val
  },
  setHotCity (state, val) {
    state.hots = val
  }
}

const actions = {
  setPosition: ({
    commit
  }, position) => {
    commit('setPosition', position)
  },
  setHotCity: ({
    commit
  }, hots) => {
    commit('setHotCity', hots)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

