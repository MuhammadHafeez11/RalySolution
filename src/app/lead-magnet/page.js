"use client";
import Header from "@/components/Header";
import FreeEbook from "@/components/FreeEbook";
import Footer from "@/components/Footer";

export default function LeadMagnetPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px' }}>
          <FreeEbook />
        </div>
        <Footer />
      </div>
    </div>
  );
}