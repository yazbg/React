import styles from "./Card.module.scss";

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
                    alt="Laptop on desk"
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>Diseño Web</h3>
                <p className={styles.description}>
                    Aprende a crear interfaces hermosas y funcionales combinando React y estilos modernos.
                </p>
                <button className={styles.button}>Empezar ahora</button>
            </div>
        </div>
    );
};

export default Card;
