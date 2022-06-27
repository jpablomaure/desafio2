// import ItemCount from './ItemCount.js';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        firestoreFetch(categoriaId)
            .then(result => setDatos(result))
            .catch(err => alert(err,"salio error"));
    }, [categoriaId]); //debe tener dependencias para que vuelva a hacer esto cuando el catId cambie

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
        <ItemList items={datos} />
        </>
    )
};

export default ItemListContainer;