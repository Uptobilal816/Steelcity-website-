"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Modern Office Building",
    category: "Architecture",
    image: "/images/work-1.png",
    
  },
  {
    id: 2,
    title: "Residential Complex",
    category: "Construction",
    image: "/images/work-2.png",
   
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    category: "Steel Structure",
    image: "/images/work-3.png",
   
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "Commercial",
    image: "/images/news-2.png",
    
  },
  {
    id: 5,
    title: "Factory Setup",
    category: "Steel Structure",
    image: "/images/work-3.png",
    
  },
  {
    id: 6,
    title: "Bridge Construction",
    category: "Infrastructure",
    image: "/images/work-3.png",
    
  },
  {
    id: 7,
    title: "Road Development",
    category: "Civil Works",
    image: "/images/work-3.png",
  
  },
];

export default function RecentWorkSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 400; // match your CSS width
  const visibleCards = 3;

  const nextProject = () => {
    const maxScroll = (projects.length - visibleCards) * cardWidth;
    setScrollPosition((prev) => (prev + cardWidth > maxScroll ? 0 : prev + cardWidth));
  };

  const prevProject = () => {
    const maxScroll = (projects.length - visibleCards) * cardWidth;
    setScrollPosition((prev) => (prev - cardWidth < 0 ? maxScroll : prev - cardWidth));
  };

  return (
    <section className="recent-work-section">
      <div className="container">
        <div className="section-header">
          <div className="header-left">
            <div className="section-subtitle-recent-work">
              <h1>RECENT WORK</h1>
            </div>
            <h2
              className="section-title-recent-work"
              style={{
                animationName: "fadeUp",
                animationDuration: "1s",
                animationDelay: "0.4s",
                animationFillMode: "both",
              }}
            >
              Building Strong Foundations For Success
            </h2>
          </div>
          <div className="navigation-buttons">
            <button onClick={prevProject} className="nav-button prev-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={nextProject} className="nav-button next-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="projects-viewport">
          <div
            className="projects-container"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={330}
                    height={355}
                    className="project-image"
                  />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section remains unchanged */}
        <div className="stats-cards">
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-1.svg" alt="Award Icon" width={40} height={40} />
            </div>
            <h3>
              200<span>+</span>
            </h3>
            <p>Winning award</p>
          </div>
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-2.svg" alt="Project Icon" width={45} height={45} />
            </div>
            <h3>
              550<span>+</span>
            </h3>
            <p>Project Done</p>
          </div>
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-3.svg" alt="Review Icon" width={40} height={40} />
            </div>
            <h3>
              100<span>+</span>
            </h3>
            <p>Clients Review</p>
          </div>
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-3.svg" alt="Review Icon" width={40} height={40} />
            </div>
            <h3>
              100<span>+</span>
            </h3>
            <p>Work Done</p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
