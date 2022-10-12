<!--  -->
<template>
  <div class="grand-son1" ref="grandSon1">我是第一个孙级组件</div>
</template>

<script>
export default {
    name:'grandson1',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {}
}

</script>
<style  lang='scss'>
.grand-son1{
    background-color: brown;
}
</style>