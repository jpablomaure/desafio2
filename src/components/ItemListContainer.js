// import ItemCount from './ItemCount.js';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('../utils/products');

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { categoriaId} = useParams();


    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (categoriaId === undefined) return item;
            return item.categoriaId === parseInt(categoriaId)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [categoriaId]); //debe tener dependencias para que vuelva a hacer esto cuando el catId cambie

    return (
        <>
        <ItemList items={datos} />
        </>
    )
};

export default ItemListContainer;