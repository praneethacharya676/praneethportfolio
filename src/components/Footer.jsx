import { useState } from "react"
import ContactModal from "./ContactModal"
import { FaWhatsapp } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Footer() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <footer className="relative bg-black py-16 px-4">

        <div className="max-w-6xl mx-auto">

          <div
            className="
            relative
            backdrop-blur-2xl
            bg-gradient-to-br from-white/10 to-white/5
            border border-white/20
            rounded-[40px]
            px-8 md:px-14 py-12
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            overflow-hidden
          "
          >

            {/* Light Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30 pointer-events-none rounded-[40px]"></div>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">

              {/* Left Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Praneeth<span className="text-cyan-400">.</span>
                </h2>

                <div className="glass-box">
                  MCA Graduate & Aspiring IT Professional focused on building
                  scalable, modern, and user-friendly digital solutions.
                </div>

                <div className="glass-box">
                  Turning ideas into real-world applications 🚀
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white">
                  Contact
                </h3>

                <div className="space-y-4">

                  <div className="glass-box flex items-center gap-3">
                    <FaPhoneAlt className="text-cyan-400" />
                    <span>+91 9513281676</span>
                  </div>

                  <div className="glass-box flex items-center gap-3">
                    <FaEnvelope className="text-cyan-400" />
                    <span>praneethacharya676@gmail.com</span>
                  </div>

                  <div className="glass-box flex items-center gap-3">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>Udupi, Karnataka, India</span>
                  </div>

                </div>
              </div>

              {/* Let’s Talk Section */}
              <div className="space-y-6">

                <h3 className="text-lg font-semibold text-white">
                  Let’s Talk
                </h3>

                <div
                  className="
                  backdrop-blur-xl 
                  bg-white/5 
                  border border-white/20 
                  rounded-2xl 
                  p-6 
                  space-y-4
                  hover:border-cyan-400
                  transition duration-300
                "
                >

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Have a project idea or collaboration in mind?
                    Let’s build something amazing together.
                  </p>

                  <div className="flex gap-3 flex-wrap">

                    {/* Let’s Talk Button */}
                    <button
                      onClick={() => setOpenModal(true)}
                      className="
                        relative
                        px-5 py-2 text-sm font-semibold
                        bg-gradient-to-r from-cyan-500 to-cyan-400
                        text-black
                        rounded-full
                        transition duration-300
                        hover:scale-105
                        pulse-btn
                      "
                    >
                      Contact Me
                    </button>

                    {/* WhatsApp Button */}
<a
  href="https://wa.me/919513281676"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center gap-2
    px-4 py-2 text-sm font-medium
    backdrop-blur-lg bg-white/10
    border border-[#25D366]
    rounded-full
    text-[#25D366]
    transition duration-300
    hover:bg-[#25D366]/10
    whatsapp-pulse
  "
>
  <FaWhatsapp className="text-lg" />
  WhatsApp
</a>



                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style>
          {`
            .glass-box {
              backdrop-filter: blur(20px);
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.15);
              padding: 12px 16px;
              border-radius: 16px;
              color: #d1d5db;
              font-size: 14px;
              transition: 0.3s ease;
            }

            .glass-box:hover {
              border-color: #22d3ee;
              color: white;
            }

            .pulse-btn {
              animation: subtlePulse 2.5s infinite;
            }

            @keyframes subtlePulse {
              0% {
                box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.6);
              }
              70% {
                box-shadow: 0 0 0 12px rgba(34, 211, 238, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(34, 211, 238, 0);
              }
.whatsapp-pulse {
  animation: whatsappPulse 2.5s infinite;
}

@keyframes whatsappPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}



          `}
        </style>

      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  )
}

export default Footer
