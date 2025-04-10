"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Steel I-Beam",
    price: 299.99,
    image: "/images/product-1.jpg",
    link: "/product/steel-i-beam",
  },
  {
    id: 2,
    name: "Metal Roofing Sheet",
    price: 149.99,
    image: "/images/product-2.jpg",
    link: "/product/metal-roofing-sheet",
  },
  {
    id: 3,
    name: "Steel Pipe",
    price: 89.99,
    image: "/images/product-3.jpg",
    link: "/product/steel-pipe",
  },
  {
    id: 4,
    name: "Angle Iron",
    price: 59.99,
    image: "/images/product-4.jpg",
    link: "/product/angle-iron",
  },
  {
    id: 5,
    name: "Steel Plate",
    price: 199.99,
    image: "/images/product-5.jpg",
    link: "/product/steel-plate",
  },
  {
    id: 6,
    name: "Rebar Set",
    price: 129.99,
    image: "/images/product-6.jpg",
    link: "/product/rebar-set",
  },
]

export default function FeaturedProducts() {
  const [cartItems, setCartItems] = useState<number[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId])
    // Here you would typically update a global cart state or context
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-left">Featured Products</h2>
          <div className="scroll-buttons">
            <button onClick={() => scroll("left")} className="scroll-button" aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scroll("right")} className="scroll-button" aria-label="Scroll right">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={scrollContainerRef} className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="product-image object-cover"
                />
                <div className="product-overlay"></div>
                <button
                  onClick={() => addToCart(product.id)}
                  className="quick-add-button"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
              <div className="product-content">
                <Link href={product.link} className="block">
                  <h3 className="product-title">{product.name}</h3>
                </Link>
                <div className="product-price-container">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button onClick={() => addToCart(product.id)} className="add-to-cart-text">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
