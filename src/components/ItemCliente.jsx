import './ItemCliente.css';
import ItemBase from './ItemBase';

export default function ItemCliente({ item }) {
    return (
        <ItemBase

            titulo={item.nome}>

            <div className='clienteImagem'>
                <img src={item.imagem} alt={`Cliente Stanlee${item.nome}`} />
            </div>

            <div className='paragrafoDepoimento'>
                "{item.depoimento}"
            </div>

        </ItemBase >
    );
}