import router from '@/router'
import axios from '@/axios'
import type { User1 } from '@/type'
import { createMessageDialog } from '@/components/render'

export function loginService() {
  router.push('/index')
}
export const registerService = async (user: User1) => {
  await axios({
    method: 'post',
    url: '/register',
    data: user
  }).then(() => {
    createMessageDialog('注册成功！请前往个人中心完善资料')
  })
  router.push({ path: '/index', query: { name: user.name } })
}
