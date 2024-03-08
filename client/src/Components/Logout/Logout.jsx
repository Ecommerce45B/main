import React ,{useEffect} from "react";
import axios from "axios"
import { Link } from 'react-router-dom'; 
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Logout.module.css";

const Logout = () => {
  const { logout, user ,isAuthenticated} = useAuth0();
 
  useEffect(() => {
    const createUser = async () => {
      if(isAuthenticated){
        try{
          await axios.post("http://localhost:3001/usuarios/new",{
            email:user.email,
            nombre:user.name,
            avatar:user.picture,
          });
         
        }catch(error){
          console.error("Error creating user",error)
        }
      }
    };
  
    createUser();
   }, [isAuthenticated,user]);

  return (
    <div className={styles.logoutContainer}>
      <div className={styles.userInfo}>
        <Link to="/profile" className={styles.link}>
          <img className={styles.avatar} src={user.picture} alt={user.name} />
          
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
