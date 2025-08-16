import './CallToAction.css';
import { Link } from 'react-router-dom';
import produto from "../components/dataProdutos";

export default function CallToAction() {

    const produto1 = produto[4];
    const produto2 = produto[8];

    const cores = Object.keys(produto1.imagens);

    return (
        <div className="callToActionContainer">

            <h1>Qual Stanlee é melhor para você?</h1>

            <Link to="/shop" className='buttonShopCA'>
                SHOP
            </Link>

            <div className="containerImagensCA">
                <img src={produto1.imagens[cores[0]]} alt={`Copo Térmico ${cores[0]}`} />
                <img src={produto2.imagens[cores[1]]} alt={`Copo Térmico ${cores[1]}`} />
            </div>

        </div>
    );
}