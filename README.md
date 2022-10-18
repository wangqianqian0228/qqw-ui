# qqw-ui

表单组件的校验和重置：
通过ref来获取表单，表单form里面定义了一个数组，用来存储所有的form-item,什么时候存储？子组件在mouted函数中去（dispatch）触发form里面的方法，这样form里面就有了所有的form-item，也就可以调用每个form-item中的方法了。

form：
主要做了这些事：依次对form-item进行校验，对所有form-item进行重置，但是具体的校验方法和重置方法都是在具体的form-item里面的写的。form-item可以能到具体的哪个item.`this.form.model[this.prop]`
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
