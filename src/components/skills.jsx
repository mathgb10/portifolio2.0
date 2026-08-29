import JSIcon from '../assets/js.svg';
import ReactIcon from '../assets/react.svg';
import TailIcon from '../assets/tailwind.svg';
import HtmlIcon from '../assets/html.svg';
import CssIcon from '../assets/css.svg';

import PHPIcon from '../assets/php.svg';
import NodeIcon from '../assets/node.svg';

import MySqlIcon from '../assets/mysql.svg';
import PostIcon from '../assets/postgresql.svg';

import UbuntuIcon from '../assets/ubuntu.svg';
import DockerIcon from '../assets/docker.svg';
import NginxIcon from '../assets/nginx.svg';
import CloudIcon from '../assets/cloudflare.svg';

import GitIcon from '../assets/git.svg';
import GitHIcon from '../assets/github.svg';
import InsoIcon from '../assets/insomnia.svg';

export default function skills() {
    return (
        <section className='section skills-section' id='skills'>
            <div className='section-header'>
                <span>SKILLS</span>
                <h2>Tecnologias que utilizo.</h2>
            </div>
            <div className='skills'>
                <div className='skill-category card'>
                    <h3>Frontend</h3>
                    <div className='skill-list'>
                        <span><img className='icon' src={JSIcon} alt="JS" />JavaScript</span>
                        <span><img className='icon' src={ReactIcon} alt="React"/>React</span>
                        <span><img className='icon' src={TailIcon} alt="Tailwind"/>TailwindCSS</span>
                        <span><img className='icon' src={HtmlIcon} alt="HTML"/>HTML</span>
                        <span><img className='icon' src={CssIcon} alt="CSS"/>CSS</span>
                    </div>
                </div>
                <div className='skill-category card'>
                    <h3>Backend</h3>
                    <div className='skill-list'>
                        <span><img className='icon' src={PHPIcon} alt="PHP" />PHP</span>
                        <span><img className='icon' src={NodeIcon} alt="Node"/>Node.js</span>
                    </div>
                </div>
                <div className='skill-category card'>
                    <h3>Banco de dados</h3>
                    <div className='skill-list'>
                        <span><img className='icon' src={MySqlIcon} alt="MySQL"/>MySQL</span>
                        <span><img className='icon' src={PostIcon} alt="PostgreSQL"/>PostgreSQL</span>
                    </div>
                </div>
                <div className='skill-category card'>
                    <h3>Infraestrutura</h3>
                    <div className='skill-list'>
                        <span><img className='icon' src={UbuntuIcon} alt="Ubuntu"/>Linux</span>
                        <span><img className='icon' src={DockerIcon} alt="Docker" />Docker</span>
                        <span><img className='icon' src={NginxIcon} alt="Nginx"/>Nginx</span>
                        <span><img className='icon' src={CloudIcon} alt="Cloudflare"/>Cloudflare</span>
                    </div>
                </div>
                <div className='skill-category card'>
                    <h3>Ferramentas</h3>
                    <div className='skill-list'>
                        <span><img className='icon' src={GitIcon} alt="Git"/>Git</span>
                        <span><img className='icon' src={GitHIcon} alt="Github"/>Github</span>
                        <span><img className='icon' src={InsoIcon} alt="Insomnia"/>Insomnia</span>
                    </div>
                </div>
            </div>
        </section>
    )
}