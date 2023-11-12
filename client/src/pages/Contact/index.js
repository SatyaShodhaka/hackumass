import React from 'react';
import './Contact.scss';
import Aquib from "../../assets/Aquib.jpg";
import Satya from "../../assets/Satya.jpg";
import Kushal from "../../assets/Kushal.jpg";


const ContactUs = () => {
  // Add a new 'linkedinUrl' field to your contacts
  const contacts = [
    {
      id: 1,
      name: 'Satya Shodhaka',
      email: 'srprabhanjan@umass.edu',
      detail: 'MS CS @ UMass Amherst',
      imageUrl: Satya,
      linkedinUrl: 'https://www.linkedin.com/in/satyashodhaka/'
    },
    {
      id: 2,
      name: 'Aquib Iqbal',
      email: 'aquibiqbal@umass.edu',
      detail: 'MS CS @ UMass Amherst',
      imageUrl: Aquib,
      linkedinUrl: 'https://www.linkedin.com/in/aquibiqbal'
    },
    {
      id: 3,
      name: 'N Kushal Kumar Raju',
      email: 'kraju@umass.edu',
      detail: 'MS CS @ UMass Amherst',
      imageUrl: Kushal,
      linkedinUrl: 'https://www.linkedin.com/in/n-kushal-kumar-raju-6201141a3/'
    }
    // ... add more contacts as needed
  ];

  // Function to handle click event on card
  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-cards">
        {contacts.map(contact => (
          <div key={contact.id} className="contact-card" onClick={() => handleCardClick(contact.linkedinUrl)}>
            <img src={contact.imageUrl} alt={contact.name} className="contact-image" />
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
