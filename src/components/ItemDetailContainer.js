import ItemDetail from './ItemDetail.js';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import { firestoreFetchUno } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [datos , setDatos ] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchUno(idItem)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idItem]);



    return (
        <>
        <ItemDetail item={datos} />
        </>
    );
}

export default ItemDetailContainer;