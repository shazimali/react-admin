import React from 'react';
import Login from './views/login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './views/_layouts/Index';
import Home from './views/Home';
import Users from './views/user/listing/index';
import CreateUser from './views/user/create/index';
import EditUser from './views/user/edit/index';
import './axios';
import PrivateRoutes from './routes/PrivateRoutes';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />}/>
          <Route path='/users'  element={<Users />}/>
          <Route path='/user/create'  element={<CreateUser />}/>
          <Route path='/user/:id'  element={<EditUser />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
