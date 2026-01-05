"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebinarReplayPage() {
  return (
    <div className="min-h-screen">
      <div className="body">
        <Header />
        <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#024d94', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
                Webinar Replays
              </h1>
              <img src="images/line.png" style={{ display: 'block', margin: '0 auto 30px', maxWidth: '100px' }} alt="" />
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                Catch up on our expert-led webinars covering the latest in sterile processing techniques and industry standards.
              </p>
            </div>

            {/* Featured Webinar */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '8px', marginBottom: '60px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                <div>
                  <span style={{ backgroundColor: '#f8d171', color: '#024d94', padding: '4px 12px', fontSize: '12px', fontWeight: '700', borderRadius: '20px' }}>
                    LATEST REPLAY
                  </span>
                  <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#024d94', margin: '15px 0', fontFamily: 'Nunito Sans, sans-serif' }}>
                    Advanced Sterilization Techniques
                  </h2>
                  <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                    Learn the latest sterilization methods and quality assurance protocols from industry experts.
                  </p>
                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>
                      <strong>Duration:</strong> 90 minutes
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', margin: '5px 0' }}>
                      <strong>Presenter:</strong> Dr. Sarah Johnson, CSPDT
                    </p>
                  </div>
                </div>
                <div style={{ backgroundColor: '#024d94', borderRadius: '8px', padding: '60px 40px', textAlign: 'center', color: '#fff' }}>
                  <div style={{ fontSize: '48px', marginBottom: '15px' }}>▶️</div>
                  <p style={{ fontSize: '16px', marginBottom: '20px', color: '#fff !important' }}>Click to watch replay</p>
                  <button style={{
                    backgroundColor: '#f8d171',
                    color: '#024d94',
                    border: 'none',
                    padding: '12px 25px',
                    fontSize: '16px',
                    fontWeight: '700',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Webinar Library */}
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#024d94', marginBottom: '40px', textAlign: 'center' }}>
                Webinar Library
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                
                {/* Webinar 1 */}
                <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ backgroundColor: '#024d94', padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔬</div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Infection Prevention Protocols</h4>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                      Comprehensive guide to preventing healthcare-associated infections through proper sterilization.
                    </p>
                    <div style={{ fontSize: '12px', color: '#888', marginBottom: '20px' }}>
                      <p>Duration: 75 minutes</p>
                      <p>Presenter: Michael Chen, CIS</p>
                    </div>
                    <button style={{
                      backgroundColor: '#f8d171',
                      color: '#024d94',
                      border: 'none',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '700',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%'
                    }}>
                      Watch Replay
                    </button>
                  </div>
                </div>

                {/* Webinar 2 */}
                <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ backgroundColor: '#024d94', padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>📊</div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Quality Assurance Best Practices</h4>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                      Learn how to implement and maintain quality assurance programs in sterile processing departments.
                    </p>
                    <div style={{ fontSize: '12px', color: '#888', marginBottom: '20px' }}>
                      <p>Duration: 60 minutes</p>
                      <p>Presenter: Lisa Rodriguez, CSPDT</p>
                    </div>
                    <button style={{
                      backgroundColor: '#f8d171',
                      color: '#024d94',
                      border: 'none',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '700',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%'
                    }}>
                      Watch Replay
                    </button>
                  </div>
                </div>

                {/* Webinar 3 */}
                <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <div style={{ backgroundColor: '#024d94', padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '40px', marginBottom: '10px' }}>🏆</div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Certification Exam Strategies</h4>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                      Expert tips and strategies for passing your sterile processing certification exams.
                    </p>
                    <div style={{ fontSize: '12px', color: '#888', marginBottom: '20px' }}>
                      <p>Duration: 90 minutes</p>
                      <p>Presenter: David Kim, CRCST</p>
                    </div>
                    <button style={{
                      backgroundColor: '#f8d171',
                      color: '#024d94',
                      border: 'none',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '700',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%'
                    }}>
                      Watch Replay
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', marginTop: '80px', padding: '40px', backgroundColor: '#024d94', borderRadius: '8px', color: '#fff' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '15px', color: '#fff' }}>
                Don't Miss Our Next Live Webinar
              </h3>
              <p style={{ fontSize: '16px', marginBottom: '25px', color: '#f0f0f0' }}>
                Register now for upcoming sessions and get exclusive access to live Q&A with industry experts.
              </p>
              <a href="/webinar-registration" style={{
                display: 'inline-block',
                backgroundColor: '#f8d171',
                color: '#024d94',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f5c842'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f8d171'}>
                Register for Next Webinar
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}