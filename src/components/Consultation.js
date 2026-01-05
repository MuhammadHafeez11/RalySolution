export default function Consultation() {
  return (
    <section style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#fff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h3 style={{
            fontSize: '60px',
            fontWeight: '900',
            color: 'rgb(2, 77, 148)',
            marginBottom: '20px',
            lineHeight: '62px',
            fontFamily: 'Nunito Sans, sans-serif'
          }}>Professional Consultation Services</h3>
          <img src="images/line.png" style={{ 
            display: 'block', 
            margin: '0 auto 30px',
            maxWidth: '100px'
          }} alt="" />
        </div>

        {/* Consultation Types */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '80px', flexWrap: 'wrap' }}>
          
          {/* Student Consultation */}
          <div style={{
            flex: '1',
            minWidth: '400px',
            backgroundColor: '#f8f9fa',
            padding: '40px',
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
              margin: '0 auto 30px'
            }}>
              <span style={{ fontSize: '40px', color: '#024d94' }}>👨‍🎓</span>
            </div>
            
            <h4 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '20px',
              fontFamily: 'Nunito Sans, sans-serif',
              textAlign: 'center'
            }}>1-on-1 Student Consultation</h4>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              Ideal for current or prospective students needing direct mentorship, academic support, or career advice.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h5 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#024d94',
                marginBottom: '15px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Includes:</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Virtual video session with instructor
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Review of student goals or challenges
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Certification prep coaching
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Learning roadmap planning
                </li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#024d94',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>$75/session</div>
              <div style={{
                fontSize: '16px',
                color: '#555',
                fontFamily: 'Open Sans, sans-serif'
              }}>⏱ 45 minutes</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="#student-booking" style={{
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
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f8d171';
                e.target.style.color = '#024d94';
              }}>
                Book a Student Consultation
              </a>
            </div>
          </div>

          {/* Corporate Consultation */}
          <div style={{
            flex: '1',
            minWidth: '400px',
            backgroundColor: '#f8f9fa',
            padding: '40px',
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
              margin: '0 auto 30px'
            }}>
              <span style={{ fontSize: '40px', color: '#024d94' }}>🏥</span>
            </div>
            
            <h4 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '20px',
              fontFamily: 'Nunito Sans, sans-serif',
              textAlign: 'center'
            }}>Health Agency & Corporate Consultations</h4>
            
            <p style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              Tailored services for hospitals, clinics, staffing agencies, and healthcare companies seeking training support.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h5 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#024d94',
                marginBottom: '15px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Includes:</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Staff training program consultation
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Sterile processing department setup advice
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Compliance & quality assurance reviews
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>SOP & workflow optimization guidance
                </li>
                <li style={{ marginBottom: '8px', fontSize: '16px', color: '#555', fontFamily: 'Open Sans, sans-serif' }}>
                  <span style={{ color: '#024d94', marginRight: '10px' }}>•</span>Partnership opportunities and group licensing
                </li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#024d94',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Custom pricing based on project scope</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="#corporate-booking" style={{
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
                Schedule a Corporate Discovery Call
              </a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div style={{
          backgroundColor: '#f8d171',
          padding: '60px 40px',
          marginBottom: '80px'
        }}>
          <h4 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#024d94',
            marginBottom: '40px',
            fontFamily: 'Nunito Sans, sans-serif',
            textAlign: 'center'
          }}>How It Works:</h4>
          
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', maxWidth: '200px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#024d94',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>1</div>
              <p style={{ fontSize: '16px', color: '#024d94', fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}>
                Select your consultation type
              </p>
            </div>
            
            <div style={{ textAlign: 'center', maxWidth: '200px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#024d94',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>2</div>
              <p style={{ fontSize: '16px', color: '#024d94', fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}>
                Pick an available time from the calendar
              </p>
            </div>
            
            <div style={{ textAlign: 'center', maxWidth: '200px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#024d94',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>3</div>
              <p style={{ fontSize: '16px', color: '#024d94', fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}>
                Complete a short intake form
              </p>
            </div>
            
            <div style={{ textAlign: 'center', maxWidth: '200px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#024d94',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>4</div>
              <p style={{ fontSize: '16px', color: '#024d94', fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}>
                Receive a confirmation and Zoom link
              </p>
            </div>
          </div>
        </div>

        {/* Student Consultation Booking Form */}
        <div id="student-booking" style={{
          backgroundColor: '#fff',
          padding: '60px 40px',
          border: '1px solid #e5e5e5',
          marginBottom: '40px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>Book Your 1-on-1 Student Consultation</h4>
            <p style={{
              fontSize: '18px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif'
            }}>Get personalized support to guide your sterile processing education journey.</p>
          </div>

          <form style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Full Name *</label>
              <input type="text" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Email Address *</label>
              <input type="email" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Phone Number (optional)</label>
              <input type="tel" style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Are you currently enrolled in a course at Raly Solutions? *</label>
              <div style={{ display: 'flex', gap: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>
                  <input type="radio" name="enrolled" value="yes" required style={{ marginRight: '8px' }} />
                  Yes
                </label>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>
                  <input type="radio" name="enrolled" value="no" required style={{ marginRight: '8px' }} />
                  No
                </label>
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>What best describes your current goal? *</label>
              <select required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }}>
                <option value="">Select an option</option>
                <option value="exploring">Exploring sterile processing as a career</option>
                <option value="certification">Preparing for certification exam</option>
                <option value="course-help">Need help understanding course material</option>
                <option value="career-advice">Career advice</option>
                <option value="other">Other (please specify)</option>
              </select>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Briefly describe the challenge or question you need help with: *</label>
              <textarea required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif',
                minHeight: '100px',
                resize: 'vertical'
              }}></textarea>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Preferred Consultation Date & Time: *</label>
              <input type="datetime-local" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Do you have any specific questions or documents you'd like to discuss? (optional)</label>
              <textarea style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif',
                minHeight: '80px',
                resize: 'vertical'
              }}></textarea>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>
                <input type="checkbox" required style={{ marginRight: '10px', marginTop: '4px' }} />
                I agree to the terms and understand this is a paid session.
              </label>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{
                display: 'inline-block',
                fontSize: '18px',
                lineHeight: '22px',
                fontWeight: '700',
                textTransform: 'capitalize',
                padding: '15px 40px',
                border: '2px solid #f8d171',
                borderRadius: '0',
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#024d94',
                backgroundColor: '#f8d171',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#f8d171';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f8d171';
                e.target.style.color = '#024d94';
              }}>
                Book My Consultation
              </button>
            </div>
          </form>
        </div>

        {/* Corporate Discovery Call Form */}
        <div id="corporate-booking" style={{
          backgroundColor: '#f8f9fa',
          padding: '60px 40px',
          border: '1px solid #e5e5e5'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h4 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#024d94',
              marginBottom: '15px',
              fontFamily: 'Nunito Sans, sans-serif'
            }}>Schedule a Corporate Discovery Call</h4>
            <p style={{
              fontSize: '18px',
              color: '#555',
              fontFamily: 'Open Sans, sans-serif'
            }}>Learn how Raly Solutions can support your healthcare team's sterile processing training and compliance.</p>
          </div>

          <form style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Company / Organization Name *</label>
              <input type="text" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Your Name *</label>
              <input type="text" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Position/Role *</label>
              <input type="text" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Email Address *</label>
              <input type="email" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Phone Number (optional)</label>
              <input type="tel" style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Type of Service You're Interested In: *</label>
              <select required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }}>
                <option value="">Select a service</option>
                <option value="staff-training">Staff training or onboarding</option>
                <option value="compliance-review">Department compliance review</option>
                <option value="workflow-consulting">Sterile processing workflow consulting</option>
                <option value="partnership">Partnership / licensing discussion</option>
                <option value="custom-training">Custom training or support</option>
              </select>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Briefly describe your organization's current needs or challenges: *</label>
              <textarea required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif',
                minHeight: '100px',
                resize: 'vertical'
              }}></textarea>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Number of staff requiring support (if applicable):</label>
              <input type="number" style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#024d94',
                marginBottom: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}>Preferred Call Date & Time: *</label>
              <input type="datetime-local" required style={{
                width: '100%',
                padding: '12px 15px',
                border: '2px solid #e5e5e5',
                borderRadius: '0',
                fontSize: '16px',
                fontFamily: 'Open Sans, sans-serif'
              }} />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', fontFamily: 'Open Sans, sans-serif' }}>
                <input type="checkbox" required style={{ marginRight: '10px', marginTop: '4px' }} />
                I understand this is an initial discovery call and not a training session.
              </label>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{
                display: 'inline-block',
                fontSize: '18px',
                lineHeight: '22px',
                fontWeight: '700',
                textTransform: 'capitalize',
                padding: '15px 40px',
                border: '2px solid #024d94',
                borderRadius: '0',
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#fff',
                backgroundColor: '#024d94',
                cursor: 'pointer',
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
                Schedule My Discovery Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}