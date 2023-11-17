const state = {
  faqs: []
}

const getters = {
  getAllFaqs: (state) => {
    return state.faqs
  }
}

const actions = {
  async getFaqsArray(context) {
    const {data} = await this.$axios.$get('/faq');
    context.commit('setFaqs', [data])
    return data;
  }
}

const mutations = {
  setFaqs: (state, [data = null]) => {
    if (data) {
      state.faqs = data
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
