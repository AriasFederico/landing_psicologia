import { IndexedCard, TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './Steps.module.scss'

export const Steps = () => {
    const data = {
        topSection: '- Cómo funciona -',
        title: 'El proceso terapéutico, paso a paso',
        items: [
            {
                id: '01',
                topCard: 'Sin compromiso', title: 'Primera consulta', text: 'Nos conocemos. Me contás qué estás viviendo con tus propias palabras y sin presión. Yo escucho, hago preguntas y juntos evaluamos si hay afinidad para trabajar.'
            },
            {
                id: '02',
                topCard: 'Claridad antes de empezar', title: 'Entendemos el mapa', text: 'En las primeras sesiones trazamos un panorama claro: de dónde viene lo que sentís, qué patrones hay y hacia dónde querés ir. Sin atajos ni recetas genéricas.'
            },
            {
                id: '03',
                topCard: 'Cambios reales y duraderos', title: 'Trabajamos juntos', text: 'Sesiones semanales donde exploramos, cuestionamos y construimos herramientas concretas. No solo hablar por hablar — sino transformar lo que vivís.'
            },
        ]
    }
    return (
        <SectionLayout bgVariant={'soft'} direction={'column'}>
            <div className={styles.header}>
                <TopSection text={data.topSection} />
                <h2>{data.title}</h2>
            </div>
            <div className={styles.items}>
                {data?.items?.map(({ id, title, text, topCard }) => (
                    <IndexedCard id={id} title={title} text={text} topCard={topCard} key={title} />
                ))}
            </div>
        </SectionLayout>
    );
};
