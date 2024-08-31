import react from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'



const App = () => {
  

  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting="Alimentos Para Mascotas"/>
    </>
  )
}

export default App
