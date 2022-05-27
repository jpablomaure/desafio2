import Item from "./Item";
import ItemCount from './ItemCount.js';

// const onAdd = (cant) => {

//     alert('Has agregado ' + cant + ' items al carrito');
// }
const ItemList = ({ items }) => {
    
    return (

        <div className="container">
            <div className="row">
            {
                items.map(item => 
                
                    
                        <div className="producto">
                            {/* <Item item={items.id} titulo={item.titulo} precio={item.precio} stock={item.stock} /> */}
                            <p>{item.titulo}</p>
                            <div class={`producto--prod${item.id}`}> </div>
                            <p>${item.precio}</p>
                            <p>Stock: {item.stock}</p>
                            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
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