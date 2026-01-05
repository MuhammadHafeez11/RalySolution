"use client";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px' }}>
          <Pricing />
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}