/*Componente para cards usado de base para os componentes ItemCliente e ItemProduto*/

import '../components/ItemBase.css';

export default function ItemBase({ titulo, children }) {
  return (
    <section className="itemCard">

      <h2 className="itemNome">{titulo}</h2>

      <div className="itemBaseConteudo">
        {children}
      </div>

    </section>
  );
}