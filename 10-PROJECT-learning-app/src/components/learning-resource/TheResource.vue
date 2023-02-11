<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
    >StoredResource</base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
    >AddResource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResource,
    AddResource,
  },

  provide() {
    return {
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  inject: ['resources'],

  data() {
    return {
      selectedTab: 'stored-resource',
    };
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? '' : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? '' : 'flat';
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, link) {
      const resource = {
        title: title,
        description: description,
        link: link,
      };
      this.resources.unshift(resource);
      this.selectedTab = 'stored-resource';
    },

    removeResource(id) {
      const index = this.resources.findIndex((res) => res.id === id);
      this.resources.splice(index, 1);
    },
  },
};
</script>
