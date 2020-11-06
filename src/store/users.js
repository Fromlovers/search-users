/* eslint-disable no-underscore-dangle */
import http from '../lib/fetch';

const users = {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    mutationUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async getAll({ commit }, params = {}) {
      const res = await http.get('/users', params);
      const data = Object.values(await res.json());
      commit('mutationUsers', data);

      return data;
    },
    // eslint-disable-next-line no-unused-vars
    async get({ commit }, params = {}) {
      const res = await http.get('/user', params);
      const data = await res.json();
      commit('mutationUsers', [data]);
      return data;
    },
  },
};

export default users;
