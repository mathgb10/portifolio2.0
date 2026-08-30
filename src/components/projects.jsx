import VpsPanel from '../assets/imgs/vpspanel.webp';
import Zaindex from '../assets/imgs/zaindex.webp';
import VpsPanelMobile from '../assets/imgs/vpspanel-mobile.jpeg';
import ZaindexMobile from '../assets/imgs/zaindex-mobile.jpeg';

import JSicon from '../assets/icons/js.svg';
import PHPicon from '../assets/icons/php.svg';
import Dockericon from '../assets/icons/docker.svg';

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
                        <img className='pc' src={VpsPanel} alt="VPS Panel" />
                        <img className='cell' src={VpsPanelMobile} alt="VPS Panel" />
                    </div>
                    <div className='project-content'>
                        <h3>VPS Panel</h3>
                        <p>
                            Painel desenvolvido para facilitar a visualização de recursos
                            do VPS, permitindo-me acompanhar informações do sistema em uma interface web.
                        </p>
                    </div>
                    <div className='project-tech'>
                        <span><img className="icon" src={PHPicon} alt="PHP" />PHP</span>
                        <span><img className="icon" src={JSicon} alt="JS" />JavaScript</span>
                        <span><img className="icon" src={Dockericon} alt="Docker" />Docker</span>
                        <span>REST API</span>
                    </div>
                </div>
                <div className='card'>
                    <div className='project-image'>
                        <img className='pc' src={Zaindex} alt="Zaindex" />
                        <img className='cell' src={ZaindexMobile} alt="Zaindex" />
                    </div>
                    <div className='project-content'>
                        <h3>Zaindex</h3>
                        <p>
                            Projeto voltado para descoberta e consulta de animes e mangás
                            utilizando ua API externa.
                        </p>
                    </div>
                    <div className='project-tech'>
                        <span><img className="icon" src={JSicon} alt="JS" />JavaScript</span>
                        <span>Jikan API/Terain API</span>
                    </div>
                </div>
            </div>
            <div className='section-footer'>
                <span>OBS: Esses projetos ainda estão em desenvolvimento, nem todas funcionalidades estão 100%. Quando tenho tempo continuo adicionando melhororias e funcionalidades.</span>
            </div>
        </section>
    )
}