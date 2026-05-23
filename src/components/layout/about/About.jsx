import { ButtonCta, Paragraph, TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './About.module.scss';

export const About = ({ cta, img }) => {
    const data = {
        title: 'Soy Laura y creo que el cambio es posible',
        text: ['Soy psicóloga clínica con más de 8 años de experiencia acompañando adultos en procesos de ansiedad, autoestima, vínculos y momentos de quiebre vital.', 'Mi enfoque es cognitivo-conductual con integraciones de mindfulness. Trabajo desde la calidez, la honestidad y el respeto profundo por los tiempos de cada persona.']
    };

    return (
        <SectionLayout bgVariant={'soft'}>
            <div className={styles.media}>
                <img src={img} alt="" className={styles.img} />
            </div>
            <div className={styles.content}>
                <TopSection text={'- Sobre mí'} />
                <h2>{data.title}</h2>
                <Paragraph items={data.text} />
                <div className={styles.ctas}>
                    <ButtonCta variant='secondary' size='md' text={'Agendar una cita'} href={cta} />
                </div>
            </div>
        </SectionLayout>
    );
};
