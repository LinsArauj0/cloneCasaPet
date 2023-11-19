import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import QuemSomos from "../Pages/Quem-somos/Quem-somos"
import VoluntarioForm from "../Pages/Voluntarios/Voluntarios-form"
import Adocoes from "../Pages/Adocao/Adocoes"
import Doacoes from "../Pages/Doacoes/Doacoes"
import Contatos from "../Pages/Contatos/Contatos"
import NavBar from "../components/Navbar/navbar"
import Footer from "../components/Footer/Footer"

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/inicio" element={<Home />}/>
                <Route path="/quem-somos" element={<QuemSomos />}/>
                <Route path="/voluntario" element={<VoluntarioForm />}/>
                <Route path="/Adoçoes" element={<Adocoes />}/>
                <Route path="/doações" element={<Doacoes />}/>
                <Route path="/contatos" element={<Contatos />}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}