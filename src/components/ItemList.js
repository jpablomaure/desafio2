import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {

    return (

        <div className="container">
            <div className="row">
            {
                items.map(item => 

                        <div key={item.id} className="producto">
                            <p>{item.titulo}</p>
                            <Link to={`/item/${item.id}`}><div className={`producto--prod${item.id}`}></div></Link>
                            <p>${item.precio}</p>
                            <p>Stock: {item.stock}</p>
                        </div>
                    )
            }
            </div>
        </div>
    );
}

export default ItemList;