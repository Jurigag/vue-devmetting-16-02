import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

// Majestic 'store' is just a variable in our case
export default new Vuex.Store({
  //3/ It holds a state itself
  state: {
    items: []
  },
  //6/ And methods to update
  async fetch() {
    this.state.items = await axios.get('http://jservice.io/api/clues').then(res => res.data);
  },
  mutations:{
    add(state, {item}) {
      state.items.push(item);
    },
    remove(state, {key}) {
      state.items.splice(key, 1)
    },
    sort(state, {key, type}) {
      state.items = _.orderBy(state.items, key, type);
    },
    set(state, payload) {
      state.items = payload.items;
    }
  },
  actions:{
    add(store, payload) {
      store.commit({
        'type': 'add',
        'item': payload
      });
    },
    remove(store, payload) {
      store.commit({
        'type': 'remove',
        'key': payload
      })
    },
    sort(store, payload) {
      store.commit({
        'type': 'sort',
        'item': payload
      });
    },
    async get({commit}) {
      const payload = await axios.get('http://jservice.io/api/clues').then(res => res.data);
      commit({
        'type': 'set',
        'items': payload
      });
    }
  }
});
