<script>
export default {
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
