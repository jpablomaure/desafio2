import ItemDetail from './ItemDetail.js';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams} from 'react-router'
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [datos , setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
    customFetch(1000, products.find(item => item.id === parseInt(idItem)))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    },[idItem]);



    return (
        <>
        <ItemDetail item={datos} />
        </>
    );
}

export default ItemDetailContainer;