import ItemCount from './ItemCount.js';

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <p>{greeting}</p>
        <ItemCount />
        </>
    )
};

export default ItemListContainer;