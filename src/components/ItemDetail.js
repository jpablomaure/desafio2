
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';
import { useState } from 'react';

const itemDetail = ({item}) => {
    const [cantidadItem , setCantidadItem] = useState(0);

    const onAdd = (cant) => {
        alert('Has agregado ' + cant + ' items al carrito');
        setCantidadItem(cant);
    }
    
    return (
        <>
        {
        <div className="container">
            <div className="row">
                <div key={item.id} className="producto">
                    <p>{item.titulo}</p>
                <div className={`producto--prod${item.id}`}>
                </div>
                    <p>${item.precio}</p>
                    <p>Stock: {item.stock}</p>
                </div>
                <div>
                    {
                        cantidadItem === 0
                            ? <ItemCount stock={item.stock} initial={cantidadItem} onAdd={onAdd}  />
                            : <Link to='/cart' style={{textDecoration: "none"}}><div className="btn btn-sm btn-outline-secondary">Al Carrito</div></Link>
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

export default itemDetail;