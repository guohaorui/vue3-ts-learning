// 创建用户相关仓库
import { requestLogin } from '@/api/user'
import { loginRequest, loginResponse } from '@/api/user/types'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },
  // 操作方法
  actions: {
    async userLogin(loginForm: loginRequest) {
      const response: loginResponse = await requestLogin(loginForm)
      console.log(response)

      // 如果登录成功，就用pinia仓库存储一下token
      if (response.code === 200) {
        this.token = response.data.token as string
        // 刷新页面的话pinia中的值就会清空，所以持久化存储是必要的
        SET_TOKEN(this.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(response.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
