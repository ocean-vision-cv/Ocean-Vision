
import './Home.css'

import image from '../../assets/image1.jpg'
// import scroll from '../../assets/scroll.png'


const Home = () => {
    return (
        <section className="home">
            {/* <img src={scroll} alt="scroll" className='scroll-icon' /> */}
            <div className="left-description">
                <h1 className='description-title' id='home-title'>Ocean Vision</h1>
                <div className="container-description">
                    <div className="what-description">
                        <h2 className='sub-title'> O Que é ?</h2>
                        <p> Ocean Vision é uma startup que oferece uma experiência de viagem subaquática de forma virtual, e nesta viagem pode conhecer as diversas espécies marinhas.
                            Não uma substituição mas sim uma alternativa ao mergulho real, com <span className='text-highlight'>menos tempo</span> e <span className='text-highlight'>menos custo</span>.
                        </p>
                    </div>
                    <div className="why-description">
                        <h2 className='sub-title'> Porque ?</h2>
                        <p> No lema <span className='text-highlight'>conhecer para preservar</span> levamos as pessoas a uma <span className='text-highlight'>viagem subaquática</span> para conhecer as espécies marinhas, dessa forma acreditamos que a consciencialização é a chave para ajudar na preservação das espécies.
                            Especialmente para as pessoas que <span className='text-highlight'>amam o mar</span> e querem explorar locais novos ou para pessoas que têm <span className='text-highlight'>medo  ou incapacidade</span> de fazer um mergulho real.
                        </p>
                    </div>
                    <div className="how-description">
                        <h2 className='sub-title'> Como ?</h2>
                        <p>Realidade  virtual ,realidade aumentada e inteligência artificial são temas que vêm ficando cada vez mais populares e serão a base para proporcionar essa experiência.
                            O conceito é usar <span className='text-highlight'>óculos de realidade virtual</span>com imagem e vídeos em 360°.
                            Como etapa inicial iremos mapear as principais trilhas subaquáticas de Cabo Verde, usando câmeras especializadas na captura de imagem e vídeos de 360° .
                        </p>
                    </div>
                </div>
            </div>
            <div className="right-description">
                <div className="image-container">
                    <img src={image} alt="description" />
                </div>
            </div>
        </section>
    )
};

export default Home;


