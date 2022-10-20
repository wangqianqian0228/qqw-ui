<!--  -->
<template>
  <label>
    <span>
      <input
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      />
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "qqw-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    currentValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less"></style>
