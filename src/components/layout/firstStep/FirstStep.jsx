import { ButtonCta, TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './FirstStep.module.scss';
export const FirstStep = ({ img, cta }) => {
    const data = {
        title: 'Si llegaste hasta acá, algo en vos ya decidió',
        text: 'No hace falta tener todo claro para escribirme. Podés contarme brevemente qué estás viviendo y coordinamos una primera consulta sin compromiso.',
        smallText: 'Sesiones presenciales en Buenos Aires y online para todo el mundo hispanohablante.',
        ctaText: 'Escribime por WhatsApp',
        smallText2: 'Respondo personalmente en menos de 24 horas',
    };
    return (
        <SectionLayout bgVariant={'soft'}>
            <div className={styles.media}>
                <img src={img} alt="" className={styles.img} />
            </div>
            <div className={styles.content}>
                <TopSection text={'Primer paso'} />
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.text}>{data.text}</p>
                <p className={styles.smallText}>{data.smallText}</p>
                <div className={styles.ctas}>
                    <ButtonCta text={data.ctaText} href={cta} icon={'cta'} />
                </div>
                <p className={styles.smallText}>{data.smallText2}</p>
            </div>
        </SectionLayout>
    );
};
