import './NavBar.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function NavBar() {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () =>{
            const currentScrollY = window.scrollY;

        if (currentScrollY < 80){
            setShowNavbar(true);
        } else if(currentScrollY > lastScrollY){ //descendo
            setShowNavbar(false);
        } else { //subindo
            setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);

        }
    
    window.addEventListener('scroll', handleScroll);

    return() => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY])

    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>

            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className={`hamburger ${menuOpen ? "active" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}>

                <span></span>
                <span></span>
                <span></span>

            </div>

            <ul className={`links ${menuOpen ? "active" : ""}`/*se menuOpen esta true, froma a string links active, se esta falso apenas links*/}> 
                <li><Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
                <li><Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link></li>
                <li><Link to="/depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</Link></li>
            </ul>

        </nav>
    );
}