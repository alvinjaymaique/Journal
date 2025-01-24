import './App.css'
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import AppLayout from './components/AppLayout'
import 'bootstrap/dist/css/bootstrap.min.css';

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
