/** 
 * 提前写好的Vue组件有个局限性，就是：
1. 模板需要提前预知，需要动态渲染组件的情况下，模板可能需要从服务端去获取
2. 一般的组件都是挂载到app下面的，但是某些情况下，需要挂载到body上。传统方法写的组件可能就不适用了。
虽说平时开发不会遇到这种，但是自己在封装组件的时候，还是会出现这种情况的，比如系统自带的`alert()`框.
*/

import Vue from 'Vue'
// 1. 用Vue.extend定义了一个组件，准备挂到body上
const alertComponent = Vue.extend({
    template: '<div>{{message}}</div>',
    data() {
        return {
            message: '我是一个弹框'
        }
    }
})
// 目测alertComponent是一个构造函数，可以创建Vue实例,也就是一个组件
// 挂载方法：$mount()用来渲染组件。
// 1.  
    const component = new alertComponent().$mount()
    document.body.appendChild(component.$el)
    
// 2.  
    new alertComponent().$mount('#app')
    
// 3.  
    new alertComponent({el: '#app'})

// 2. 可以创建Vue实例，然后用render函数进行渲染组件
    

