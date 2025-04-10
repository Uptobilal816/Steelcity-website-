import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import RecentWorkSection from "@/components/recent-work-section"
import EmployeesSection from "@/components/employees-section"
import ContactBanner from "@/components/contact-banner"
import WorkingProcessSection from "@/components/working-process-section"
import FaqSection from "@/components/faq-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactFormSection from "@/components/contact-form-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="main-content">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RecentWorkSection />
      <EmployeesSection />
      <ContactBanner />
      <WorkingProcessSection />
      <FaqSection />
      <TestimonialsSection />
      <ContactFormSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
