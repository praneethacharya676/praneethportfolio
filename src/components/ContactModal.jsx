import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FaCheck } from "react-icons/fa"

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_cl1a4rw",
        "template_70l07ek",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "9oOrQmBq7mgkXVeS6"
      )
      .then(() => {
        setLoading(false)
        setSuccess(true)

        setTimeout(() => {
          setSuccess(false)
          onClose()
        }, 2500)

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        })
      })
      .catch(() => {
        setLoading(false)
        alert("Failed to send ❌")
      })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">

      <div className="bg-[#111] border border-cyan-500/30 rounded-2xl p-8 w-[90%] max-w-md relative animate-slideUp">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-style"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-style"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-style"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="input-style"
          />

          <button
            type="submit"
            disabled={loading || success}
            className={`w-full py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2
              ${success 
                ? "bg-green-500 text-white" 
                : "bg-cyan-500 hover:bg-cyan-600 text-black"
              }`}
          >
            {loading && (
              <span className="loader"></span>
            )}

            {!loading && !success && "Send Message"}

            {success && (
              <>
                <FaCheck />
                Sent Successfully
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  )
}

export default ContactModal
