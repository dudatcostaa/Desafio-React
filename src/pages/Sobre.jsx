import './Sobre.css';
import equipe from '../assets/Equipe.png';

export default function Sobre() {
    return (
        <section className="sobre">

            <h1>Para todas as rotinas, estilos e destinos</h1>

            <h2>Quem Somos?</h2>

            <div className="imagemContainer">
                <img src={equipe} alt="Equipe Stanlee" />
            </div>

            <div className='containerParagrafos'>

                <div className="containerSomosUmaMarca">
                    <div className="paragrafoInterno">
                        <p>Somos uma marca criada para acompanhar você! Seja no esporte, na praia, no trabalho ou na trilha.</p>
                    </div>
                </div>

                <div className="containerLeve">
                    <div className="paragrafoInterno">
                        <p>Nossos produtos são leves, duráveis e estilosos, ideais para todos e para qualquer ocasião.</p>
                    </div>
                </div>

                <div className="containerAcreditamos">
                    <div className="paragrafoInterno">
                        <p>Acreditamos que um bom produto deve servir a todos. Por isso, oferecemos modelos variados, cores e tamanhos que combinam com cada estilo de vida.</p>
                    </div>
                </div>

                <div className="containerNossasGarrafas">
                    <div className="paragrafoInterno">
                        <p>Nossas garrafas, copos e canecas térmicas usam materiais de alta qualidade para manter sua bebida na temperatura ideal por horas.</p>
                    </div>
                </div>

            </div>

        </section>
    );
}