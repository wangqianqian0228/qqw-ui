<template>
  <button 
    class="qqw-button" 
    :class="btnClasses" 
    :disabled="loading" 
    @click="$emit('handleClick',$event)">
    <qqw-icon :icon="icon" class="icon" v-if="icon"></qqw-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "qqw-button",
  props: {
    type: {
      type: String,
      default: "",
      validator: (val) => {
        if (
          val &&
          !["primary", "success", "warning", "danger", "info"].includes(val)
        ) {
          console.error(
            `必须包含${["primary", "success", "warning", "danger", "info"].join(
              "、"
            )}几种类型`
          );
        }
        return true;
      },
    },
    icon: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: "left",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClasses() {
      const arr = [];
      if (this.type) {
        arr.push(`qqw-button-${this.type}`);
      }
      if (this.iconPosition) {
        arr.push(`qqw-button-${this.iconPosition}`);
      }
      return arr;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/common.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.qqw-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  /* $type:键
  $color：值 */
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        warning: $warning,
        danger: $danger,
        info: $info
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        warning: $warning-hover,
        danger: $danger-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        warning: $warning-active,
        danger: $danger-active,
        info: $info-active
      )
  {
    &-#{$type}:active {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon + span {
    margin-left: 8px;
  }
  &-right {
    .icon {
      order: 2;
    }
    span {
      order: 1;
      margin-right: 8px;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>