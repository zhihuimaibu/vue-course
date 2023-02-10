<template>
  <form @submit.prevent="setUserData">
    <div>
      <label>name:</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label>age:</label>
      <input type="text" v-model="age" >
    </div>
    <div>
      <button>setUserData</button>
    </div>
  </form>
</template>

<script>
export default {
    emits: ['setUserData'],
    data() {
      return {
        name: '',
        age: ''
      }
    },
    methods: {
      setUserData() {
        this.$emit('setUserData', this.name, this.age);
        this.name = '';
        this.age = '';
      }
    }
  }
</script>


<style scoped>
  div {
    margin: 10px;
  }

  input {
    width: 150px;
  }

  label {
    display: inline-block;
    width: 100px;
    margin-right: 20px;
    text-align: right;
  }

  button {
    margin-left: 150px;
  }
</style>