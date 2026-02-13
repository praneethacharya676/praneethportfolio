import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

function Contact({ openModal }) {
  return (
    <section id="contact" className="bg-black text-white border-t border-gray-800 pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Praneeth<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              MCA Graduate & Aspiring IT Professional.
              Passionate about building modern and scalable web applications.
            </p>
          </div>

          {/* Center */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">
              Contact Information
            </h3>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <FaEnvelope className="text-cyan-400" />
              praneethacharya676@gmail.com
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <FaPhoneAlt className="text-cyan-400" />
              +91 9513281676
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/919513281676"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                9513281676
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <FaMapMarkerAlt className="text-cyan-400" />
              Udupi, Karnataka, India
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Let’s Work Together
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Have a project or job opportunity?
              Let’s discuss and build something amazing.
            </p>

            <button
              onClick={openModal}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Praneeth. All Rights Reserved.
        </div>

      </div>
    </section>
  )
}

export default Contact
