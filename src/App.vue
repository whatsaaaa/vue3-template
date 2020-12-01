<template>
  <!--
    By binding the `key` to `$route.fullPath`, we are
    forcing the "replacement" of the RouterView component,
    event when routes are using the same component. With
    this approach it will treat them as distinct and create 
    the component again.
  -->
  <router-view :key="$route.fullPath" />
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import "~normalize.css/normalize.css";
// Style loading bar between pages.
@import "~nprogress/nprogress.css";
// Design variables and utilities from scr/design
@import "./design/";

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: $color-body-bg;
}

// ===
// Base element styles
// ===
a,
a:visited {
  color: $color-link-text;
}

// ===
// Vendor
// ===
#nprogress .bar {
  background: $color-link-text;
}
</style>
