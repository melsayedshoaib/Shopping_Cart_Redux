import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet/>
    </div>
  )
}
