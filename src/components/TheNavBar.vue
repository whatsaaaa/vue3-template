<script>
export default {
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home'
        },
        {
          name: 'about',
          title: 'About'
        }
      ]
    };
  }
};
</script>

<template>
  <ul class="theNavBar" />
</template>
