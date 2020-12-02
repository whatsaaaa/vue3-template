<script>
export default {
  props: {
    clicked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <BaseButton :disabled="clicked" type="submit">
    <BaseIcon v-if="clicked" name="sync" spin />
    <span v-else><slot /></span>
  </BaseButton>
</template>
