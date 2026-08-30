import fotoMinha from '../assets/imgs/foto.webp';
import { welcome, years } from '../utils/date';

export default function Hero() {
    return (
        <section className="hero" id="sobre">
            <div className='hero-content'>
                <div className='hero-text'>
                    <span className='welcome'>{welcome()}</span>
                    <h1>Eu sou <span>Matheus</span>.</h1>
                    <h2>Desenvolvedor <span>Full Stack</span></h2>
                    <p>
                        tenho {years()} anos, atualmente desenvolvo projetos utilizando PHP, JS e outras tecnologias
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
    )
}