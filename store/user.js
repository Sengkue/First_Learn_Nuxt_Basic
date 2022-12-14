export const state = () => ({
  number: 5,
  users: [],
  count: 0,
});

export const mutations = {
  changeNumber(state, data) {
    state.number = data;
  },
  setUser(state, data) {
    state.users = data;
  },
  countUp(state, data){
    state.count = data
  }
};

export const actions = {
  async select({ commit }) {
    await this.$axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((data) => {
        const dataSpliec = data?.data?.slice(1, 10);
        commit("setUser", dataSpliec);
      });
  },

};
