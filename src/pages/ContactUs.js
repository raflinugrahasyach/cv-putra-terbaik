import React from 'react';
import '../Styles/ContactUs.css';

const ContactUs = () => {
  const mapAvailable = false; // Ubah menjadi `true` jika gambar peta tersedia

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>Email: cvputraterbaik@gmail.com</p>
      <p>Phone: +62 812 3456 7890</p>
      <p>Office: Manukan Loka III Blok 8D No.14, Surabaya</p>
      <p>Warehouse: RT 12 RW 04, Ds Mondoluku, Kec Wringinanom, Gresik</p>
      <div className="location-map">
        {mapAvailable ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: "url('/assets/map-placeholder.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ) : (
          <div className="fallback-text">Peta tidak tersedia</div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
