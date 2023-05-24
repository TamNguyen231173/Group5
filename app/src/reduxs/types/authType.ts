export interface UserInfo {
  name: string
  email: string | undefined
  avatar: string
}

export interface AuthState {
  token: string
  refreshToken: string
  user: UserInfo
  enableLogin: boolean
}
