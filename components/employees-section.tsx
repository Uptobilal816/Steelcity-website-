"use client";
import Image from "next/image";
import { useState } from "react";

const employees = [
  {
    id: 1,
    name: "John Smith",
    position: "Chief Engineer",
    image: "/images/employes-1.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Project Manager",
    image: "/images/employes-2.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Architect",
    image: "/images/employes-3.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Interior Designer",
    image: "/images/messages-image.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // Duplicate cards for swipe effect
  {
    id: 5,
    name: "Albert Flores",
    position: "Pro Trainer",
    image: "/images/employes-1.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Courtney Henry",
    position: "Wall Fixer",
    image: "/images/employes-2.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 7,
    name: "Courtney Henry",
    position: "Design Expert",
    image: "/images/employes-3.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  }
];

export default function EmployeesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const nextEmployee = () => {
    setCurrentIndex(prev => 
      prev >= employees.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevEmployee = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? employees.length - cardsToShow : prev - 1
    );
  };

  return (
    <section className="employees-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-wrapper">
            <div className="decorative-line"></div>
            <div className="section-subtitle-employee-section">ACTIVE EMPLOYEES</div>
            <div className="decorative-line"></div>
          </div>
          <h2 className="section-title-employee-section">Construction Done Right<br/>Every Time</h2>
        </div>

        <div className="employees-viewport">
          <div 
            className="employees-container"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {employees.map((employee) => (
              <div key={employee.id} className="employee-slide">
                <div className="employee-card">
                  <div className="employee-image-container">
                    <Image
                      src={employee.image || "/placeholder.svg"}
                      alt={employee.name}
                      width={300}
                      height={400}
                      className="employee-image"
                    />
                    <div className="employee-social">
                      <a href={employee.social.facebook} className="social-icon" aria-label="Facebook">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-1.745 0-2.513.829-2.513 2.437v1.543h3.747l-.531 3.667h-3.216v7.98H9.101z"></path>
                        </svg>
                      </a>
                      <a href={employee.social.twitter} className="social-icon" aria-label="Twitter">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
                        </svg>
                      </a>
                      <a href={employee.social.linkedin} className="social-icon" aria-label="LinkedIn">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="employee-content">
                    <h3 className="employee-name">{employee.name}</h3>
                    <p className="employee-position">{employee.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button onClick={prevEmployee} className="slider-button prev-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="slider-dots">
            {Array.from({ length: employees.length - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button onClick={nextEmployee} className="slider-button next-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}