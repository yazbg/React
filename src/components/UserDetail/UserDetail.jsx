import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './UserDetail.module.css';

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>Cargando información del usuario...</div>;
    }

    if (!user) {
        return <div className={styles.error}>Usuario no encontrado.</div>;
    }

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.backButton}>
                &larr; Volver a la lista
            </button>
            <div className={styles.card}>
                <h1 className={styles.name}>{user.name}</h1>
                <p className={styles.username}>@{user.username}</p>

                <div className={styles.infoSection}>
                    <h2>Contacto</h2>
                    <p>📧 {user.email}</p>
                    <p>📞 {user.phone}</p>
                    <p>🌐 {user.website}</p>
                </div>

                <div className={styles.infoSection}>
                    <h2>Empresa</h2>
                    <p>🏢 <strong>{user.company.name}</strong></p>
                    <p className={styles.catchPhrase}>"{user.company.catchPhrase}"</p>
                </div>

                <div className={styles.infoSection}>
                    <h2>Dirección</h2>
                    <p>📍 {user.address.street} {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
