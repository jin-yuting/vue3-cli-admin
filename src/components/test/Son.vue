<template>
  <div class="son">
    <h3>我是Son组件（孙）{{job.type}}-{{job.salary}}</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
import {ref, inject } from 'vue'
export default{
  name:'Son',
  components:{Dialog},
  
  props:{
    id: Number
  },
  watch:{
  },
  setup(props,{emit}){
    let job = inject('job')
    
    return {
      job
    }
  }
}
</script>
<style>
.son{
  background-color: yellow;
  padding:  10px;
}
</style>
