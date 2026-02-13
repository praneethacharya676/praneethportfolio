import realEstateImg from "../assets/realestate.png"
import solarTrackerImg from "../assets/solartracker.png"

function ProjectCard({ image, title, description, tags, year }) {
  return (
    <div
      className="group relative bg-[#0f0f0f] border border-gray-800 
      rounded-2xl overflow-hidden 
      transition-all duration-500
      hover:border-cyan-400/60
      hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >

      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover 
          transition duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Year Badge */}
        <div
          className="absolute top-4 right-4
          px-4 py-1 text-xs font-semibold
          bg-black/60 backdrop-blur-md
          border border-cyan-400/30
          text-cyan-400 rounded-full"
        >
          {year}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7">

        <h3 className="text-xl font-semibold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-4 py-1 rounded-full 
              bg-cyan-900/30 text-cyan-400 
              border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            image={realEstateImg}
            title="Online Real Estate Business"
            description="Developed a responsive web application to manage property listings, rentals, and sales. Designed property posting forms and improved navigation for better user experience."
            tags={["HTML", "CSS", "JavaScript", "Responsive"]}
            year="2023"
          />

          <ProjectCard
            image={solarTrackerImg}
            title="Arduino-Based Dual Axis Solar Tracker"
            description="Built an IoT-based system to track solar panel movement using LDR sensors and servo motors. Programmed Arduino to adjust panel position based on sunlight direction and integrated smoke detection module."
            tags={["Arduino", "IoT", "LDR", "Servo Motor"]}
            year="2024"
          />

        </div>

      </div>

    </section>
  )
}

export default Projects
