<template>
<div class="login-form">
  <el-form :model="ruleForm" :rules="rules" ref="form" label-width="120px"
  @keyup.enter.native="login">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login" :disabled="!canSubmit">登录</el-button>
  </el-form-item>
</el-form>
</div>

</template>

<script>
import {ref,reactive,computed} from 'vue'
import { ruleFormRef,FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
export default {
  name: 'Login',
  setup(){
    const router = useRouter();
    let ruleForm =reactive({
      username: '',
      pass:''
    })
    let canSubmit = computed({
      get:()=>{
        const {username,pass} = ruleForm
        return Boolean(username && pass)
      }
    })
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (ruleForm.pass !== '') {
          if (!ruleFormRef.value) return
          ruleFormRef.value.validateField('pass', () => null)
        }
        callback()
      }
    }
    const rules = reactive<FormRules>({
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      pass: [{ validator: validatePass, trigger: 'blur' }]
    })
    function login(){
        const token = localStorage.setItem('token','123')

      router.push('/test')
      // this.$api.users.login(this.ruleForm).then(()=>{
      //   this.$router.push('/test')
      // }).catch((err)=>{
      //   this.$message.error('错误')
      // })
    }



     return {
       ruleForm,
       login,
       canSubmit,
       rules
     }
  }
}
</script>

<style>
.login-form{
  width:  500px;
  margin: 0 auto;
  margin-top: 200px;
}
</style>
