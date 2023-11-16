import { Link } from "react-router-dom"
import NavItem from "../NavItem/nav-item"
import './style.css'

export default function NavBar() {


    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div  className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                {/* <a className="navbar-brand" href="#">Casa Pet</a> */}
                <ul className="nav">
                    <NavItem label="Início" href="/inicio" />
                    <NavItem label="Casa pet" href="quem-somos" />
                    <NavItem label="Voluntários" href="voluntario" />
                    <NavItem label="Adoções/Padrinhos" href="adoçoes" />
                    <NavItem label="Ajuda" href="doações" />
                    <NavItem label="Contatos" href="contatos" />
                </ul>
            </div>
        </nav>
    )
}