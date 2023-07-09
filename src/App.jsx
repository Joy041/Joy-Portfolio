import Navbar from './components/Home/Navbar/Navbar'
import Home from './components/Home/Home/Home'
import About from './components/Home/About/About';
import Services from './components/Home/Services/Services';
import Skills from './components/Home/Skills/Skills';
import Work from './components/Home/Work/Work';
import Contact from './components/Home/Contact/Contact';
import CopyWrite from './components/Home/CopyWrite/CopyWrite';

function App() {

  return (
    <div className='bg-[#0a192f]'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <CopyWrite />
    </div>
  )
}

export default App;
