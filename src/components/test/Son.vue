<template>
  <div class="son">
    <h3>我是Son组件（孙）{{job.type}}-{{job.salary}}</h3>
    <div>我是父组件传来的id -- {{id}}</div>
    <div @click="changeId">点击改变父组件id</div>
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
  emits:['update:id'],
  watch:{
  },
  setup(props,{emit}){
    let job = inject('job')
    function changeId(){
      emit('update:id', props.id+1);
    }
    return {
      job,
      changeId
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
