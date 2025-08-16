import cliente from "./dataClientes";
import Slider from "./Slider";
import ItemCliente from "./ItemCliente"

export default function SliderCliente() {
    return (
        <div className="sliderClientesContainer">
            <Slider
                titulo=""
                itens={cliente}
                ComponenteItem={ItemCliente}
            />
        </div>
    );
}