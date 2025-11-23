import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../utils/axios'

export const loginUser = createAsyncThunk('auth/login', async(data, thunkAPI) => {
    try {
        const res = await axios.post('/auth/login', data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data || error.message)
    }
})

export const registerUser = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        const res = await axios.post('/auth/register', data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
})

export const checkAuth = createAsyncThunk('/auth/refresh', async(data, thunkAPI) => {
    try {
        const res = await axios.get('/auth/refresh', data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
});

export const logoutUser = createAsyncThunk('/auth/logout', async(data, thunkAPI) => {
    try {
        const res = await axios.get('/auth/logout', data);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false
    },

    reducers: {
        logout: (state) => {
            state.user = null
            // state.loading = false;

        }
    },

    extraReducers: (build) => {
        build

        .addCase(loginUser.pending, (state) => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state,action) => {
            state.loading = false,
            state.user = action.payload.User;
        })

        // Register User
        .addCase(registerUser.pending, (state) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.User
            state.loading = false
        })

        .addCase(checkAuth.fulfilled, (state, action) => {
            state.user = action.payload
        })

        .addCase(logoutUser.fulfilled, (state, action) => {
            state.user = null,
            state.loading = false
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
