<script>
import Layout from "../layouts/main-layout.vue";

export default {
  components: { Layout },
  props: {
    resource: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="notFound">
    <Layout>
      <h1>
        404
        <template v-if="resource">
          {{ resource }}
        </template>
      </h1>
    </Layout>
  </div>
</template>

<style lang="scss">
.notFound {
  h1 {
    text-align: center;
  }
}
</style>
