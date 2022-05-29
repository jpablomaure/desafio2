import ItemDetail from './ItemDetail.js';
import ItemCount from './ItemCount.js';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [datos , setDatos ] = useState([]);

    useEffect(() => {
    customFetch(2000, products[3])
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    },[]);

    const onAdd = (cant) => {

        alert('Has agregado ' + cant + ' items al carrito');
    }

    return (
        <>
        <ItemDetail item={datos} />

        </>
    );
}

export default ItemDetailContainer;