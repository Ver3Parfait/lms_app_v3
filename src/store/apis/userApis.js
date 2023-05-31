// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { API_URL } from '@env'

// const UserApi = createApi({
//     reducerPath: 'user',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${API_URL}`,
//         prepareHeaders: async (headers) => {
//             headers.set('Content-Type', 'application/json')
//             let token = await AsyncStorage.getItem('token');
//             if (token) {
//                 headers.set('token', token)
//             }
//         }
//     }),
//     endpoints(builder) {
//         return {
//             login: builder.mutation({
//                 query: (body) => {
//                     return {
//                         url: '/authentication_token',
//                         method: 'POST',
//                         body: body
//                     }
//                 }
//             }),
//             me: builder.query({
//                 query: (token) => {
//                     return {
//                         url: '/api/me',
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         },
//                         method: 'GET'
//                     }
//                 }
//             }),
//             refreshtoken: builder.query({
//                 query: (token) => {
//                     return {
//                         url: '/api/refresh_token',
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         },
//                         method: 'GET'
//                     }
//                 }
//             })
//         }
//     }
// })

// export const { useLoginMutation, useMeQuery, useRefreshtokenQuery } = UserApi
// export { UserApi }