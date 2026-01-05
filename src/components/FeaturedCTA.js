export default function FeaturedCTA() {
  return (
    <section className="parallax-content text-center" style={{
      background: '#f8d171',
      paddingTop: '55px',
      paddingBottom: '55px',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: '55' }}>
        <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          <div className="col-md-10" style={{ flex: '1', minWidth: '300px' }}>
            <h4 style={{
              fontSize: '26px',
              fontWeight: '400',
              color: '#024d94',
              textAlign: 'left',
              lineHeight: '1.5',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>
              "The Beginner's Guide to Sterile Processing" - Enter your email to access your free copy.
            </h4>
          </div>
          <div className="row">
            <div className="col-md-2" style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
              <form action="/lead-magnet" method="GET" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address"
                  required
                  style={{
                    flex: '1',
                    padding: '12px 15px',
                    border: 'none',
                    borderRadius: '0',
                    fontSize: '16px',
                    fontFamily: 'Open Sans, sans-serif',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit"
                  className="btn btn-lg btn-primary pull-right"
                  style={{
                    display: 'inline-block',
                    fontSize: '16px',
                    lineHeight: '20px',
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    padding: '12px 25px',
                    border: '2px solid #024d94',
                    borderRadius: '0',
                    fontFamily: 'Nunito Sans, sans-serif',
                    color: '#fff',
                    backgroundColor: '#024d94',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#024d94';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#024d94';
                    e.target.style.color = '#fff';
                  }}
                >
                  Download Now →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}