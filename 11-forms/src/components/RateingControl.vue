<template>
  <ul>
    <li :class="{active: modelValue === 'poor'}"><button
        type="button"
        @click="update('poor')"
      >Poor</button></li>
    <li :class="{active: modelValue === 'average'}"><button
        type="button"
        @click="update('average')"
      >Average</button></li>
    <li :class="{active: modelValue === 'great'}"><button
        type="button"
        @click="update('great')"
      >Great</button></li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     option: this.modelValue,
  //   };
  // },
  // computed: {
  //   option() {
  //     return this.modelValue;
  //   },
  // },
  methods: {
    update(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>


<style scoped>
.active {
  border-color: red;
}

.active button {
  border: 1px solid red;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>

