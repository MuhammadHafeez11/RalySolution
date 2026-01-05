"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#024d94', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
                Disclaimer
              </h1>
              <img src="images/line.png" style={{ display: 'block', margin: '0 auto 30px', maxWidth: '100px' }} alt="" />
              <p style={{ fontSize: '16px', color: '#666' }}>
                Last updated: January 2025
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #e9ecef' }}>
              
              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #024d94' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>🎓</span>
                  Educational Use Only
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Our materials are for educational and informational purposes</li>
                  <li>While we aim to prepare students for certification, we are not a certifying body</li>
                </ul>
              </section>

              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #f8d171' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>⚕️</span>
                  Medical Disclaimer
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>No part of our training replaces professional healthcare training or practice</li>
                  <li>Always consult relevant governing bodies for licensing or practice requirements</li>
                </ul>
              </section>

              <section style={{ padding: '30px', backgroundColor: '#024d94', borderRadius: '8px', color: '#fff' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#f8d171', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>📈</span>
                  Results Vary
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff' }}>
                  We do not guarantee job placement, certification, or earnings. Your results depend on your effort and application of knowledge.
                </p>
              </section>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}