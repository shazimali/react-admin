import { createAsyncThunk, rejectWithValue} from "@reduxjs/toolkit";
import axios from "axios";

export const  fetchUsers =  createAsyncThunk(
    'user/fetchUsers',
    async (page, { rejectWithValue }) => {
      try {
        const response = await axios.get('/users?page='+page);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }

  )

  export const  createUser =  createAsyncThunk(
    'user/createUser',
    async () => {

      try {
        const response =  await axios.get('/users/create');
        return response.data;
      } catch (err) {
        return err.response.data;
      }
    }
  )

  export const  saveUser =  createAsyncThunk(
    'user/saveUser',
    async (data, { rejectWithValue }) => {

      try {
        const response =  await axios.post('/users/store',data);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  )

  export const  editUser =  createAsyncThunk(
    'user/editUser',
    async (id, { rejectWithValue }) => {

      try {
        const response =  await axios.get('/users/edit/'+id);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  )


  export const updateUser =  createAsyncThunk(
    'user/updateUser',
    async (data, { rejectWithValue }) => {
      try {
        const response =  await axios.put('/users/update/'+data.id,data);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  )