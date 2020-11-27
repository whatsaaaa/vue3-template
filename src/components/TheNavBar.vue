<script>
import NavBarRoutes from "./NavBarRoutes";

export default {
  name: "TheNavBar",
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
  <div class="theNavBar">
    <NavBarRoutes :routes="navRoutes" />
  </div>
</template>

<style lang="scss">
.theNavBar {
  padding: 0;
  margin: 0 0 12px;
  text-align: center;

  > ul {
    list-style-type: none;

    > li {
      display: inline-block;
      margin-right: 6px;

      > a {
        text-decoration: none;
      }
    }
  }
}
</style>
