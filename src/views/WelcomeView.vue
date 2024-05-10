<script lang="ts" setup>
import { useRouter } from 'vue-router'

const route = useRouter()
const pushToLogin = () => {
  route.push('/login')
}
</script>
<template>
  <div class="container">
    <div class="box1">
      <h1>Welcome to ZGJ'S BLOG !</h1>
      <h2>Hello</h2>
      <p>The greatest test of courage on earth is to bear defeat without losing heart.</p>
      <p>Life is the art of drawing sufficient conclusions form insufficient premises.</p>
    </div>
    <div>
      <img src="/src/assets/loading.gif" alt="图片加载失败" />
    </div>
    <div class="box2">
      <el-button id="btn" @click="pushToLogin"><span>Click Me to Start</span></el-button>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1,
h2 {
  font-style: italic;
  color: white;
}
p {
  color: white;
  font-weight: 1000;
}
.box1 {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#btn {
  border: 2px solid white;
  background-color: turquoise;
}
#btn:hover {
  transform: scale(1.1);
}
span {
  color: white;
  font-size: large;
}
</style>
