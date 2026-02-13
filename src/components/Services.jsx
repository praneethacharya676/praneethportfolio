import { Code, PenTool, Camera, Video } from "lucide-react"
import { useRef } from "react"

function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Code size={28} />,
      description:
        "Building modern, scalable and high-performance websites with clean architecture and smooth user experience."
    },
    {
      title: "UI / UX Design",
      icon: <PenTool size={28} />,
      description:
        "Designing intuitive and user-centered interfaces that enhance usability and engagement."
    },
    {
      title: "Photography",
      icon: <Camera size={28} />,
      description:
        "Capturing creative and professional visuals with attention to lighting, composition and storytelling."
    },
    {
      title: "Video Editing",
      icon: <Video size={28} />,
      description:
        "Creating cinematic video edits with smooth transitions and engaging visual storytelling."
    }
  ]

  const cardRefs = useRef([])

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index]
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = -(y - rect.height / 2) / 25
    const rotateY = (x - rect.width / 2) / 25

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetTilt = (index) => {
    const card = cardRefs.current[index]
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return (
    <section
      id="services"
      className="bg-black text-white py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-400">
            What I Do
          </h2>
          <div className="w-20 md:w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => resetTilt(index)}
              className="bg-[#111]
              border border-gray-800
              rounded-2xl p-8
              transition-all duration-300
              hover:border-cyan-400 hover:-translate-y-2"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center
              rounded-xl bg-[#1a1a1a] border border-gray-700
              text-cyan-400 mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services
