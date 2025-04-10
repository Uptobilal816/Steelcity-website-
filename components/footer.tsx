import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div>
            <div className="footer-logo">
              <div className="logo-image">
                <Image src="/images/white-logo.png" alt="SteelCity Logo" width={163} height={60} />
              </div>
              
            </div>
            <p className="footer-description">
              We provide top-quality steel products and solutions for construction, manufacturing, and industrial
              applications.
            </p>
            <div className="social-links">
              <Link href="#" className="social-link" aria-label="Facebook">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-1.745 0-2.513.829-2.513 2.437v1.543h3.747l-.531 3.667h-3.216v7.98H9.101z"></path>
                </svg>
              </Link>
              <Link href="#" className="social-link" aria-label="Instagram">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </Link>
              <Link href="#" className="social-link" aria-label="Twitter">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.99 9.99 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
                </svg>
              </Link>
              <Link href="#" className="social-link" aria-label="LinkedIn">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h3 className="footer-title">Customer Service</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link href="/help" className="footer-link">
                  Help Center
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/returns" className="footer-link">
                  Returns & Refunds
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/shipping" className="footer-link">
                  Shipping Information
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li className="footer-link-item">
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h3 className="footer-title">Address</h3>
            <ul className="footer-links">
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span className="contact-text">
                  123 Steel Avenue, Industrial District
                  <br />
                  New York, NY 10001, USA
                </span>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <span className="contact-text">(808) 555-0111</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <span className="contact-text">info@steelcity.com</span>
              </li>
            </ul>
            <div className="working-hours">
              <h4 className="working-hours-title">Working Hours</h4>
              <p className="working-hours-text">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-description">
              Subscribe to our newsletter to receive updates on new products, special offers, and more.
            </p>
            <form className="footer-form">
              <div>
                <input type="email" placeholder="Your email address" className="footer-form-input" required />
              </div>
              <button type="submit" className="footer-form-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SteelCity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
