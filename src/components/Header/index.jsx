import { NavLink } from "react-router";
import './style.css'
function Header() {
    return (
        <div>
            <header className="header">
                <nav className="nav">
                    <ul className="nav-container">
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="/news" className="nav-link">News</NavLink></li>
                        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;