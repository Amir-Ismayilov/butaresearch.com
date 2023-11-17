const state = {
  abouts: []
}

const getters = {
  getAllAbouts: (state) => {
    return state.abouts
  }
}

const actions = {
  async getAboutsArray(context) {
    const {data} = await this.$axios.$get('/about');
    context.commit('setAbouts', [data])
    return data;
  }
}

const mutations = {
  setAbouts: (state, [data = null]) => {
    if (data) {
      state.abouts = data
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
