import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button/button-group'
import Col from './layout/col'
import Row from './layout/row'



const install = (Vue) => {
  Vue.component(Button.name,Button)
  // Vue.component(Icon.name,Icon)
  Vue.component(ButtonGroup.name,ButtonGroup)
  Vue.component(Col.name,Col)
  Vue.component(Row.name,Row)
}
if(typeof window.Vue !== 'undefined'){
  install(Vue)
}
/* <script src="Vue"></script>
这里引用的Vue会挂载到全局上，而`import Vue from 'vue'`这里的Vue会在当前模块中。 */
export default {
  install
}