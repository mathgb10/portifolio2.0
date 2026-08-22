import fotoMinha from './assets/foto.webp';
import { welcome, years} from './utils/date';

function App() {
  return (
    <>
      <section className="primary-sec">
          <div className="resume-me">
              <p>{welcome()}</p>
              <p>
                Eu me chamo Matheus Gonçalves Benevides, tenho {years()}, 
                texto
              </p>
          </div>
          <div className="pic-me">
              <img src={fotoMinha} alt="Minha foto" />
          </div>
        
      </section>
    </>
  )
}

export default App
