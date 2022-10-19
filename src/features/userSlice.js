import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "../constants";
import { fetchUsers, saveUser, createUser , editUser, updateUser} from "../services/userService";

const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
})

const userSlice = createSlice({
    name: "user",
    initialState: userAdapter.getInitialState({
        loading: false,
        status: null,
        page: 1,
        message: "",
        roles: []
    }),
    reducers:{
        pageByNumber: (state,{payload}) => {
          state.page = payload.page
        }
      },
    extraReducers: {

      //Fetch Users
      [fetchUsers.pending]: (state, action) => {
        state.loading = true
        state.status = HTTP_STATUS.PENDING
      },
      [fetchUsers.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.page = payload.meta.current_page
        state.total_pages = Math.ceil(payload.meta.total/payload.meta.per_page)
        userAdapter.setAll(state, payload.data)
        state.status = HTTP_STATUS.FULFILLED
      },
      [fetchUsers.rejected]: (state, { payload }) => {
        state.loading = false
        state.status = HTTP_STATUS.REJECTED
      },

      //Create User
      [createUser.pending]: (state, action) => {
        state.loading = true
        state.status = HTTP_STATUS.PENDING
      },
      
      [createUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.status = HTTP_STATUS.FULFILLED
        state.roles = payload.data
      },
      [createUser.rejected]: (state,{error}) => {
        state.loading = false
        state.status = HTTP_STATUS.REJECTED
        state.message = error.message
      },

      //Save User
      [saveUser.pending]: (state, action) => {
        state.loading = true
        state.status = HTTP_STATUS.PENDING
      },
      
      [saveUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.status = HTTP_STATUS.FULFILLED
        state.message = payload
      },
      [saveUser.rejected]: (state,{error}) => {
        state.loading = false
        state.status = HTTP_STATUS.REJECTED
        state.message = error.message
      },

      //Edit User
      [editUser.pending]: (state, action) => {
        state.loading = true
        state.status = HTTP_STATUS.PENDING
      },
      
      [editUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.status = HTTP_STATUS.FULFILLED
        state.roles = payload.roles
      },
      [editUser.rejected]: (state,{error}) => {
        state.loading = false
        state.status = HTTP_STATUS.REJECTED
        state.message = error.message
      },
      //Update User
      [updateUser.pending]: (state, action) => {
        state.loading = true
        state.status = HTTP_STATUS.PENDING
      },
      
      [updateUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.status = HTTP_STATUS.FULFILLED
        state.message = payload
      },
      [updateUser.rejected]: (state,{error}) => {
        state.loading = false
        state.status = HTTP_STATUS.REJECTED
        state.message = error.message
      }
    },
  });
  
  export const userSelectors = userAdapter.getSelectors(
    (state) => state.user,
    )
  export const {pageByNumber, nextPage, previousPage,clear} = userSlice.actions
  export default userSlice.reducer