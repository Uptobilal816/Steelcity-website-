"use client"

import { useState } from "react"

const faqs = [
  {
    id: 1,
    question: "What types of construction projects do you handle?",
    answer:
      "We handle a wide range of construction projects including residential buildings, commercial structures, industrial facilities, and infrastructure projects. Our team has expertise in various construction types and can adapt to the specific requirements of your project.",
  },
  {
    id: 2,
    question: "How long does a typical construction project take?",
    answer:
      "The timeline for a construction project depends on various factors such as the size, complexity, and specific requirements. A small residential project might take 3-6 months, while larger commercial projects can take 1-2 years. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
  },
  {
    id: 3,
    question: "Do you provide warranties for your construction work?",
    answer:
      "Yes, we provide warranties for all our construction work. We typically offer a 1-year warranty on workmanship and materials. Additionally, many of the products and materials we use come with manufacturer warranties that can extend beyond our workmanship warranty.",
  },
  {
    id: 4,
    question: "What safety measures do you implement on construction sites?",
    answer:
      "Safety is our top priority. We implement comprehensive safety protocols including regular safety training for all workers, proper use of personal protective equipment, regular site inspections, and strict adherence to all local and national safety regulations. We also maintain proper insurance coverage for all our projects.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle1">SOME FAQ'S</div>
          <h2 className="section-title1">Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
