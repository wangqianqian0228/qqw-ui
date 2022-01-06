<template>
  <div class="qqw-col" :style="gutterClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'qqw-col',
  props:{
    gutter:Number,
    justify:{
      type: String,
      validator(val){
          const arr = ['center','start','end','space-around','space-between']
          if(val && !arr.includes(val)){
            console.error(`justify必须为${arr.join('、')}中的一种`)
          }
          return true
        }
    }
  },
  computed:{
    gutterClass(){
      // this.justify如果是下面的两种，在前面加上flex标识
      let key = ['start','end'].includes(this.justify)? `flex-${this.justify}`: this.justify
      let style = {}
        // 要在style对象里面加属性
        style = {
          ...style,
          // 去除左右边距
          marginLeft: -this.gutter + 'px',
          marginRight: -this.gutter + 'px',
          justifyContent: key
        }
        return style
    }
  },
  mounted(){
    // 遍历子元素，把每一个子元素的data中的gutter改成props传来的这个
    console.log(111,this.$children) //获取子组件实例
    this.$children.forEach(child => {
      child.gutter = this.gutter
    });
  }
}
</script>

<style lang="scss">
.qqw-col{
  display: flex;
}
</style>