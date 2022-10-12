<!--  -->
<template>
  <div class="grand-parent">我是曾父级组件
    <div>
        <Parent></Parent>
    </div>
  </div>
</template>

<script>
import Parent from './parents'
export default {
  data () {
    return {
    };
  },

  components: {
    Parent
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  lang='scss'>
.grand-parent{
    background: pink;
}
</style>