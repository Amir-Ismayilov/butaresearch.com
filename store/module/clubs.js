const state = {
  clubs: []
}

const getters = {
  getAllClubs: (state) => {
    return state.clubs
  }
}

const actions = {
  async getClubsArray(context) {
    const {data} = await this.$axios.$get('/clubs');
    context.commit('setClubs', [data])
    return data;
  },

  async getClubsByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/clubs/show/${id}`);
    return data;
  },
}

const mutations = {
  setClubs: (state, [data = null]) => {
    if (data) {
      state.clubs = data
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
