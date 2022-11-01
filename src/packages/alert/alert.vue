<!-- 全局弹框组件 -->
<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
let seed = 0;
function getUuid() {
  return "alert_" + seed++;
}

export default {
  data() {
    return {
      notices: [],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 传入一个弹框数据对象
    add(notice) {
      const name = getUuid();
      const obj = Object.assign(
        {
          name: name,
        },
        notice
      ); // 给传过来的notice对象增加了一个name属性。
      this.notices.push(obj);
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    // 移除弹框
    remove(name) {
      const index = this.notices.findIndex((e) => e.name === name);
      this.notices.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
.alert {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
}
</style>
