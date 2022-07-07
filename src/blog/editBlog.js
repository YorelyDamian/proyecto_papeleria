import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'https://papeleria-fyre-final.herokuapp.com/blogs/'

const CompEditBlog = () => {
    const [producto, setProducto] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [total, setTotal] = useState("");
    const [clave, setClave] = useState("");   
    const navigate = useNavigate();
    const {id} = useParams();

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            producto: producto, 
            precio: precio, 
            cantidad: cantidad,
            total: total,
            clave: clave
        });
        navigate('/Carrito');
    };

    useEffect( ()=>{
        getBlogById();
    },[]);

    const getBlogById = async () => {
        const res = await axios.get(URI + id);
        setProducto(res.data.producto);
        setPrecio(res.data.precio);
        setCantidad(res.data.cantidad);
        setTotal(res.data.total);
        setClave(res.data.clave);
    };

    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="title">
              <h1>EDITAR PRODUCTO</h1>
            </div>
  
            <form onSubmit={update}>
              <div className="mb-3 mt-5">
                <label className="form-label">Producto : </label>
                <input
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Ingresa el nombre del vehiculo"
                  required
                />
              </div>
  
              <div className="mb-3 mt-5">
                <label className="form-label">Precio : </label>
                <input
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Ingresa la marca del vehiculo"
                  required
                />
              </div>
  
              <div className="mb-3 mt-5">
                <label className="form-label">Cantidad : </label>
                <input
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Ingresa el modelo del vehiculo"
                  required
                />
              </div>
  
              <div className="mb-3 mt-5">
                <label className="form-label">Total : </label>
                <input
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Ingresa el Precio del vehiculo"
                  required
                />
              </div>
              <div className="mb-3 mt-5">
                <label className="form-label">Clave : </label>
                <input
                  value={clave}
                  onChange={(e) => setClave(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Ingresa el Precio del vehiculo"
                  required
                />
              </div>
  
              <div className="mb-3 mt-5">
                <button type="submit" className="btn btn-warning">
                  Actualizar
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    )

}

export default CompEditBlog