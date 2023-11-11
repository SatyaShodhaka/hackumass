import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="navbar__brand">MoodMeter<span>.AI</span></Link>
        </div>
    );
};

export default Navbar;