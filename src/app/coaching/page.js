"use client";
import Header from "@/components/Header";
import Coaching from "@/components/Coaching";
import Footer from "@/components/Footer";

export default function CoachingPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px' }}>
          <Coaching />
        </div>
        <Footer />
      </div>
    </div>
  );
}