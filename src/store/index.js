import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from './apis/userApis'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { CertificationApi } from './apis/certificationsApis'

export const store = configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer,
        [CertificationApi.reducerPath]: CertificationApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(UserApi.middleware).concat(CertificationApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useLoginMutation, useMeQuery, useRefreshtokenQuery } from './apis/userApis'
export { useCertificationsQuery, useCertificationCoursesQuery, useCourseQuery } from './apis/certificationsApis'