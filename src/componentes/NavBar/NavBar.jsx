import React from 'react'

import "./NavBar.css"
import CartWinget from "../CartWinget/CartWinget"

const NavBar = () => {
  return (
    
      
        <header>
          <h1>mascotaPlus©</h1>
          <nav>
            <ul>
              <li>perros</li>
              <li>gatos</li>
              <li>peces</li>
            </ul>
          </nav>
          <CartWinget />
        </header>
      
    
  )
}

export default NavBar