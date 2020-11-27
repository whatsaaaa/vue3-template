<script>
import NavBarRoutes from "./nav-bar-routes.vue";

export default {
  components: {
    NavBarRoutes,
  },
  data() {
    return {
      navRoutes: [
        {
          name: "home",
          title: "Home",
        },
        {
          name: "about",
          title: "About",
        },
      ],
    };
  },
};
</script>

<template>
  <ul class="theNavBar">
    <nav-bar-routes :routes="navRoutes" />
  </ul>
</template>

<style lang="scss">
.theNavBar {
  padding: 0;
  margin: 0 0 12px;
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: 6px;

    > a {
      text-decoration: none;
    }
  }
}
</style>
