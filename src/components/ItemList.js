
import Item from './Item.js';
import { useState }  from 'react';



const ItemList = ({ items }) => {
    const [cantidadItem , SetCantidadItem] = useState(0);

    return (
        <div className="container">
            <div className="row">
            {
                items.map(item => <Item id={item.id} img={item.ide}titulo={item.titulo} precio={item.precio} stock={cantidadItem} />)
            }
            </div>
        </div>
    );
}

export default ItemList;