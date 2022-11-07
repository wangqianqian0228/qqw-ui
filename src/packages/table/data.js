let columns = [{
        title: '姓名',
        key: 'name'
    },
    {
        title: '年龄',
        key: 'age'
    },
    // render函数写好了，咋用呢？
    // 这里的render是一个普通的函数
    // @params h createElement
    // @params 第二个参数，是从render.js传过来的对象

    {
        title: '出生日期',
        render: (h, {
            row
        }) => {
            const date = new Date(parseInt(row.birthday));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const birthday = `${year}-${month}-${day}`;
            return h('span', birthday);
        }
    },
    {
        title: '地址',
        key: 'address'
    }, {
        title: '操作',
        render: (h, {
            row,
            column,
            index,
            that
        }) => {
            if (index === that.editIndex) {
                // 处于编辑状态
                // 创建一个input，值改为当前行的值
                return [
                    h('button', '保存', {
                        on: {
                            click: () => {
                                
                            }
                        }
                    }),
                    h('button', '取消')

                ]
            } else {
                // 渲染编辑和取消按钮
                return h('button', {
                    on: {
                        click: () => {
                            that.editName = row.name
                            that.editAge = row.age
                            that.editBirthday = row.birthday
                            that.address = row.address
                            that.editIndex = index
                        }
                    }
                }, '修改')
            }
        }
    }
]
let data = [{
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
export {
    columns,
    data
}