<script>
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
      // Only allow types that essentially just render text boxes.
      validator(value) {
        return [
          "email",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "url",
        ].includes(value);
      },
    },
    modelValue: {},
  },
};
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    v-bind="
      $attrs
      // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
    "
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
