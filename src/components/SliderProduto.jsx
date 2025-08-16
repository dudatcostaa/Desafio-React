import Slider from "./Slider";
import ItemProduto from "./ItemProduto";
import produto from "./dataProdutos";
import "./SliderProduto.css";

export default function SliderProduto() {
    return (
        <div className="sliderProdutoContainer">
            <Slider
                titulo="Produtos em destaque"
                itens={produto}
                ComponenteItem={ItemProduto}
            />
        </div>
    );
}