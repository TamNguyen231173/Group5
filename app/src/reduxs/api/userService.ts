import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { GetLoginResponse, GetVerifyResponse, LoginBody, GetRegisterResponse, RegisterBody } from './type'

export const userService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<GetLoginResponse, LoginBody>({
      query: (body: LoginBody) => {
        return {
          url: EndPoint.login,
          body: body,
          method: 'POST',
        }
      },
    }),
   verify: builder.query<GetVerifyResponse, string>({
    query: (code: string)=> EndPoint.verify(code)
   }),
  register: builder.query<GetRegisterResponse, RegisterBody>({
    query: (body: RegisterBody) =>{
      return{
        url: EndPoint.register,
        body: body,
        method:'POST'
      }
    }
  })
  }),
})

export const { useLoginQuery, useVerifyQuery, useRegisterQuery } = userService
