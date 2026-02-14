import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"
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
      setScrolled(window.scrollY > 40)

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
    if (section) section.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={`w-full max-w-6xl backdrop-blur-xl bg-black/70 border border-cyan-400/20 rounded-3xl transition-all duration-500 ${
            scrolled
              ? "shadow-[0_0_35px_rgba(0,255,255,0.15)]"
              : "shadow-[0_0_25px_rgba(0,255,255,0.08)]"
          }`}
        >

          {/* ===== TOP ROW ===== */}
          <div
            className={`hidden md:flex justify-between items-center px-8 overflow-hidden transition-all duration-500 ${
              scrolled
                ? "max-h-0 py-0 opacity-0"
                : "max-h-20 py-2 opacity-100"
            } text-xs text-gray-300 border-b border-white/10`}
          >
            <div className="flex items-center gap-6">
              <a href="tel:+919513281676" className="hover:text-cyan-400">
                📞 +91 9513281676
              </a>
              <a href="mailto:praneethacharya676@gmail.com" className="hover:text-cyan-400">
                ✉ praneethacharya676@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-5 text-lg">
              <a href="https://www.linkedin.com/in/praneeth-acharya09/" target="_blank">
                <FaLinkedin color="#0A66C2" />
              </a>
              <a href="https://github.com/praneethacharya676" target="_blank">
                <FaGithub color="#ffffff" />
              </a>
              <a href="https://www.instagram.com/praneeth._.acharya/" target="_blank">
                <FaInstagram color="#E4405F" />
              </a>
              <a href="https://www.facebook.com/praneeth.acharya09/" target="_blank">
                <FaFacebook color="#1877F2" />
              </a>

              <button
                onClick={() => setOpenModal(true)}
                className="ml-3 bg-cyan-500 text-black px-4 py-1 rounded-full text-xs font-semibold"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* ===== MAIN NAVBAR ===== */}
          <div
            className={`flex justify-between items-center px-6 md:px-8 transition-all duration-500 ${
              scrolled ? "py-3" : "py-5"
            }`}
          >
            {/* Logo */}
            <h1
              onClick={() => scrollToSection("home")}
              className={`cursor-pointer font-bold transition-all duration-500 ${
                scrolled ? "text-lg" : "text-2xl"
              }`}
            >
              <span className="text-white">Praneeth</span>
              <span className="text-cyan-400">J</span>
              <span className="text-gray-400">Acharya</span>
              <span className="text-cyan-400">.</span>
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 relative">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-4 py-2 text-sm"
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-400/40 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active === link.id
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <a
                href="/praneeth-cv.pdf"
                target="_blank"
                download
                className="hidden md:block bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold"
              >
                Download CV
              </a>

              <div
                className="md:hidden text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "✕" : "☰"}
              </div>
            </div>
          </div>

          {/* ===== MOBILE DROPDOWN ===== */}
          {menuOpen && (
            <div className="md:hidden border-t border-white/10 p-6 space-y-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-300"
                >
                  {link.name}
                </button>
              ))}

              <div className="flex gap-6 text-2xl pt-2">
                <FaLinkedin color="#0A66C2" />
                <FaGithub color="#ffffff" />
                <FaInstagram color="#E4405F" />
                <FaFacebook color="#1877F2" />
              </div>

              <a
                href="/praneeth-cv.pdf"
                target="_blank"
                download
                className="block text-center bg-cyan-500 text-black py-2 rounded-full font-semibold"
              >
                Download Resume
              </a>
            </div>
          )}
        </div>
      </div>

      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}

export default Navbar
