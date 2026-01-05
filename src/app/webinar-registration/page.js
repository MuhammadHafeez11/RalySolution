"use client";
import Header from "@/components/Header";
import Masterclass from "@/components/Masterclass";
import WebinarRegistrationForm from "@/components/WebinarRegistrationForm";
import Footer from "@/components/Footer";

export default function WebinarRegistrationPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px' }}>
          <Masterclass />
          <WebinarRegistrationForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}