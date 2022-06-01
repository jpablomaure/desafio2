// import ItemCount from './ItemCount.js';
import { link } from 'react-router-dom';

const Item = ({ id , titulo , precio , stock }) => {

    // const onAdd = (cant) => {
    //     alert('Has agregado' + cant + 'items al carrito');
    // }

    return (
    <>
        <p>{titulo}</p>
        <div className={`producto--prod${id}`}></div>
        <p>${precio}</p>
        <p>Stock: {stock}</p>
    </>
    )
};

export default Item;