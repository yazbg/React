import styles from "./Card.module.scss";

const Card = ({
    image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    title = "Diseño Web",
    description = "Aprende a crear interfaces hermosas y funcionales combinando React y estilos modernos.",
    buttonText = "Empezar ahora"
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    alt={title}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>
                    {description}
                </p>
                <button className={styles.button}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;
