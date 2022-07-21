<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>

    <!-- 父组件 测试组件数据双向绑定 -->
    <Son  v-model:id="id"/>
  </div>

</template>

<script>
import Son from './Son.vue'
export default {
  name:'Child',
  components:{Son},
  data(){
    return {
      id: 0
    }
  }
}
</script>
<style>
.child{
  background-color: skyblue;
  padding:  10px;
}
</style>
