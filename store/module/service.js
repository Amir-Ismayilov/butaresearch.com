const state = {
  services: []
}

const getters = {
  getAllServices: (state) => {
    return state.services
  }
}

const actions = {
  async getServicesArray(context) {
    const {data} = await this.$axios.$get('/service');
    context.commit('setServices', [data])
    return data;
  },

  async getBlogsByIdApi(commit, id) {
    const {data} = await this.$axios.$get(`/service/${id}`);
    return data;
  },
}

const mutations = {
  setServices: (state, [data = null]) => {
    if (data) {
      state.services = data
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
