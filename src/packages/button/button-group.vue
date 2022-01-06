<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "qqw-button-group",
};
</script>

<style lang="scss">
@import "@/styles/common.scss";
$border-color: $primary;
.button-group {
  margin-left: 20px;
  button {
    border-radius: 0;
    border-left: 1px solid #fff;
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      border-right: 1px solid #fff;
      border-left:none;
      margin-right: -1px;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;   
    }
  }
}
</style>