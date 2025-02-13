import Order from "./Order";

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 10
    const closeHour = 23

    const isOpen = hour >= openHour && hour < closeHour;
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>Sorry, we are closed. Welcome beetwen {openHour} and {closeHour}</p>
            )}
            <p>© 2021 Pizza Menu</p>
        </footer>
    );
}

export default Footer;