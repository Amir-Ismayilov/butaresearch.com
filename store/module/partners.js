const state = {
  partners: []
}

const getters = {
  getAllPartners: (state) => {
    return state.partners
  }
}

const actions = {
  async getPartnersArray(context) {
    const {data} = await this.$axios.$get('/partners');
    context.commit('setPartners', [data])
    return data;
  }
}

const mutations = {
  setPartners: (state, [data = null]) => {
    if (data) {
      state.partners = data
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
