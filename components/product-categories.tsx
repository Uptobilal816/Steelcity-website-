import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Structural Steel",
    image: "/images/category-1.jpg",
    link: "/category/structural-steel",
  },
  {
    id: 2,
    name: "Metal Fabrication",
    image: "/images/category-2.jpg",
    link: "/category/metal-fabrication",
  },
  {
    id: 3,
    name: "Steel Accessories",
    image: "/images/category-3.jpg",
    link: "/category/steel-accessories",
  },
]

export default function ProductCategories() {
  return (
    <section className="section bg-gray">
      <div className="container">
        <h2 className="section-title">Product Categories</h2>
        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-container">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="category-image object-cover"
                />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.name}</h3>
                <Link href={category.link} className="category-button">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
