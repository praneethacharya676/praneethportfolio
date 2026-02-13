import { useState } from "react"
import accenture from "../assets/accenture.jpg"
import nptel from "../assets/data-analytics-python.jpg"
import ieee from "../assets/ieee-paper.jpg"
import internship from "../assets/internship.jpg"
import kscst from "../assets/kscst.jpg"
import matlab from "../assets/matlab.jpg"

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null)

  const certificates = [
    {
      title: "IEEE International Conference Paper",
      org: "CSITSS 2025 – RVCE",
      date: "Nov 2025",
      image: ieee,
    },
    {
      title: "Web Development Internship",
      org: "Udupi Web Solutions",
      date: "Nov 2024 – Jan 2025",
      image: internship,
    },
    {
      title: "KSCST Project Exhibition",
      org: "Govt. of Karnataka",
      date: "Aug 2025",
      image: kscst,
    },
    {
      title: "Accenture Data Analytics Simulation",
      org: "Accenture x Forage",
      date: "June 2024",
      image: accenture,
    },
    {
      title: "Data Analytics with Python",
      org: "NPTEL – IIT Roorkee",
      date: "Jan–Apr 2025",
      image: nptel,
    },
    {
      title: "MATLAB Onramp",
      org: "MathWorks",
      date: "Feb 2026",
      image: matlab,
    },
  ]

  return (
    <section id="certificates" className="bg-black py-20 px-6">

      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My <span className="text-cyan-400">Certificates</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          Professional achievements & recognized certifications
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {certificates.map((cert, index) => (
          <div
            key={index}
            className="
              group
              backdrop-blur-xl
              bg-white/5
              border border-white/10
              rounded-2xl
              overflow-hidden
              transition duration-500
              hover:border-cyan-400
              hover:-translate-y-2
              shadow-[0_15px_40px_rgba(0,0,0,0.6)]
              cursor-pointer
            "
            onClick={() => setSelectedImage(cert.image)}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h3 className="text-white font-semibold text-sm">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-xs">
                {cert.org}
              </p>

              <span className="text-cyan-400 text-xs">
                {cert.date}
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* Modal Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate Preview"
            className="max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  )
}

export default Certificates
