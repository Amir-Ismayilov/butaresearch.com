const state = {
  projects: []
}

const getters = {
  getAllProjects: (state) => {
    return state.projects
  }
}

const actions = {
  async getProjectsArray(context) {
    const {data} = await this.$axios.$get('/project');
    context.commit('setProjects', [data])
    return data;
  },

  async getProjectsByIdApi({commit}, id) {
    const {data}= await this.$axios.$get(`/project/${id}`);
    return data;
  },
}

const mutations = {
  setProjects: (state, [data = null]) => {
    if (data) {
      state.projects = data
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
