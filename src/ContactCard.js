
import React from 'react';

const ContactCard = ({ contact, borrarContacto }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{contact.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
        <p className="card-text">{contact.telefono}</p>
        <button onClick={borrarContacto} className="btn btn-danger">borra</button>
      </div>
    </div>
  );
};

export default ContactCard;

