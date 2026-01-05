"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
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

            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Information We Collect</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support.
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Name and contact information</li>
                  <li>Educational and professional background</li>
                  <li>Course progress and completion data</li>
                  <li>Payment information (processed securely by third parties)</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>How We Use Your Information</h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Provide and improve our educational services</li>
                  <li>Process payments and manage your account</li>
                  <li>Send course updates and educational content</li>
                  <li>Respond to your questions and provide support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Information Sharing</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>With your consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Data Security</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Your Rights</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  You have the right to:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Contact Us</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@ralysolutions.com
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