// import ItemCount from './ItemCount.js';
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

    return (
        <>
        <ItemList items={datos} />
        </>
    )
};

export default ItemListContainer;