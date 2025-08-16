import { useState } from "react";
import '../components/ItemProduto.css';
import ItemBase from './ItemBase';

export default function ItemProduto({ item }) {

    const coresDisponiveis = Object.keys(item.imagens);
    const [corSelecionada, setCorSelecionada] = useState(coresDisponiveis[0]);

    return (
        <ItemBase titulo={item.nome}>

            <div className="imagemEColorPicker">
                <img src={item.imagens[corSelecionada]} alt={`${item.nome} - ${corSelecionada}`} className="produtoImagem" />

                <div className="colorPicker">
                    {coresDisponiveis.map(
                        (cor) => (
                            <button className="corBotao"
                                key={cor}
                                onClick={() => setCorSelecionada(cor)}

                                style={{ backgroundColor: cor }}
                            />
                        ))}
                </div>
            </div>

        </ItemBase>
    );
}