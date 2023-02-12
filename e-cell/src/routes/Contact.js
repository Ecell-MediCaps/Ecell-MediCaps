import React from "react";
import '../components/Contact/Contact.css';
import ContactComp from '../components/Contact/Contact'

function Contact() {
  return (
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <ContactComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
