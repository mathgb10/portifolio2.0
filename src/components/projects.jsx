import VpsPanel from '../assets/vpspanel.webp';
import Zaindex from '../assets/zaindex.webp';
import JSicon from '../assets/js.svg';
import PHPicon from '../assets/php.svg';
import Dockericon from '../assets/docker.svg';

export default function Projects() {
    return (
        <section className='section projects-section' id='projetos'>
            <div className='section-header'>
                <span>PROJETOS</span>
                <h2>O que estou construindo.</h2>
            </div>
            <div className='projects'>
                <div className='card'>
                    <div className='project-image'>
                        <img src={VpsPanel} alt="VPS Panel" />
                    </div>
                    <div className='project-content'>
                        <h3>VPS Panel</h3>
                        <p>
                            Painel desenvolvido para facilitar a visualização de recursos
                            do VPS, permitindo-me acompanhar informações do sistema em uma interface web.
                        </p>
                    </div>
                    <div className='project-tech'>
                        <span><img className="icon" src={PHPicon} alt="PHP"/>PHP</span>
                        <span><img className="icon" src={JSicon} alt="JS"/>JavaScript</span>
                        <span>REST API</span>
                        <span><img className="icon" src={Dockericon} alt="Docker"/>Docker</span>
                    </div>
                </div>
                <div className='card'>
                    <div className='project-image'>
                        <img src={Zaindex} alt="Zaindex" />
                    </div>
                    <div className='project-content'>
                        <h3>Zaindex</h3>
                        <p>
                            Projeto voltado para descoberta e consulta de animes e mangás
                            utilizando ua API externa.
                        </p>
                    </div>
                    <div className='project-tech'>
                        <span><img className="icon" src={JSicon} alt="JS"/>JavaScript</span>
                        <span>Jikan API/Terain API</span>
                    </div>
                </div>
            </div>
        </section>
    )
}