"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    position: "CEO, Johnson Enterprises",
    image: "/images/testimonial-avatar-1.png",
    quote:
      "SteelCity delivered our office building project on time and within budget. Their attention to detail and quality of work exceeded our expectations. I highly recommend their services to anyone looking for reliable construction services.",
  },
  {
    id: 2,
    name: "Jennifer Smith",
    position: "Director, Smith Properties",
    image: "/images/testimonial-avatar-2.png",
    quote:
      "We've worked with SteelCity on multiple projects, and they've consistently delivered exceptional results. Their team is professional, skilled, and committed to quality. They're our go-to construction partner.",
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Project Manager, Brown Construction",
    image: "/images/employes-3.png",
    quote:
      "SteelCity's expertise in steel construction is unmatched. They helped us complete a complex industrial facility with precision and efficiency. Their team's knowledge and experience made a challenging project manageable.",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle1">CLIENT TESTIMONIAL</div>
          <h2 className="section-title1">What Our Clients Say</h2>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-slide ${index === currentSlide ? "active" : ""}`}>
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V17C10 17.5304 9.78929 18.0391 9.41421 18.4142C9.03914 18.7893 8.53043 19 8 19H6C5.46957 19 4.96086 18.7893 4.58579 18.4142C4.21071 18.0391 4 17.5304 4 17V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H16C15.4696 19 14.9609 18.7893 14.5858 18.4142C14.2107 18.0391 14 17.5304 14 17V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="author-info">
                    <h3 className="author-name">{testimonial.name}</h3>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={prevSlide} className="testimonial-nav prev" aria-label="Previous testimonial">
            <ChevronLeft className="icon" />
          </button>
          <button onClick={nextSlide} className="testimonial-nav next" aria-label="Next testimonial">
            <ChevronRight className="icon" />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`testimonial-dot ${index === currentSlide ? "active" : ""}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
