import React from 'react'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Facts from '../pages/Facts'
import Projects from '../pages/Projects'
import Contacts from '../pages/Contacts'
import { authCheck } from '../../utils/authCheckUtils'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../authenticatedbar/footer'

function uhome() {

  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus()
  }, [])

  async function checkLoginStatus() {
    try {
      const res = await authCheck();
      if (res) {
        navigate('/home')
      }
    }
    catch (error) {
      console.error("Error checking auth status:", error);
    }
  }

  return (
   <>
<Navbar />
   <div id="dashboard"><Dashboard /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="facts"><Facts /></div>
      <div id="projects"><Projects /></div>
      <div id="contacts"><Contacts /></div>
      <Footer/>
      </>
  )
}

export default uhome
