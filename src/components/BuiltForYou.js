export default function BuiltForYou() {
  return (
    <div style={{
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
        display: 'flex', 
        alignItems: 'center', 
        minHeight: '500px' 
      }}>
        <div style={{ flex: '1', paddingLeft: '0' }}>
          <img src="/images/WhatsApp Image 2026-01-09 at 11.28.31 AM.jpeg" style={{ 
            width: '100%', 
            maxWidth: '600px',
            height: 'auto'
          }} alt="Built for You" />
        </div>
        
        <div style={{ 
          flex: '1', 
          paddingLeft: '60px',
          maxWidth: '600px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#024d94',
            marginBottom: '20px',
            fontFamily: 'Nunito Sans, sans-serif'
          }}>Built for You</h1>
          <img src="/images/line.png" style={{ marginBottom: '30px' }} alt="" />
          <p style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: '#666',
            marginBottom: '30px',
            fontFamily: 'Open Sans, sans-serif'
          }}>
            Whether you're a beginner, a technician seeking certification, or a hospital looking to train staff, Raly Solutions gives you a complete learning ecosystem.
          </p>
          
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              fontSize: '16px',
              fontFamily: 'Open Sans, sans-serif',
              color: '#666'
            }}>
              <span style={{
                color: '#024d94',
                fontSize: '20px',
                marginRight: '15px',
                fontWeight: 'bold'
              }}>✓</span>
              Perfect for Healthcare Beginners
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              fontSize: '16px',
              fontFamily: 'Open Sans, sans-serif',
              color: '#666'
            }}>
              <span style={{
                color: '#024d94',
                fontSize: '20px',
                marginRight: '15px',
                fontWeight: 'bold'
              }}>✓</span>
              Certification-Seeking Technicians
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              fontSize: '16px',
              fontFamily: 'Open Sans, sans-serif',
              color: '#666'
            }}>
              <span style={{
                color: '#024d94',
                fontSize: '20px',
                marginRight: '15px',
                fontWeight: 'bold'
              }}>✓</span>
              Hospital Staff Training Programs
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              fontSize: '16px',
              fontFamily: 'Open Sans, sans-serif',
              color: '#666'
            }}>
              <span style={{
                color: '#024d94',
                fontSize: '20px',
                marginRight: '15px',
                fontWeight: 'bold'
              }}>✓</span>
              Career Advancement Seekers
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              fontSize: '16px',
              fontFamily: 'Open Sans, sans-serif',
              color: '#666'
            }}>
              <span style={{
                color: '#024d94',
                fontSize: '20px',
                marginRight: '15px',
                fontWeight: 'bold'
              }}>✓</span>
              Complete Learning Ecosystem
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}