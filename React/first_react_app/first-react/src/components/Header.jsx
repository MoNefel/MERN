const Header = () => {
    
    return (
        <header >
            <nav className="d-flex justify-content-between align-items-center  py-3">
            <h1>My First React App</h1>
                <ul className="d-flex justify-content-between w-50 gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;