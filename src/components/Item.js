import { Link } from "react-router-dom";

const Item = ({ id , titulo , precio , stock }) => {
    return (
        <>
            <div key={id} className="producto">
                <p>{titulo}</p>
                <Link to={`/item/1`}><div className={`producto--prod${id}`}></div></Link>
                <p>${precio}</p>
                <p>Stock: {stock}</p>
            </div>
        </>
        )
};

export default Item;