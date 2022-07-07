import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {   
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
        <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Producto</label>
                    <input
                        value={producto}
                        onChange={ (e)=> setProducto(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                        value={precio}
                        onChange={ (e)=> setPrecio(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Cantidad</label>
                    <input
                        value={cantidad}
                        onChange={ (e)=> setCantidad(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Total</label>
                    <input
                        value={total}
                        onChange={ (e)=> setTotal(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Clave</label>
                    <input
                        value={clave}
                        onChange={ (e)=> setClave(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>     
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
        </div>
        </div>
        </div>
    )
}

export default CompCreateBlog