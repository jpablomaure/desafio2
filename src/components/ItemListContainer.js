import ItemCount from './ItemCount.js';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (cant) => {

        alert('Has agregado ' + cant + ' items al carrito');
    }

    return (
        <>
        <ItemList items={datos} />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
};

export default ItemListContainer;