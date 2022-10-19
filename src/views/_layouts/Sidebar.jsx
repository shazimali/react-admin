import React, { useEffect, useState } from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import useLogoutHook from './hooks/useLogoutHook';

export default function Sidebar() {
   const activeClass = "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md";
   const notActiveClass = "flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200";
   const location = useLocation();
   const activeRoute = (routeName) => {
     return location.pathname === routeName ? activeClass : notActiveClass;
   };

   const { confirmLogout } = useLogoutHook();
  return (
   <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
   <h2 className="text-3xl font-semibold text-center text-blue-800">Admin</h2>
   <div className="flex flex-col justify-between mt-6">
     <aside>
       <ul>
         <li>
           <NavLink className={activeRoute('/')} to="/">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
               <path strokeLinejoin="round" strokeWidth="2"
                 d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
             </svg>
             <span className="mx-4 font-medium">Dashboard</span>
           </NavLink>
         </li>
         <li>
           <NavLink className={activeRoute('/users')} to="/users">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             <span className="mx-4 font-medium">Users</span>
           </NavLink>
         </li>
         <li>
          <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             <span className="mx-4 font-medium" onClick={confirmLogout}>Logout</span>
          </a>
         </li>
       </ul>

     </aside>
     
   </div>
 </div>

  )
}
