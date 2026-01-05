export default function WebinarRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/webinar-thank-you';
  };

  return (
    <section id="register" style={{ backgroundColor: '#024d94', padding: '80px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h3 style={{ fontSize: '36px', fontWeight: '700', color: '#fff', marginBottom: '20px', fontFamily: 'Nunito Sans, sans-serif' }}>
            Reserve Your Spot
          </h3>
          <p style={{ fontSize: '18px', color: '#f8d171', marginBottom: '0' }}>
            Join hundreds of professionals advancing their careers
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#024d94', marginBottom: '8px' }}>
                  First Name *
                </label>
                <input 
                  type="text" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: 'Open Sans, sans-serif'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#024d94', marginBottom: '8px' }}>
                  Last Name *
                </label>
                <input 
                  type="text" 
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: 'Open Sans, sans-serif'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#024d94', marginBottom: '8px' }}>
                Email Address *
              </label>
              <input 
                type="email" 
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontFamily: 'Open Sans, sans-serif'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#024d94', marginBottom: '8px' }}>
                Phone Number
              </label>
              <input 
                type="tel"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontFamily: 'Open Sans, sans-serif'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#024d94', marginBottom: '8px' }}>
                Current Role/Position
              </label>
              <select style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e7eb',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }}>
                <option value="">Select your role</option>
                <option value="sterile-processing-tech">Sterile Processing Technician</option>
                <option value="spd-supervisor">SPD Supervisor</option>
                <option value="spd-manager">SPD Manager</option>
                <option value="infection-control">Infection Control Professional</option>
                <option value="nurse">Nurse</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#555' }}>
                <input 
                  type="checkbox" 
                  required
                  style={{ marginRight: '10px' }}
                />
                I agree to receive webinar updates and educational content via email
              </label>
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#f8d171',
                color: '#024d94',
                border: '2px solid #f8d171',
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'Nunito Sans, sans-serif',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#f8d171';
                e.target.style.borderColor = '#f8d171';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f8d171';
                e.target.style.color = '#024d94';
                e.target.style.borderColor = '#f8d171';
              }}
            >
              Reserve My Spot - It's Free!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}