import styles from './IndexedCard.module.scss'

export const IndexedCard = ({ title = 'Titulo', text = 'Texto', id = 'ID', topCard = 'Titulo de la card' }) => {
    return (
        <div className={styles.indexedCard}>
            <p className={styles.topCard}>{topCard}</p>
            <div className={styles.content}>
                <span className={styles.index}>{id}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}
