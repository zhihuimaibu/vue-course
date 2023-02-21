<template>
  <button
    @click="setAuth({isAuth: true})"
    v-if="!auth"
  >Login</button>
  <button
    @click="setAuth({isAuth: false})"
    v-if="auth"
  >Logout</button>
</template>

<script>
export default {
  methods: {
    setAuth(payload) {
      this.$store.dispatch('setAuth', payload);
    },
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
  },
};
</script>