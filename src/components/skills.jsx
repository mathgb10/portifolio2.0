import JSIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import TailIcon from '../assets/icons/tailwind.svg';
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';

import PHPIcon from '../assets/icons/php.svg';
import PythonIcon from '../assets/icons/python.svg';
import NodeIcon from '../assets/icons/node.svg';

import MySqlIcon from '../assets/icons/mysql.svg';
import PostIcon from '../assets/icons/postgresql.svg';

import DockerIcon from '../assets/icons/docker.svg';
import GitActionsIcon from '../assets/icons/gitactions.svg';
import UbuntuIcon from '../assets/icons/ubuntu.svg';
import NginxIcon from '../assets/icons/nginx.svg';
import CloudIcon from '../assets/icons/cloudflare.svg';

import GitIcon from '../assets/icons/git.svg';
import GitHIcon from '../assets/icons/github.svg';
import InsoIcon from '../assets/icons/insomnia.svg';

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
                        <span><img className='icon' src={ReactIcon} alt="React"/>React</span>
                        <span><img className='icon' src={JSIcon} alt="JS" />JavaScript</span>
                        <span><img className='icon' src={TailIcon} alt="Tailwind"/>TailwindCSS</span>
                        <span><img className='icon' src={HtmlIcon} alt="HTML"/>HTML</span>
                        <span><img className='icon' src={CssIcon} alt="CSS"/>CSS</span>
                    </div>
                </div>
                <div className='skill-category card'>
                    <h3>Backend</h3>
                    <div className='skill-list'>
                        <span><img className='icon' src={PHPIcon} alt="PHP" />PHP</span>
                        <span><img className='icon' src={PythonIcon} alt="Python"/>Python</span>
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
                        <span><img className='icon' src={DockerIcon} alt="Docker" />Docker</span>
                        <span><img className='icon' src={GitActionsIcon} alt="GitActions" />GitActions</span>
                        <span><img className='icon' src={NginxIcon} alt="Nginx"/>Nginx</span>
                        <span><img className='icon' src={UbuntuIcon} alt="Ubuntu"/>Ubuntu</span>
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