import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const AppLayout = () => {
  return (
    <main>
        <h1>Hello World</h1>
        <Outlet/>
    </main>
  )
}

export default AppLayout