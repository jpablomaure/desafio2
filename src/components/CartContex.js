import { createContext , useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => { 
    const [listaCarrito , SetListaCarrito ] = useState([]);

    const agregarAlCarrito = (item , cant ) => {
        let esta = listaCarrito.find(producto => producto.itemId === item.id)
        if (esta === undefined) {
        SetListaCarrito([
            ...listaCarrito,
            {
                itemId: item.id,
                tituloItem: item.titulo,
                valorItem: item.precio,
                cantItem: cant
            }
        ]);
    } else {
        esta.cantItem += cant;
    }
        // esta === undefined
        // ? SetListaCarrito([
        //     ...listaCarrito,
        //     {
        //         itemId: item.id,
        //         tituloItem: item.titulo,
        //         valorItem: item.precio,
        //         cantItem: cant
        //     }
        // ])
        // : esta.cantItem += cant;
    }

    const borrarCarrito = () => {
        SetListaCarrito([]);
    }

    const borrarDelCarrito = (id) => {
        let borrar = listaCarrito.filter(item => item.itemId !== id);
        SetListaCarrito(borrar);
    }

    return (
        <CartContext.Provider value={{listaCarrito , agregarAlCarrito , borrarDelCarrito , borrarCarrito}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
