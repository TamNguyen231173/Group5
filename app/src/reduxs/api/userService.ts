import { method } from 'lodash';
import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { GetLoginResponse, GetVerifyResponse, LoginBody, GetRegisterResponse, RegisterBody } from './type'

export const userService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<GetLoginResponse, LoginBody>({
      query: body => ({
          url: EndPoint.login,
          body: body,
          method: 'POST',
      }),
    }),
   verify: builder.query<GetVerifyResponse, string>({
    query: (code: string)=> EndPoint.verify(code)
   }),
  register: builder.mutation<GetRegisterResponse, RegisterBody>({
    query: body =>({
        url: EndPoint.register,
        method:'POST',
        body: body
    }),
  })
  }),
})

export const { useLoginMutation, useLazyVerifyQuery, useRegisterMutation } = userService;
