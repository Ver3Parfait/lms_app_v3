import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            let token = AsyncStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints(builder) {
        return {
            login: builder.mutation({
                query: (body) => {
                    return {
                        url: '/authentication_token',
                        method: 'POST',
                        body: body
                    }
                }
            }),
            me: builder.query({
                query: () => {
                    return {
                        url: '/api/me',
                        method: 'GET'
                    }
                }
            }),
            refreshtoken: builder.query({
                query: () => {
                    return {
                        url: '/api/refresh_token',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useLoginMutation, useMeQuery, useRefreshtokenQuery } = UserApi
export { UserApi }