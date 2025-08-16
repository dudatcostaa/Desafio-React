import './Video.css';
import videoSrc from '../assets/EstiloEmMovimento.mp4';
import { Link } from 'react-router-dom';

export default function Video() {
    return (
        <div className="containerVideo">

            <div className='containerVideoParagrafos'>
                <p>Stanlee com você em todos os</p>
                <p>momentos</p>
            </div>

            <Link to="/shop" className='buttonConhecaNossosModelos'>
                Conheça nossos modelos
            </Link>

            <video className="video" autoPlay loop muted playsInline>
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

        </div>
    );
}