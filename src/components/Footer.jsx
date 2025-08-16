import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function Footer() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function sendEmailSubmissao(e) {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '' || email === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido!');
            return;
        }

        const parametrosTemplateSubmissao = {
            "name": name,
            email: email
        }

        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_FOOTER_ID, parametrosTemplateSubmissao, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then((response) => {
                console.log("Email enviado", response.status, response.text);
                setName('');
                setEmail('');
            }, (err) => {
                console.log("Erro", err);
            })
    }

    return (
        <footer className="footer">

            <div className='conteudo-footer'>

                <div className="containerSejaOPrimeiroASaber">
                    <h1>Seja o primeiro a saber</h1>

                    <h2>Fique por dentro das novidades Stanlee!</h2>

                    <form className="formulario" onSubmit={sendEmailSubmissao}>
                        <div className="campo-nome">
                            <label htmlFor="nome"></label>
                            <input type="text" id="nome" name="nome" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className="campo-email">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <button type="submit" ><FiArrowRight /></button>
                    </form>
                </div>

                <div className="redes-sociais">
                    <p>Redes Sociais</p>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/ejpixel/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ejpixel/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="copy">
                    <p>
                        &copy; 2025 <span>Stanlee</span>
                    </p>
                </div>

            </div>

        </footer>

    )
}