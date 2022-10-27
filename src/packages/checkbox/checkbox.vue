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
      type: [String | Number | Boolean],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    trueValue: [String | Number | Boolean], // 表示是什么值才表示被选中和未选中，因为不一定都是布尔值
    falseValue: [String | Number | Boolean],
  },
  data() {
    return {
      currentValue: this.value, // copy了一份值
    };
  },

  components: {},

  computed: {},

  mounted() {},
  watch:{
    value(val){
      // 为了防止value值有改动，但是this.currentValue没有改动的情况，比如手动更改value值。
      this.currentValue = val
    }
  },
  methods: {
    change(e) {
      const checked = e.target.checked; // 目前input框的值
      this.currentValue = checked
      // 切换的时候应该把value值改了
      this.$emit('input',this.currentValue)
    },
  },
};
</script>
<style lang="less"></style>
