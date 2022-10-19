import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import Alert from '../_layouts/Alert';
import useHook from './useHook';

export default function Login() {
  const {errors, alert, formInputs, handleInputChange, handleFormSubmit} = useHook();

  return (
    <section className="h-screen">
    <div className="px-6 h-full text-gray-800">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img src="/login.webp" className="w-full" alt="Sample image" />
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          {alert.message || alert.type ? <Alert message={alert.message} type={alert.type} />:''}
          <form onSubmit={ handleFormSubmit}>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="email"
                placeholder="Email address"
                onChange={handleInputChange}
                value={formInputs.email}
              />
              {errors['email'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['email']}
              </span>:''}
            </div>
  
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
                name='password'
                onChange={handleInputChange}
                value={formInputs.password}
              />
              {errors['password'] ? 
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
		          {errors['password']}
              </span>:''}
            </div>
  
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
