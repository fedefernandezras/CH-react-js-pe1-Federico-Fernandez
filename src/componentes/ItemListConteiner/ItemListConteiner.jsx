import React from 'react'
import "./ItemListConteiner.css"

const ItemListConteiner = (props) => {
  return (
    <div>
      <h1> {props.greeting} </h1>
    </div>
  )
}

export default ItemListConteiner