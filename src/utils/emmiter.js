// 分发与广播
// 分发给子组件

export default {
    methods: {
        broadcast(componentName, eventName, params) {
            let childs = this.$children
            let name = childs.$options.name
            for (let child of childs) {
                if ([componentName].indexOf(name) > -1) {
                    child.$emit.apply(child, [componentName, eventName].concat(params))
                    break;
                } else {
                    broadcast.apply(child, [componentName, eventName].concat(params))
                }
            }

        },

        dispatch(componentName, eventName, params) {
            let parent = this.$parent
            let name = parent.$options.name
            while ([componentName].indexOf(name) < 0) {
                parent = parent.$parent
                name = parent.$options.name
            }
            parent.$emit.apply(parent, [eventName].concat(params))
        }
    },
}