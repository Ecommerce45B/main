import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from './Profile.module.css';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState({});
  const [userUpdated, setUserUpdated] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/usuarios/email/${user.email}`);
        if (response.data.length > 0) {
          const userData = response.data[0];
          setUserData(userData);
          setValue('nombre', userData.nombre || '');
          setValue('dirEnvio', userData.dirEnvio || '');
          setValue('dirFacturacion', userData.dirFacturacion || '');
          setValue('telefono', userData.telefono || '');
        } else {
          console.error('No se encontraron usuarios con ese email.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated, user.email, setValue]);

  const displayName = userData.nombre || (user ? user.name || 'unknown' : 'unknown');

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3001/usuarios/change/${userData.id}`, data);
      setUserUpdated(true);
      setTimeout(() => setUserUpdated(false), 3000);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    isAuthenticated && (
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img className={styles.profilePicture} src={user.picture} alt={displayName} />
          <div className={styles.profileDetails}>
            <h2 className={styles.profileName}>Nombre: {displayName}</h2>
            <p className={styles.profileEmail}>Email: {user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.profileForm}>
          <h3 className={styles.profileSectionTitle}>Nombre:</h3>
          <input
            type="text"
            {...register('nombre', { required: 'El nombre es requerido', maxLength: { value: 20, message: 'El nombre no puede tener más de 20 caracteres' } })}
          />
          {errors.nombre && <p className={styles.errorMessage}>{errors.nombre.message}</p>}

          <h3 className={styles.profileSectionTitle}>Dirección de Envío:</h3>
          <input
            type="text"
            {...register('dirEnvio', { maxLength: { value: 30, message: 'La dirección de envío no puede tener más de 30 caracteres' } })}
          />
          {errors.dirEnvio && <p className={styles.errorMessage}>{errors.dirEnvio.message}</p>}

          <h3 className={styles.profileSectionTitle}>Dirección de Facturación:</h3>
          <input
            type="text"
            {...register('dirFacturacion', { maxLength: { value: 30, message: 'La dirección de facturación no puede tener más de 30 caracteres' } })}
          />
          {errors.dirFacturacion && <p className={styles.errorMessage}>{errors.dirFacturacion.message}</p>}

          <h3 className={styles.profileSectionTitle}>Teléfono:</h3>
          <input
            type="text"
            {...register('telefono', { pattern: { value: /^[0-9]+$/, message: 'El teléfono solo puede contener números' }, maxLength: { value: 15, message: 'El teléfono no puede tener más de 15 caracteres' } })}
          />
          {errors.telefono && <p className={styles.errorMessage}>{errors.telefono.message}</p>}

          <button type="submit" className={styles.updateProfileButton}>
            Actualizar perfil
          </button>

          {userUpdated && <p className={styles.userUpdatedMessage}>Usuario actualizado</p>}
        </form>

        <div className={styles.profileSection}>
          <h3 className={styles.profileSectionTitle}>Historial de Pedidos</h3>
          <p className={styles.profileSectionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis ac leo bibendum, nec tincidunt lectus suscipit.</p>
        </div>
      </div>
    )
  );
};

export default Profile;
