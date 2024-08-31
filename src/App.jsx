import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'



const App = () => {
  

  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting="Alimentos Para todo tipo de Mascotas"/>
    </>
  )
}

export default App
