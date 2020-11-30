<template>
  <input @input="handleInput" />
</template>

<script>
export default {
  prop: ["value"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
  },
};
</script>
