<script>
import TheNavBar from "../../components/TheNavBar.vue";

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
