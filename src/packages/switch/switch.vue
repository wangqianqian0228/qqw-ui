<!--  -->
<template>
  <div class="one-switch" @click="handleSwitch" :class="{'is-checked':value}">
    <p class="one-switch_core" ref="swCore">
      <span class="one-switch_button"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "qqw-switch",
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
        type:String,
        default:'#409eff'
    },
    inactiveColor: {
        type:String,
        default:'#dcdfe6'
    },
  },

  components: {},

  computed: {},
  watch: {
    value(newVlaue) {
      if (newVlaue) {
        this.$refs.swCore.style.borderColor  = this.activeColor;
        this.$refs.swCore.style.backgroundColor = this.activeColor;
      } else {
        this.$refs.swCore.style.borderColor  = this.inactiveColor;
        this.$refs.swCore.style.backgroundColor = this.inactiveColor;
      }
    },
  },
  mounted() {
    if (!this.value) {
      this.$refs.swCore.style.borderColor  = this.inactiveColor;
      this.$refs.swCore.style.backgroundColor = this.inactiveColor;
    } else  {
      this.$refs.swCore.style.borderColor  = this.activeColor;
      this.$refs.swCore.style.backgroundColor = this.activeColor;
    }
  },

  methods: {
    handleSwitch() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.one-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .one-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    // background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .one-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
    
}
// 选中样式
  .is-checked {
    .one-switch_core{
      .one-switch_button {
        transform: translateX(20px);
      }
    }
  }
</style>
