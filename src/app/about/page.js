"use client";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '10px' }}>
          <About />
        </div>
        <Footer />
      </div>
    </div>
  );
}