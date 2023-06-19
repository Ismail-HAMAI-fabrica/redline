import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dachbord-components/Sidebar'


const Dachbord = () => {
  return (
    <>

   <Sidebar>

    <Outlet/>

   </Sidebar>
    </>
  )
}

export default Dachbord
