import './HeroSection.css'
import { Link } from 'react-router-dom'

export default function HeroSection() {
    return (
        <section className="herosection">

            <p>Temperatura</p>
            <p>certa</p>
            <p>Onde você</p>
            <p>estiver</p>

            <Link to="/shop" className='buttonShop'>
                SHOP
            </Link>

        </section>
    );
}