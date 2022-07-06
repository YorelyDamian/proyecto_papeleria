import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const URI = 'http:://localhost:8000/blogs/'

const Inicio = () => {

    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState()
    const [cantidad, setCantidad] = useState()
    const [total, setTotal] = useState()
    const [clave, setClave] = useState()
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            producto: producto, 
            precio: precio, 
            cantidad: cantidad,
            total: total,
            clave: clave
        })
        navigate('/Carrito')
    }

    return (
        <nav className='p-auto'>
            <div className="row d-flex flex-wrap">
                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img1.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                        <form onSubmit={store}>
                            <input type="hidden" value={producto} onChange={ (e)=> setProducto(e.target.value)}/>
                            <input type="hidden" value={precio} onChange={ (e)=> setPrecio(e.target.value)}/>
                            <input type="hidden" value={cantidad} onChange={ (e)=> setCantidad(e.target.value)}/>
                            <input type="hidden" value={total} onChange={ (e)=> setTotal(e.target.value)} />
                            <input type="hidden" value={clave} onChange={ (e)=> setClave(e.target.value)}/>
                            <h5 className="card-title">Resaltador Marcador Sharpie S-NOTE C12</h5>
                            <span className="placeholder col-12 bg-warning"></span>
                            <h6 id="desc" className="card-title">$260.00</h6>
                            <h7 id="desc" className="card-title">SKU: 111082</h7>
                            <button type='submit' className='btn rounded-pill btn-outline-warning'>Comprar</button>
                            <NavLink to='/Create' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                                <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Ir al Carrito
                            </NavLink>
                        </form>
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img2.jpg" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Resaltador BIC Brite Liner,Colores Pastel"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={65.50} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={65.50} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={107191} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Resaltador BIC Brite Liner,Colores Pastel</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$65.50</h6>
                        <h7 id="desc" className="card-title">SKU: 107191</h7>
                        <NavLink to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </NavLink>
                    </form>
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img3.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Marcatextos Accent Sharpie T4"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={65.90} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={65.90} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={89160} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Marcatextos Accent Sharpie T4</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$65.90</h6>
                        <h7 id="desc" className="card-title">SKU: 89160</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img4.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Lapiz Mirado Numero 2"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={70} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={70} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={84190} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Lapiz Mirado Numero 2</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$70.00</h6>
                        <h7 id="desc" className="card-title">SKU: 84190</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img5.jpg" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Marcador Sharpie Punto Fino"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={40} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={40} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={71197} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Marcador Sharpie Punto Fino</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$40.00</h6>
                        <h7 id="desc" className="card-title">SKU: 71197</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img6.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Boligrafo Kilometrico negro"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={50} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={50} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={67926} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Boligrafo Kilometrico negro</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$50.00</h6>
                        <h7 id="desc" className="card-title">SKU: 67926</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img7.jpg" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Lapiz Adhesivo Pritt 6 piezas"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={200} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={200} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={22631} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Lapiz Adhesivo Pritt 6 piezas</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$200.00</h6>
                        <h7 id="desc" className="card-title">SKU: 22631</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img8.jpg" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Colores Prismacolor doble"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={215} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={215} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={106636} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Colores Prismacolor doble</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$215.00</h6>
                        <h7 id="desc" className="card-title">SKU: 106636</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img9.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Rotuladores Punta Extrafina"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={105} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={105} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={65823} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Rotuladores Punta Extrafina</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$105.00</h6>
                        <h7 id="desc" className="card-title">SKU: 65823</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img10.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Boligrafo Kilometrico Candy"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={45.50} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={45.50} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={96820} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Boligrafo Kilometrico Candy</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$45.50</h6>
                        <h7 id="desc" className="card-title">SKU: 96820</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>    
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img11.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Crayones Jumbo Color Peps"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={47} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={47} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={67823} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Crayones Jumbo Color Peps</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$47.00</h6>
                        <h7 id="desc" className="card-title">SKU: 67823</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>   
                    </div>
                </div>

                <div className="card" id='cajita1'>
                    <img id="img1" src="./imagenes/img12.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
                    <div className="card-body">
                    <form onSubmit={store}>
                        <input type="hidden" value={"Marcadores Officemax"} onChange={ (e) => setProducto(e.target.value)}/>
                        <input type="hidden" value={75} onChange={ (e) => setPrecio(e.target.value)}/>
                        <input type="hidden" value={1} onChange={ (e) => setCantidad(e.target.value)}/>
                        <input type="hidden" value={75} onChange={ (e) => setTotal(e.target.value)}/>
                        <input type="hidden" value={62124} onChange={ (e) => setClave(e.target.value)}/>
                        <h5 className="card-title">Marcadores Officemax</h5>
                        <span className="placeholder col-12 bg-warning"></span>
                        <h6 id="desc" className="card-title">$75.00</h6>
                        <h7 id="desc" className="card-title">SKU: 62124</h7>
                        <Link to='/carrito' type='submit' id="btnAgregar" className='btn rounded-pill btn-outline-warning'>
                            <img src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" /> Agregar al Carrito
                        </Link>
                    </form>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Inicio