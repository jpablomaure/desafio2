// import Item from "./Item";
 

const ItemList = ({ items }) => {
    
    return (

        <div className="container">
            <div className="row">
            {
                items.map(item => 
                
                    
                        <div class="producto">
                            <p>{item.titulo}</p>
                            <div class={`producto--prod${item.id}`}> </div>
                            <p>${item.precio}</p>
                            {/* <p>Cantidad: <input key={`${item.id}`} value="1" min="1" max={`${item.stock}`} id={`cantidad-${item.id}`} type="number" style="max-width: 3rem" placeholder="cantidad" /> </p> */}
                          {/* <button onclick='agregarAlCarrito(${elementoDelArray.id});'>Agregar al Carrito</button> */}
        
                        </div>
                
                    )
            }
            </div>
        </div>

    );
}

export default ItemList;