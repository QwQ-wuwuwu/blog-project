<script lang="ts" setup>
const blogList = defineProps(['list'])
</script>
<template>
  <div class="container">
    {{ blogList }}
  </div>
</template>
<style scoped>
.container {
  width: 55%;
  background-color: white;
  height: 100%;
}
</style>
