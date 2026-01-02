export default function Footer() {
  return (
    <>
      <footer style={{
        background: '#024d94',
        padding: '80px 0 40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            
            {/* Company Info */}
            <div>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#f8d171',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>RALY SOLUTIONS</h3>
                <div style={{ width: '60px', height: '3px', backgroundColor: '#f8d171', marginBottom: '20px' }}></div>
              </div>
              <p style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '16px',
                color: '#fff',
                lineHeight: '1.6',
                marginBottom: '25px',
                opacity: '0.9'
              }}>
                Empowering sterile processing professionals worldwide through comprehensive training, certification programs, and expert guidance.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#facebook" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f8d171',
                  borderRadius: '50%',
                  color: '#024d94',
                  fontSize: '18px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8d171';
                  e.target.style.transform = 'translateY(0)';
                }}>f</a>
                <a href="#linkedin" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f8d171',
                  borderRadius: '50%',
                  color: '#024d94',
                  fontSize: '18px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8d171';
                  e.target.style.transform = 'translateY(0)';
                }}>in</a>
                <a href="#youtube" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f8d171',
                  borderRadius: '50%',
                  color: '#024d94',
                  fontSize: '18px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8d171';
                  e.target.style.transform = 'translateY(0)';
                }}>▶</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                color: '#f8d171',
                marginBottom: '25px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Quick Links</h5>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {[
                  { text: 'About Us', href: '#about' },
                  { text: 'Our Courses', href: '#courses' },
                  { text: 'Free eBook', href: '#ebook' },
                  { text: 'Masterclasses', href: '#masterclass' },
                  { text: 'Pricing', href: '#pricing' },
                  { text: 'Blog', href: '#blog' }
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href={link.href} style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '15px',
                      color: '#fff',
                      textDecoration: 'none',
                      opacity: '0.8',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      padding: '5px 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#f8d171';
                      e.target.style.opacity = '1';
                      e.target.style.paddingLeft = '10px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#fff';
                      e.target.style.opacity = '0.8';
                      e.target.style.paddingLeft = '0';
                    }}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h5 style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                color: '#f8d171',
                marginBottom: '25px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Programs</h5>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {[
                  { text: 'CBSPD Certification Prep', href: '#cbspd' },
                  { text: 'CRCST Certification Prep', href: '#crcst' },
                  { text: 'SPD Fundamentals Course', href: '#fundamentals' },
                  { text: 'Advanced Sterilization', href: '#advanced' },
                  { text: 'Infection Control Training', href: '#infection' },
                  { text: 'Career Coaching', href: '#coaching' }
                ].map((link, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href={link.href} style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '15px',
                      color: '#fff',
                      textDecoration: 'none',
                      opacity: '0.8',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      padding: '5px 0'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#f8d171';
                      e.target.style.opacity = '1';
                      e.target.style.paddingLeft = '10px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#fff';
                      e.target.style.opacity = '0.8';
                      e.target.style.paddingLeft = '0';
                    }}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                color: '#f8d171',
                marginBottom: '25px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Get In Touch</h5>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#f8d171',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    marginTop: '2px',
                    flexShrink: '0'
                  }}>
                    <span style={{ color: '#024d94', fontSize: '12px', fontWeight: 'bold' }}>@</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '15px',
                      color: '#fff',
                      margin: '0',
                      opacity: '0.9'
                    }}>info@ralysolutions.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#f8d171',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    marginTop: '2px',
                    flexShrink: '0'
                  }}>
                    <span style={{ color: '#024d94', fontSize: '12px', fontWeight: 'bold' }}>📞</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '15px',
                      color: '#fff',
                      margin: '0',
                      opacity: '0.9'
                    }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#f8d171',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    marginTop: '2px',
                    flexShrink: '0'
                  }}>
                    <span style={{ color: '#024d94', fontSize: '12px', fontWeight: 'bold' }}>📍</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '15px',
                      color: '#fff',
                      margin: '0',
                      opacity: '0.9',
                      lineHeight: '1.4'
                    }}>Healthcare Education Center<br />123 Medical Plaza, Suite 456<br />Healthcare City, HC 12345</p>
                  </div>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div style={{ marginTop: '30px' }}>
                <h6 style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#f8d171',
                  marginBottom: '15px'
                }}>Stay Updated</h6>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="email" 
                    placeholder="Your email"
                    style={{
                      flex: '1',
                      padding: '10px 15px',
                      border: '2px solid rgba(248, 209, 113, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      borderRadius: '5px',
                      fontSize: '14px',
                      fontFamily: 'Open Sans, sans-serif'
                    }}
                  />
                  <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#f8d171',
                    color: '#024d94',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: 'Nunito Sans, sans-serif',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f8d171';
                  }}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{
            borderTop: '1px solid rgba(248, 209, 113, 0.2)',
            paddingTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <p style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                color: '#fff',
                margin: '0',
                opacity: '0.7'
              }}>
                © 2024 Raly Solutions. All rights reserved. | Empowering Healthcare Professionals Worldwide
              </p>
            </div>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              {[
                { text: 'Privacy Policy', href: '#privacy' },
                { text: 'Terms of Service', href: '#terms' },
                { text: 'Cookie Policy', href: '#cookies' },
                { text: 'Accessibility', href: '#accessibility' }
              ].map((link, index) => (
                <a key={index} href={link.href} style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '14px',
                  color: '#fff',
                  textDecoration: 'none',
                  opacity: '0.7',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#f8d171';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.opacity = '0.7';
                }}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}