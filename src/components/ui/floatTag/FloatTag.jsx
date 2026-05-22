import styles from './FloatTag.module.scss'

export const FloatTag = ({ title, subtitle, position }) => {
    return (
        <div className={styles.floatTag}>
            <h4 className={styles.title}>{title ? title : 'Titulo'}</h4>
            <p className={styles.text}>{subtitle ? subtitle : 'Subtitulo'}</p>
        </div>
    )
}
