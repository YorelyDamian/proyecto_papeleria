import React from 'react'

const Carrito = () => {
  return (
    <nav className='p-auto'>
      <div className="row d-flex flex-wrap">
        <div className="card" id='cajitaProducto'>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">PRECIO</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Colores</td>
                  <td>150</td>
                  <input id="txtCantidad" type="number" />
                  <td>150</td>
                  <td></td>
                  <button className="btn rounded-pill btn-outline-secondary" type="button">
                    <img id="img1" src="./imagenes/listo.ico" alt="" width="25" height="25" className="d-inline-block align-text-top" /></button>
                  <td></td>
                  <button className="btn rounded-pill btn-outline-secondary" type="button">
                    <img id="img1" src="./imagenes/delete.ico" alt="" width="25" height="25" className="d-inline-block align-text-top" /></button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" id='cajita1'>
          <img id="img1" src="./imagenes/fire.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
          <div className="card-body">
            <h5 className="card-title">Ticket Papeleria "FIRE"</h5>
            <span className="placeholder col-12 bg-warning"></span>
            <h6 id="desc" className="card-title">SUBTOTAL</h6>
            <h7 id="desc" className="card-title">TOTAL</h7>
            <button className="btn rounded-pill btn-outline-warning" type="button">
              <img id="img1" src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" />REALIZAR COMPRA</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Carrito