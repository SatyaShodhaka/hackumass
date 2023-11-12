import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="navbar__brand">MoodMeter<span>.AI</span></Link>
              <div className="navbar__links">

                <Link className="navbar__links__link" to="/about">About</Link>
                <Link className="navbar__links__link">Contact Us</Link>

                </div>
               
        </div>
        
    );
};

export default Navbar;