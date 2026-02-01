import React from 'react'
// ייבוא האייקונים הספציפיים מתוך חבילת Font Awesome (fa)
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="social-icons">
        <a style={{fontSize:"60px"}} href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a style={{fontSize:"60px"}} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a style={{fontSize:"60px"}} href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTiktok />
        </a>
      </div>
   
      <p className="footer-text">© 2026 Roi's Cakes. All rights reserved.</p>
    </footer>
  )
}

export default Footer