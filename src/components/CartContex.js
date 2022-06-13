import { createContext , useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => { 
    const [listaCarrito , SetListaCarrito ] = useState([]);

    const agregarAlCarrito = (item , cant ) => {
        let esta = listaCarrito.find(producto => producto.itemId === item.id)
    //     if (esta === undefined) {
    //     SetListaCarrito([
    //         ...listaCarrito,
    //         {
    //             itemId: item.id,
    //             tituloItem: item.titulo,
    //             valorItem: item.precio,
    //             cantItem: cant
    //         }
    //     ]);
    // } else {
    //     esta.cantItem += cant;
    // }
        esta === undefined
        ? SetListaCarrito([
            ...listaCarrito,
            {
                itemId: item.id,
                tituloItem: item.titulo,
                valorItem: item.precio,
                cantItem: cant
            }
        ])
        : esta.cantItem += cant;
    }

    const borrarCarrito = () => {
        SetListaCarrito([]);
    }

    const borrarDelCarrito = (id) => {
        let borrar = listaCarrito.filter(item => item.itemId !== id);
        SetListaCarrito(borrar);
    }

    const totalXItem = (itemId) => {
        let itemACalcular = listaCarrito.map(item => item.itemId).indexOf(itemId);
        const valor = listaCarrito[itemACalcular].valorItem;
        const cantItem = listaCarrito[itemACalcular].cantItem
        return valor * cantItem;
    }

    const calcTotalCarrito = () => {
        let totalPorItem = listaCarrito.map(item => totalXItem(item.itemId));
        return listaCarrito.length !== 0 ? totalPorItem.reduce((prev, curr) => prev + curr) : <p>Carrito Vacio</p>
    }

    const calcTotalItem = () => {
        let cantTotal = listaCarrito.map(item => item.cantItem);
        return cantTotal.reduce(((prev, curr) => prev + curr), 0);
    }


    return (
        <CartContext.Provider value={
            {listaCarrito , 
            agregarAlCarrito , 
            borrarDelCarrito , 
            borrarCarrito,
            totalXItem,
            calcTotalItem,
            calcTotalCarrito
            }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;
