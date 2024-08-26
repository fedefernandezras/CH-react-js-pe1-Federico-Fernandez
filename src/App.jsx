import react from 'react'
import NavBar from './assets/componentes/NavBar/NavBar'
import ItemListConteiner from './assets/componentes/ItemListConteiner/ItemListConteiner'



const App = () => {
  

  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting="Alimentos Para Mascotas"/>
    </>
  )
}

export default App
