import WhatsIcon from '../assets/icons/whatsapp.svg';
import EmailIcon from '../assets/icons/email.svg';
import GitHIcon from '../assets/icons/github.svg';

export default function Contacts() {
    return (
        <section className='section contact-section' id='contatos'>
            <div className='section-header'>
                <span>CONTATO</span>
            </div>
            <div className='contatos'>
                <div className="contatos-text hero-text card">
                    <h2>Caso queira conversar e saber mais sobre mim.</h2>
                </div>
                <div className='contatos-list card'>
                    <a href="wa.me/5517991389495"><img className='icon' src={WhatsIcon} alt='WhatsApp'/>WhatsApp</a>
                    <a href="mailto:matheusgoncalvesbenevides@gmail.com"><img className='icon' src={EmailIcon} alt='E-mail'/>E-mail</a>
                    <a href="https://github.com/mathgb10"><img className='icon' src={GitHIcon} alt='Github'/>GitHub</a>
                </div>
            </div>
        </section>
    )
}