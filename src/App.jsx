import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './components/auth/Login'
import SignInPage from './components/auth/Signin'
import Uuhome from './components/Navbar/uhome';
import Home from './Home'
import ForgotPassword from './Forgot-password';
import ResetPassword from './Reset-password';
import Sidebar from './components/Sidebar'
import Dashboard from './components/pages/Dashboard';
import Contacts from './components/pages/Contacts';
import Facts from './components/pages/Facts';
import Skills from './components/pages/Skills';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Header from '../src/components/authenticatedbar/header'
import Footer from '../src/components/authenticatedbar/footer'

function App() {
  const router = createBrowserRouter([
    { path: '/',
      element:  <Uuhome /> 
     },
    { path: '/signin',
       element: <SignInPage />
      },
  { path: '/login', 
    element: <LoginPage />
   },
   {
    path: '/home',
    element: <Home/>
   },
   {
    path: '/forgot-Password',
    element: <ForgotPassword />
   },
   {
    path: '/reset-Password',
    element: <ResetPassword />
   },
   {
    path: '/sidebar',
    element: <Sidebar />
   }, {
    path: '/dashboard',
    element: <Dashboard />
   }, {
    path: '/contacts',
    element: <Contacts />
   }, {
    path: '/fact',
    element: <Facts />
   },
   {
    path: '/skills',
    element: <Skills />
   }, {
    path: '/about',
    element: <About />
   },
   {
    path: '/projects',
    element: <Projects />
   },
   {
    path: '/header',
    element: <Header />
   }, {
    path: '/footer',
    element: <Footer />
   },
 ])

  return (
    
 <RouterProvider router={router}  /> 
   
  )
}

export default App