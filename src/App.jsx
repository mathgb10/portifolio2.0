import Navbar from './components/navbar';
import Hero from './components/hero';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Skills from './components/skills';
import Contacts from './components/contacts';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Timeline/>
        <Projects/>
        <Skills/>
        <Contacts/>
      </main>
    </>
  )
}

export default App
