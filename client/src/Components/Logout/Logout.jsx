import React from "react";
import { Link } from 'react-router-dom'; 
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Logout.module.css";

const Logout = () => {
  const { logout, user } = useAuth0();
 
  let displayName = user.name || "unknown";
  if (displayName.includes('@')) {
    displayName = "unknown";
  }
  const nameParts = displayName.split(' ');
  const firstName = nameParts[0];

  return (
    <div className={styles.logoutContainer}>
      <div className={styles.userInfo}>
        <Link to="/profile" className={styles.link}>
          <img className={styles.avatar} src={user.picture} alt={firstName} />
          <span className={styles.username}>{firstName}</span>
        </Link>
      </div>
      <button
        className={styles.logoutButton}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
