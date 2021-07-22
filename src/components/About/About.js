import React from 'react'
import './About.css'

const About = ()=>{
    return (
        <div className="main-container">
            <div className="sobre-mi-container">
                <h2 className="title">Hola soy Jere y esta es mi Weather App</h2>
                <span>
                Esta SPA se desarrollo en el marco del aprendizaje de la tecnología en el bootcamp Henry, es super sencilla desde su funcionamiento, consume la api gratuita open weather map y desde esta se trae la info para poder renderizarla en la UI. El diseño es por demas mínimo, ya que el foco estuvo en el desarrollo. Si queres saber mas de mi te dejo los links a mis perfiles en redes. Saludos y gracias por la visita.
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