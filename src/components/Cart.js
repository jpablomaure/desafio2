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
                        
                        <div>
                            <p>${item.valorItem}</p>
                            <p>Cantidad elegida: {item.cantItem}</p>
                        </div>
                        
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