import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { editUser, updateUser } from '../../../services/userService';
const useHook = () => {
    const [formInputs, setFormInputs] = useState({
        'id': null,
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
    const getParams = useParams();
    const message = useSelector(state => state.user.message);
    const status = useSelector(state => state.user.status);
    const roles = useSelector(state => state.user.roles);
    const loading = useSelector(state => state.user.loading);
    useEffect(() => {
        dispatch(editUser(getParams.id))
        .unwrap()
        .then((res) => {
            console.log(res.user.assigned_roles);
            // setSelectedRoles(oldSelectedRoles => [...oldSelectedRoles, res.user.assigned_roles]);
            setSelectedRoles(res.user.assigned_roles);
            setFormInputs({
                ...formInputs,
                id: res.user.id,
                name: res.user.name,
                email: res.user.email,
                roles:setRolesIDs(res.user.assigned_roles)
              });
        })
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

    const setRolesIDs = (roles) => {
        let ids = [];
        roles.forEach(role => {
            ids.push(role.id);
        });
       return ids;
    }

    const onSelectRoles = (selectedList, selectedItem) => {
        const objRole = {'name':selectedItem.name, 'id':selectedItem.id};
         setSelectedRoles(oldSelectedRoles => [...oldSelectedRoles, objRole]);
        setFormInputs({
            ...formInputs,
            roles:[...formInputs.roles, objRole.id]
          });
      }
    
    const onRemoveRole = (selectedList, removedItem)  => {
        console.log('removed Id = '+ removedItem.id);

        const newSelectedRoles = selectedRoles.filter((person) => person.id !== removedItem.id);

        setSelectedRoles(newSelectedRoles);

        setFormInputs({
            ...formInputs,
            roles: setRolesIDs(newSelectedRoles)
          });
        console.log(selectedRoles);
      }
    const resetState = () => {
      setErrors([]);
    }

    const  handleFormSubmit = async (event) => {
        event.preventDefault();
        resetState();
        dispatch(updateUser(formInputs))
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
    selectedRoles,
    loading  
  }
}

export default useHook