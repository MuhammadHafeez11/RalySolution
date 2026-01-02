'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav style={{
        position: 'fixed',
        right: 0,
        left: 0,
        top: 0,
        fontFamily: 'Nunito Sans, sans-serif',
        borderWidth: 0,
        borderRadius: 0,
        background: isScrolled ? '#fff' : 'transparent',
        zIndex: 1030,
        minHeight: isScrolled ? '35px' : '86px',
        marginBottom: 0,
        border: 'none',
        transition: 'all 0.4s',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div style={{
          maxWidth: '1170px',
          margin: '0 auto',
          padding: '0 15px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: isScrolled ? '35px' : '86px'
          }}>
            {/* Logo */}
            <div>
              <a href="#hero" style={{
                padding: '0 0 0',
                fontSize: '28px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#fff',
                letterSpacing: '5px',
                textDecoration: 'none'
              }}>
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>

            {/* Navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              
              {/* Main Navigation */}
              <ul style={{
                margin: 0,
                paddingLeft: 0,
                marginBottom: 0,
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center'
              }}>
                <li>
                  <a 
                    href="#hero"
                    style={{
                      padding: '40px 12px 35px',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#024d94',
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#000000'}
                    onMouseOut={(e) => e.target.style.color = '#024d94'}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about"
                    style={{
                      padding: '40px 12px 35px',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#024d94',
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#000000'}
                    onMouseOut={(e) => e.target.style.color = '#024d94'}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#courses"
                    style={{
                      padding: '40px 12px 35px',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#024d94',
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#000000'}
                    onMouseOut={(e) => e.target.style.color = '#024d94'}
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a 
                    href="#masterclass"
                    style={{
                      padding: '40px 12px 35px',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#024d94',
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#000000'}
                    onMouseOut={(e) => e.target.style.color = '#024d94'}
                  >
                    Consulting
                  </a>
                </li>
                <li>
                  <a 
                    href="#community"
                    style={{
                      padding: '40px 12px 35px',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#024d94',
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#000000'}
                    onMouseOut={(e) => e.target.style.color = '#024d94'}
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact"
                    style={{
                      padding: '40px 12px 35px',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#024d94',
                      fontFamily: 'Nunito Sans',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'block'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#000000'}
                    onMouseOut={(e) => e.target.style.color = '#024d94'}
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Enroll Now Button */}
              <a 
                href="#application"
                style={{
                  border: '1px solid #024d94',
                  background: '#024d94',
                  color: '#fff',
                  padding: '5px 23px',
                  fontWeight: 700,
                  marginLeft: '20px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#fff';
                  e.target.style.color = '#024d94';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#024d94';
                  e.target.style.color = '#fff';
                }}
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}