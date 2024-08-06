import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/register', userData);
      toast.success('Registration successful');
      return response.data;
    } catch (error) {
      toast.error('Registration failed');
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
      return rejectWithValue(error.message);
    }
  }
);