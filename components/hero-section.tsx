import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Geometric shapes - hidden on mobile */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
      <div className="hero-content">
  <div className="hero-text">
    <p
      className="hero-subtitle"
      style={{
        animationName: 'fadeInLeft',
        animationDuration: '1s',
        animationDelay: '0.4s',
        animationFillMode: 'both',
      }}
    >
      SMART SOLUTIONS
    </p>

    <h1
      className="hero-title"
      style={{
        animationName: 'fadeInLeft',
        animationDuration: '1s',
        animationDelay: '0.4s',
        animationFillMode: 'both',
      }}
    >
      Building Your Vision Into Reality
    </h1>

    <p
      className="hero-description"
      style={{
        animationName: 'fadeInLeft',
        animationDuration: '1s',
        animationDelay: '0.4s',
        animationFillMode: 'both',
      }}
    >
      We specialize in creating innovative construction solutions that 
      stand the test of time. Our team of experts delivers quality 
      craftsmanship with attention to every detail.
    </p>

    <button className="hero-button"
      style={{
        animationName: 'fadeInLeft',
        animationDuration: '1s',
        animationDelay: '0.4s',
        animationFillMode: 'both',
      }} >
      Get Started
      <span className="plus-icon">+</span>
    </button>
  </div>


          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <Image
                src="/images/banner-image.png" // Replace with your image path
                alt="Construction professionals working"
                fill
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}