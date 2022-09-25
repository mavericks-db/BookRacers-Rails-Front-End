import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  user: '',
  error: '',
  authenticated: false,
};

const remToken = (token) => {
  localStorage.removeItem('token', token);
};

export const logout = createAsyncThunk('user/logout', (user) => axios
  .get(`${BASE_URL}logout`, {
    user,
  })
  .then((response) => {
    remToken();
    return response.data;
  }));

const userSlice = createSlice({
  name: 'userLogout',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
      state.authenticated = false;
    });
  },
  /* eslint-enable */
});

export default userSlice.reducer;