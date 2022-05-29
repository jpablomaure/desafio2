
import ItemCount from './ItemCount.js';

const itemDetail = ({item}) => {
    
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
            </div>
            
                    <div className="producto">
                        <strong>Descripcion: </strong>
                        {item.descripcion}
                    </div>
                    
            <ItemCount stock={item.stock} initial={1}  />

        </div>

        </>
    );
}

export default itemDetail;