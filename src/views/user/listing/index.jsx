import React from 'react';
import { NavLink } from 'react-router-dom';
import Alert from '../../_layouts/Alert';
import Loader from '../../_layouts/Loader';
import useHook from './useHook';
import CustomPagination from '../../_layouts/CustomPagination';
const Users = () => {
    const {totalPages, loading, message, status, allUsers, currentPage,changePageByNumber } = useHook();
  return (

<div className="overflow-x-auto relative">
    <div className='flex justify-between'>
        <h3>Users List</h3>
        {loading ? <Loader/> : ''} 
        <NavLink to="/user/create" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create User</button>
           </NavLink>
    </div>
    {message && status ? <Alert message={message} type={status === 'FULFILLED' ? 'success' : 'danger'} />:''}
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Assigned Roles
                </th>
                <th scope="col" className="py-3 px-6">
                    Created
                </th>
                <th scope="col" className="py-3 px-6">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {
                allUsers.map((user,key) => (
<tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                </th>
                <td className="py-4 px-6">
                   {user.email}
                </td>
                <td className="py-4 px-6">
                   {user.assigned_roles}
                </td>
                <td className="py-4 px-6">
                    {user.created_at}
                </td>
                <td className="py-4 px-6 flex">
                <NavLink to={"/user/"+user.id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-cyan-500 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

           </NavLink>
           
           <NavLink to="/">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 stroke-red-500 " >
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

           </NavLink>
                </td>
            </tr>
                ))
            }
            
        </tbody>
    </table>
    {totalPages > 1 ?<CustomPagination totalPages={totalPages} currentPage={currentPage} changePageByNumber={changePageByNumber} /> :'' }
</div>


  )
}

export default Users