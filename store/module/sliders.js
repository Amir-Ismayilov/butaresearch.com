const state = {
  sliders: []
}

const getters = {
  getAllSliders: (state) => {
    return state.sliders
  }
}

const actions = {
  async getSlidersArray(context) {
    const {data} = await this.$axios.$get('/slider');
    context.commit('setSliders', [data])
    return data;
  }
}

const mutations = {
  setSliders: (state, [data = null]) => {
    if (data) {
      state.sliders = data
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
