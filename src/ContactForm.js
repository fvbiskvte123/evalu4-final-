
import React, { useState } from 'react';

const ContactForm = ({ añadirContacto }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email.includes('@') || !telefono) {
      setError('porfavor ingrese un email valido.');
      return;
    }
    añadirContacto({ nombre, email, telefono });
    setNombre('');
    setEmail('');
    setTelefono('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>nombre</label>
        <input 
          type="text" 
          className="form-control" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          className="form-control" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <div className="form-group">
        <label>telefono</label>
        <input 
          type="tel" 
          className="form-control" 
          value={telefono} 
          onChange={(e) => setTelefono(e.target.value)} 
          required
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary">Añadir Contacto</button>
    </form>
  );
};

export default ContactForm;
