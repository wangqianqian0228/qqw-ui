<!--  -->
<template>
  <div ref="display"></div>
</template>

<script>
import Vue from "vue";
import getRandomStr from "@/utils/random_str.js";
export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      css: "",
      js: "",
      html: "",
      component: null,
      id: getRandomStr(),
    };
  },
  watch: {
    code(val) {
      // 当code有更新时，将当前的组件删除，重新渲染挂载
      this.destroyCode();
      this.renderCode();
    },
  },
  components: {},

  computed: {},

  mounted() {
    this.renderCode();
  },

  methods: {
    /**
     * @params  source:代码文件
     * @params  type:分割的部分
     */
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let openingTag = source.match(regex);
      if (!openingTag) return "";
      else openingTag = openingTag[0];
      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      );
    },
    splitCode() {
      const script = this.getSource(this.code, "script").replace(
        /export default/,
        "return "
      );
      const style = this.getSource(this.code, "style");
      const template =
        '<div id="app">' + this.getSource(this.code, "template") + "</div>";
      this.js = script;
      this.css = style;
      this.html = template;
    },
    renderCode() {
      this.splitCode();
      //   console.log("this.html", this.html);
      /*  <div id="app">
            <div>
                <input v-model="message">
                    {{ message }}
                 </div>
        </div> */
      //   console.log("this.css", this.css);
      //   console.log("this.js", this.js);
      /*  return {
        data() {
          return {
            message: "",
          };
        },
      }; */
      if (this.html !== "" && this.js !== "") {
        const parseStrToFunc = new Function(this.js)();
        //parseStrToFunc 是一个对象，将js字符串代码转换为代码并执行。
        // console.log(parseStrToFunc)
        parseStrToFunc.template = this.html;
        // Component;一个构造函数
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();
        console.log(this.component.$el);
        this.$refs.display.appendChild(this.component.$el);
        // 将css文件放到head标签下面
        if (this.css !== "") {
          const style = document.createElement("style");
          style.type = "text/css";
          // 给style标签加id，以便后期删除
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName("head")[0].appendChild(style);
        }
      }
    },
    destroyCode() {
      // 将组件清除，并且把style标签中的代码移除
      const $target = document.getElementById(this.id);
      if ($target) {
        $target.parentNode.removeChild($target);
      }
      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    },
  },
  beforeDestroy() {
    this.destroyCode();
  },
};
</script>
<style lang="less"></style>
