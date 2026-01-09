export default function WhatIsRaly() {
  return (
    <div id="about" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
          <div style={{ flex: '1' }}>
            <h3 style={{
              fontSize: '60px',
              fontWeight: '900',
              color: '#024d94',
              marginBottom: '20px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>What is Raly Solutions?</h3>
            <img src="/images/line.png" style={{ marginBottom: '30px' }} alt="" />
            <p style={{
              fontSize: '18px',
              lineHeight: '28px',
              color: '#666',
              marginBottom: '30px',
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Raly Solutions is a leading eLearning and coaching platform for healthcare professionals and students looking to master sterile processing and infection prevention. We provide expertly designed courses, real-world mentorship, and tools to help you grow in your career.
            </p>
            <div style={{ marginBottom: '30px' }}>
              <a href="#courses" style={{
                display: 'inline-block',
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: '700',
                textTransform: 'capitalize',
                padding: '10px 20px',
                border: '2px solid #024d94',
                borderRadius: '0',
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#fff',
                backgroundColor: '#024d94',
                textDecoration: 'none',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#024d94';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#024d94';
                e.target.style.color = '#fff';
              }}>
                Learn More <i style={{ marginLeft: '8px' }}>→</i>
              </a>
            </div>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <img src="/images/WhatsApp Image 2026-01-09 at 11.28.30 AM.jpeg" style={{ maxWidth: '100%', height: 'auto' }} alt="Raly Solutions" />
          </div>
        </div>
      </div>
    </div>
  );
}