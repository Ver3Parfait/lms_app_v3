import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        password: ''
    },
    reducers: {
        reducers: {
            changeUserName(state, action) {
                state.username = action.payload
            },
            changePassword(state, action) {
                state.password = action.payload
            }
        },
        setCredentials: (state, actions) => {
            state.username = actions.email
            state.password = actions.password
        },
    },
})

export const { setCredentials, changeUserName, changePassword } = authSlice.actions
export const AuthReducer = authSlice.reducer
