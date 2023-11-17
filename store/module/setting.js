const state = {
  settings: []
}

const getters = {
  getAllSettings: (state) => {
    return state.settings
  }
}

const actions = {
  async getSettingsArray(context) {
    const {data} = await this.$axios.$get('/setting');
    context.commit('setSettings', [data])
    return data;
  }
}

const mutations = {
  setSettings: (state, [data = null]) => {
    if (data) {
      state.settings = data
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
