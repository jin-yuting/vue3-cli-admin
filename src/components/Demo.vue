<template>
<!-- vue3中可以没有根组件 -->
<h1>一个人的信息</h1>
姓名：<input type="text" v-model="firstName" />
名：<input type="text" v-model="lastName" />

<span>全名：{{fullName}}</span>
<br />
全名：<input type="text" v-model="fullName" />
<br />
<button @click="text">Demo组件测试hello事件</button>

<h2>watch测试：{{sum}}</h2>
<h2>当前信息：{{msg}}</h2>
<button @click="sum++">点我+1</button>
<button @click="msg+='!'">修改信息</button>
<br />
<h2>当前鼠标坐标：x:{{point.x}},y:{{point.y}}</h2>
<hr />
</template>
<script>
import {ref,reactive,computed,watch,toRef,toRefs,shallowReactive} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  props:['msg','school'],
  setup(props,context){
    console.log(props,context)
    // let msgPerson = shallowReactive({只考虑第一层数据的响应式
    let msgPerson = reactive({
      firstName:'李四',
      lastName: '张三',
      job:{
        a:1,
        j1:{
          salary:2
        }
      }
    })
    let point = usePoint();
    function text(){
      context.emit('hello',666)
    }

    // 计算属性 - 简写
    // let fullName = computed({
    //   return msgPerson.firstName + '-' + msgPerson.lastName
    // })
    //计算属性 - 完整写法
    let fullName = computed({
      get(){
        return msgPerson.firstName + '-' + msgPerson.lastName
      },
      set(value){
        const nameArr = value.split('-');
        msgPerson.firstName = nameArr[0]
        msgPerson.lastName = nameArr[1]
      }
    })

    // watch 监听
    let sum = ref(0)
    let msg = ref('你好呀')
    //情况一：监视一个响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('变化了',newValue,oldValue)
    // })

    //情况二：监视一多响应式数据
    watch([sum,msg],(newValue,oldValue)=>{
      console.log('变化了',newValue,oldValue)
    },{immediate: true})

    /**
     * 情况三：监视reactive定义的数据
     * 1.注意1：无法获取oldValue
     * 1.注意2：强制开始了深度监视（deep配置：true）
    */
    /* watch(msgPerson,(newValue,oldValue)=>{
      console.log('变化了',newValue,oldValue)
    },{deep:false}) //此处deep无效*/

    //情况四：监视reactive所定义的一个响应式数据中的某个属性
    /* watch(()=>msgPerson.firstName,(newValue,oldValue)=>{
      console.log('变化了',newValue,oldValue)
    })  */

    //情况五：监视reactive所定义的一个响应式数据中某些属性
     /* watch([()=>msgPerson.firstName,()=>msgPerson.lastName](newValue,oldValue)=>{
      console.log('变化了',newValue,oldValue)
    })  */

    //特殊情况: reactive中某属性是一个对象 deep生效
    /* watch(()=>msgPerson.job,(newValue,oldValue)=>{
      console.log('变化了',newValue,oldValue)
    },{deep:true}) */





  //toref
  const name1 = toRef(msgPerson,'firstName')
  const name2 = toRefs(msgPerson)
  console.log(name1)
  console.log(name2)




    return {
      msgPerson,
      /* firstName:toRef(msgPerson,'job'),
      salary:toRef(msgPerson.job.j1,'salary'), */
      ...toRefs(msgPerson),
      text,
      fullName,
      sum,
      point
    }
  }


}
</script>

