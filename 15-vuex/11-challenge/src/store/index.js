import { createStore } from 'vuex';
import products from './modules/products.js'
import cart from './modules/cart.js'

const store = createStore({
  modules: {
    products,
    cart
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    loggedIn(state, payload) {
      state.isLoggedIn = payload.loggedIn;
    }
  },
  actions: {
    loggedIn(state, payload) {
      state.commit('loggedIn', payload);
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;