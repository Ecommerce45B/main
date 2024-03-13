import axios from "axios";
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';
import { useAuth0 } from '@auth0/auth0-react';

const ContactPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMessageValid, setMessageValid] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isAuthenticated && user && user.email) {
          const response = await axios.get(`http://localhost:3001/usuarios/email/${user.email}`)
          setUserData(response.data[0])
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [isAuthenticated, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      setMessage(value);
      setErrorMessage('');
      setMessageValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      setErrorMessage('Por favor, ingresa un mensaje.');
      setMessageValid(false);
      return;
    }
    if (message.length > 200) {
      setErrorMessage('El mensaje no puede tener más de 200 caracteres.');
      setMessageValid(false);
      return;
    }
  
    
    try {
     await axios.post("http://localhost:3001/usuarios/enviar-notificacion", {
        nombre: userData.nombre,
        email: userData.email,
        mensaje: message,
      });
      console.log('Notificación enviada correctamente.');
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
    }

    try {
       await axios.post("http://localhost:3001/usuarios/enviar-mensaje", {
        nombre: userData.nombre,
        email: userData.email,
      });
      setMessage('');
      console.log('Mensaje enviado correctamente.');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contáctanos</h2>
      <h3 className={styles.subtitle}>Envíanos un mensaje</h3>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={userData.nombre || ''} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={userData.email || ''} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" value={message} onChange={handleInputChange} />
          {!isMessageValid && <p className={styles.error}>{errorMessage}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>

      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <p>Dirección: 123 Calle Principal, Ciudad, País</p>
        </div>
        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <p>Teléfono: (123) 456-7890</p>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <p>Email: SrThomson@gmail.com</p>
        </div>
      </div>
      <p className={styles.derechos}>© 2024 - Todos los Derechos Reservados</p>
    </div>
  );
};

export default ContactPage;
