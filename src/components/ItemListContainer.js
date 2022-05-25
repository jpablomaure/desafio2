import ItemCount from './ItemCount.js';

const ItemListContainer = ({greeting}) => {

    const onAdd = (valor) => {
        alert('Has agregado ' + valor + ' items al carrito');

    }

    return (
        <>
        <p>{greeting}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
};

export default ItemListContainer;