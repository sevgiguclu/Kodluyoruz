import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './style.css'

function LoginLayout() {
  return (
    <div className='auth_container'>
      
        <div className='auth_links_container'>
          <Link to="/auth">Giriş Yap</Link>
          <Link to="/auth/register">Kayıt Ol</Link>
        </div>
        
        <Outlet></Outlet>
    </div>
  )
}

export default LoginLayout