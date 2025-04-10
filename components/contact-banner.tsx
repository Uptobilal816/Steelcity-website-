import Link from "next/link"

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-text">
    
            <h2 className="banner-title">Sign up for news & get all updates</h2>
            <p className="banner-description">
              Ready to start your project? Contact us today for a free consultation and quote.
            </p>
          </div>
          <span><h1>Contact with us </h1> <br /> <h1>1234-567890</h1> </span>
          
          <div className="banner-action1">
            <Link href="/contact" className="btn-primary1">
              Contact Us
              <svg
                className="btn-icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                enableBackground={"white"}
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
        </div>
      </div>
    </section>
  )
}
