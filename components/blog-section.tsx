import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Construction",
    excerpt: "Exploring eco-friendly building materials and practices for a greener future in construction.",
    date: "June 15, 2023",
    author: "John Smith",
    category: "Sustainability",
    image: "/images/news-1.png",
    link: "/blog/sustainable-construction",
  },
  {
    id: 2,
    title: "Innovations in Steel Construction",
    excerpt: "New technologies and methods that are revolutionizing the steel construction industry.",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    category: "Technology",
    image: "/images/news-2.png",
    link: "/blog/steel-innovations",
  },
  {
    id: 3,
    title: "How to Choose the Right Construction Company",
    excerpt: "Key factors to consider when selecting a construction partner for your next project.",
    date: "April 10, 2023",
    author: "Michael Brown",
    category: "Tips",
    image: "/images/news-3.png",
    link: "/blog/choosing-construction-company",
  },
]

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle1">BLOGS & NEWS</div>
          <h2 className="section-title1">Latest Articles</h2>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image-container">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="blog-image"
                />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-author">By {post.author}</span>
                </div>
                <h3 className="blog-title">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link href={post.link} className="blog-link">
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
            </div>
          ))}
        </div>

        <div className="section-action">
          <Link href="/blog" className="btn-primary">
            View All Articles
            <svg
              className="btn-icon"
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
      </div>
    </section>
  )
}
