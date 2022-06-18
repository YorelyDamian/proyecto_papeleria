import React from 'react'
import {NavLink } from 'react-router-dom'

const Inicio = () => {
  return (
    <nav>
    <div className="card" id='cajita1'>
    <img id="img1" src="./imagenes/img1.jpg" alt="" width="200" height="200" className="d-inline-block align-text-top"/>
        <div className="card-body">
            <h5 className="card-title">Resaltador Marcador Sharpie S-NOTE C12</h5>
            <span className="placeholder col-12 bg-warning"></span>
            <h6 id="desc" className="card-title">$260.00</h6>
            <h7 id="desc" className="card-title">SKU: 111082</h7>
            <NavLink to='/carrito' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top"/> Agregar al Carrito 
            </NavLink>
        </div>
    </div>
    
    </nav>
  )
}

export default Inicio