<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import router from '@/router'
import { ref } from 'vue'

const pushIndex = () => {
  router.push('/index')
}
const pushBlog = () => {
  router.push('/blog')
}
const pushMyself = () => {
  router.push('/user')
}
const pushLogout = () => {
  router.push('/')
}

const input = ref('')
const emit = defineEmits(['getInput'])

const path = router.currentRoute.value.path
</script>

<template>
  <div class="container">
    <div>
      <span style="font-size: xx-large; font-weight: 900; font-style: italic">ZGJ'S BLOG__</span>
    </div>
    <div class="nav" @click="pushIndex">
      <el-icon style="color: white"><HomeFilled /></el-icon>
      <span>首页</span>
    </div>
    <div class="nav" @click="pushBlog">
      <el-icon style="color: white"><Promotion /></el-icon>
      <span>发表博客</span>
    </div>
    <div>
      <el-input
        v-model="input"
        :disabled="path !== '/index'"
        style="width: 20vw"
        placeholder="输入关键字搜索博客"
        @input="emit('getInput', input)"
      >
        <template #append>
          <el-button :icon="Search" @click="emit('getInput', input)" />
        </template>
      </el-input>
    </div>
    <div class="nav" @click="pushMyself">
      <el-icon style="color: white"><UserFilled /></el-icon>
      <span>你好!{{}}</span>
    </div>
    <div class="nav" @click="pushLogout">
      <el-icon style="color: white"><SwitchButton /></el-icon>
      <span>退出</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* position: fixed;
  top: 0; */
  height: 7vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 0.5px 5px 0 rgb(43, 42, 42);
  /* background-color: turquoise; */
}
.nav {
  display: flex;
  align-items: center;
  height: 100%;
}
.nav:hover {
  transform: scale(1.3);
}
span {
  color: white;
}
</style>
