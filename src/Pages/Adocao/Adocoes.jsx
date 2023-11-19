import BOLINHA from '../../assets/bolinha01.png'
import BOLINHA2 from '../../assets/bolinha02.png'
import BOLINHA3 from '../../assets/bolinha03.png'

export default function Adocoes() {

    return (
        <article id="adoçoes">
            <div className="conteudo-artigo">
                <div className="artigo">
                    <div className="animais-padrinhos">
                        <img src={BOLINHA} alt="cãozinho com seus donos" />
                    </div>
                    <div className='text-artigo'>
                        <h3> Dê Amor, Adote uma Vida!</h3>
                        <p>No nosso abrigo de animais sem fins lucrativos, acreditamos que cada pata merece a chance de dançar ao ritmo do amor e ser acolhida em um lar caloroso. Os animais que chamam nosso abrigo de casa têm histórias únicas, cheias de esperança e resiliência, esperando para se tornarem parte de uma família amorosa.</p>
                    </div>
                </div>

                <div className="artigo">
                    <div className="animais-padrinhos">
                        <img src={BOLINHA2} alt="cãozinho seu dono" />
                    </div>
                    <div className='text-artigo'>
                        <h3>Adote, Não Compre</h3>
                        <p>Ao considerar a adição de um novo membro à sua família, pense em dar a um animal abandonado uma segunda chance. Nossos amigos peludos aguardam ansiosos por lares onde possam compartilhar sua lealdade incondicional, trazer alegria aos corações e criar memórias duradouras. A adoção não apenas salva vidas, mas também enriquece a sua.</p>
                    </div>

                </div>

                <div className="artigo">
                    <div className="animais-padrinhos">
                        <img src={BOLINHA3} alt="cãozinho com sua dona" />
                    </div>
                    <div className='text-artigo'>
                        <h3>Seja um Padrinho</h3>
                        <p>Você pode fazer a diferença na vida dos nossos animais mesmo que não possa adotar diretamente. Torne-se um padrinho ou madrinha e ajude a custear os cuidados essenciais, como alimentação, vacinação e tratamentos médicos. Com sua generosidade, você se torna parte vital do processo de transformação, proporcionando aos nossos animais a chance de uma vida melhor.</p>
                        <p>Ao unir-se a nós, você não apenas faz uma diferença tangível na vida desses animais, mas também se torna parte de uma comunidade apaixonada que trabalha para criar um mundo onde cada animal seja amado e respeitado. Juntos, podemos construir pontes de compaixão e fazer do mundo um lugar mais gentil para todos.</p>
                    </div>
                </div>

                <div className="artigo">
                    <h3>Adote. Ame. Cuide.</h3>
                </div>
            </div>
        </article>
    )
}