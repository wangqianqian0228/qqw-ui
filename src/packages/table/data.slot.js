let dataSlot = [{
        name: '王小明',
        age: 18,
        birthday: '919526400000',
        address: '北京市朝阳区芍药居'
    },
    {
        name: '张小刚',
        age: 25,
        birthday: '696096000000',
        address: '北京市海淀区西二旗'
    },
    {
        name: '李小红',
        age: 30,
        birthday: '563472000000',
        address: '上海市浦东新区世纪大道'
    },
    {
        name: '周小伟',
        age: 26,
        birthday: '687024000000',
        address: '深圳市南山区深南大道'
    }
]
let columnsSlot = [
    {
        title: '姓名',
        slot: 'name'
    },
    {
        title: '年龄',
        slot: 'age'
    },
    {
        title: '出生日期',
        slot: 'birthday'
    },
    {
        title: '地址',
        slot: 'address'
    }, 
    {
        title: '操作',
        slot: 'action'
    }
]

export {
    columnsSlot,
    dataSlot
}