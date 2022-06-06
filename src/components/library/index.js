import Message from './Message'

// context(目录路径，是否加载子目录，加载文件的匹配正则)
const importFn = require.context('./', false, /\.vue$/)

export default {
  install(app) {
    // 根据keys批量注册
    importFn.keys().forEach((path) => {
      // 导入组件
      const component = importFn(path).default
      // 进行注册
      app.component(component.name, component)
    })
    // 定义一个原型函数
    app.config.globalProperties.$message = Message
  },
}
