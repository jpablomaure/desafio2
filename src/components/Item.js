import { Link } from "react-router-dom";
import { useState, useContext}  from 'react';
import { CartContext } from './CartContex';

const Item = ({ id , img , titulo , precio , stock }) => {
    const [cantidadItem , SetCantidadItem] = useState(0);
    const acceso = useContext(CartContext);
        console.log("la id es " + id);
        const articulo = acceso.listaCarrito.find(producto => producto.id === id)
        console.log(articulo);
        // SetCantidadItem(acceso.listaCarrito.cantItem[articulo] - cantidadItem);
        // console.log(SetCantidadItem)
    


    return (
        <>
            <div key={id} className="producto">
                <p>{titulo}</p>
                <Link to={`/item/${id}`}><div className={`producto--prod${img}`}></div></Link>
                <p>${precio}</p>
                <p>Stock: {stock}</p>
            </div>
        </>
        )
};

export default Item;