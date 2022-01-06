<template>
  <div class="qqw-row" :class="rowClasses" :style="gutterClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'qqw-row',
  props:{
    span:{
      type: Number, // 大小
      default: 24
    }
  },
  
  data(){
    return {
      gutter:0
    }
  },
  computed:{
    rowClasses(){
      const classes = []
      classes.push(`qqw-row-${this.span}`)
      if(this.offest){
      classes.push(`qqw-row-offest-${this.offest}`)
      }
      return classes
    },
    // 间距样式
    gutterClass(){
      if(this.gutter){
        let style = {}
        // 要在style对象里面加属性
        style = {
          ...style,
          paddingLeft: this.gutter/2 + 'px',
          paddingRight: this.gutter/2 + 'px'

        }
        return style
      }
    }
  },
  mounted(){
    console.log(this.gutter)
  }
}
</script>

<style lang="scss">
.qqw-row{
  display: inline-block;
}
@for $i from 1 through 24{
  .qqw-row-#{$i}{
    width: ($i/24) *100%
  }
  .qqw-row-offest-#{$i}{
    margin-left: ($i/24) *100%;
  }
}
</style>