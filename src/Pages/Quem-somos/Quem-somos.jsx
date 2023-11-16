import React from "react";
import LOGO from '../../assets/logoCasaPet.png';

export default function QuemSomos() {

    return(
        <article id="quem-somos">
            <div className="conteudo">
                <img src={LOGO} alt="Casa Pet" />
                <div className="texto-artigo">
                    <h3>Quem Somos</h3>
                    <p>Antes mesmo de estabelecer a Casa Pet, o trabalho principal da idealizadora do projeto, consistia em auxiliar protetores independentes, fornecendo apoio financeiro para resgates, garantindo alimentação e cuidando dos animais nas ruas e esse esforço continua sendo parte fundamental do nosso trabalho até hoje.</p>
                    <p>Atuando no ano de 2019 de forma individual e voluntária tem inicio o projeto Casa Pet. Apenas no final de 2020, marcando um importante capítulo em nossa jornada, contratamos nossa primeira equipe, que continua conosco até os dias de hoje. Desde então, nossa casa pet tem crescido gradualmente, acompanhada pelo aumento no número de animais que acolhemos e cuidamos.</p>
                    <p>Atualmente, todos os dias, proporcionamos cuidado e alimentação a uma média de 120 animais nas imediações da Casa Pet e nos bairros vizinhos, como Morada do Sol e Santa Isabel. Além disso, temos o orgulho de abrigar em torno de 200 animais, sendo 50 gatos e 150 cachorros.</p>
                    <p>Recentemente, concretizamos nossa iniciativa ao oficialmente estabelecer a Casa Pet como uma organização não governamental (ONG). Esse processo demandou tempo devido aos custos consideráveis e aos trâmites burocráticos complexos envolvidos. Agora, com grande satisfação, somos uma associação oficialmente reconhecida!</p>
                </div>
            </div>
        </article>
    )
}