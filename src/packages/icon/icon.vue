<template>
  <svg class="qqw-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
</svg>
</template>

<script>
import './icon'
export default {
  name: 'qqw-icon',
  props:{
    icon:{
      type:String
    }
  }
}
</script>

<style lang="scss">
.qqw-icon{
  width: 16px;
  height: 16px;
}
</style>