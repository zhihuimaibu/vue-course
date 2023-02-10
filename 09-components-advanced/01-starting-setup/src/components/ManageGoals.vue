<template>
  <div>
    <p>ManageGoals</p>
    <input
      type="text"
      ref="input"
    >
    <button @click="getValue">setData</button>

    <error-alert v-if="displayErrorAlert">
      <p>input value null!!!!</p>
      <button @click="displayErrorAlert = false">Okay</button>
    </error-alert>

  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      displayErrorAlert: false,
    };
  },

  methods: {
    getValue() {
      if (this.$refs.input.value === "") {
        this.displayErrorAlert = true;
        // alert("input value null!!!!");
      }
    },
  },
};
</script>