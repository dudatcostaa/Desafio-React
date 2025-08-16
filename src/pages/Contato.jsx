import './Contato.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contato() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e){
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === '' || email === '' || message === ''){
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if(!emailRegex.test(email)){
            alert('Por favor, insira um e-mail válido!');
                return;
        }

        const parametrosTemplate = {
            "name": name,
            email: email,
            message: message
        }
        
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_CONTATO_ID, parametrosTemplate, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

        .then((response)=> {
            console.log("Email enviado", response.status, response.text)
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
            console.log("Erro", err)
        })
    }

    return (
        <div className="contatoContainer">
            <h1>Entre em contato com a nossa equipe!</h1>

            <div className='paragrafosContainer'>
                <p>Tem alguma dúvida ou sugestão?</p>
                <p>Estamos prontos para te ouvir!</p>
                <p>Use o formulário abaixo ou fale com a gente pelas redes sociais.</p>
            </div>

            <form className="formulario" onSubmit={sendEmail}>

                <div className="campo">
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" placeholder=" Seu nome" onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                <div className="campo">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" id="email" placeholder=" Seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="campoMensagem">
                    <label htmlFor="mensagem">Mensagem: </label>
                    <textarea id="mensagem" name="mensagem" placeholder=" Digite aqui sua mensagem para a equipe Stanlee" onChange={(e) => setMessage(e.target.value)} value={message}/>
                </div>

                <button type="submit">Enviar Mensagem</button>

            </form>
        </div>
    );
}