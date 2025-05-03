import { Rect} from 'react'
// import  Authcontext  from './auth/Authcontext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './auth/Authcontext'
import Dashboard from './component/Dashboard'
import './App.css'

function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          </Routes>
        </Router>
      </AuthProvider>

     
    </>
  )
}

export default App
