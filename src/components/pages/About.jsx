import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className='about'>
        <h2 className='about-title'>Sobre</h2>
        <div className="about-description">
            <p>A ideia do projeto nasceu no concurso em Inovação e Economia Azul <span className='text-highlight'>Blue Hackathon</span> durante o evento Ocean Week 2022 em Cabo Verde e foi a vencedora do concurso. O projeto é atualmente mantido por 4 estudantes da <span className='text-highlight'>Universidade Técnica do Atlântico</span> Nuno Lima , Vitória Anthony,  Élida Pio e William Baleno.</p>
        </div>
    </section>
  )
}

export default About;