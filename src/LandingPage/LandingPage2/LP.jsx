import React from 'react'

import { CgMoon, CgSun } from 'react-icons/cg'

import "./LP.css"

import 'animate.css';

const LandingPage = () => {
    return (
        <main>
            <nav>navegar
                <label className="container-checkbox">
                    <input type="checkbox" id="mode-dark" onClick={() => mudaBack()} />
                    <p className="check">
                        <CgSun className="check-moon" />
                        <CgMoon className="check-sun" />
                    </p>
                </label>
            </nav>
            <section className="container-body">
                <h1 className="fixo">Nome do site</h1>
                <section className="block">
                    <div className="block-info">
                        <section className="container-photo animate__fadeInLeft animate__animated ">
                            <div className="photo"></div>
                        </section>
                    </div>
                    <div className="block-info animate__fadeInUp animate__animated">
                        <p>
                            Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget,
                            tempor sit amet, ante. Donec eu libero sit amet quam
                            egestas semper. Aenean ultricies mi vitae est. Mauris
                            placerat eleifend leo. Quisque sit amet est et sapien
                            ullamcorper pharetra. Vestibulum erat wisi, condimentum
                            sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
                            elit eget tincidunt condimentum, eros ipsum rutrum orci, sa
                            gittis tempus lacus enim ac dui. Donec non enim in turpis p
                            ulvinar facilisis. Ut felis. Praesent dapibus, neque id cur
                            sus faucibus, tortor neque egestas augue, eu vulputate magn
                            a eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidun
                            t quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                    </div>
                </section>
                <hr/>

            </section>
            <footer>footear</footer>

        </main>
    )
}

function mudaBack() {
    if (document.getElementById("mode-dark").checked) {
        document.getElementsByTagName("main")[0].style.background = "#340a0b"
        document.getElementsByClassName("container-body")[0].style.background = "#240f03"
        document.getElementsByTagName("main")[0].style.color = "#fff"
        document.getElementsByTagName("nav")[0].style.color = "#fff"
        document.getElementsByClassName("check")[0].style.background = "#fff"
        document.getElementsByClassName("check-moon")[0].style.display = "block"
        document.getElementsByClassName("check-sun")[0].style.display = "none"
    }
    else {
        document.getElementsByTagName("main")[0].style.background = "#6c1305"
        document.getElementsByClassName("container-body")[0].style.background = "#fff"
        document.getElementsByTagName("main")[0].style.color = "#330a04"
        document.getElementsByTagName("nav")[0].style.color = "#330a04"
        document.getElementsByClassName("check")[0].style.background = "transparent"
        document.getElementsByClassName("check-moon")[0].style.display = "none"
        document.getElementsByClassName("check-sun")[0].style.display = "block"
    }
}

export default LandingPage