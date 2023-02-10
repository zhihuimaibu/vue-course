<template>
  <div>
    <the-header></the-header>
    <button @click="showComponents('ActiveGoals')">ActiveGoals</button>
    <button @click="showComponents('ManageGoals')">ManageGoals</button>
    <!-- 太复杂了，可以直接动态切换组件，通过动态绑定组件名称 -->
    <!-- <active-goals v-if="displayComponent === 'ActiveGoals'"></active-goals>
    <manage-goals v-if="displayComponent === 'ManageGoals'"></manage-goals> -->
    <!-- 有输入框，输入的数据不能保存怎么办? -->
    <keep-alive>
      <component :is="displayComponent"></component>
    </keep-alive>

    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    >
    </user-info>
    <course-goals>
      <template #default="{go}">
        {{ go.name }}
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ManageGoals,
    ActiveGoals,
  },

  data() {
    return {
      displayComponent: "",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },

  methods: {
    showComponents(com) {
      this.displayComponent = com;
    },
  },

  mount() {
    console.log(this.$slots);
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>