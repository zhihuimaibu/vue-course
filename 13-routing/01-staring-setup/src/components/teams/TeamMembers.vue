<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link :to="{name: 'teamMembers', params: { id: 't2' }}">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  props: ['id'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  watch: {
    $route(newValue) {
      this.setMember(newValue.params.id);
    },
  },
  methods: {
    setMember(teamId) {
      const team = this.teams.find((team) => team.id === teamId);
      const members = [];
      for (const mId of team.members) {
        members.push(this.users.find((user) => user.id === mId));
      }
      this.teamName = team.name;
      this.members = members;
    },
  },
  created() {
    this.setMember(this.id);
  },

  beforeRouteEnter(to, from, next) {
    console.log('BeforeRouteEnter component guard');
    console.log(to, from);
    next();
  },

  beforeRouteUpdate(to, from, next) {
    console.log('BeforeRouteUpdate component guard');
    console.log(to, from);
    next();
  },

  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>