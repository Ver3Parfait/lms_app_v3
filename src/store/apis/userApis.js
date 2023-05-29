import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@env'

const UserApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        accept: 'application/json'
    }),
    endpoints(builder) {
        return {
            login: builder.mutation({
                query: (body) => {
                    return {
                        url: '/authentication_token',
                        body: body,
                        method: 'POST'
                    }
                }
            }),
            me: builder.query({
                query: (token) => {
                    return {
                        url: '/api/me',
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        method: 'GET'
                    }
                }
            }),
            refreshtoken: builder.query({
                query: (token) => {
                    return {
                        url: '/api/refresh_token',
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useLoginMutation, useMeQuery, useRefreshtokenQuery } = UserApi
export { UserApi }