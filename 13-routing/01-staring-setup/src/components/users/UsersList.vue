<template>
  <button @click="confimInput">confirm</button>
  <button @click="confirmChange">Save Change</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>

</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isSaveChange: false,
    };
  },
  methods: {
    confimInput() {
      this.$router.push({ name: 'teams' });
    },
    confirmChange() {
      this.isSaveChange = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    // 导航改变的时候校验当前页面数据是否已提交
    console.log('BeforeRouteLeave component guard');
    console.log(to, from);
    if (this.isSaveChange) {
      next();
    } else {
      const confirm = window.confirm('Save Change');
      next(confirm);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>