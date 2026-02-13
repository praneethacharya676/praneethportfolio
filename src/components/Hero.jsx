import profile from "../assets/profile.png"
import { TypeAnimation } from "react-type-animation"
import { useRef } from "react"

function Hero() {
  const imageRef = useRef(null)

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    const card = imageRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = -(y - rect.height / 2) / 20
    const rotateY = (x - rect.width / 2) / 20

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTilt = () => {
    imageRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-40 bg-black text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-cyan-400 mb-4">👋 Hello there!</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I'm <br />
            <span className="text-cyan-400">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1500,
                  "UI/UX Designer",
                  1500,
                  "Video Editor",
                  1500,
                  "Tech Enthusiast",
                  1500,
                  "MCA Graduate",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg">
            Passionate about building modern, scalable and user-friendly
            applications using cutting-edge technologies.
          </p>

         {/* Buttons */}
<div className="flex flex-wrap gap-6 mt-10">

 

  {/* Download CV Button */}
  <a
    href="/praneeth-cv.pdf"
    download
    className="group relative inline-flex items-center gap-3 
    border border-cyan-400 text-cyan-400
    px-8 py-3 rounded-full font-semibold
    transition-all duration-300
    hover:bg-cyan-500 hover:text-black
    hover:scale-105"
  >
    Download CV

  </a>

</div>


          {/* Social Icons */}
          <div className="flex gap-5 mt-8 text-2xl">

            <a
              href="http://linkedin.com/in/praneeth-acharya09"
              className="group w-12 h-12 bg-[#111] rounded-lg flex items-center justify-center
              transition duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <i className="fa-brands fa-linkedin text-gray-400 
              group-hover:text-[#0A66C2] transition"></i>
            </a>

            <a
              href="https://github.com/praneethacharya676"
              className="group w-12 h-12 bg-[#111] rounded-lg flex items-center justify-center
              transition duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <i className="fa-brands fa-github text-gray-400 
              group-hover:text-white transition"></i>
            </a>
            <a
              href="https://www.facebook.com/praneeth.acharya09/"
              className="group w-12 h-12 bg-[#111] rounded-lg flex items-center justify-center
              transition duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <i className="fa-brands fa-facebook text-gray-400 
              group-hover:text-blue-500 transition"></i>
            </a>
            <a
              href="https://www.instagram.com/praneeth._.acharya/"
              className="group w-12 h-12 bg-[#111] rounded-lg flex items-center justify-center
              transition duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <i className="fa-brands fa-instagram text-gray-400 
              group-hover:text-pink-500 transition"></i>
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">

          {/* Rotating Glow Ring */}
          <div className="absolute w-96 h-96 border-4 border-cyan-400/30 
          rounded-full animate-spin-slow"></div>

          {/* Blur Glow */}
          <div className="absolute w-80 h-80 bg-cyan-500/20 
          rounded-full blur-3xl animate-pulse"></div>

          {/* Floating Image Card */}
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="relative w-80 h-96 bg-[#111] rounded-2xl 
            border border-gray-800 p-4 shadow-2xl 
            animate-float transition-transform duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={profile}
              alt="Profile"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
