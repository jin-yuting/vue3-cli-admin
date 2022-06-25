//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
//创建实例对象 app
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 导入element plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// 挂载
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
