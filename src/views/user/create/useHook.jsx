import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { saveUser, createUser } from '../../../services/userService';

const useHook = () => {
    const [formInputs, setFormInputs] = useState({
        'name': '',
        'email': '',
        'password':'',
        'password_confirmation':'',
        'roles':''
    });
    const [errors, setErrors] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const message = useSelector(state => state.user.message);
    const status = useSelector(state => state.user.status);
    const roles = useSelector(state => state.user.roles);
    const loading = useSelector(state => state.user.loading);

    useEffect(() => {
        dispatch(createUser())
        .unwrap()
        .catch((err) => {
            console.log(err);
        })

    },[dispatch])

    const handleInputChange = (event) => {
      event.persist();
      setFormInputs((formInputs) => ({
        ...formInputs,
        [event.target.id]: event.target.value
      }));
    };


    const onSelectRoles = (selectedList, selectedItem) => {
        selectedRoles.push(selectedItem.id)

        setFormInputs({
            ...formInputs,
            roles: selectedRoles
          });
    }
    
    const onRemoveRole = (selectedList, removedItem) => {
        var index = selectedRoles.indexOf(removedItem.id)
        selectedRoles.splice(index, 1);

        setFormInputs({
            ...formInputs,
            roles: selectedRoles
          });
    }
    const resetState = () => {
      setErrors([]);
    }
    const  handleFormSubmit = async (event) => {
    event.preventDefault();
    resetState();
    dispatch(saveUser(formInputs))
      .unwrap()
      .then((res) => {
        navigate('/users')
      })
      .catch((err) => {
        err.errors ? setErrors(err.errors) : setErrors('');
      })
  }
  return {
    handleFormSubmit,onSelectRoles,
    onRemoveRole,handleInputChange,
    formInputs,
    errors,
    alert,
    message,
    status,
    roles,
    loading
    
  }
}

export default useHook