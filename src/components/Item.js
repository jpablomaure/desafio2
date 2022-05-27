const Item = ({ id , titulo , precio , stock }) => {
    return (
    <>
        <p>{titulo}</p>
        <div className={`producto--prod${id}`}></div>
        <p>${precio}</p>
        <p>Stock: {stock}</p>
    </>
    )
};

export default Item;