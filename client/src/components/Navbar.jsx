import './../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
function Navbar({ darkMode, setDarkMode }){
    return(
        <nav className="navbar" >
            <h2 className="logo">📝 MERN Todo</h2>
       

        <div className="nav-links" >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
                    href="https://github.com/Rasheed-XPRT"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>


                <button 
                    className="theme-icon-btn" 
                    onClick={() => setDarkMode(!darkMode)}
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
                </button>
        </div>
        </nav>
    )
}
export default Navbar;