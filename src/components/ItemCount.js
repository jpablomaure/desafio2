import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock , initial }) => {
    const [valor, setValor] = useState(initial);

    const [stockActual, setStockActual] = useState(stock);

    const [stockActualPost , setStockActualPost] = useState(stockActual - initial);

    
    
    console.log('stock disponible al comenzar '+ stockActual);
    console.log('stock disponible al comenzar post '+ stockActualPost);
    console.log('valor '+ valor);



    const increment = () => {
        if (valor < stock) {
            setValor(valor+1);
            setStockActual(stockActual - valor);
            setStockActualPost(stockActual - valor);
            console.log('stock disponible luego de sumar '+ stockActual);
        };
    }

    const decrement = () => {
        if (valor > initial) {
            setValor(valor-1);
            setStockActual(stockActual + valor);
            setStockActualPost(stockActual - valor);
            console.log('stock disponible luego de restar '+ stockActual);
        };
        
    }


    return (
        <>
            <div>
                <p>Stock disponible : {stockActual}</p>
                <p>Stock disponible luego de esta compra : {stockActualPost}</p>
            </div>
            <div>
                <Button onClick={decrement} variant="primary" size="lg">-</Button>{' '}
            </div>
            <div>
                <p>{valor}</p>
            </div>
            <div>
                <Button onClick={increment} variant="primary" size="lg">+</Button>{' '}
            </div>
        </>
    );
}

export default ItemCount;
