import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
    // זו כתובת Embed תקינה של מרכז חולון
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.446835150821!2d34.77334467645161!3d31.975871274009657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4009137072f%3A0xe67f920f7895180!2sHolon%2C%20Israel!5e0!3m2!1sen!2sil!4v1700000000000!5m2!1sen!2sil";

    return (
        <>
        <Header title="Contact Us"/>
        <div className="contact-page" style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#5d4037', marginBottom: '20px' }}>Our Store In Holon</h2>
            
            <div className="map-container" style={{ 
                border: '5px solid #8d6e63', 
                borderRadius: '15px', 
                overflow: 'hidden',
                display: 'inline-block',
                lineHeight: '0' // מונע רווח מיותר בתחתית ה-iframe
            }}>
                <iframe 
                    src={googleMapsEmbedUrl}
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ContactUs;