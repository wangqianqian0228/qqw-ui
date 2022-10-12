// 1. 找到任意组件的方法
// 向上查找:while 语句不断向上覆盖当前的 parent 对象，通过判断组件（即 parent）的 name 与传入的 componentName 是否一致， 直到找到最近的一个组件为止。
function findComponentUpward(context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name // 父组件的组件名称
    while (name !== componentName) {
        parent = parent.$parent
        name = parent.$options.name
    }
    /* while (parent && (!name || [componentName].indexOf(name) < 0)) {
        // 父组件未找到 为啥不写componentName ！== name
        parent = parent.$parent
        if (parent) {
            name = parent.$options.name
        }
    } */
    return parent
}
// 2. 向上查找所有的指定组件？但是组件名不是都是唯一的吗？递归组件，先留在这，后续再看
function findComponentsUpward(context, componentName) {

}
// 3. 向下查找最近的组件
function findComponentDownward(context, componentName) {

    let childs = [...context.$children]
    let children = null
    // console.log('childs', childs)
    // 遍历childs，找到就退出
    // 有个问题，这个只会找到直接的子组件，找不到孙级组件
    if (childs.length) {
        for (let i = 0; i < childs.length; i++) {
            let item = childs[i]
            if (item.$options.name === componentName) {
                children = item
                break;
            } else {
                children = findComponentDownward(item, componentName)
                // 有值（注意上面的条件，什么情况下有值？）就退出循环，因为已经找到了，没有值就继续循环找。
                if (children) {
                    break
                }
            }
        }
    }
    return children
}
// 4. 找到指定的兄弟元素:exceptMe表示是否包含自己
function findBrothersComponents(context, componentName, exceptMe = true) {
    //所有的子组件（包含自己）
    let res = [...context.$parent.$children].filter((e) => { 
       return e.$options.name === componentName
    })
    // 去除自己
    if (exceptMe) {
        let index = res.findIndex(e => e._uid === context._uid)
        console.log('index', index)
        res.splice(index, 1)
    }
    return res 
}
export {
    findComponentUpward,
    findComponentDownward,
    findBrothersComponents
}