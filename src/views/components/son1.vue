<!--  -->
<template>
  <div class="son1">我是第二个儿子
    <grandSon1></grandSon1>
  </div>
</template>

<script>
import grandSon1 from './grandSon1.vue'
export default {
  name:'son1',
  data () {
    return {
    };
  },

  components: {
    grandSon1
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  lang='scss'>
.son1{
    display: inline-block;
    background: blue;
}
</style>