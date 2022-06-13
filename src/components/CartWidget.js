import Badge from 'react-bootstrap/Badge'
import { BsFillCartFill } from "react-icons/bs";
import { CartContext} from './CartContex';
import { useContext} from 'react';
import { Link } from 'react-router-dom';;

function CartWidget(){
    const acceso = useContext(CartContext);
    return (
        <>
            <Link to='/cart' className="btn btn-sm btn-outline-secondary">
                <BsFillCartFill />
                <Badge bg="secondary">{acceso.calcTotalItem()}</Badge>
            </Link>
        </>
    );
}

export default CartWidget;