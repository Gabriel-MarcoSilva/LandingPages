import React from "react";
import './LP.css'
import { GiBee } from 'react-icons/gi'
import Imagem from './image/pessoaApontando.png'

const LandingPage = () => {
    return (
        <main>
            <p>
                <GiBee className="airplane" />
            </p>
            <section className="container-body">

                <div className="container-info">

                    <img src={Imagem} name="img" alt="pessoa apontando" />
                    <hr />
                    <div className="imagem">
                        <p>
                            <GiBee className="airplane2" />
                            <p>
                                <GiBee className="airplane" />
                            </p>
                        </p>
                        <h2>Venha aprender e em como ganhar uma renda extra na criação de abelhas!! </h2>
                        <p>
                            <GiBee className="airplane" />
                            <p>
                                <GiBee className="airplane4" />
                            </p>
                        </p>
                    </div>

                </div>
                <div className="container-form">
                    <h1>Para se inscrever preencha os campos abaixo:</h1><h1 className="apontar">👇</h1>
                    <p>
                        <GiBee className="airplane2" />
                    </p>
                    <form>
                        <label>
                            <input type="text" name="nome" placeholder="Nome" />
                        </label>
                        <p>
                            <GiBee className="airplane3" />
                        </p>
                        <label>
                            <input type="email" name="email" placeholder="email" />
                        </label>
                        <label>
                            <input type="number" name="telefone" placeholder="(XX) XXXXX-XXXX" />
                        </label>
                        <label>
                            <button>enviar</button>
                        </label>
                    </form>
                    <p>
                        <GiBee className="airplane" />
                    </p>
                </div>
            </section>


        </main>
    )
}


export default LandingPage