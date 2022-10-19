import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router'
import store from '../../store'
import Sidebar from './Sidebar'
export default function Index() {
  return (
    <Provider store={store}>
      <div class="flex">
        <Sidebar/>
        <div class="w-full h-full p-4 m-8 overflow-y-auto">
            <Outlet/>
        </div>
      </div>
    </Provider>
  )
}
