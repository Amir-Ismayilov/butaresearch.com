const state = {
  blogs: []
}

const getters = {
  getAllBlogs: (state) => {
    return state.blogs
  }
}

const actions = {
  async getBlogsArray(context) {
    const {data} = await this.$axios.$get('/blog');
    context.commit('setBlogs', [data])
    return data;
  },

  async getBlogsByIdApi(commit, id) {
    const {data} = await this.$axios.$get(`/blog/${id}`);
    return data;
  },
}

const mutations = {
  setBlogs: (state, [data = null]) => {
    if (data) {
      state.blogs = data
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
