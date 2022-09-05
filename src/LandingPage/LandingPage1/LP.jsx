import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from "yup"
import axios from 'axios'

import './LP.css'

import {estourar} from '../../Functions/FunctionLandingPage1'

const LandingPage = () => {

    const handleClickLogin = (values) => {
        axios.post('http://localhost:4002/cadastrar', {
            email: values.email,
            name: values.name
        }).then((res) => {
            console.log("ok")
        }).catch((err) => {
            console.log("nfoi")
        })
    }

    const validationLogin = yup.object().shape({
        name: yup.string().required().min(3),
        email: yup.string().email().required("email necessário")
    })

    return (
        <>
            <section id="section-body">
                <nav id="container-nav">
                    <ul id="items-nav">
                        <li> <a className="click">Home</a></li>
                        <li> <a className="click">About us</a></li>
                        <li> <a className="click">Portfolie</a></li>
                        <li> <a className="click">Contact</a></li>
                        <li id="logo"><a>Logo</a></li>
                    </ul>
                </nav>
                <div id="container-content">
                    <section id="left-box" className="box">
                        <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                            <Form>
                                <label>
                                    <p>nome:</p><Field type="text" name='name' placeholder='nome' className="p_input" />
                                    <ErrorMessage
                                        component="span"
                                        name="name"
                                    />
                                </label>

                                <label>
                                    <p>email:</p><Field type="text" name='email' placeholder='email' className="p_input" />
                                    <ErrorMessage
                                        component="span"
                                        name="email"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>
                                    <button >Enviar</button>
                                </label>
                            </Form>
                        </Formik>
                    </section>
                    <section id="rigth-box" className="box">
                        <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                            <Form>
                                <label>
                                    <p>nome:</p><Field type="text" name='name' placeholder='nome' className="p_input" />
                                    <ErrorMessage
                                        component="span"
                                        name="name"
                                    />
                                </label>

                                <label>
                                    <p>email:</p><Field type="text" name='email' placeholder='email' className="p_input" />
                                    <ErrorMessage
                                        component="span"
                                        name="email"
                                    />
                                </label>
                                <br />
                                <br />
                                <label>
                                    <button >Enviar</button>
                                </label>
                            </Form>

                        </Formik>
                    </section>
                    <div class="flutter" onClick={() => estourar(0)}></div>
                    <div class="flutter flutter2" onClick={() => estourar(1)}></div>
                    <div class="flutter flutter3" onClick={() => estourar(2)}></div>
                    <div class="flutter flutter4" onClick={() => estourar(3)}></div>
                    <div class="container-invi">
                        <p class="invi"></p>
                    </div>

                </div>
                <footer>
                    dados
                </footer>
            </section>

        </>
    )
}

export default LandingPage