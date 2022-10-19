import React, { useEffect}  from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { pageByNumber,userSelectors} from '../../../features/userSlice';
import { fetchUsers, deleteUsers } from '../../../services/userService';
import { unwrapResult } from '@reduxjs/toolkit';
const useHook = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(state => state.user.total_pages);
    const currentPage = useSelector(state => state.user.page);
    const loading = useSelector(state => state.user.loading);
    const message = useSelector(state => state.user.message);
    const status = useSelector(state => state.user.status);
    const allUsers = useSelector(userSelectors.selectAll);

    useEffect(() => {
        dispatch(
            fetchUsers(currentPage))
            .then(unwrapResult)
            .then((obj) => console.log(obj))
            .catch((obj) => console.log({objErr: obj}))
        }, [dispatch])

    const  changePageByNumber = (page) =>{
          dispatch(pageByNumber({page}))
          dispatch(fetchUsers(page));
        }
  return {
    totalPages,
    loading,
    message,
    status,
    allUsers,
    loading,
    currentPage,
    changePageByNumber
  }
}

export default useHook