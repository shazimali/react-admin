import React from 'react'
import Alert from '../../_layouts/Alert';
import useHook from './useHook';
import Multiselect from 'multiselect-react-dropdown';
import Loader from '../../_layouts/Loader';
const Edit = () => {
    const {loading, roles, errors, formInputs, handleInputChange, handleFormSubmit, onSelectRoles, onRemoveRole, message, status, selectedRoles} = useHook();
    console.log(selectedRoles);
    return (
    <div className="overflow-x-auto relative">
        <div className='flex'>
            <h3>Edit User</h3>
            {loading ? <Loader/> : ''}
        </div>
        {message && status ? <Alert message={message} type={status === 'FULFILLED' ? 'success' : 'danger'} />:''}
        <form onSubmit={handleFormSubmit}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    value={formInputs.name}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      {errors['name'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['name']}
              </span>:''}
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                    <input 
                    type="email" 
                    id="email" 
                    value={formInputs.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {errors['email'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['email']}
              </span>:''}
                </div>
            </div>
            <div className="grid gap-3 mb-4 lg:grid-cols-3">
            <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Roles</label>
                    <Multiselect 
                            options={roles} 
                            selectedValues={selectedRoles}  
                            onSelect={onSelectRoles} 
                            onRemove={onRemoveRole} 
                            displayValue="name" 
                            className=''
                    />
                      {errors['roles'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['roles']}
              </span>:''}
                </div> 
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    value={formInputs.password}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      {errors['password'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['password']}
              </span>:''}
                </div> 
                <div>
                    <label for="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                    <input 
                    type="password"
                    id="password_confirmation"
                    value={formInputs.password_confirmation}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                      {errors['password_confirmation'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['password_confirmation']}
              </span>:''}
                </div> 
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
        
          )
}

export default Edit