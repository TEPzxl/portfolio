import React from 'react'
import { FloatingNav } from './ui/FloatingNav'

const NavBar = () => {
  return (
    <FloatingNav 
    navItems={[
        {name: 'Home', link: '#home'},
        {name: 'About', link: '#about'}]}
    />
  )
}

export default NavBar