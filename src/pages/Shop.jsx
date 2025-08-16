import ItemProduto from "../components/ItemProduto";
import produto from "../components/dataProdutos";
import '../pages/Shop.css';

export default function Shop() {
    return (
        <section className="produtosContainer">

            <h1>Modelos</h1>

            <div className="produtos">
                {produto.map((item, i) => (<ItemProduto key={i} item={item} />))}
            </div>

        </section>
    );
}
