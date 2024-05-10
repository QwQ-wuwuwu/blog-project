import { defineAsyncComponent, render, h } from 'vue'

export const createMessageDialog = (msg: string, close: Function = () => {}) => {
  const vnode = h(
    defineAsyncComponent(() => import('@/components/render/ConfirmCom.vue')),
    { message: msg, close }
  )
  render(vnode, document.body)
}
