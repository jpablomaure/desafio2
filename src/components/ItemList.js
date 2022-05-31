
const ItemList = ({ items }) => {
    
    return (

        <div className="container">
            <div className="row">
            {
                items.map(item => 

                        <div key={item.id} className="producto">
                            <p>{item.titulo}</p>
                            <div className={`producto--prod${item.id}`}> </div>
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