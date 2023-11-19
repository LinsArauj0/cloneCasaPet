import BOLINHA5 from '../../assets/bolinha05.png'
import { FaInstagram, FaWhatsapp, FaVimeo } from "react-icons/fa6";

export default function Contatos() {

    return (
        <article id="contatos">
            <div className="conteudo-contatos">
                <div className="img-contato">
                    <img src={BOLINHA5} alt="" />
                </div>
                <div className="texto-contato">
                    <h3> Contatos</h3>
                    <div>
                        <p>Estamos entusiasmados em compartilhar nossa paixão por cuidar desses animais especiais. Para saber mais sobre como você pode ajudar, entre em contato conosco através dos seguintes canais:
                        </p>
                    </div>

                    <div id="contatos-web">
                        <p> <a href="https://wa.me/86999800529"> <FaWhatsapp className='whats-icon' /> 86 99980-0529</a></p>
                        <p><a href="https://www.instagram.com/casapethe/"><FaInstagram className='insta-icon' /> Instagram</a></p>
                        <p><a href="https://www.vakinha.com.br/vaquinha/construcao-de-abrigo-de-lar-temporario-para-animais-teresina-pi"><FaVimeo className='vakinha-icon' /> Vakinha</a></p>
                    </div>
                    <div>
                        <p>Siga-nos no Instagram para ficar atualizado sobre nossas histórias, eventos e oportunidades de contribuir!
                        </p>
                    </div>

                </div>
            </div>
        </article>
    )
}