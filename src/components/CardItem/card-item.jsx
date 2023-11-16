import React from "react"
import './style.css'

export default function CardItem(props) {
    return (
        <div id={props.id} className="quadro-quadros">
            {
                props.image === true ?
                    <img id={props.id} src={props.src} alt={props.alt} />   
                    :
                    <>
                    <i className={props.icon}></i>
                    <p id={props.pid}>{props.label}</p>
                    </>
            }
        </div>
    )
}