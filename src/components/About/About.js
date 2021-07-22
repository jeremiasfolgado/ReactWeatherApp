import React from 'react'
import './About.css'

const About = ()=>{
    return (
        <div className="main-container">
            <div className="sobre-mi-container">
                <h2 className="title">Hola soy Jere y esta es mi Weather App</h2>
                <span>
                Esta SPA se desarrolló en el marco del bootcamp Henry cuando estábamos aprendiendo React JS, es muy simple desde su funcionamiento, consume la api gratuita Open Weather Map y desde esta se trae la info para poder renderizarla en la UI. El diseño muestra los elementos minimos para brindar al usuario un mensaje claro y sin ruido, desde el desarrollo pude aprender el workflow de React, como funcionan y se gestionan las props, manejo de errores, llamadas a api externa, asincronismo entre otras. Si queres saber más de mi te dejo los links a mis perfiles en redes. Saludos y gracias por la visita.
                </span>
            </div>
            <div>

                <div className="actions-container">
                    <a className="link-action" href="https://www.linkedin.com/in/jeremias-folgado-fullstack-developer/">
                        <div className="action">linkedIn</div>
                    </a>
               
                    <a className="link-action" href="https://github.com/jeremiasfolgado">
                        <div className="action">
                            Git hub
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default About;