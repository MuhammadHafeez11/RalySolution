"use client";
import Header from "@/components/Header";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import CourseApplication from "@/components/CourseApplication";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px' }}>
          <Courses />
          <Testimonials />
          <CourseApplication />
        </div>
        <Footer />
      </div>
    </div>
  );
}