import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                Evently
            </div>

            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/participants">
                    Participants
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/register">
                    Register →
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;