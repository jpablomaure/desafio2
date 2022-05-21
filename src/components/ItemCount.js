import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
    const [valor, setValor] = useState(1);
        
    const increment = () => {
        if (valor < 5) setValor(valor+1);
        console.log('valor incrementado ' + valor);
    }

    const decrement = () => {
        if (valor > 1) setValor(valor-1);
        console.log('valor reducido ' + valor);
    }


    return (
        <>
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
