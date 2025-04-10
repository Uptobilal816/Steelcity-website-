import Image from "next/image"
import Link from "next/link"

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
]

export default function RecentWorkSection() {
  return (
    <section className="recent-work-section">
      <div className="container">
        <div className="section-header">
          <div  className="section-subtitle"> <h1 className="section-subtitle"> RECENT WORK </h1></div>
          <h2 className="section-title">Our Latest Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="project-image"
                />
                <div className="project-overlay">
                  <Link href={project.link} className="project-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 14V19C19 19.53 18.79 20.04 18.41 20.41C18.04 20.79 17.53 21 17 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V7C3 6.47 3.21 5.96 3.59 5.59C3.96 5.21 4.47 5 5 5H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="section-action">
          <Link href="/projects" className="btn-primary">
            View All Projects
            <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

 

<div className="stats-cards">
  <div className="card">
    <div className="icon">
      <Image src="/images/counter-1.svg" alt="Award Icon" width={200} height={200} />
    </div>
    <h3>200<span>+</span></h3>
    <p>Winning award</p>
  </div>
  <div className="card">
    <div className="icon">
      <Image src="/images/counter-2.svg" alt="Project Icon" width={500} height={500} />
    </div>
    <h3>550<span>+</span></h3>
    <p>Project Done</p>
  </div>
  <div className="card">
    <div className="icon">
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
  )
}
