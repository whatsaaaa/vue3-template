<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTitle(route) {
      return typeof route.title === "function" ? route.title() : route.title;
    },
  },
};
</script>

<template>
  <li v-for="route in routes" :key="route.name">
    <BaseLink :to="route">
      {{ getTitle(route) }}
    </BaseLink>
  </li>
</template>
