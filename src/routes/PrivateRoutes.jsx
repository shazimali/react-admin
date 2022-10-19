import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
let auth = 
{ 
    'token': localStorage.getItem('access_token'),
    'user_id': localStorage.getItem('user_id')

}
return (
    auth.token && auth.user_id ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes