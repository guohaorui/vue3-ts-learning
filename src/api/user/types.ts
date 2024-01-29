// 登录接口入参
export interface loginRequest {
  username: string
  password: string
}

export interface tokenObject {
  token: string
}
// 登录接口返参
export interface loginResponse {
  code: number
  data: tokenObject
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface checkUser {
  checkUser: userInfo
}
// 用户信息返参
export interface userInfoResponse {
  code: number
  data: checkUser
}
