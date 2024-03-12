
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Contact from './pages/Contact'
import Header from './Components/Header'

function App() {

  return (
    <>
      <h2>React Router Dom</h2>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />{/* index == path='/' */}
          <Route path='users' element={<Users/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
