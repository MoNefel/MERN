const Order = ({openHour, closeHour}) => {

    return (
        <div className="order">
            <p>
            We're open at {openHour}:00 until {closeHour}:00. Come visit or Order
            online{" "}
            </p>
            <button className="btn">Order</button>
        </div>
    )
}


export default Order;