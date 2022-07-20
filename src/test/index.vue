<template>
<!-- vue3中可以没有根组件 -->
<h1>姓名：{{name}}</h1>
<h1>年龄：{{age}}</h1>
<h2>工作：{{job.type}}</h2>
<p>使用 store —— {{this.$store.state.goods}}</p>
<button @click="asyHello">信息</button>
<button @click="changeInfo">修改人的信息</button>
<hr>
<Demo @hello="showHelloMsg" msg="你好呀" school="学习">
  <template v-slot:qwe>
    <span>学校</span>
  </template>
</Demo>
<customRefDemo />
<div class="ye">
  <h3>我是祖组件: {{type}}--{{salary}}</h3>


  <Child />

</div>
</template>

<script>
// import {h} from 'vue'
import Demo from '../components/test/Demo.vue'
import customRefDemo from '../components/test/customRefDemo.vue'
import Child from '../components/test/Child.vue'

import {ref,reactive, toRefs,provide,
onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  name: 'App',
  components:{Demo,customRefDemo,Child},
  setup(){
    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(()=>{

    })
    onMounted(()=>{

    })
    onBeforeUpdate(()=>{

    })
    onUpdated(()=>{

    })
    onBeforeUnmount(()=>{

    })
    onUnmounted(()=>{

    })
    // API end
    // 数据 - 定义基本数据
    let name = ref('张三')
    let age = ref(18)
    // 定义复杂类型数据
    let job = reactive({
      type:'前端开发工程师',
      salary:'30k',
      a:{
        b:{
          c:999
        }
      }
    })
    provide('job',job)
    function showHelloMsg(value){
      alert(`你好，我是传过来的${value}`)
    }
    function asyHello(){
      alert(`我叫${name.value},今年${age.value},你好呀`)
    }
    function changeInfo(){
      name.value = '李四',
      job.type ='UI设计师'
    }


    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      ...toRefs(job),
      asyHello,
      changeInfo,
      showHelloMsg
    }

    // 返回一个函数（渲染函数）
    // return ()=> h('h1','你好')
  }
}
</script>

<style>
.ye{
  width: 800px;
  background-color: gray;
  padding: 10px;
}
</style>

