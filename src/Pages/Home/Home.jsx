import React from "react"
import TOP from '../../assets/top.jpg'
import GATO_1 from '../../assets/gato01.jpg'
import GATO_2 from '../../assets/gato02.jpg';
import GATO_3 from '../../assets/gato04.jpg';
import CACHORRO_1 from '../../assets/cao01.jpg';
import CACHORRO_2 from '../../assets/cao02.jpg';
import CACHORRO_3 from '../../assets/cao03.jpg';
import CACHORRO_4 from '../../assets/cao04.jpg';
import CardItem from "../../components/CardItem/card-item";

export default function Home (){

    return(
        <>
            <div className="image-top">
                <img id="imgtopsite" src={TOP} alt="pets" />
            </div>
            <div className="quadros">
                <div id="frame">
                    <CardItem id="img" image src={GATO_1} alt="GATO_1" />

                    <CardItem 
                        id="div-quadro-02"
                        pid="quadro02"
                        icon="bi bi-calendar2-date"
                        label="Desde 2019" />  

                    <CardItem image src={CACHORRO_1} alt="Cachorro_01" />   

                    <CardItem 
                        id="div-quadro-03"
                        pid="quadro04"
                        icon="bi bi-duffle-fill"
                        label="+ de 320 Animais alimentados todos os dias" />

                    <CardItem image src={GATO_3} alt="GATO-03" />
                    <CardItem image src={CACHORRO_3} alt="Cao-03" />
                    <CardItem image src={CACHORRO_4} alt="Cao-04" />
                    
                    <CardItem 
                    id="div-quadro-04"
                    pid="quadro08"
                    icon="bi bi-house-fill"
                    label="200 Animais abrigados" />

                    <CardItem image src={CACHORRO_2} alt="Cao-02" />
                    <CardItem image src={GATO_2} alt="GATO-02" />
                </div>
            </div>
        </>
    )
}