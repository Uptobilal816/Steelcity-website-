import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Electrical Wiring",
    description: "It is a long established fact that a reader will be distracted by the",
    link: "/services/building-construction",
    image: "/images/service-1.png",
  },
  {
    id: 2,
    title: "Flooring Installation",
    description: "It is a long established fact that a reader will be distracted by the.......",
    link: "/services/project-planning",
    image: "/images/service-2.png",
  },
  {
    id: 3,
    
    title: "Fence Repair",
    description:
      "It is a long established fact that a reader will be distracted by the",
    link: "/services/architecture-design",
    image: "/images/service-3.png",
  },
  
]

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle1">OUR SERVICES</div>
          <h2 className="section-title1">We Provide Best Construction Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="service-img"
                />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link href={service.link} className="service-link">
                Read More
                <svg
                  className="link-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
