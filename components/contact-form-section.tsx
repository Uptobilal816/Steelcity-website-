"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-container">
          {/* Image on the left side, integrated into form container */}
          <div className="form-image-container">
            <Image
              src="/images/messages-image.png" // Replace with your image path
              alt="Contact us"
              width={500}
              height={700}
              className="form-image"
              priority
            />
          </div>

          {/* Form content on the right side */}
          <div className="form-content">
            <div className="form-header">
              <h2 className="form-title">Talk With Us</h2>
              <p className="form-description">
                Have questions or ready to start your project? Fill out the form below and we'll get back to you as soon
                as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Message here"
                    rows={5}
                    required
                  ></textarea>
                </div>
              </div>

              {error && <div className="form-error">{error}</div>}
              {isSuccess && <div className="form-success">Your message has been sent successfully!</div>}

              <button type="submit" disabled={isSubmitting} className="form-submit">
                {isSubmitting ? (
                  <span className="submit-loading">
                    <svg className="spinner" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <circle className="spinner-circle" cx="12" cy="12" r="10" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}