"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#024d94', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
                Terms & Conditions
              </h1>
              <img src="images/line.png" style={{ display: 'block', margin: '0 auto 30px', maxWidth: '100px' }} alt="" />
              <p style={{ fontSize: '16px', color: '#666' }}>
                Last updated: January 2025
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #e9ecef' }}>
              
              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #024d94' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>📜</span>
                  Use of Site and Content
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>All course materials, videos, and eBooks are property of Raly Solutions and are for personal use only</li>
                  <li>You agree not to copy, resell, or redistribute any content without written permission</li>
                </ul>
              </section>

              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #f8d171' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>🎯</span>
                  Course Access & Subscriptions
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Access to courses is granted upon payment</li>
                  <li>Subscriptions (if applicable) will auto-renew unless canceled</li>
                  <li>You're responsible for maintaining login credentials securely</li>
                </ul>
              </section>

              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #024d94' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>📅</span>
                  Consultation and Booking
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Live sessions must be booked via our calendar</li>
                  <li>Cancellation/rescheduling must be done at least 24 hours in advance</li>
                </ul>
              </section>

              <section style={{ padding: '30px', backgroundColor: '#024d94', borderRadius: '8px', color: '#fff' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#f8d171', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>⚠️</span>
                  Limitation of Liability
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff', paddingLeft: '20px' }}>
                  <li>We are not liable for technical interruptions, errors, or delays in content access</li>
                  <li>Education is provided as a tool for learning and growth. Certification outcomes are your responsibility</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}