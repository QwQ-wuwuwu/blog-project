<script lang="ts" setup>
import { User, Unlock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { type User1 } from '@/type'
import { loginService } from '@/service/UserService'

const login = () => {
  loginService()
}
const user = ref<User1>({})
</script>
<template>
  <div class="container">
    <p style="font-size: large; font-style: italic">账号密码登录</p>
    <el-input
      v-model.number="user.number"
      style="margin-top: 10%; width: 50%"
      placeholder="请输入账号"
      :suffix-icon="User"
    ></el-input>
    <el-input
      v-model.trim="user.password"
      type="password"
      style="margin-top: 10%; width: 50%"
      placeholder="请输入密码"
      :suffix-icon="Unlock"
    ></el-input>
    <el-button @click="login" style="margin-top: 10%; width: 50%; background-color: turquoise"
      >登录</el-button
    >
    <span style="margin-top: 10%">登录即同意<a href="">隐私政策</a></span>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
