import { Link } from "react-router-dom";

const Item = ({ id , img , titulo , precio , stock }) => {

    return (
        <>
            <div key={id} className="producto">
                <p>{titulo}</p>
                <Link to={`/item/${id}`}><div className={`producto--prod${img}`}></div></Link>
                <p>${precio}</p>
                <p>Stock: {stock}</p>
            </div>
        </>
        )
};

export default Item;