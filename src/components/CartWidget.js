import Badge from 'react-bootstrap/Badge'
import { BsFillCartFill } from "react-icons/bs";

function CartWidget(){
    return (
        <>
            <BsFillCartFill />
            <Badge bg="secondary">9</Badge>
        </>
    );
}

export default CartWidget;