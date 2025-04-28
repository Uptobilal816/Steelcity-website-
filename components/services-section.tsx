import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: <>Electrical&nbsp;Wiring</>,
    description: "It is a long established fact that a reader will be distracted by the",
    link: "/services/building-construction",
    image: "/images/service-1.png",
  },
  {
    id: 2,
    title: <>Electrical&nbsp;Wiring</>,
    description: "It is a long established fact that a reader will be distracted by the",
    link: "/services/project-planning",
    image: "/images/service-2.png",
  },
  {
    id: 3,
    title: <>Electrical&nbsp;Wiring</>,
    description: "It is a long established fact that a reader will be distracted by the",
    link: "/services/architecture-design",
    image: "/images/service-3.png",
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container-services-section">
        <div className="section-header">
          <div className="section-subtitle-service-section">OUR SERVICES</div>
          <h1 className="section-title-service-section" >
            
            Constructing Excellence Delivering results
            
          </h1>
          <p className="section-description-service-section">
            It is a long established fact that a reader will be distracted by the It is a long
            established fact that a reader will be distracted by the It is a long established fact
            that a reader will be
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt="Card Image"
                  width={210}
                  height={84}
                  className="service-img"
                />
              </div>

              <div className="service-text-row">
                <h3 className="service-title-service-section1">{service.title}</h3>
                
                <p className="service-description-service-section1" >{service.description}</p>
              </div>

              <Link href={service.link} className="service-link">
                <button className="service-btn">READ MORE +</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
