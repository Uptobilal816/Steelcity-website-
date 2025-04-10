import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">SMART SOLUTIONS</div>
            <h1 className="hero-title">
              Building the spaces<br />
              where memories are<br />
              made
            </h1>
            <p className="hero-description">
              We have been operating for over a decade, providing top-notch
              services to our clients and building a strong
            </p>
            <Link href="/about" className="hero-button">
              READ MORE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="hero-image-container">
          <div className="hero-image-wrapper">
              <Image 
                src="/images/banner-image.png"
                alt="Construction workers"
                fill
                priority
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}