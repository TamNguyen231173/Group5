import { RootReducerName } from '@reduxs/reducers/type'
import { AuthState } from '@reduxs/types'

export const getToken = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.token
export const getUserInfo = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.user
export const getRefreshToken = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.refreshToken
export const getAuth = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth
export const getStatusLogin = (state: {
  root: { [RootReducerName.auth]: AuthState }
}) => state.root.auth.enableLogin
