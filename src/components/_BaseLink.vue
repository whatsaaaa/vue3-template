<script>
export default {
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: "",
    },
    allowInsecure: {
      type: Boolean,
      default: false,
    },
    to: {
      type: Object,
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    routerLinkTo({ name, params }) {
      return {
        name,
        params,
        ...(this.to || {}),
      };
    },
  },
};
</script>

<template>
  <a v-if="href" :href="href" target="_blank" v-bind="$attrs">
    <slot />
  </a>

  <RouterLink v-else :to="routerLinkTo" v-bind="$attrs">
    <slot />
  </RouterLink>
</template>
