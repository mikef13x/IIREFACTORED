import { Outlet } from 'react-router-dom';

import React from 'react';
import Navbar from './components/navbar'

export default function App() {
  return (
    <>
        <Navbar/>
      <Outlet />
      
    </>
  );
}
