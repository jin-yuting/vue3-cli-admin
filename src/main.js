//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
//创建实例对象 app
import App from './App.vue'
// 挂载
createApp(App).mount('#app')
