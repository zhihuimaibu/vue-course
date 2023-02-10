<template>
  <ul>
    <li
      v-for="goal in goals"
      :key="goal"
    >
      <slot :go="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // goals: ["Finish the course", "Learn Vue"],
      goals: [
        {
          name: "Finish the course",
        },
        {
          name: "Learn Vue",
        },
      ],
    };
  },
};
</script>
