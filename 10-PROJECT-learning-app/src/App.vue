<template>
  <the-header title="RememberMe"></the-header>
  <the-resource></the-resource>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/learning-resource/TheResource.vue';

export default {
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  components: {
    TheHeader,
    TheResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: '1',
          title: 'baidu',
          description: '百度在手，天下你有',
          link: 'https://www.baidu.com',
        },
        {
          id: '2',
          title: 'vue',
          description: '前端框架',
          link: 'https://cn.vuejs.org/',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>