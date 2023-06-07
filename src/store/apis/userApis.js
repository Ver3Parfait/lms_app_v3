import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json')
            AsyncStorage.getItem('token').then((res) => {
                res && headers.set('Authorization', `Bearer ${res}`)
            })
            return headers
        }
    }),
    endpoints(builder) {
        return {
            login: builder.query({
                query: (body) => {
                    return {
                        url: '/authentication_token',
                        method: 'POST',
                        body: body,
                    }
                }
            }),
            me: builder.query({
                query: () => {
                    return {
                        url: '/api/me',
                        method: 'GET',
                    }
                }
            }),
            refreshtoken: builder.query({
                query: () => {
                    return {
                        url: '/api/refresh_token',
                        method: 'GET',
                    }
                }
            })
        }
    }
})

export const { useLoginQuery, useMeQuery, useRefreshtokenQuery } = UserApi
export { UserApi }