<script>
import TheNavBar from "../../components/the-nav-bar.vue";

export default {
  components: {
    TheNavBar,
  },
};
</script>

<template>
  <div class="mainLayout">
    <the-nav-bar />
    <slot />
  </div>
</template>
