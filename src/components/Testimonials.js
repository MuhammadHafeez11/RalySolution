export default function Testimonials() {
  return (
    <>
      <div style={{ marginBottom: '100px' }}></div>
      <div style={{
        background: '#f8d171',
        paddingTop: '150px',
        paddingBottom: '-50px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div>
            <div>
              <i style={{
                color: '#fff',
                fontSize: '75px',
                margin: '0px auto 30px',
                display: 'table'
              }}>“</i>
              <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', alignItems: 'flex-start', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                  background: '#024d94',
                  padding: '25px',
                  width: '400px',
                  borderRadius: '0',
                  display: 'block'
                }}>
                  <p style={{
                    fontSize: '21px',
                    lineHeight: '33px',
                    fontWeight: '400',
                    color: '#fff',
                    padding: '0 0 20px',
                    letterSpacing: '0',
                    fontStyle: 'italic',
                    fontFamily: 'Open Sans, sans-serif'
                  }}>"Raly Solutions helped me land a job in sterile processing right after I completed the course!"</p>
                  <img src="./images/bg/five-star.png" alt="img" style={{ maxWidth: '120px', padding: '0px 0px 15px 15px' }} />
                  <span style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    letterSpacing: '0.2px',
                    color: '#f8d171',
                    paddingLeft: '15px',
                    fontFamily: 'Open Sans, sans-serif'
                  }}>
                    Jessica A. <br /> <small style={{
                      paddingLeft: '15px',
                      fontWeight: '300',
                      color: '#fff'
                    }}> SPD Technician </small>
                  </span>
                </div>
                <div style={{
                  background: '#024d94',
                  padding: '25px',
                  width: '400px',
                  borderRadius: '0',
                  display: 'block'
                }}>
                  <p style={{
                    fontSize: '21px',
                    lineHeight: '33px',
                    fontWeight: '400',
                    color: '#fff',
                    padding: '0 0 20px',
                    letterSpacing: '0',
                    fontStyle: 'italic',
                    fontFamily: 'Open Sans, sans-serif'
                  }}>"The ebook was a game-changer. It opened my eyes to the importance of SPD in patient care."</p>
                  <img src="./images/bg/five-star.png" alt="img" style={{ maxWidth: '120px', padding: '0px 0px 15px 15px' }} />
                  <span style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    letterSpacing: '0.2px',
                    color: '#f8d171',
                    paddingLeft: '15px',
                    fontFamily: 'Open Sans, sans-serif'
                  }}>
                    Samuel R. <br /> <small style={{
                      paddingLeft: '15px',
                      fontWeight: '300',
                      color: '#fff'
                    }}> Healthcare Professional </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            fontSize: '280px',
            color: '#fff',
            fontWeight: '700',
            opacity: '0.1',
            margin: '-170px 0 -60px 0px',
            textAlign: 'center',
            fontFamily: 'Nunito Sans, sans-serif'
          }}>
            <h1>REVIEW</h1>
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      <div style={{ marginBottom: '100px' }}></div>
    </>
  );
}