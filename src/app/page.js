'use client';
import Header from '@/components/Header';
import Hero1 from '@/components/Hero1';
import WhatIsRaly from '@/components/WhatIsRaly';
import WhatWeOffer from '@/components/WhatWeOffer';
import BuiltForYou from '@/components/BuiltForYou';
import Testimonials from '@/components/Testimonials';
import FeaturedCTA from '@/components/FeaturedCTA';
// import About from '@/components/About';
// import Mission from '@/components/Mission';
// import Courses from '@/components/Courses';
// import WhySterileProcessing from '@/components/WhySterileProcessing';
import FreeEbook from '@/components/FreeEbook';
import Masterclass from '@/components/Masterclass';
import CourseApplication from '@/components/CourseApplication';
// import Pricing from '@/components/Pricing';
import FAQSection from '@/components/FAQ';
// import Community from '@/components/Community';
// import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <Hero1 />
        <WhatIsRaly />
        <WhatWeOffer />
        <BuiltForYou />
        <Testimonials />
        <FeaturedCTA />
        {/* <About /> */}
        {/* <Mission /> */}
        {/* <Courses /> */}
        {/* <WhySterileProcessing /> */}
        <FreeEbook />
        <Masterclass />
        {/* <Pricing /> */}
        {/* <Community /> */}
        {/* <Blog /> */}
        <FAQSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}