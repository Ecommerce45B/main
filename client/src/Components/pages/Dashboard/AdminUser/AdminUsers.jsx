import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './adminUsers.module.css';
import SearchBarUsuarios from '../SearchBar/SearchBarUsuarios';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [initialFetchDone, setInitialFetchDone] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/usuarios`);
            // Eliminar usuarios duplicados por id
           
            const uniqueUsers = response.data.reduce((acc, curr) => {
                if (!acc.find(user => user.id === curr.id)) {
                    acc.push(curr);
                }
                return acc;
            }, []);
            
            setUsers(uniqueUsers);
            setFilteredUsers(uniqueUsers); 
            setInitialFetchDone(true);
        } catch (error) {
            console.error("Error trayendo usuarios:", error);
        }
    };

    const handleUpdateRole = async (userId, newRoleId) => {
        try {
            const response = await axios.put(
                `http://localhost:3001/usuarios/change/${userId}`,
                { Role: { id: newRoleId } }
            );

            if (!response.data) {
                console.error("Error updating user role:", response.statusText);
                return;
            }

            await fetchUsers();
        } catch (error) {
            console.error("Error updating user role:", error);
        }
    };
    
    const handleBanUser = async (userId, isBanned) => {
        try{
            const response = await axios.put(
                `http://localhost:3001/usuarios/change/${userId}`,
                { estado: isBanned }
            );
            if(!response.data) {
                console.error("Error actualizando el estado de baneo:", response.statusText)
                return;
            }

            await fetchUsers();
        } catch(error) {
            console.error("Error actualizando el estado de baneo:", error) ;
        }
    }
    const handleSearch = async (searchTerm) => {
       
        try {
            let response;
            const searchTermString = Array.isArray(searchTerm) ? searchTerm[0] : searchTerm; // Convertir searchTerm a una cadena de texto si es un array
            if (searchTermString.trim() === '') {
                
                // Si el término de búsqueda está vacío, llamar a fetchUsers para obtener todos los usuarios
                await fetchUsers();
            } else {
               
                // Realizar la búsqueda por nombre
                response = await axios.get(`http://localhost:3001/usuarios/nombre/${searchTermString}`);
                if (response && response.data) {
                    console.log('Búsqueda exitosa, usuarios encontrados:', response.data);
                    setFilteredUsers(response.data);
                } else {
                    console.error('La respuesta no contiene datos:', response);
                }
            }
        } catch (error) {
            console.error('Error al buscar usuarios:', error);
        }
    };
    
    
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Administración de usuarios</h1>
            <button className={styles.homeButton}>
                <Link to="/dashboard/adminProducts" className={styles.homeLink}>
                    AdminProducts
                </Link>
            </button>
            <button className={styles.homeButton}>
                <Link to="/dashboard/adminCatFabMarc" className={styles.homeLink}>
                    Admin Categorias y Marcas
                </Link>
            </button>
            <SearchBarUsuarios onSearch={handleSearch} />

            <ul className={styles.userList}>
                {filteredUsers.map((user) => (
                    <li key={user.id} className={styles.userListItem}>
                        <div className={styles.userDetails}>
                            <span className={styles.userName}>{user.nombre}</span>
                            <button
                                className={`${styles.adminButton} ${user.Role.rol === "Administrador" ? styles.admin : styles.user}`}
                                onClick={() => handleUpdateRole(user.id, user.Role.rol === "Administrador" ? 2 : 1)}
                            >
                                {user.Role.rol === "Administrador" ? "Quitar admin" : "Hacer Admin"}
                            </button>
                            <button
                                className={`${styles.bannedButton} ${user.estado ? styles.unbanned : styles.banned}`}
                                onClick={() => handleBanUser(user.id, !user.estado)}
                            >
                                {user.estado ? "Banear" : "Desbanear"}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUsers;
