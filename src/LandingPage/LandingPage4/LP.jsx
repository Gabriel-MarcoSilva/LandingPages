import React from 'react'

import "./LP.css"

const LandingPage = () => {
    return (
        <main>
            <nav className='navbar'>
                <ul>
                    <li>Logo</li>
                    <label>
                        <select>
                            <option>MensWear</option>
                            <option> alguma coisa</option>
                        </select>
                    </label>
                    <label>
                        <select>
                            <option>footWear</option>
                            <option> alguma coisa</option>
                        </select>
                    </label>
                    <label>
                        <select>
                            <option>accessories</option>
                            <option> alguma coisa</option>
                        </select>
                    </label>
                    <label>
                        <select>
                            <option>clearance</option>
                            <option> alguma coisa</option>
                        </select>
                    </label>
                </ul>

            </nav>
            <section className='container-content initial bgwhite'>
                <div className='sale-content'>
                    <h1>40% off</h1>
                    <h2>men's fall collection</h2>
                    <button>shop now</button>
                    <span> sale ends Octuber 2, 2025 at 11:59 PM PDT</span>
                </div>
                <div className='image-content'>

                </div>
            </section>
            <section className='container-info bgbrown'>
                <div>
                    <section className='quadrado'></section>
                    <section className='info-container-info'>
                        <h1>titulo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste bea</p>
                    </section>
                </div>
                <div>
                    <section className='quadrado'></section>
                    <section className='info-container-info '>
                        <h1>titulo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste bea</p>
                    </section>
                </div>
                <div>
                    <section className='quadrado'></section>
                    <section className='info-container-info'>
                        <h1>titulo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste bea</p>
                    </section>
                </div>
            </section>
            <hr />
            <section className='container-info  bgwhite'>
                <div className='publicidade'>
                </div>
                <div className='publicidade'>

                </div>
                <div className='publicidade'>

                </div>
                <div className='publicidade'>

                </div>
            </section>
            <section className='container-content  bgbrown'>

            </section>
            <footer>
                <section className='container-info-footer'>

                </section>
                <hr />
                <section className='container-info-footer'>

                </section>
            </footer>
        </main>
    )
}

export default LandingPage