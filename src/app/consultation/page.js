"use client";
import Header from "@/components/Header";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px' }}>
          <Consultation />
        </div>
        <Footer />
      </div>
    </div>
  );
}