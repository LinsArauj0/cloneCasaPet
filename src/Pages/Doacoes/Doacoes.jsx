import BOLINHA4 from '../../assets/bolinha04.png'
import { FaPix } from "react-icons/fa6";

export default function Doacoes() {

    return (
        <article id="doacoes">
            <div className="conteudo-doacoes">
                <div className="artigo-doacoes">
                    <h3> Como você ajuda</h3>
                    <p>Suas doações de <b>alimentos e medicamentos</b> são a espinha dorsal de nossa capacidade de fornecer cuidados diários. Ração de qualidade, medicamentos essenciais e suprimentos médicos garantem que cada animal receba a atenção de que precisa. Cada saco de ração e frasco de remédio representa uma chance renovada para uma vida mais saudável.</p>
                    <p>Contribuições <b>financeiras</b> são um apoio vital que nos permite atender às necessidades imediatas e emergenciais. Seja uma doação única ou um compromisso mensal, cada quantia contribui para a continuidade dos serviços essenciais, incluindo tratamentos veterinários, procedimentos cirúrgicos e manutenção das instalações.</p>
                    <p><FaPix style={{ color: '#4cb8a9', fontSize: "2rem" }} /> <b> pix@casapet.org</b></p>
                </div>
                <div className="img-doacoes">
                    <img src={BOLINHA4} alt="" />
                </div>
            </div>
        </article>
    )
}