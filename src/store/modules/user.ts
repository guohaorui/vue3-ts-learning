// 创建用户相关仓库
import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
  state: () => {
    return []
  },
  // 操作方法
  actions: {
    userLogin() {
      console.log('login')
    },
  },
  getters: {},
})

export default useUserStore
