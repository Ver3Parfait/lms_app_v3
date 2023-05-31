import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '@env'

const verifyToken = createAsyncThunk('user/verifytoken', async () => {
    const response = await axios.get(`${API_URL}/api/refresh_token`, {

    })
    return response.data
})

export { verifyToken }