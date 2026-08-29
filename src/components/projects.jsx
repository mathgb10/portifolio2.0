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
                        <span>VPS PANEL</span>
                    </div>
                    <div className='project-content'>
                        <h3>VPS Panel</h3>
                        <p>
                            Painel desenvolvido para facilitar a visualização de recursos
                            do VPS, permitindo-me acompanhar informações do sistema em uma interface web.
                        </p>
                    </div>
                    <div className='project-tech'>
                        <span>PHP</span>
                        <span>MVC</span>
                        <span>REST API</span>
                        <span>Docker</span>
                    </div>
                </div>
                <div className='card'>
                    <div className='project-image'>
                        <span>ZAINDEX</span>
                    </div>
                    <div className='project-content'>
                        <h3>Zaindex</h3>
                        <p>
                            Projeto voltado para descoberta e consulta de animes e mangás
                            utilizando ua API externa.
                        </p>
                    </div>
                    <div className='project-tech'>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>REST API - Jikan API/Terain API</span>
                    </div>
                </div>
            </div>
        </section>
    )
}