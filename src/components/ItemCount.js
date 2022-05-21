import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock , initial }) => {
    const [valor, setValor] = useState(initial);

    const increment = () => {
        if (valor < stock) {
            setValor(valor+1);
        };
    }

    const decrement = () => {
        if (valor > initial) {
            setValor(valor-1);
        };
        
    }


    return (
        <>
            <div>
                <p>Stock disponible : {stock}</p>
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
