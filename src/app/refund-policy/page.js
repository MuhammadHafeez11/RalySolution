"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#024d94', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
                Refund Policy
              </h1>
              <img src="images/line.png" style={{ display: 'block', margin: '0 auto 30px', maxWidth: '100px' }} alt="" />
              <p style={{ fontSize: '16px', color: '#666' }}>
                Last updated: January 2025
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              
              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>30-Day Money-Back Guarantee</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  We stand behind the quality of our courses. If you're not completely satisfied with your purchase, you can request a full refund within 30 days of your enrollment date.
                </p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                  <p style={{ fontSize: '16px', color: '#024d94', fontWeight: '600', margin: '0' }}>
                    ✓ Full refund within 30 days of purchase
                  </p>
                </div>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Refund Eligibility</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  To be eligible for a refund, you must meet the following criteria:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Request submitted within 30 days of original purchase</li>
                  <li>Course completion must be less than 30%</li>
                  <li>No previous refund requests for the same course</li>
                  <li>Account in good standing with no violations</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Non-Refundable Items</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
                  The following items are not eligible for refunds:
                </p>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li>Courses completed more than 30%</li>
                  <li>Certification fees paid to third-party organizations</li>
                  <li>Digital downloads after access has been granted</li>
                  <li>Coaching sessions that have been attended</li>
                  <li>Webinar recordings after 30 days</li>
                </ul>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>How to Request a Refund</h2>
                <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <ol style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px', margin: '0' }}>
                    <li style={{ marginBottom: '10px' }}>Email us at refunds@ralysolutions.com</li>
                    <li style={{ marginBottom: '10px' }}>Include your order number and reason for refund</li>
                    <li style={{ marginBottom: '10px' }}>We'll review your request within 2 business days</li>
                    <li>If approved, refund will be processed within 5-7 business days</li>
                  </ol>
                </div>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Processing Time</h2>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                  <li><strong>Review:</strong> 1-2 business days</li>
                  <li><strong>Processing:</strong> 3-5 business days</li>
                  <li><strong>Bank/Card Processing:</strong> 5-10 business days</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '15px', fontStyle: 'italic' }}>
                  Note: Processing times may vary depending on your payment method and financial institution.
                </p>
              </section>

              <section style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Partial Refunds</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  In certain circumstances, we may offer partial refunds for courses where significant progress has been made but exceptional circumstances warrant consideration. These are evaluated on a case-by-case basis.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '20px' }}>Contact Us</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                  For refund requests or questions about this policy:
                  <br />
                  Email: refunds@ralysolutions.com
                  <br />
                  Phone: (555) 123-4567
                  <br />
                  Business Hours: Monday-Friday, 9 AM - 5 PM EST
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