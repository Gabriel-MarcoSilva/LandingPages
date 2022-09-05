import React from 'react'
import './LP.css'
import Imagem from './images/fachada.jpeg'
import Imagem2 from './images/selo.jpg'
import {MdDoubleArrow}  from "react-icons/md"


const LandingPage = () =>{
    return(
        <main>
            <section className='container-body'>
                <div className="contianer-info">
                    <section className="logo">
                        <h1>Lockwood</h1>
                        <hr/>
                        <span>luxury homes</span>
                    </section>
                    <section className="container-image">
                        <img src={Imagem} alt="fachada de uma casa renderizada"/>
                    </section>
                    <section className="container-dados">
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                        <hr/>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                        <hr/>
                        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    </section>
                    <section className="contrast">
                        <h1>Visit the show home today</h1>
                        <span> <MdDoubleArrow className="animar"/> </span>
                    </section>
                    <footer></footer>
                </div>
                <div className="container-form">
                    <h1>
                        Awad Winning Luxury Homes in Austin's Cedar Park
                    </h1>
                    <h3>
                        Book a time to visit our show home and see what luxury living looks like
                    </h3>
                    <div className="info-hotel">
                        Interiors by Phillipe Lasone
                    </div>
                    <div className="info-hotel">
                        12ft floor to ceiling windowns
                    </div>
                    <div className="info-hotel">
                        Marble covered decks
                    </div>
                    <div className="container-fivestar">
                        <img src={Imagem2} className="fivestar"/>
                    </div>
                    <form>
                        <label>
                            <p> Yor Name</p>
                            <input type="text" className="input"/>
                        </label>
                        <label>
                            <p> Yor Name</p>
                            <input type="text" className="input"/>
                        </label>
                        <label>
                            <p> Yor Name</p>
                            <input type="text" className="input"/>
                        </label>
                        <label>
                            <p> Yor Name</p>
                            <input type="text" className="input"/>
                        </label>
                        <label>
                            <button>Book my visit</button>
                        </label>
                        <span>
                            Only 3 units remain!
                        </span>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default LandingPage