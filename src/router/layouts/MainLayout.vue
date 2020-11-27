<script>
import TheNavBar from "../../components/TheNavBar";

export default {
  components: {
    TheNavBar,
  },
};
</script>

<template>
  <div class="mainLayout">
    <TheNavBar />
    <slot />
  </div>
</template>
