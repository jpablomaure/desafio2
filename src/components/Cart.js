import { CartContext} from './CartContex';
import { useContext } from 'react';

const Cart = () => {
    const acceso = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                {
                    acceso.listaCarrito.length > 0 ?
                    acceso.listaCarrito.map(item => 
                        <>
                        <div key={item.itemId} className="producto">
                            <p>{item.tituloItem}</p>
                        </div>
                        <div>
                            <p>${item.valorItem}</p>
                            <p>Stock: {item.cantItem}</p>
                        </div>
                        <div>
                            <strong>Descripcion: {item.tituloItem}</strong>
                        </div>
                        </>
                    )
                    : <p>carrito</p> 
                }
            </div>
        </div>
    );
}

export default Cart;