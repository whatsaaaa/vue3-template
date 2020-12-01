<script>
import Layout from "../layouts/main-layout.vue";

export default {
  components: { Layout },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <Layout>
    <h1>
      <BaseIcon name="user" />
      {{ user.name }}
      Profile
    </h1>
    <pre>{{ user }}</pre>
  </Layout>
</template>
