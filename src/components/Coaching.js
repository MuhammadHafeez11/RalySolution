export default function Coaching() {
  return (
    <section style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#fff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 style={{
            fontSize: '60px',
            fontWeight: '900',
            color: 'rgb(2, 77, 148)',
            marginBottom: '20px',
            lineHeight: '62px',
            fontFamily: 'Nunito Sans, sans-serif'
          }}>Book a One-on-One Session with Our Expert Instructor</h3>
          <img src="/images/line.png" style={{ 
            display: 'block', 
            margin: '0 auto 30px',
            maxWidth: '100px'
          }} alt="" />
          <p style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'Open Sans, sans-serif'
          }}>
            Get personalized coaching and mentorship directly from our lead instructor. Whether you need help understanding course material or preparing for certification, we're here for you.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px', 
          justifyContent: 'center',
          marginBottom: '60px',
          maxWidth: '800px',
          margin: '0 auto 60px'
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px 30px',
            borderRadius: '0',
            textAlign: 'center',
            border: '1px solid #e5e5e5'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f8d171',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span style={{ fontSize: '40px', color: '#024d94' }}>📅</span>
            </div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>Real-time Calendar Availability</h4>
            <p style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif'
            }}>
              View live availability and book sessions that fit your schedule perfectly.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px 30px',
            borderRadius: '0',
            textAlign: 'center',
            border: '1px solid #e5e5e5'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f8d171',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span style={{ fontSize: '40px', color: '#024d94' }}>💻</span>
            </div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>1-on-1 Virtual Coaching Sessions</h4>
            <p style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Private virtual sessions tailored to your specific learning needs and goals.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px 30px',
            borderRadius: '0',
            textAlign: 'center',
            border: '1px solid #e5e5e5'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f8d171',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span style={{ fontSize: '40px', color: '#024d94' }}>📝</span>
            </div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>Session Summaries & Follow-ups</h4>
            <p style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Detailed session notes and action items to track your progress effectively.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px 30px',
            borderRadius: '0',
            textAlign: 'center',
            border: '1px solid #e5e5e5'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f8d171',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <span style={{ fontSize: '40px', color: '#024d94' }}>🎯</span>
            </div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>Customized Guidance for Your Goals</h4>
            <p style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Personalized coaching plans designed around your career objectives.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ textAlign: 'center' }}>
          <a href="#availability" style={{
            display: 'inline-block',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '700',
            textTransform: 'capitalize',
            padding: '15px 30px',
            border: '2px solid #024d94',
            borderRadius: '0',
            fontFamily: 'Nunito Sans, sans-serif',
            color: '#fff',
            backgroundColor: '#024d94',
            textDecoration: 'none',
            marginRight: '20px',
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
            View Availability
          </a>
          
          <a href="#booking" style={{
            display: 'inline-block',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '700',
            textTransform: 'capitalize',
            padding: '15px 30px',
            border: '2px solid #f8d171',
            borderRadius: '0',
            fontFamily: 'Nunito Sans, sans-serif',
            color: '#024d94',
            backgroundColor: '#f8d171',
            textDecoration: 'none',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#f8d171';
            e.target.style.border = '2px solid #f8d171';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f8d171';
            e.target.style.color = '#024d94';
            e.target.style.border = '2px solid #f8d171';
          }}>
            🗓 Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}