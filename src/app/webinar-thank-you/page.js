"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebinarThankYouPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#f8f9fa' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ textAlign: 'center', backgroundColor: '#fff', padding: '60px 40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '60px', color: '#f8d171', marginBottom: '20px' }}>✓</div>
              <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#024d94', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
                You're All Set!
              </h1>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
                Thank you for registering for our exclusive webinar on Sterile Processing Excellence.
              </p>
              
              <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#024d94', marginBottom: '15px' }}>
                  Webinar Details
                </h3>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                  <strong>Date:</strong> Saturday, January 25th, 2025
                </p>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                  <strong>Time:</strong> 2:00 PM - 4:00 PM EST
                </p>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '0' }}>
                  <strong>Duration:</strong> 2 Hours + Q&A Session
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '20px', fontWeight: '600', color: '#024d94', marginBottom: '15px' }}>
                  What's Next?
                </h4>
                <ul style={{ textAlign: 'left', fontSize: '16px', color: '#555', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}>📧 Check your email for the webinar link and calendar invite</li>
                  <li style={{ marginBottom: '10px' }}>📱 Download our mobile app for easy access</li>
                  <li style={{ marginBottom: '10px' }}>📚 Review the pre-webinar materials we've sent</li>
                  <li>⏰ Set a reminder 15 minutes before the session</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/courses" style={{
                  display: 'inline-block',
                  fontSize: '16px',
                  fontWeight: '700',
                  padding: '12px 25px',
                  backgroundColor: '#024d94',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#013a70'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#024d94'}>
                  Browse Our Courses
                </a>
                <a href="/webinar-replay" style={{
                  display: 'inline-block',
                  fontSize: '16px',
                  fontWeight: '700',
                  padding: '12px 25px',
                  backgroundColor: '#f8d171',
                  color: '#024d94',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f5c842'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f8d171'}>
                  Watch Previous Webinars
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}