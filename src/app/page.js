'use client';
import Header from '@/components/Header';
import Hero2 from '@/components/Hero2';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Courses from '@/components/Courses';
import WhySterileProcessing from '@/components/WhySterileProcessing';
import FreeEbook from '@/components/FreeEbook';
import Masterclass from '@/components/Masterclass';
import CourseApplication from '@/components/CourseApplication';
import Pricing from '@/components/Pricing';
import FAQSection from '@/components/FAQ';
import Community from '@/components/Community';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <Hero2 />
        <About />
        <Mission />
        <Courses />
        <WhySterileProcessing />
        <FreeEbook />
        <Masterclass />
        <CourseApplication />
        <Pricing />
        <Community />
        <Testimonials />
        <Blog />
        <FAQSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}