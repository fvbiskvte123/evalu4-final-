
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const añadirContacto = (contact) => {
    setContacts([...contacts, contact]);
  };

  const borrarContacto = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const filteredContacts = contacts.filter(
    contact => 
      contact.nombre.toLowerCase().includes(search.toLowerCase()) || 
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">Directorio</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="buscar contacto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ContactForm añadirContacto={añadirContacto} />
      <ContactList contacts={filteredContacts} borrarContacto={borrarContacto} />
    </div>
  );
};

export default App;
