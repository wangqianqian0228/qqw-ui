<!--  -->
<template>
  <div>
    <label v-if="label" style="margin-right:15px">{{label}}:</label>
    <slot></slot>
  </div>
</template>

<script>
/*
form-item：
props: label: 标签文本;
       prop: 对应form里面的model里面的属性
 */
import emitter from '@/utils/emmiter'
export default {
  name: "qqw-form-item",
  mixins:[emitter],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    if(this.prop){
      this.dispatch('qqw-form','on-form-item-add',this)
    }
  },
  destroyed(){
    if(this.prop){
      this.dispatch('qqw-form','on-form-item-remove',this)
    }
  },

  methods: {},
};
</script>
<style lang="less"></style>
