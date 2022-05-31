
import ItemCount from './ItemCount.js';

const itemDetail = ({item}) => {

    const onAdd = (cant) => {

        alert('Has agregado ' + cant + ' items al carrito');
    }
    
    return (
        <>
        <div className="container">
            <div className="row">
                <div key={item.id} className="producto">
                    <p>{item.titulo}</p>
                <div className={`producto--prod${item.id}`}>
                </div>
                    <p>${item.precio}</p>
                    <p>Stock: {item.stock}</p>
                </div>
                <div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}  />
                </div>
            </div>
                    <div className="descripcion">
                        <strong>Descripcion: </strong>
                        {item.descripcion}
                    </div>
        </div>

        </>
    );
}

export default itemDetail;