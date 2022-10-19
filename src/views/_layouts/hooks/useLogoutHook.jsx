import { useState } from 'react';
import { useNavigate } from 'react-router';
import { logOut } from '../../../services/authService';

const useLogoutHook = () => {
    
    const navigate = useNavigate();
    
    const confirmLogout = () => {
      if(window.confirm('Are you sure to logout?')) {
        handleLogout()
      }
    }
    const  handleLogout = async () => {

      logOut().then((response) => {
        console.log(response);
        localStorage.clear();
        navigate('/login')
      })
      .catch((obj) => {
        console.log(obj);
      });

  }
  return {
    handleLogout,
    confirmLogout
  }
}

export default useLogoutHook