import { CartContext} from './CartContex';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    const acceso = useContext(CartContext);

    return (
        <div className="container">
            <h1>Su Carrito</h1>
            <div className="row">
                {
                    acceso.listaCarrito.length > 0 &&
                        acceso.listaCarrito.map(item => 
                            <>
                                <div key={item.itemId} className="producto">
                                    <p>{item.tituloItem}</p>
                                    <div>
                                        <p>${item.valorItem}</p>
                                        <p>Cantidad elegida: {item.cantItem}</p>
                                    </div>
                                    <p>Total producto: ${acceso.totalXItem(item.itemId)}</p>
                                    <Button onClick={() => acceso.borrarDelCarrito(item.itemId)} variant="primary" size="lg">Eliminar Producto</Button>{' '}
                                </div>
                            </>
                        )
                }
            </div>
            <div className="container">
                <div className="row">
                    <p className="totalTienda"><strong>Total del Carrito: </strong>$ {acceso.calcTotalCarrito()}</p>
                </div>
                <div className="row totalTienda">
                    { 
                        (acceso.listaCarrito.length > 0)
                    ? <Button onClick={() => acceso.borrarCarrito()} variant="primary" size="lg">Vaciar Carrito</Button>
                    : <p>Su carrito esta vacio</p>
                    }
                    <Link to='/'><Button variant="primary" size="lg">Seguir Comprando</Button>{' '}</Link>
                    <Button variant="primary" size="lg">Pasar por caja</Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default Cart;