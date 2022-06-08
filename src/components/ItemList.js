
import Item from './Item.js';

const ItemList = ({ items }) => {
    
    return (

        <div className="container">
            <div className="row">
            {
                items.map(item => <Item id={item.id} titulo={item.titulo} precio={item.precio} stock={item.stock} />)
            }
            </div>
        </div>
    );
}

export default ItemList;