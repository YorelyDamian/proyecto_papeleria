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
                  <th scope="col"></th>
                  <th scope="col">TOTAL</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <input id="txt" type="text" placeholder='CANTIDAD' className='form-control' />
                  <td>Mark</td>
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Carrito