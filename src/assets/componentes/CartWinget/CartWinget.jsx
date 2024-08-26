import React from 'react'
import "./CartWinget.css"
import imagendelcarrito from './carrito.png'



const CartWinget = () => {
return (
    <div>
        <img className='imgcarrito' src={imagendelcarrito} />
        <strong>10</strong>
    </div>
)
}

export default CartWinget