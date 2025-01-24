import './App.css'
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import AppLayout from './components/AppLayout'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='' element={<AppLayout />}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
