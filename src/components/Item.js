const Item = ({ id , titulo , precio , stock }) => {
    return (

    <>

    <div>
        <p>producto nro: {id}: </p>{titulo}
    </div>
    <div>
        {precio}
    </div>
    <div>
        {stock}
    </div>
    </>
    )
};

export default Item;