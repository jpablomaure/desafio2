import Badge from 'react-bootstrap/Badge'
import { BsFillCartFill } from "react-icons/bs";

function CartWidget(){
    return (
        <>
            <BsFillCartFill />
            <Badge bg="secondary"></Badge>
        </>
    );
}

export default CartWidget;