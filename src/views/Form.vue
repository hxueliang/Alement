<template>
  <div>
    <al-form :model="userInfo" :rules="rules">
      <al-form-item label="用户名">
        <al-input v-model="userInfo.userName" placeholder="请输入用户名"></al-input>
      </al-form-item>
      <al-form-item label="密码">
        <al-input v-model="userInfo.userPwd" placeholder="请输入密码"></al-input>
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
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
