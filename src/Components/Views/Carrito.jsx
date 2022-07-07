import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const URI = 'https://papeleria-fyre-final.herokuapp.com/blogs/'

const Carrito = () => {

  const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlogs = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

  return (
    <nav className='p-auto'>
      <div className="row d-flex flex-wrap">
        <div className="card" id='cajitaProducto'>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">PRODUCTO</th>
                  <th scope="col">PRECIO</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">CLAVE</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              { blogs.map ( (blog) => (
                <tr key={ blog.id}>
                  <td>{ blog.producto }</td>
                  <td>{ blog.precio }</td>
                  <td>{ blog.cantidad }</td>
                  <td>{ blog.total }</td>
                  <td>{ blog.clave }</td>
                  <NavLink to={`/edit/${blog.id}`} className="btn rounded-pill btn-outline-secondary" type="button">
                    <img id="img1" src="./imagenes/listo.ico" alt="" width="25" height="25" className="d-inline-block align-text-top" /></NavLink>
                  <td></td>
                  <button onClick={ ()=>deleteBlogs(blog.id) } className="btn rounded-pill btn-outline-secondary" type="button">
                    <img id="img1" src="./imagenes/delete.ico" alt="" width="25" height="25" className="d-inline-block align-text-top" /></button>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" id='cajita1'>
          <img id="img1" src="./imagenes/fire.webp" alt="" width="200" height="200" className="d-inline-block align-text-top" />
          <div className="card-body">
            <h5 className="card-title">Ticket Papeleria "FIRE"</h5>
            <span className="placeholder col-12 bg-warning"></span>

            <button className="btn rounded-pill btn-outline-warning" type="button">
              <img id="img1" src="./imagenes/carrito.png" alt="" width="25" height="25" className="d-inline-block align-text-top" />REALIZAR COMPRA</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Carrito