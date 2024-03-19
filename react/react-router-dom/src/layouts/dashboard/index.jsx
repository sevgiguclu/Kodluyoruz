import React from 'react'
import Header from '../../Components/Header'
import { Outlet } from 'react-router-dom'
function DashboardLayouts() {
  return (
    <div>
        <Header/>
        <div id='content'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default DashboardLayouts