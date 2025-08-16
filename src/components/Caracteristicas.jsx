import './Caracteristicas.css';
import { FaTemperatureHigh } from "react-icons/fa";
import { FaDropletSlash } from "react-icons/fa6";
import { PiLeafFill } from "react-icons/pi";

export default function Caracteristicas() {
    return (
        <div className="containerCaracteristicas">

            <h1>Produtos Stanlee prometem</h1>

            <div className='unidadesCaracteristicas'>

                <div className="temperatura">
                    <p>Conservar a temperatura por até 12h</p>
                    <div className="icons">
                        <FaTemperatureHigh size={40} />
                    </div>
                </div>

                <div className="vazamentos">
                    <p>100% vedados contra vazamentos</p>
                    <p></p>
                    <div className="icons">
                        <FaDropletSlash size={40} />
                    </div>
                </div>

                <div className="sustentabilidade">
                    <p>Feitos para durar: reutilizáveis e sustentáveis</p>
                    <div className="icons">
                        < PiLeafFill size={40} />
                    </div>
                </div>

            </div>

        </div>
    )
}