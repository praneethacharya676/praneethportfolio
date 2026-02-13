import { useState, useEffect } from "react"
import ContactModal from "./ContactModal"

function Navbar() {
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      links.forEach((link) => {
        const section = document.getElementById(link.id)
        if (section) {
          const offset = section.offsetTop - 150
          const height = section.offsetHeight

          if (
            window.scrollY >= offset &&
            window.scrollY < offset + height
          ) {
            setActive(link.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-6xl transition-all duration-500
          backdrop-blur-xl bg-white/5 border border-white/10
          rounded-full px-6 md:px-8 py-4 flex items-center justify-between
          ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.37)]" : ""}
          `}
        >
         {/* Logo */}
<h1
  onClick={() => scrollToSection("home")}
  className="text-lg md:text-2xl font-bold cursor-pointer tracking-wide"
>
  <span className="text-white">Praneeth</span>{""}
  <span className="text-cyan-400">J</span>{""}
  <span className="text-gray-400">Acharya</span>
  <span className="text-cyan-400">.</span>
</h1>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm transition-all duration-300
                ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {active === link.id && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => setOpenModal(true)}
            className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-black 
            font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Contact Me
          </button>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 w-[90%] max-w-sm 
          backdrop-blur-xl bg-white/5 border border-white/10
          rounded-2xl p-6 space-y-4 md:hidden shadow-xl">

            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left text-base transition
                ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile CTA FIXED */}
            <button
              onClick={() => {
                setMenuOpen(false)
                setOpenModal(true)
              }}
              className="w-full mt-4 bg-cyan-500
              text-black font-semibold py-2 rounded-full"
            >
              Contact Me
            </button>
          </div>
        )}
      </div>

      {/* Modal OUTSIDE nav */}
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}

export default Navbar
