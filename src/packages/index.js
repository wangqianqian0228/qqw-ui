import Button from './button/button'
const install = (Vue) => {
  Vue.component('qqw-button',Button)
}
if(typeof window.Vue !== 'undefined'){
  install(Vue)
}
/* <script src="Vue"></script>
这里引用的Vue会挂载到全局上，而`import Vue from 'vue'`这里的Vue会在当前模块中。 */
export default {
  install
}