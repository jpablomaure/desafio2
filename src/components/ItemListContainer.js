import ItemCount from './ItemCount.js';

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <p>{greeting}</p>
        <ItemCount stock={5} initial={1} />
        </>
    )
};

export default ItemListContainer;