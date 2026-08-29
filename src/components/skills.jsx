export default function skills() {
    return (
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
    )
}