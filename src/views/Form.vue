<template>
  <div>
    <al-form :model="userInfo" :rules="rules" ref="loginRef">
      <al-form-item label="用户名" prop="userName">
        <al-input
          v-model="userInfo.userName"
          placeholder="请输入用户名"
        ></al-input>
      </al-form-item>
      <al-form-item label="密码" prop="userPwd">
        <al-input
          v-model="userInfo.userPwd"
          placeholder="请输入密码"
        ></al-input>
      </al-form-item>
      <al-form-item>
        <button @click="goLogin">登录</button>
      </al-form-item>
    </al-form>
  </div>
</template>

<script>
import AlInput from '@/components/AlInput'
import AlFormItem from '@/components/AlFormItem'
import AlForm from '@/components/AlForm'

export default {
  components: {
    AlInput,
    AlFormItem,
    AlForm
  },
  data() {
    return {
      userInfo: {
        userName: '',
        userPwd: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    goLogin() {
      this.$refs.loginRef.validate(res => {
        if (res) {
          alert('submit')
        } else {
          console.error('验证没通过！！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
