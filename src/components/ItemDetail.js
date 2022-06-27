
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import { useState, useContext} from 'react';
import { CartContext } from './CartContex';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';




const ItemDetail = ({item}) => {
    const [cantidadItem , SetCantidadItem] = useState(0);
    const prueba = useContext(CartContext);
    
    const onAdd = (cant, titulo) => {

        SetCantidadItem(cant);
        prueba.agregarAlCarrito(item, cant);
        toast('Se ha agregado ' + cant + ' producto/s (' + item.titulo + ') al carrito');
        
    }
    
    return (
        <>
        {
        <div className="container">
            <div className="row">
                <div key={item.id} className="producto">
                    <p>{item.titulo}</p>
                <div className={`producto--prod${item.ide}`}>
            </div>
                <p>${item.precio}</p>
                <p>Stock: {item.stock}</p>
            </div>
            <div>
                {
                    cantidadItem === 0
                        ? <ItemCount stock={item.stock} initial={cantidadItem} onAdd={onAdd}  />
                        :  <>
                                <Link to='/cart' style={{textDecoration: "none"}}>
                                    <div className="btn btn-sm btn-outline-secondary">Al Carrito</div>
                                </Link>
                                <ToastContainer />
                            </>
                }
            </div>
        </div>
                <div className="descripcion">
                    <strong>Descripcion: </strong>
                    {item.descripcion}
                </div>
        </div>
}
        </>
    );
}

export default ItemDetail;