export default function Hero2() {
  return (
    <div id="hero" className="intro hero2" style={{paddingTop: '120px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <h3 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '20px',
              fontFamily: 'Nunito Sans, sans-serif',
              lineHeight: '1.2'
            }}>Empowering the Next Generation of<br />Sterile Processing Professionals</h3>
            <p style={{
              fontSize: '18px',
              lineHeight: '28px',
              color: '#666',
              marginBottom: '40px',
              fontFamily: 'Open Sans, sans-serif',
              maxWidth: '800px',
              margin: '0 auto 40px'
            }}>Your gateway to high-quality online training, coaching, webinars, ebooks, and certification programs in the healthcare industry's most essential department—Sterile Processing.</p>
            <div className="space40"></div>
            <div className="dual-btn">
              <a href="/courses" style={{
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
                marginRight: '15px',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.border = '2px solid #024d94';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#024d94';
              }}
              onMouseLeave={(e) => {
                e.target.style.border = '2px solid #f8d171';
                e.target.style.backgroundColor = '#f8d171';
                e.target.style.color = '#024d94';
              }}>
                Browse Courses
              </a>
              <a href="/lead-magnet" style={{
                display: 'inline-block',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: '700',
                textTransform: 'capitalize',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '0',
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#fff',
                backgroundColor: '#024d94',
                border: '2px solid #024d94',
                textDecoration: 'none',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.border = '2px solid #024d94';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#024d94';
              }}
              onMouseLeave={(e) => {
                e.target.style.border = '2px solid #024d94';
                e.target.style.backgroundColor = '#024d94';
                e.target.style.color = '#fff';
              }}>
                Get Free eBook
              </a>
            </div>

            <div className="intro-form2-dark">
              <h4>Start Your Journey Today</h4>
              <form>
                <input name="form-type" value="enrollment" type="hidden" />
                <fieldset>
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <input placeholder="Full Name" type="text" required />
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <input placeholder="Email Address" type="email" required />
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <button style={{
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
                        width: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.border = '2px solid #f8d171';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#f8d171';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.border = '2px solid #f8d171';
                        e.target.style.backgroundColor = '#f8d171';
                        e.target.style.color = '#024d94';
                      }} type="submit">
                        Apply for Enrollment
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}