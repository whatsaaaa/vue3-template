import store from "../store";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/login.vue"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/about.vue"),
    meta: {
      authRequired: true,
    },
    props: () => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch("auth/logOut");
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.meta.authRequired
        );
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: "home" } : { ...routeFrom });
      },
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("./views/_404.vue"),
    props: true,
  },
  // Redirect any unmatched routes to 404 page.
  {
    path: "/:pathMatch(.*)*",
    redirect: "404",
  },
];
