import React from "react"
import { useState } from "react"
import GATO from '../../assets/gato05.png'
import api from "../../service/api";
import InputForm from "../../components/Input-Form/input-form";
import TextareaForm from "../../components/Textarea-Form/textarea-form";
import { toast } from 'react-toastify';

const initialValues = {
    nome: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    formacao: "",
    disponibilidade: "",
    mensagem: ""
}

export default function VoluntarioForm() {
    const [voluntario, setVoluntario] = useState(initialValues);

    function handleToSend(e) {
        e.preventDefault()

        api.post('/voluntarios', voluntario).then(response => {
          toast.success("Sucesso ao enviar o formulário")
            setVoluntario(initialValues);

        }).catch(err => {
            console.error("Erro ao cadastrar o voluntário")
        })
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setVoluntario({ ...voluntario, [name]: value })
    }

    return (
        <article id="voluntarios">



            <div className="container">
                <h3>Voluntários</h3>
                <p>Precisamos de ajuda sempre! venha ser voluntário e distribuir amor com a gente!</p>
                <div className="div-form">
                    <form id="formulario-voluntario" onSubmit={handleToSend}>
                        <InputForm className="w-100" label="Nome" name="nome" required value={voluntario.nome} onChange={onChange} />
                        <InputForm className="w-100" type="date" label="Data de Nascimento" name="dataNascimento" required value={voluntario.dataNascimento} onChange={onChange} />
                        <InputForm className="w-100" label="telefone" name="telefone" required value={voluntario.telefone} onChange={onChange} />
                        <InputForm className="w-100" label="E-mail" name="email" required value={voluntario.email} onChange={onChange} />
                        <InputForm className="w-100" label="Formação" name="formacao" required value={voluntario.formacao} onChange={onChange} />
                        <InputForm className="w-100" label="Disponibilidade" name="disponibilidade" required value={voluntario.disponibilidade} onChange={onChange} />
                        <div className="w-100">
                            <TextareaForm className="w-100" label="Digite uma mensagem para nós" name="mensagem" required value={voluntario.mensagem} onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3 p-2">
                            Enviar
                        </button>
                    </form>
                    <div class="div-imagens-artigo">
                        <img src={GATO} alt="" />
                    </div>
                </div>

            </div>

        </article>
    )
}