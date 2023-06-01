import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, toggleTheme } from './slices/themeSlice'
import { UserApi } from './apis/userApis'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { CertificationApi } from './apis/certificationsApis'


const store = configureStore({
    reducer: {
        theme: themeReducer,
        [UserApi.reducerPath]: UserApi.reducer,
        [CertificationApi.reducerPath]: CertificationApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(UserApi.middleware, CertificationApi.middleware)
    }
})

setupListeners(store.dispatch)

export { store, toggleTheme }
export { useLoginMutation, useMeQuery, useRefreshtokenQuery } from './apis/userApis'
export { useCertificationsQuery, useCertificationCoursesQuery, useCourseQuery } from './apis/certificationsApis'