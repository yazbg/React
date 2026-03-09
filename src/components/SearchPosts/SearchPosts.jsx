import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchPosts.module.css';

const SearchPosts = () => {
    const [query, setQuery] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const getInitials = (name) => {
        if (!name) return '';
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    const handleUserClick = (userId) => {
        navigate(`/user/${userId}`);
    };

    useEffect(() => {
        // Fetch users and filter them so the rendered properties (email, company) actually exist
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const filtered = data.filter(user =>
                    user.name.toLowerCase().includes(query.toLowerCase())
                );
                setPosts(filtered);
            })
            .catch(error => console.error(error));
    }, [query]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Búsqueda de Usuarios</h1>
            <input
                type="text"
                placeholder="Buscar usuarios..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
            />
            <ul className={styles.userGrid}>
                {posts.map(post => (
                    <li
                        key={post.id}
                        className={styles.userCard}
                        onClick={() => handleUserClick(post.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.avatar}>
                            {getInitials(post.name)}
                        </div>
                        <h2 className={styles.userName}>{post.name}</h2>

                        <div className={styles.userDetail}>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {post.email}
                        </div>

                        <div className={styles.userDetail}>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {post.company.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPosts;