import Pizza from "./Pizza";

const Menu = ({pizzaData}) => {


    const pizzas = pizzaData
    const numPizzas = pizzas.length

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
            <>
                <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
                </p>
                <ul className="pizzas">
                    {
                        pizzas.map((pi) => (
                            <Pizza pizzaObj={pi} key={pi.name} />
                        ))
                    }
                </ul>
            </>
            ) : (
            <p>Sorry, we are closed. No Pizzas For Today</p>
            )    
            }
        </main>
    )
}

export default Menu;