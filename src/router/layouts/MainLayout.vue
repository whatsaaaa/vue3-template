<script>
export default {
  
};
</script>

<template>
  <div class="mainLayout">
    <RouterLink to="/">
      Home
    </RouterLink> | 
    <RouterLink to="/about">
      About
    </RouterLink>
    <slot />
  </div>
</template>
