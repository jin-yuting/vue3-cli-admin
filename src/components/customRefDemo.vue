<template>
<h3>自定义个ref</h3>
<input v-model="keyWord" type="text">
<h3>{{ keyWord }}</h3>
</template>

<script>
import {customRef} from 'vue'
export default {
  name:'customRefDemo',
  setup(){
    //自定义一个ref
    function myRef(value,delay){
      let timer
      return customRef((track,triger)=>{
        return {
          get(){
            track() // 通知vue追踪value的变化
            return value
          },
          set(newValue){
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              triger() // 通知vue去重新解析模板
            },delay)
          }
        }
      })
    }

    // let keyWord = ref('hello')
    let keyWord = myRef('hello',500)
    return {
      keyWord
    }
  }
}
</script>
