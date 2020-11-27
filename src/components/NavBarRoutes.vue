<script>
import BaseLink from "./_BaseLink";

export default {
  name: "NavBarRoutes",
  components: { BaseLink },
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <li v-for="route in routes" :key="route.name">
    <BaseLink :to="route">
      {{ route.title }}
    </BaseLink>
  </li>
</template>
