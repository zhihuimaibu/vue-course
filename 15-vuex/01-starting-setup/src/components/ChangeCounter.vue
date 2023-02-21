<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({value: 20})">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('count', ['increment', 'increase']),
  },
};
</script>