import { useState, useEffect } from "react";
import styles from "./UserList.module.css";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    // Method to extract initials from name
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Directorio de Usuarios</h1>
            <ul className={styles.userGrid}>
                {users.map(user => (
                    <li key={user.id} className={styles.userCard}>
                        <div className={styles.avatar}>
                            {getInitials(user.name)}
                        </div>
                        <h2 className={styles.userName}>{user.name}</h2>

                        <div className={styles.userDetail}>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {user.email}
                        </div>

                        <div className={styles.userDetail}>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {user.company.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;