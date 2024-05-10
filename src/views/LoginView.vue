<script lang="ts" setup>
import { defineAsyncComponent, type Component, ref, computed } from 'vue'

const components: { name: string; component: Component }[] = [
  {
    name: '登录',
    component: defineAsyncComponent(() => import('@/components/login/LoginCom.vue'))
  },
  {
    name: '注册',
    component: defineAsyncComponent(() => import('@/components/login/RegisterCom.vue'))
  }
]
const curIndex = ref(0)
const curComponent = computed(() => components[curIndex.value].component)
const activeStyle = computed(() => (index: number) => {
  return curIndex.value === index
    ? { 'background-color': 'white' }
    : { 'background-color': 'whitesmoke' }
})
</script>
<template>
  <div class="container">
    <div>
      <h2 style="font-style: italic; color: white">~想要浏览或发布博客首先要注册登录哟！</h2>
    </div>
    <div class="login">
      <div style="display: flex; justify-content: space-evenly">
        <div
          class="nav"
          v-for="(c, index) of components"
          :key="index"
          @click="curIndex = index"
          :style="activeStyle(index)"
        >
          <span>{{ c.name }}</span>
        </div>
      </div>
      <div style="margin-top: 10px">
        <Component :is="curComponent"></Component>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin-top: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.login {
  width: 30vw;
  height: 60vh;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 5px 5px 9px 0 rgb(122, 120, 120);
}
.nav {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  font-style: italic;
  color: turquoise;
  font-size: larger;
  font-weight: 900;
}
</style>
