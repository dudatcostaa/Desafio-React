/*Componente que automaticamente rola a página para o topo sempre que a rota muda,
para garantir que o usuário comece no topo de cada página ao navegar entre elas*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}