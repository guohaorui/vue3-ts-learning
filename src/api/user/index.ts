import request from '@/utils/request'
import type { loginRequest, loginResponse, userInfoResponse } from './types'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const requestLogin = (data: loginRequest) => {
  request.post<any, loginResponse>(API.LOGIN_URL, data)
}

export const requestUserInfo = () => {
  request.get<any, userInfoResponse>(API.USERINFO_URL)
}
