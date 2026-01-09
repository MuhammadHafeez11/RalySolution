'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ initially open

  const faqs = [
    {
      question: "How do I register for a course?",
      answer: "Simply click 'Enroll' on the course listing page and follow the guided sign-up process. You'll create an account, choose your payment method, and gain immediate access to your course materials."
    },
    {
      question: "Do I get a certificate upon completion?",
      answer: "Yes, you'll receive a verifiable digital certificate upon successful completion of each course. Our certificates are recognized by healthcare institutions and can be added to your professional portfolio."
    },
    {
      question: "Can I join live classes or book an instructor?",
      answer: "Absolutely! We offer live masterclasses and one-on-one instructor sessions. Visit our 'Instructor Booking' page to view availability, schedule sessions, and connect with our expert instructors in real-time."
    },
    {
      question: "Are your courses mobile-friendly?",
      answer: "Yes, our platform is fully responsive and optimized for all devices. Access your courses, watch videos, take quizzes, and track progress on your smartphone, tablet, or desktop computer anytime, anywhere."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with your course. Refunds are available within 7 days of purchase, provided the course has not been fully completed or accessed beyond 25%."
    },
    {
      question: "How long do I have access to course materials?",
      answer: "Once enrolled, you have lifetime access to all course materials, including future updates and additional resources. You can learn at your own pace and revisit content whenever needed."
    },
    {
      question: "Are your courses accredited?",
      answer: "Our courses are developed by certified professionals and align with industry standards. While we're working on formal accreditation, our certificates are widely recognized by healthcare employers and professional organizations."
    },
    {
      question: "What support is available during the course?",
      answer: "We provide comprehensive support including 24/7 access to course materials, instructor Q&A sessions, peer discussion forums, and dedicated customer support to help you succeed in your learning journey."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="faq" style={{ backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{
          textAlign: 'center',
          padding: '100px 0'
        }}>
          <h3 style={{
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '60px',
            fontWeight: '900',
            color: '#024d94',
            marginBottom: '20px',
            lineHeight: '62px'
          }}>Got questions? for Raly Solutions</h3>
          <img src="/images/line.png" style={{ display: 'block', margin: '0 auto 15px' }} alt="" />
          <p style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '17px',
            marginTop: '15px',
            padding: '0 14%',
            color: '#555',
            lineHeight: '1.6'
          }}>Find answers to common questions about our courses, certification programs, and learning platform.</p>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img src="/images/WhatsApp Image 2026-01-09 at 11.28.32 AM.jpeg" style={{ maxWidth: '100%', height: 'auto' }} alt="FAQ" />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ clear: 'both' }}></div>
                <div>
                  {faqs.map((faq, index) => (
                    <div key={index} style={{
                      marginBottom: '15px',
                      borderRadius: '0',
                      boxShadow: '0px 3px 0px 0px #e8e8e8',
                      border: '0',
                      backgroundColor: '#fff'
                    }}>
                      <div style={{
                        backgroundColor: 'transparent',
                        borderColor: '#ddd',
                        padding: '0'
                      }}>
                        <h4 style={{
                          margin: '0',
                          position: 'relative'
                        }}>
                          <a 
                            onClick={() => toggleFAQ(index)}
                            style={{
                              display: 'block',
                              padding: '18px 20px 18px 45px',
                              outline: 'none',
                              fontWeight: '700',
                              textDecoration: 'none',
                              backgroundColor: 'transparent',
                              fontSize: '18px',
                              letterSpacing: '0',
                              color: '#000',
                              fontFamily: 'Nunito Sans, sans-serif',
                              cursor: 'pointer',
                              position: 'relative',
                              border: 'none'
                            }}
                          >
                            <span style={{
                              position: 'absolute',
                              left: '15px',
                              top: '50%',
                              marginTop: '-8px',
                              fontSize: '15px',
                              color: '#f8d171',
                              transition: 'transform 0.3s ease'
                            }}>
                              {openFAQ === index ? '\uf077' : '\uf078'}
                            </span>
                            {faq.question}
                          </a>
                        </h4>
                      </div>
                      <div style={{
                        maxHeight: openFAQ === index ? '200px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out',
                        borderTop: openFAQ === index ? '1px solid #ddd' : 'none'
                      }}>
                        <div style={{
                          padding: '20px 25px',
                          lineHeight: '24px',
                          fontSize: '15px',
                          fontFamily: 'Open Sans, sans-serif',
                          color: '#555'
                        }}>
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '100px' }}></div>
        </div>
      </div>
    </div>
  );
}