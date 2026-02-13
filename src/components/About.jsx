import { useEffect, useState } from "react"

function Counter({ target, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
        {count}+
      </h3>
      <p className="text-gray-400 text-xs md:text-sm mt-2">{label}</p>
    </div>
  )
}

function About() {
  return (
    <section
  id="about"
  className="bg-black text-white py-20 md:py-28"
>
  <div className="max-w-7xl mx-auto px-6">


        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 md:w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div>
        <h3 className="text-3xl font-semibold mb-6">
            MCA Graduate & Aspiring IT Professional
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6 text-justify">
            I recently completed my Master of Computer Applications (MCA), where I developed a solid academic base in computing and information systems. My postgraduate journey enhanced my analytical thinking, research approach, and understanding of real-time industry practices. I am now seeking an opportunity to begin my professional career and continue learning.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6 text-justify">
            During my academic tenure, I actively participated in academic projects, presentations, and collaborative activities that strengthened my problem-solving abilities and professional communication. My education has provided me with a disciplined approach to handling responsibilities and adapting to new environments.
        </p>


        <p className="text-gray-400 leading-relaxed mb-10 text-justify">
            My goal is to establish a stable and growth-oriented career in the IT industry, where I can apply my academic knowledge, learn from experienced professionals, and evolve both personally and professionally over time.
        </p>
        </div>



          {/* RIGHT SIDE - EDUCATION */}
          <div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 
            rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">

              <h4 className="text-xl md:text-2xl font-semibold mb-8 text-cyan-400">
                Education
              </h4>

              <div className="space-y-8">

                {/* MCA CARD */}
                <div className="bg-black/40 border border-white/10 
                rounded-2xl p-5 md:p-6 transition duration-300 
                hover:border-cyan-400 hover:scale-[1.02]">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <h5 className="text-lg md:text-xl font-semibold text-white">
                      Master of Computer Applications
                    </h5>

                    <span className="text-xs md:text-sm 
                    bg-gradient-to-r from-cyan-500 to-purple-500
                    px-3 py-1 rounded-full text-black font-semibold self-start md:self-auto">
                      2024-2025
                    </span>
                  </div>

                  <p className="text-cyan-400 mt-3 text-sm md:text-base">
                    Mangalore Institute of Technology and Engineering
                  </p>

                  <p className="text-gray-400 text-xs md:text-sm mt-2">
                    CGPA: <span className="text-white font-semibold">7.85</span>
                  </p>

                </div>

                {/* BCA CARD */}
                <div className="bg-black/40 border border-white/10 
                rounded-2xl p-5 md:p-6 transition duration-300 
                hover:border-cyan-400 hover:scale-[1.02]">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <h5 className="text-lg md:text-xl font-semibold text-white">
                      Bachelor of Computer Applications
                    </h5>

                    <span className="text-xs md:text-sm 
                    bg-gradient-to-r from-cyan-500 to-purple-500
                    px-3 py-1 rounded-full text-black font-semibold self-start md:self-auto">
                      2020-2023
                    </span>
                  </div>

                  <p className="text-cyan-400 mt-3 text-sm md:text-base">
                    Vijaya College, Mulki
                  </p>

                  <p className="text-gray-400 text-xs md:text-sm mt-2">
                    CGPA: <span className="text-white font-semibold">7.84</span>
                  </p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
