export default {
    functional: true,
    props: {
        row: Object,
        column: Object,
        index: Number,
        render: Function,
        that: Object
    },
    
    // 一个组件的render函数会自动执行
    // ctx: 一个上下文对象
    render: (h, ctx) => {
        const params = {
            row: ctx.props.row,
            column: ctx.props.column,
            index: ctx.props.index,
            that: ctx.props.that,
        }
        // 直接将传入的参数属性进行render返回
        // 直接执行传过来的render方法。
        return ctx.props.render(h, params);
    }
}
// 默认返回一个组件