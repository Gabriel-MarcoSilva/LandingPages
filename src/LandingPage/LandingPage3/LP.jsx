import React from 'react'
import "./LP.css"
import { Formik, Form, Field } from 'formik'

const LandingPage = () => {
    return (
        <main>
            <section className="container-body">
                <div className="info-landingPage">
                    <h1>Caixinha de biscoitos</h1>
                    <h3>pequenas informações</h3>
                    <section className="container-image">
                       
                    </section>
                </div>
                <div className="container-form">
                    <section className="cabecalho">
                        <h3>Baixe modelos gratuitos aqui</h3>
                        <h4>Os arquivos estã em formato Studio para utilização nas Silhouetes</h4>
                    </section>

                    <Formik initialValues={{}}>
                        <Form className="form">
                            <Field type="text" className="p_input" name="name" placeholder="Nome" />
                            <Field type="text" className="p_input" name="email" placeholder="Email" />
                            <Field type="select" className="p_input" name="mesAniersario" placeholder="mes aniversario" />
                            <Field type="select" className="p_input invisible" name="equipamento" />
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento1" />
                                <p>Silhouette Cameo 3</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento2" />
                                <p>Silhouette Cameo 2</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento3" />
                                <p>Silhouette Cameo</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento4" />
                                <p>Silhouette Portrait</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento5" />
                                <p>Silhouette Maint</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento6" />
                                <p>Mimo Stamping</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento7" />
                                <p>Mimo Embossing</p>
                            </label>
                            <label className="p_check">
                                <Field type="checkbox" name="equipamento8" />
                                <p>Nenhum</p>
                            </label>
                            <label className="container-button">
                                <button type="submit">
                                    enviar
                                </button>
                            </label>
                        </Form>
                    </Formik>
                </div>
            </section>
            <footer>
                <section className="block-publicidade">
                    item
                </section>
                <section className="block-publicidade">
                    item
                </section>
                <section className="block-publicidade">
                    item
                </section>
            </footer>
        </main>
    )
}

export default LandingPage