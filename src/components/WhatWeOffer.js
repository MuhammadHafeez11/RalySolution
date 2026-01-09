export default function WhatWeOffer() {
  return (
    <section id="feature" className="services bg-light" style={{
      backgroundColor: '#f8f9fa',
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="about-inline text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 style={{
            fontSize: '60px',
            fontWeight: '900',
            color: 'rgb(2, 77, 148)',
            marginBottom: '20px',
            lineHeight: '62px',
            fontFamily: 'Nunito Sans, sans-serif'
          }}>What We Offer</h3>
          <img src="/images/line.png" className="img-responsive center-block" style={{ 
            display: 'block', 
            margin: '0 auto 30px',
            maxWidth: '100px'
          }} alt="" />
          <p style={{
            fontSize: '16px',
            lineHeight: '28px',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'Open Sans, sans-serif'
          }}>
            Comprehensive learning solutions designed for healthcare professionals at every stage of their career.
          </p>
        </div>
        <div className="container">
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="col-md-6 Protem-feature" style={{ width: '50%', padding: '20px' }}>
              <div className="box-body d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{
                  backgroundColor: '#f8d171',
                  padding: '20px',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '40px', color: '#024d94' }}>📚</span>
                </div>
                <div className="Protem-feature">
                  <a href="/courses">
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#024d94',
                      marginBottom: '15px',
                      fontFamily: 'Nunito Sans, sans-serif'
                    }}>Comprehensive Online Courses</h3>
                  </a>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#555',
                    fontFamily: 'Open Sans, sans-serif',
                    paddingTop: '10px',
                    marginBottom: '0'
                  }}>
                    Expert-designed curriculum covering all aspects of sterile processing and infection prevention.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 Protem-feature" style={{ width: '50%', padding: '20px' }}>
              <div className="box-body d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{
                  backgroundColor: '#f8d171',
                  padding: '20px',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '40px', color: '#024d94' }}>🎥</span>
                </div>
                <div className="Protem-feature">
                  <a href="/webinar-registration">
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#024d94',
                      marginBottom: '15px',
                      fontFamily: 'Nunito Sans, sans-serif'
                    }}>Live Masterclasses & Webinars</h3>
                  </a>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#555',
                    fontFamily: 'Open Sans, sans-serif',
                    paddingTop: '10px',
                    marginBottom: '0'
                  }}>
                    Interactive sessions with industry experts and real-time Q&A opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 Protem-feature" style={{ width: '50%', padding: '20px' }}>
              <div className="box-body d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{
                  backgroundColor: '#f8d171',
                  padding: '20px',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '40px', color: '#024d94' }}>🏆</span>
                </div>
                <div className="Protem-feature">
                  <a href="/pricing">
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#024d94',
                      marginBottom: '15px',
                      fontFamily: 'Nunito Sans, sans-serif'
                    }}>Certification Exam Prep</h3>
                  </a>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#555',
                    fontFamily: 'Open Sans, sans-serif',
                    paddingTop: '10px',
                    marginBottom: '0'
                  }}>
                    Comprehensive preparation materials for industry certification exams.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 Protem-feature" style={{ width: '50%', padding: '20px' }}>
              <div className="box-body d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{
                  backgroundColor: '#f8d171',
                  padding: '20px',
                  marginRight: '20px',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '40px', color: '#024d94' }}>📖</span>
                </div>
                <div className="Protem-feature">
                  <a href="/lead-magnet">
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#024d94',
                      marginBottom: '15px',
                      fontFamily: 'Nunito Sans, sans-serif'
                    }}>eBooks & Learning Resources</h3>
                  </a>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#555',
                    fontFamily: 'Open Sans, sans-serif',
                    paddingTop: '10px',
                    marginBottom: '0'
                  }}>
                    Downloadable guides, reference materials, and study resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}