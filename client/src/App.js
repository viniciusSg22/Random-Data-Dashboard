import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Dashboard from './Views/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
