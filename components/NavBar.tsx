import React from 'react'
import { FloatingNav } from './ui/FloatingNav'
import { navItems } from '@/data/navItems'

const NavBar = () => {
  return (
    <FloatingNav 
    navItems={navItems}
    />
  )
}

export default NavBar