<template>
  <div id="app">
    <!--
    By binding the `key` to `$route.fullPath`, we are
    forcing the "replacement" of the RouterView component,
    event when routes are using the same component. With
    this approach it will treat them as distinct and create 
    the component again.
    -->
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
