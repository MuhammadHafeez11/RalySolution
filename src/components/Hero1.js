export default function Hero1() {
  return (
    <div className="intro intro1" style={{ 
      background: 'linear-gradient(90deg, #024d94 57%, #f8d171 43%)',
      backgroundSize: 'cover',
      padding: '130px 0 130px'
    }}>
      <div className="container">
        <div className="row center-content" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="col-md-6">
            <h2 style={{
              color: '#f8d171',
              fontSize: '48px',
              textTransform: 'none',
              fontWeight: '900',
              margin: '0 0 15px',
              fontFamily: 'Poppins, sans-serif'
            }}>Empowering the Next Generation of Sterile Processing Professionals</h2>
            <p style={{
              fontSize: '16px',
              color: '#fff',
              marginBottom: '30px',
              fontFamily: 'Open Sans, sans-serif'
            }}>Your gateway to high-quality online training, coaching, webinars, ebooks, and certification programs in the healthcare industry's most essential department—Sterile Processing.</p>
            <div className="space30" style={{ marginBottom: '30px' }}></div>
            <a 
              href="/courses" 
              className="btn btn-lg btn-ylw"
              style={{
                color: '#024d94',
                backgroundColor: '#f8d171',
                border: '2px solid #f8d171',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: '700',
                textTransform: 'capitalize',
                padding: '10px 20px',
                borderRadius: '0',
                fontFamily: 'Nunito Sans, sans-serif',
                textDecoration: 'none',
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
              }}
            >
              Start Learning <i className="icon-arrow-right" style={{ marginLeft: '10px' }}>→</i>
            </a>
          </div>
          <br /><br />
          <div className="col-sm-4 col-md-6" style={{ textAlign: 'center' }}>
            <img 
              src="/images/WhatsApp Image 2026-01-09 at 11.28.28 AM.jpeg" 
              className="img-responsive" 
              alt="Sterile Processing Training" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}