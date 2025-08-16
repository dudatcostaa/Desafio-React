/*Lista de produtos com seus nomes, imagens e cores.
Usado em ItemProduto, SliderProduto, página Shop e no componente CallToAction
*/

/* AZUL */
import azulCafe from '../assets/produtos/AzulCafe.png';
import azulCaneca from '../assets/produtos/AzulCaneca.png';
import azulCanecaTampa from '../assets/produtos/AzulCanecaTampa.png';
import azulCantil from '../assets/produtos/AzulCantil.png';
import azulCopo from '../assets/produtos/AzulCopo.png';
import azulCopoTampa from '../assets/produtos/AzulCopoTampa.png';
import azulFlipStraw from '../assets/produtos/AzulFlipStraw.png';
import azulGarrafao from '../assets/produtos/AzulGarrafao.png';
import azulQuencher from '../assets/produtos/AzulQuencher.png';

/* LARANJA */
import laranjaCafe from '../assets/produtos/LaranjaCafe.png';
import laranjaCaneca from '../assets/produtos/LaranjaCaneca.png';
import laranjaCanecaTampa from '../assets/produtos/LaranjaCanecaTampa.png';
import laranjaCantil from '../assets/produtos/LaranjaCantil.png';
import laranjaCopo from '../assets/produtos/LaranjaCopo.png';
import laranjaCopoTampa from '../assets/produtos/LaranjaCopoTampa.png';
import laranjaFlipStraw from '../assets/produtos/LaranjaFlipStraw.png';
import laranjaGarrafao from '../assets/produtos/LaranjaGarrafao.png';
import laranjaQuencher from '../assets/produtos/LaranjaQuencher.png';

/* ROSA */
import rosaCafe from '../assets/produtos/RosaCafe.png';
import rosaCaneca from '../assets/produtos/RosaCaneca.png';
import rosaCanecaTampa from '../assets/produtos/RosaCanecaTampa.png';
import rosaCantil from '../assets/produtos/RosaCantil.png';
import rosaCopo from '../assets/produtos/RosaCopo.png';
import rosaCopoTampa from '../assets/produtos/RosaCopoTampa.png';
import rosaFlipStraw from '../assets/produtos/RosaFlipStraw.png';
import rosaGarrafao from '../assets/produtos/RosaGarrafao.png';
import rosaQuencher from '../assets/produtos/RosaQuencher.png';

/* ROXO */
import roxoCafe from '../assets/produtos/RoxoCafe.png';
import roxoCaneca from '../assets/produtos/RoxoCaneca.png';
import roxoCanecaTampa from '../assets/produtos/RoxoCanecaTampa.png';
import roxoCantil from '../assets/produtos/RoxoCantil.png';
import roxoCopo from '../assets/produtos/RoxoCopo.png';
import roxoCopoTampa from '../assets/produtos/RoxoCopoTampa.png';
import roxoFlipStraw from '../assets/produtos/RoxoFlipStraw.png';
import roxoGarrafao from '../assets/produtos/RoxoGarrafao.png';
import roxoQuencher from '../assets/produtos/RoxoQuencher.png';

/* VERDE */
import verdeCafe from '../assets/produtos/VerdeCafe.png';
import verdeCaneca from '../assets/produtos/VerdeCaneca.png';
import verdeCanecaTampa from '../assets/produtos/VerdeCanecaTampa.png';
import verdeCantil from '../assets/produtos/VerdeCantil.png';
import verdeCopo from '../assets/produtos/VerdeCopo.png';
import verdeCopoTampa from '../assets/produtos/VerdeCopoTampa.png';
import verdeFlipStraw from '../assets/produtos/VerdeFlipStraw.png';
import verdeGarrafao from '../assets/produtos/VerdeGarrafao.png';
import verdeQuencher from '../assets/produtos/VerdeQuencher.png';

const produto = [

    {
        nome: "Caneca",
        imagens: {
            pink: rosaCaneca,
            lightblue: azulCaneca,
            lightsalmon: laranjaCaneca,
            thistle: roxoCaneca,
            lightgreen: verdeCaneca
        }
    },

    {
        nome: "Copo para Café",
        imagens: {
            pink: rosaCafe,
            lightblue: azulCafe,
            lightsalmon: laranjaCafe,
            thistle: roxoCafe,
            lightgreen: verdeCafe
        }
    },

    {
        nome: "Cantil",
        imagens: {
            pink: rosaCantil,
            lightblue: azulCantil,
            lightsalmon: laranjaCantil,
            thistle: roxoCantil,
            lightgreen: verdeCantil
        }
    },

    {
        nome: "Copo",
        imagens: {
            pink: rosaCopo,
            lightblue: azulCopo,
            lightsalmon: laranjaCopo,
            thistle: roxoCopo,
            lightgreen: verdeCopo
        }
    },
    {
        nome: "Copo com Tampa",
        imagens: {
            pink: rosaCopoTampa,
            lightblue: azulCopoTampa,
            lightsalmon: laranjaCopoTampa,
            thistle: roxoCopoTampa,
            lightgreen: verdeCopoTampa
        }
    },
    {
        nome: "Garrafa Flip Straw",
        imagens: {
            pink: rosaFlipStraw,
            lightblue: azulFlipStraw,
            lightsalmon: laranjaFlipStraw,
            thistle: roxoFlipStraw,
            lightgreen: verdeFlipStraw
        }
    },
    {
        nome: "Garrafão",
        imagens: {
            pink: rosaGarrafao,
            lightblue: azulGarrafao,
            lightsalmon: laranjaGarrafao,
            thistle: roxoGarrafao,
            lightgreen: verdeGarrafao
        }
    },
    {
        nome: "Garrafa Quencher",
        imagens: {
            pink: rosaQuencher,
            lightblue: azulQuencher,
            lightsalmon: laranjaQuencher,
            thistle: roxoQuencher,
            lightgreen: verdeQuencher
        }
    },
    {
        nome: "Caneca com Tampa",
        imagens: {
            pink: rosaCanecaTampa,
            lightblue: azulCanecaTampa,
            lightsalmon: laranjaCanecaTampa,
            thistle: roxoCanecaTampa,
            lightgreen: verdeCanecaTampa
        }
    },
];

export default produto;