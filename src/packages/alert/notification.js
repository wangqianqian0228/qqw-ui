import Vue from 'vue'
import Alert from './alert.vue'

Alert.newInstance = properties => {
    const props = properties || {}
    const instance = new Vue({
        data: props,
        //将Alert组件进行render,并且传入了props选项
        render(h) {
            return h(Alert, {
                props: props
            })
        }
    })
    // 将组件进行渲染和挂载
    const component = instance.$mount()
    // 挂载到body
    document.body.appendChild(component.$el)
    // 该alert就是render后的组件的实例
    const alert = instance.$children[0]
    // console.log('alert', instance,alert)
    return {
        add(noticeProps) {
            alert.add(noticeProps)
        },
        remove(name) {
            alert.add(name)
        }
    }
}
export default Alert