"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#024d94', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
                Privacy Policy
              </h1>
              <img src="images/line.png" style={{ display: 'block', margin: '0 auto 30px', maxWidth: '100px' }} alt="" />
              <p style={{ fontSize: '16px', color: '#666' }}>
                Last updated: January 2025
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #e9ecef' }}>
              
              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #024d94' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>📊</span>
                  Information We Collect
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Personal data (name, email, phone number, billing address)</li>
                  <li>Course progress and completion</li>
                  <li>Consultation and support tickets</li>
                  <li>Payment and subscription info (processed securely via third-party gateways)</li>
                </ul>
              </section>

              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #f8d171' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>🔧</span>
                  How We Use It
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>To create and manage student accounts</li>
                  <li>To deliver course content, webinars, and masterclasses</li>
                  <li>To schedule consultations and services</li>
                  <li>To respond to support requests and inquiries</li>
                  <li>To send updates, newsletters, or promotional content (you can opt out)</li>
                </ul>
              </section>

              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #024d94' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>🔒</span>
                  Data Security
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  We use SSL encryption and secure databases. Data is only shared with third-party providers necessary to deliver our services.
                </p>
              </section>

              <section style={{ marginBottom: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #f8d171' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>⚖️</span>
                  Your Rights
                </h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Request a copy of your data</li>
                  <li>Correct or delete your data</li>
                  <li>Opt out of promotional messages</li>
                </ul>
              </section>

              <section style={{ padding: '30px', backgroundColor: '#024d94', borderRadius: '8px', color: '#fff' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#f8d171', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px', marginRight: '10px' }}>📞</span>
                  Contact Us
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#fff' }}>
                  For any privacy concerns, email: privacy@ralysolutions.com
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