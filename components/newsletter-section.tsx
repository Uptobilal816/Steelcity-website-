"use client"

import type React from "react"
import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setEmail("")
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
          <p className="newsletter-description">
            Stay updated with our latest products, special offers, and industry news.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-container">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={`newsletter-input ${error ? "error" : ""}`}
                  required
                />
                {error && <p className="error-message">{error}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="newsletter-button">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="spinner"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>

          {isSuccess && <div className="success-message">Thank you for subscribing to our newsletter!</div>}
        </div>
      </div>
    </section>
  )
}
