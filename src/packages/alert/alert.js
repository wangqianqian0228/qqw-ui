import notification from './notification'
// 设置为全局变量是为了防止重复渲染出alert组件，多个的话，会依次append到body上。
let messageInstance = ''
function getInstance() {
    messageInstance = messageInstance || notification.newInstance() 
    return messageInstance
}

function notice({
    duration = 1.5,
    content = ''
}) {
    let instance = getInstance()
    instance.add({
        duration: duration,
        content: content
    })
}
export default {
    info(options) {
        return notice(options)
    }
}