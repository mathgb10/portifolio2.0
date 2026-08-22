import fotoMinha from './assets/foto.webp';
import { welcome, years } from './utils/date';

function App() {
  return (
    <>
      <section className="primary-sec">
        <div className="resume-me">
          <p>{welcome()}</p>
          <p>
            Eu me chamo Matheus Gonçalves Benevides, tenho {years()}, sou desenvolvedor Full Stack. Atualmente desenvolvo projetos utilizando em PHP, JS e outras tecnologias voltadas ao desenvolvimento web.
          </p>
        </div>
        <div className="pic-me">
          <img src={fotoMinha} alt="Minha foto" />
        </div>
      </section>
      <section className='secondary-sec'>
        <div className=''>
          <p>
            Comecei a estudar desenvolvimento de sistemas em 2023, mas foi a partir de 2024 que comecei a me dedicar de forma mais consistente à área. Nesse mesmo ano, iniciei minha graduação em Sistemas de Informação, na modalidade EAD, na UNIFEV.

            Em 2025, com o objetivo de aprimorar meus conhecimentos e adquirir mais experiência prática, iniciei o curso técnico em Desenvolvimento de Sistemas pelo SENAI. Durante o curso, atuei como jovem aprendiz na Facchini. No semestre final, tive a oportunidade, de integrar a equipe de infraestrutura da empresa, onde tive meu primeiro contato com um ambiente corporativo de tecnologia. Atuando no suporte de infraestrutura, minhas principais atividades envolviam o atendimento e a classificação de chamados de nível 1, além de suporte aos usuários, formatação e configuração de computadores e outras atividades relacionadas à infraestrutura.

            Ao final do contrato, em julho de 2026, tive a oportunidade de retornar à Facchini para participar do desenvolvimento de um projeto. Atualmente, atuo diretamente nesse projeto, trabalhando com desenvolvimento.
          </p>
        </div>
      </section>
    </>
  )
}

export default App
