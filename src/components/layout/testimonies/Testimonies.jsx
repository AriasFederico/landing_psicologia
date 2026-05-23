import { Testimony, TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './Testimonies.module.scss'

export const Testimonies = () => {
    const data = {
        title: 'Lo que dicen quienes ya dieron el paso',
        items: [
            {
                text: 'Llegué sintiéndome completamente bloqueada. Hoy puedo decir que entiendo mis emociones y que tengo herramientas reales para manejarlas. Laura crea un espacio donde te sentís genuinamente escuchado.', user: 'Valentina R.', adjetive: 'Paciente, 2 años en terapia'
            },
            { text: 'Siempre creí que la terapia era para "casos graves". Me equivocaba. Aprendí cosas sobre mí mismo en 3 meses que no había entendido en 30 años. Lo recomendaría sin dudarlo.', user: 'Martín G.', adjetive: 'Paciente, ansiedad y trabajo' },
            { text: 'Pasé por una pérdida muy difícil y no sabía cómo seguir. Laura me acompañó con una calma y una presencia que me sorprendió. No solo sobreviví ese período — salí más entera.', user: 'Sofía L.', adjetive: 'Paciente, proceso de duelo' },
        ],
    };

    return (
        <SectionLayout bgVariant={'main'} direction={'column'}>
            <div className={styles.header}>
                <TopSection text={'- Testimonios -'} />
                <h2>{data.title}</h2>
            </div>
            <div className={styles.items}>
                {data?.items?.map(({ text, user, adjetive }) => (
                    <Testimony text={text} user={user} adjetive={adjetive} key={user} />
                ))}
            </div>
        </SectionLayout>
    );
};
