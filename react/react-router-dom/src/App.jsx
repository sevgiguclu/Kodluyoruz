
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/dashboard/Home'
import Users from './pages/dashboard/Users'
import Contact from './pages/dashboard/Contact'
import AboutUs from './pages/dashboard/AboutUs'
import UsersDetail from './pages/dashboard/UsersDetail'
import DashboardLayouts from './layouts/dashboard/index'
import Login from './pages/auth/Login'
import LoginLayout from './layouts/auth/index'
import Register from './pages/auth/Register'

function App() {

  return (
    <>
      {/* <h2>React Router Dom</h2> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<DashboardLayouts/>}>
            <Route index element={<Home/>} />{/* index == path='/' */}
            <Route path='users' element={<Users/>} />
            <Route path='users/:id' element={<UsersDetail/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='aboutus' element={<AboutUs/>} />
          </Route>

          <Route path='auth' element={<LoginLayout/>}>
            <Route index element={<Login/>} />
            <Route path='register' element={<Register/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
