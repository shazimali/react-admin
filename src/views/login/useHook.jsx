import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router';
import { getAuthToken } from '../../services/authService';
const useHook = () => {
    const [formInputs, setFormInputs] = useState({
      email: "",
      password: ""
    });
    const [errors, setErrors] = useState([]);
    const [alert, setAlert] = useState({});
    const navigate = useNavigate();
  
    const handleInputChange = (event) => {
      event.persist();
      setFormInputs((formInputs) => ({
        ...formInputs,
        [event.target.name]: event.target.value
      }));
    };

    const resetState = () => {
      setAlert({});
      setErrors([]);
    }
    const   handleFormSubmit = async (event) => {
      event.preventDefault();
      resetState();
      delete axios.defaults.headers.common["Authorization"];
      getAuthToken(formInputs.email,formInputs.password).then((response) => {
        localStorage.setItem('access_token', response.data.token);
        localStorage.setItem('permissions', response.data.permissions);
        localStorage.setItem('user_id', response.data.user.id);
        localStorage.setItem('user_name', response.data.user.name);
        axios.defaults.headers.common['Authorization'] = response.data.token;
        navigate('/')
      })
      .catch((obj) => {
        if(obj.response.status ===  401){
          let updatedAlert = {};
          updatedAlert = {
            message:obj.response.data.message,
            type:'danger'
          };
          setAlert(alert => ({
               ...alert,
               ...updatedAlert
             }));
          }
        if(obj.response.data.errors){
          setErrors(obj.response.data.errors);
        }
      });
  }
  return {
    handleFormSubmit,
    handleInputChange,
    formInputs,
    errors,
    alert
  }
}

export default useHook