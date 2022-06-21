import React from 'react'
import { NavLink } from 'react-router-dom'

const Principal = () => {
  return (
    <nav>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img id="textoImg" src="./imagenes/nav.png" alt="" width="25" height="25" className="d-inline-block align-text-top" />
            PAPELERIA "FIRE"
          </a>

          <div id='inicio'>
            <NavLink to='/inicio' id="btnInicio" className='btn rounded-pill btn-outline-secondary'>
              <img src="./imagenes/inicio.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Inicio
            </NavLink>
          </div>

          <div id='contacto'>
            <button className="btn rounded-pill btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
              <img src="./imagenes/cel.png" alt="" width="25" height="25" className="d-inline-block align-text-top" />Contacto</button>
            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div className="offcanvas-header">
                <h5 id="offcanvasTopLabel">NUMEROS DE CONTACTO</h5>
              </div>
              <div className="offcanvas-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">YORELY GUADALUPE MARTINEZ DAMIAN</li>
                  <li class="list-group-item">FERNANDO EMMANUEL VELASCO ALCANTARA</li>
                </ul>
              </div>
            </div>
          </div>

          <NavLink to='/carrito' id="btnCarrito" className='btn rounded-pill btn-outline-secondary'>
            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Mi Carrito
          </NavLink>

        </div>
      </nav>
    </nav>
  )
}
export default Principal