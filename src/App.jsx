import fotoMinha from './assets/foto.webp';
import { welcome, years } from './utils/date';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="sobre">
          <div className='hero-content'>
            <div className='hero-text'>
              <span className='welcome'>{welcome()}</span>
              <h1>Eu sou <strong>Matheus</strong>.</h1>
              <h2>Desenvolvedor Full Stack</h2>
              <p>
                tenho {years()} anos, sou desenvolvedor <strong>Full Stack</strong>.
                Atualmente desenvolvo projetos utilizando PHP, JS e outras tecnologias
                voltadas ao desenvolvimento web.
              </p>
            </div>
            <div className='hero-img'>
              <div className='img-dec'>
                <img src={fotoMinha} alt="Foto de Matheus Gonçalves Benevides" />
              </div>
            </div>
          </div>
        </section>
        <section className='section timeline-sec' id="trajetoria">
          <div className='section-header'>
            <span>TRAJETORIA</span>
            <h2>Minha jornada até aqui.</h2>
          </div>
          <div className='timeline'>
            <div className='timeline-item'>
              <span className='timeline-year'>2023-2024</span>
              <div className='timeline-content'>
                <span className='dot'></span>
                <div>
                  Comecei a estudar desenvolvimento de sistemas em 2023, mas foi a partir de 2024 que comecei a me dedicar de forma mais consistente à área. Nesse mesmo ano, iniciei minha graduação em Sistemas de Informação, na modalidade EAD, na UNIFEV.
                </div>
              </div>
            </div>
            <div className='timeline-item'>
              <span className='timeline-year'>2025-2026</span>
              <div className='timeline-content'>
                <span className='dot'></span>
                <div>
                  Em 2025, com o objetivo de aprimorar meus conhecimentos e adquirir mais experiência prática, iniciei o curso técnico em Desenvolvimento de Sistemas pelo SENAI. Durante o curso, atuei como jovem aprendiz na Facchini. No semestre final, tive a oportunidade, de integrar a equipe de infraestrutura da empresa, onde tive meu primeiro contato com um ambiente corporativo de tecnologia. Atuando no suporte de infraestrutura, minhas principais atividades envolviam o atendimento e a classificação de chamados de nível 1, além de suporte aos usuários, formatação e configuração de computadores e outras atividades relacionadas à infraestrutura.
                </div>
              </div>
            </div>
            <div className='timeline-item'>
              <span className='timeline-year'>Agora</span>
              <div className='timeline-content'>
                <span className='dot'></span>
                <div>
                  Ao final do contrato, em julho de 2026, tive a oportunidade de retornar à Facchini para participar do desenvolvimento de um projeto. Atualmente, atuo diretamente nesse projeto, trabalhando com desenvolvimento.
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className='section skills-section' id='skills'>
          <div className='section-header'>
            <span>SKILLS</span>
            <h2>Tecnologias que utilizo.</h2>
          </div>
          <div className='skills'>
            <div className='skill-category'>
              <h3>Frontend</h3>
              <div className='skill-list'>
                <span>JavaScript</span>
                <span>React</span>
                <span>TailwindCSS</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>
            <div className='skill-category'>
              <h3>Backend</h3>
              <div className='skill-list'>
                <span>PHP</span>
                <span>Node.js</span>
              </div>
            </div>
            <div className='skill-category'>
              <h3>Banco de dados</h3>
              <div className='skill-list'>
                <span>MySQL</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            <div className='skill-category'>
              <h3>Infraestrutura</h3>
              <div className='skill-list'>
                <span>Linux</span>
                <span>Docker</span>
                <span>Nginx</span>
                <span>Cloudflare</span>
              </div>
            </div>
            <div className='skill-category'>
              <h3>Ferramentas</h3>
              <div className='skill-list'>
                <span>Git</span>
                <span>Github</span>
                <span>Insomnia</span>
              </div>
            </div>
          </div>
        </section>
        <section className='section contact-section' id='contato'>
          <div className='section-header'>
            <span>CONTATO</span>
            <h3>Caso queira conversar e saber mais sobre mim</h3>
          </div>
          <div className='contatos'>
            <div className='contatos-list'>
              <a href="wa.me/5517991389495">WhatsApp</a>
              <a href="mailto:matheusgoncalvesbenevides@gmail.com">E-mail</a>
              <a href="https://github.com/mathgb10">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
