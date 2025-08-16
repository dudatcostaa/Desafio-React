import '../pages/Depoimentos.css'
import SliderCliente from "../components/SliderCliente";

export default function Depoimentos() {
    return (
        <div className="depoimentosContainer">

            <h1>Depoimentos</h1>

            <p>Nossos produtos acompanham pessoas em todos os momentos e a opinião delas vale ouro.</p>
            <p>Veja o que nossos clientes têm a dizer sobre suas experiências com nossos produtos.</p>

            <div className='sliderClienteContainer'>
                <SliderCliente />
            </div>

        </div>
    );
}