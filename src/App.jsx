
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import UserForm from './pages/UserForm'
import ResumeGenerator from './pages/ResumeGenerator'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'



function App() {
 

  return (
    <>
    <Header/>

  <Routes> 
   <Route path='/' element ={<LandingPage/>}/>
   <Route path='/resume' element ={<ResumeGenerator/>}/>
   <Route path='/form' element ={<UserForm/>}/>
   <Route path='/history' element ={<History/>}/>
    <Route path='/*' element ={<PageNotFound/>}/>
   
   
  </Routes>

 <Footer/>
    
  </>
  )
}

 export default App
