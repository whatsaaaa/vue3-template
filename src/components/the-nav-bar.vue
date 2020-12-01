<script>
import { authComputed } from "../store/helpers";
import NavBarRoutes from "./nav-bar-routes.vue";

export default {
  components: {
    NavBarRoutes,
  },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: "home",
          title: "Home",
        },
      ],
      loggedInNavRoutes: [
        {
          name: "about",
          title: () => "Logged in as " + this.currentUser.name,
        },
        {
          name: "logout",
          title: "Log out",
        },
      ],
      loggedOutNavRoutes: [
        {
          name: "login",
          title: "Log in",
        },
      ],
    };
  },
  computed: {
    ...authComputed,
  },
};
</script>

<template>
  <ul class="theNavBar">
    <NavBarRoutes :routes="persistentNavRoutes" />
    <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
    <NavBarRoutes v-else :routes="loggedOutNavRoutes" />
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
