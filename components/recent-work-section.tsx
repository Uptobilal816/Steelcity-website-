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
    link: "/projects/modern-office-building",
  },
  {
    id: 2,
    title: "Residential Complex",
    category: "Construction",
    image: "/images/work-2.png",
    link: "/projects/residential-complex",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    category: "Steel Structure",
    image: "/images/work-3.png",
    link: "/projects/industrial-warehouse",
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "Commercial",
    image: "/images/news-2.png",
    link: "/projects/shopping-mall",
  },
  {
    id: 5,
    title: "Industrial Warehouse",
    category: "Steel Structure",
    image: "/images/work-3.png",
    link: "/projects/industrial-warehouse",
  },
  {
    id: 6,
    title: "Industrial Warehouse",
    category: "Steel Structure",
    image: "/images/work-3.png",
    link: "/projects/industrial-warehouse",
  },{
    id: 7,
    title: "Industrial Warehouse",
    category: "Steel Structure",
    image: "/images/work-3.png",
    link: "/projects/industrial-warehouse",
  },
];

export default function RecentWorkSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 320; // width of each card including gap
  const visibleCards = 3; // number of cards visible at once

  const nextProject = () => {
    const maxScroll = (projects.length - visibleCards) * cardWidth;
    setScrollPosition(prev => Math.min(prev + cardWidth, maxScroll));
  };

  const prevProject = () => {
    setScrollPosition(prev => Math.max(prev - cardWidth, 0));
  };

  return (
    <section className="recent-work-section">
      <div className="container">
        <div className="section-header">
          <div className="header-left">
            <div className="section-subtitle-recent-work">
              <h1>RECENT WORK</h1>
            </div>
            <h2 className="section-title-recent-work">Building Strong Foundations For Success</h2>
          </div>
          <div className="navigation-buttons">
            <button 
              onClick={prevProject} 
              className="nav-button prev-button"
              disabled={scrollPosition === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextProject} 
              className="nav-button next-button"
              disabled={scrollPosition >= (projects.length - visibleCards) * cardWidth}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="projects-viewport">
          <div 
            className="projects-container"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={320}
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

        <div className="stats-cards" >
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-1.svg" alt="Award Icon" width={50} height={50} />
            </div>
            <h3>200<span>+</span></h3>
            <p>Winning award</p>
          </div>
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-2.svg" alt="Project Icon" width={50} height={50} />
            </div>
            <h3>550<span>+</span></h3>
            <p>Project Done</p>
          </div>
          <div className="card">
            <div className="icon-recent-work">
              <Image src="/images/counter-3.svg" alt="Review Icon" width={50} height={50} />
            </div>
            <h3>100<span>+</span></h3>
            <p>Clients Review</p>
          </div>
          <div className="card">
            <div className="icon">
              <Image src="/images/counter-4.svg" alt="Team Icon" width={50} height={50} />
            </div>
            <h3>350<span>+</span></h3>
            <p>Team Member</p>
          </div>
        </div>
      </div>
    </section>
  );
}