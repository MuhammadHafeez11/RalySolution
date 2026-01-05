"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
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

            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Acceptance of Terms</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  By accessing and using Raly Solutions' educational platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Course Access and Usage</h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Course access is granted for personal, non-commercial use only</li>
                  <li>You may not share, distribute, or resell course content</li>
                  <li>Course materials are protected by copyright and intellectual property laws</li>
                  <li>Access may be revoked for violation of these terms</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Payment Terms</h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>All payments are processed securely through third-party providers</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Failed payments may result in suspension of access</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>User Conduct</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  You agree not to:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Use the platform for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with other users' experience</li>
                  <li>Upload malicious content or viruses</li>
                  <li>Impersonate others or provide false information</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Intellectual Property</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  All content, including but not limited to text, graphics, logos, images, audio clips, video clips, and software, is the property of Raly Solutions or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Limitation of Liability</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  Raly Solutions shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Termination</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Contact Information</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  For questions about these Terms & Conditions, please contact us at:
                  <br />
                  Email: legal@ralysolutions.com
                  <br />
                  Phone: (555) 123-4567
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