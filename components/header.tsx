"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ShoppingCart, Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Page", href: "/page" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-image">
              <Image src="/images/icon.png" alt="SteelCity Logo" width={163} height={60} />
            </div>
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number & Cart */}
          <div className="header-right">
            <div className="phone-container">
              <div className="phone-icon">
                <Phone className="icon" />
              </div>
              <div>
                <p className="phone-text-small">Need help?</p>
                <p className="phone-text">(808) 555-0111</p>
              </div>
            </div>
            <div className="cart-wrapper">
              <button className="cart-button">
                <ShoppingCart className="icon" />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="container">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mobile-header-bottom">
            <div className="phone-container">
              <div className="phone-icon">
                <Phone className="icon" />
              </div>
              <div>
                <p className="phone-text-small">Need help?</p>
                <p className="phone-text">(808) 555-0111</p>
              </div>
            </div>
            <div className="cart-wrapper">
              <button className="cart-button">
                <ShoppingCart className="icon" />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
