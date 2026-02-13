import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import WhatsAppFloat from "./components/WhatsAppFloat"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certificates />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
