<script setup lang="ts">
import TopComponent from '../components/layout/TopComponent.vue'
import LeftComponent from '../components/layout/LeftComponent.vue'
import AmongComponent from '../components/layout/AmongComponent.vue'
import RightComponent from '../components/layout/RightComponent.vue'
import { ref } from 'vue'

const blogList = ref()
const saveInput = (value: string) => {
  blogList.value = value
}
</script>

<template>
  <div class="container">
    <div class="header">
      <TopComponent @getInput="saveInput"></TopComponent>
    </div>
    <!-- <div style="height: 7vh"></div> -->
    <div class="main">
      <LeftComponent />
      <AmongComponent :list="blogList" />
      <RightComponent />
    </div>
  </div>
</template>

<style scoped>
.main {
  margin-top: 1vh;
  width: 100%;
  /* height: 100vh; */
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
}
</style>
