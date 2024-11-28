import React from "react";
import emailIcon from "../assets/img/email imagen.png";
import phoneIcon from "../assets/img/phone img.png";
import locationIcon from "../assets/img/ubi img.png";

export default function ContactInfo() {
  return (
    <div className="contact-info" id="contact">
      <h3>Contact info</h3>
      <div className="email-container">
        <h6>Email: samuel.medina@eia.edu.co</h6>
        <img src={emailIcon} alt="Email icon" className="w-6 h-6" />
      </div>
      <div className="phone-container">
        <h6>Phone: +573145855338</h6>
        <img src={phoneIcon} alt="Phone icon" className="w-6 h-6" />
      </div>
      <div className="location-container">
        <h6>Medellin, Colombia</h6>
        <img src={locationIcon} alt="Location icon" className="w-6 h-6" />
      </div>
    </div>
  );
}
