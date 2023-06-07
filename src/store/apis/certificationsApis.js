import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CertificationApi = createApi({
    reducerPath: 'certifications',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        prepareHeaders: (headers) => {
            let token = AsyncStorage.getItem('token');
            headers.set('Accept', 'application/json')
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        }
    }),
    endpoints(builder) {
        return {
            Certifications: builder.query({
                query: (id) => {
                    return {
                        url: `/api/users/${id}/certifications`,
                        method: 'GET'
                    }
                }
            }),
            CertificationCourses: builder.query({
                query: (Certification_id) => {
                    return {
                        url: `/api/certifications/${Certification_id}/courses`,
                        method: 'GET'
                    }
                }
            }),
            Course: builder.query({
                query: (Course_id) => {
                    return {
                        url: `/api/courses/${Course_id}`,
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useCertificationsQuery, useCertificationCoursesQuery, useCourseQuery } = CertificationApi
export { CertificationApi }