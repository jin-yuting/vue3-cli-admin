<template>
<router-view></router-view>
<!-- vue3中可以没有根组件 -->
</template>

<script>
import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,} from 'vue'
export default {
  name: 'App',
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

