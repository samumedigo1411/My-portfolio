import React from "react";
import emailIcon from "../assets/img/email imagen.png";
import phoneIcon from "../assets/img/phone img.png";
import locationIcon from "../assets/img/ubi img.png";

export default function ContactInfo() {
  return (
    <div className="contact-info" id="contact">
      <h3 className="text-center text-xl sm:text-2xl mb-6">Contact info</h3>
      <div className="email-container flex items-center mb-4">
        <img src={emailIcon} alt="Email icon" className="w-8 h-8 mr-4" />
        <h6 className="text-lg sm:text-xl">Email: samuel.medina@eia.edu.co</h6>
      </div>
      <div className="phone-container flex items-center mb-4">
        <img src={phoneIcon} alt="Phone icon" className="w-8 h-8 mr-4" />
        <h6 className="text-lg sm:text-xl">Phone: +573145855338</h6>
      </div>
      <div className="location-container flex items-center">
        <img src={locationIcon} alt="Location icon" className="w-8 h-8 mr-4" />
        <h6 className="text-lg sm:text-xl">Medellin, Colombia</h6>
      </div>
    </div>
  );
}
