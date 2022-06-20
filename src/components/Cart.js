import { CartContext} from './CartContex';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { serverTimestamp, updateDoc , doc , setDoc , increment , collection} from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const Cart = () => {
    const acceso = useContext(CartContext);

    const crearOrden = () => {
        const itemXDb = acceso.listaCarrito.map(item => ({
            id: item.itemId,
            titulo: item.tituloItem,
            precio: item.valorItem
        }));

        acceso.listaCarrito.forEach( async (item) => {
            const refItem = doc(db, "productos", item.itemId);
            await updateDoc(refItem, {
                stock: increment(-item.cantItem)
            });
        });

        let orden = {
            comprador: {
                nombre: "Vanesa Rojas",
                email: "ver2vero@gmail.com",
                tel: "26166334455"
            },
            total: acceso.calcTotalCarrito(),
            items: itemXDb,
            fecha: serverTimestamp()
        };

        console.log(orden);

        const crearOrdenEnFirestore = async () => {
            const nuevaOrden = doc(collection(db, "ordenes"));
            await setDoc(nuevaOrden, orden);
            return nuevaOrden;
        }

        crearOrdenEnFirestore()
            .then(result => alert('Su orden ha sido creada. Orden nro: ' + result.id))
            .catch(err => console.log(err));

        acceso.borrarCarrito();
    }

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
                { 
                    (acceso.listaCarrito.length > 0)
                    ? <>
                        <div className="row">
                            <p className="totalTienda"><strong>Total del Carrito: </strong>$ {acceso.calcTotalCarrito()}</p>
                        </div>
                        <div className="row totalTienda">
                        <Button onClick={() => acceso.borrarCarrito()} variant="primary" size="lg">Vaciar Carrito</Button>
                        <Link to='/'><Button variant="primary" size="lg">Seguir Comprando</Button>{' '}</Link>
                        <Button onClick={crearOrden} variant="primary" size="lg">Pasar por caja</Button>{' '}
                        </div>
                        </>
                    : <Link to='/'><Button variant="primary" size="lg">Ir a comprar</Button>{' '}</Link>
                }

                
            </div>
        </div>
    );
}

export default Cart;