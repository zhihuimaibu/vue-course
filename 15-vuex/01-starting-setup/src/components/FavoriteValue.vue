<template>
  <h3>{{ count }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('count', {
      count: 'normalizedCounter',
    }),
  },
};
</script>
