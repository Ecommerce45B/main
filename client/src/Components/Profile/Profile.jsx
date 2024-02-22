import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Profile.module.css'; // Importar estilos CSS como módulos

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  // Determina el nombre a mostrar
  let displayName = user.name || "unknown";
  if (displayName.includes('@')) {
    displayName = "unknown";
  }

  return (
    isAuthenticated && (
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img className={styles.profilePicture} src={user.picture} alt={displayName} />
          <div className={styles.profileDetails}>
            <h2 className={styles.profileName}>Name: {displayName}</h2>
            <p className={styles.profileEmail}>Email: {user.email}</p>
          </div>
        </div>

        

        <div className={styles.profileSection}>
          <h3 className={styles.profileSectionTitle}>Order History</h3>
          <p className={styles.profileSectionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis ac leo bibendum, nec tincidunt lectus suscipit.</p>
        </div>
      </div>
    )
  );
};

export default Profile;
