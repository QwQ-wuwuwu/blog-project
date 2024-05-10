<script lang="ts" setup>
import { User, Unlock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { type User1 } from '@/type'
import { registerService } from '@/service/UserService'

const number = new Date().valueOf().toString()
const user = ref<User1>({
  role: 0,
  number: number,
  visitedCount: 0,
  blogCount: 0
})
const password1 = ref()
const password2 = ref()
const register = () => {
  if (password1.value !== password2.value) {
    alert('两次密码输入不同')
    return
  }
  user.value.password = password2.value
  registerService(user.value)
  user.value = {}
  password1.value = ''
  password2.value = ''
}
</script>
<template>
  <div class="container">
    <p style="font-size: large; font-style: italic">注册一个新账号</p>
    <el-input
      v-model="user.name"
      style="margin-top: 7%; width: 50%"
      placeholder="给自己起个炫酷的名字吧"
      :suffix-icon="User"
    ></el-input>
    <el-input
      v-model.trim="password1"
      type="password"
      style="margin-top: 5%; width: 50%"
      placeholder="请设置密码"
      :suffix-icon="Unlock"
    ></el-input>
    <el-input
      v-model.trim="password2"
      type="password"
      style="margin-top: 5%; width: 50%"
      placeholder="请再次确认密码"
      :suffix-icon="Unlock"
    ></el-input>
    <el-radio-group v-model="user.gender" size="small" style="margin-top: 5%">
      <el-radio value="1" border>男生</el-radio>
      <el-radio value="2" border>女生</el-radio>
    </el-radio-group>
    <el-button @click="register" style="margin-top: 10%; width: 50%; background-color: turquoise"
      >注册此账号</el-button
    >
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
