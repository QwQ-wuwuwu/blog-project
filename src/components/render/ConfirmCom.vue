<script lang="ts" setup>
import { ref, render } from 'vue'

const props = defineProps<{ message: string; close: Function }>()
const centerDialogVisible = ref(true)
const close = () => {
  props.close()
  render(null, document.body)
}
</script>
<template>
  <el-dialog @close="close" v-model="centerDialogVisible" title="提示消息" width="30%" align-center>
    <span>{{ props.message }}</span>
  </el-dialog>
</template>
