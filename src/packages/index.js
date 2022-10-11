import Button from './button/button'
// import Icon from './icon/icon'
import ButtonGroup from './button/button-group'
import Col from './layout/col'
import Row from './layout/row'
import Dialog from './dialog/dialog.vue'
import Input from './input/input.vue'
import Switch from './switch/switch.vue'


const componentsName = [
  Button,
  ButtonGroup,
  Col,
  Row,
  Dialog,
  Input,
  Switch
]
const install = (Vue) => {
  componentsName.forEach((e) => {
    Vue.component(e.name, e)
  })
}
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
/* <script src="Vue"></script>
这里引用的Vue会挂载到全局上，而`import Vue from 'vue'`这里的Vue会在当前模块中。 */
export default {
  install
}