<template>
  <div class="son">
    <h3>我是Son组件（孙）{{job.type}}-{{job.salary}}</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
import {inject } from 'vue'
export default{
  name:'Son',
  components:{Dialog},
  setup(){
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
