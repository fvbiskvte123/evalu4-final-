
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, borrarContacto }) => {
  return (
    <div className="d-flex flex-wrap">
      {contacts.map((contact, index) => (
        <ContactCard 
          key={index} 
          contact={contact} 
          borrarContacto={() => borrarContacto(index)} 
        />
      ))}
    </div>
  );
};

export default ContactList;
