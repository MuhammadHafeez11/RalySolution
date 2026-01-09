export default function About() {
  return (
    <div id="about" style={{ padding: '0 15px' }}>
      <div style={{ height: '100px' }}></div>
      {/* INFO CONTENT */}
      <div style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ 
                fontFamily: 'Nunito Sans, sans-serif', 
                fontSize: '60px', 
                fontWeight: '900', 
                color: '#024d94', 
                marginBottom: '20px',
                lineHeight: '1.1'
              }}>The Story Behind Raly Solutions</h3>
              <img src="/images/line.png" style={{ marginBottom: '25px', maxWidth: '100px' }} alt="" />
              <p style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '16px',
                lineHeight: '28px',
                color: '#555',
                fontWeight: '400',
                marginBottom: '10px'
              }}>
                Founded by a passionate healthcare instructor with years of experience in sterile processing and surgical services, Raly Solutions was created to fill a gap in high-quality SPD training. Our platform is committed to raising the standard of infection control through knowledge, mentorship, and innovation.
              </p>
              <p style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '16px',
                lineHeight: '28px',
                color: '#555',
                fontWeight: '400',
                marginBottom: '10px'
              }}>
                We believe the sterile processing department is the heart of patient safety — yet it's one of the most overlooked areas in healthcare. Our mission is to educate, empower, and elevate professionals in this critical field.
              </p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                <li style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  padding: '6px 0 9px 35px',
                  position: 'relative'
                }}>
                  <i style={{
                    minWidth: '30px',
                    color: '#024d94',
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    fontSize: '25px'
                  }}>✓</i>
                  Excellence in Education
                </li>
                <li style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  padding: '6px 0 9px 35px',
                  position: 'relative'
                }}>
                  <i style={{
                    minWidth: '30px',
                    color: '#024d94',
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    fontSize: '25px'
                  }}>✓</i>
                  Integrity & Compliance
                </li>
                <li style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  padding: '6px 0 9px 35px',
                  position: 'relative'
                }}>
                  <i style={{
                    minWidth: '30px',
                    color: '#024d94',
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    fontSize: '25px'
                  }}>✓</i>
                  Student-Centered Approach
                </li>
                <li style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  padding: '6px 0 9px 35px',
                  position: 'relative'
                }}>
                  <i style={{
                    minWidth: '30px',
                    color: '#024d94',
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    fontSize: '25px'
                  }}>✓</i>
                  Innovation & Technology
                </li>
                <li style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '16px',
                  color: '#555',
                  padding: '6px 0 9px 35px',
                  position: 'relative'
                }}>
                  <i style={{
                    minWidth: '30px',
                    color: '#024d94',
                    position: 'absolute',
                    left: '0',
                    top: '4px',
                    fontSize: '25px'
                  }}>✓</i>
                  Empowering Healthcare Workers
                </li>
              </ul>
              <div style={{ marginBottom: '30px' }}></div>
              <a href="#courses" style={{
                display: 'inline-block',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: '700',
                textTransform: 'capitalize',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '0',
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#024d94',
                backgroundColor: '#f8d171',
                border: '2px solid #f8d171',
                textDecoration: 'none',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.border = '2px solid #024d94';
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#024d94';
              }}
              onMouseLeave={(e) => {
                e.target.style.border = '2px solid #f8d171';
                e.target.style.backgroundColor = '#f8d171';
                e.target.style.color = '#024d94';
              }}>
                Learn More →
              </a>
            </div>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
              <img src="/images/WhatsApp Image 2026-01-09 at 11.28.29 AM.jpeg" style={{ maxWidth: '100%', height: 'auto' }} alt="" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet Our Founder Section */}
      <div style={{ height: '100px' }}></div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#f8f8f8',
            padding: '60px 40px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              backgroundColor: '#024d94',
              borderRadius: '50%',
              margin: '0 auto 30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                color: '#fff',
                fontSize: '36px',
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: '700'
              }}>RS</span>
            </div>
            <h4 style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontSize: '24px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '20px'
            }}>Meet Our Founder</h4>
            <p style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '18px',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#666',
              marginBottom: '25px'
            }}>
              "Training students is not just about sharing knowledge — it's about changing lives and making hospitals safer."
            </p>
            <p style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '14px',
              color: '#999'
            }}>Healthcare Instructor & SPD Expert</p>
          </div>
        </div>
      </div>
      
      <div style={{ height: '100px' }}></div>
    </div>
  );
}