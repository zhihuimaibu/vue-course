import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const countModule = {
  namespaced: true,
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        console.log('action call mutation');
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.count * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  }
}

const store = createStore({
  modules: {
    count: countModule
  },
  state() {
    return {
      login: false
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.login = payload.isAuth;
    }
  },
  getters: {
    auth(state) {
      return state.login;
    }
  },
  actions: {
    setAuth(context, payload) {
      context.commit('setAuth', payload);
    }
  }
});

app.use(store);
app.mount('#app');
