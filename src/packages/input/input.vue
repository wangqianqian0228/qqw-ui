<!--  -->
<template>
  <div class="one-input">
    <input
      :type="types"
      class="one-input_inner"
      @input="handleInput"
      @blur="handleBlur"
      :placeholder="placeholder"
      :class="{ 'is-disabled': disabled }"
      :value="value"
    />
    <div class="one-input_suffix">
      <qqw-icon
        class="icon on-input_icon"
        icon="qingkong"
        v-if="clearable && value"
        @click.native="clear"
      ></qqw-icon>
      <qqw-icon
        class="icon on-input_icon"
        :icon="icon"
        v-if="showPassChange"
        @click.native="change"
      ></qqw-icon>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon.vue";
import emitter from "@/utils/emmiter";

export default {
  name: "qqw-input",
  mixins: [emitter],
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassChange: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String | Number,
      default: "",
    },
  },
  data() {
    return {
      icon: "yanjing_bi",
      types: this.type,
    };
  },

  components: {
    "qqw-icon": Icon,
  },

  computed: {},

  mounted() {},

  methods: {
    change() {
      // this.showPassChange = !this.showPassChange
      if (this.icon === "yanjing_kai") {
        this.types = "password";
        this.icon = "yanjing_bi";
      } else if (this.icon === "yanjing_bi") {
        this.types = "text";
        this.icon = "yanjing_kai";
      }
    },
    handleInput(e) {
      // 将值送给form-item触发事件。
      this.$emit("input", e.target.value);
      this.dispatch("qqw-form-item", "on-form-change");
    },
    handleBlur(e) {
      this.dispatch("qqw-form-item", "on-form-blur");
    },
    clear() {
      this.$emit("input", "");
    },
  },
};
</script>
<style lang="scss" scoped>
.one-input {
  width: 40%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .one-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.one-input_suffix {
  position: absolute;
  right: 10px;
  height: 100%;
  top: 0;
  line-height: 40px;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  z-index: 900;
  i {
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
