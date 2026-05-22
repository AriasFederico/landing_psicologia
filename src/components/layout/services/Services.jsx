import { ItemCard, TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';

import styles from './Services.module.scss';
export const Services = () => {

    const data = {
        title: 'Quizás te identificás con algo de esto',
        text: 'No hace falta tener una "crisis grande" para buscar apoyo. Si algo de lo de abajo resuena con lo que vivís, podemos trabajarlo juntos.',

        services: [
            {
                icon: 'star', title: 'Ansiedad y estrés', text: 'Ese nudo en el pecho, los pensamientos que no paran, la sensación de que todo se acumula. Hay un camino para encontrar alivio real.'
            },
            {
                icon: 'moon', title: 'Tristeza o vacío', text: 'Cuando nada te entusiasma como antes y no sabés bien por qué. No tenés que atravesar esto solo — ni esperar a "tocar fondo".'
            },
            {
                icon: 'heart', title: 'Problemas de pareja o vínculo', text: 'Dificultades para comunicarte, conflictos que se repiten, relaciones que te agotan. La terapia ayuda a entender los patrones y cambiarlos.'
            },
            {
                icon: 'star', title: 'Autoestima y autoconocimiento', text: 'Esa voz interna que te critica, la dificultad de poner límites o de sentirte suficiente. Trabajamos desde adentro hacia afuera.'
            },
            {
                icon: 'repeat', title: 'Conductas que querés cambiar', text: 'Procrastinación, perfeccionismo, dependencia emocional o cualquier patrón que sentís que te frena. La comprensión es el primer paso.'
            },
            {
                icon: 'compass', title: 'Momentos de transición', text: 'Cambios de trabajo, duelos, nuevas etapas de vida. Tener un espacio para procesarlos marca una diferencia enorme.'
            },
        ]
    };

    const { title, text, services } = data;

    return (
        <SectionLayout bgVariant={'main'} direction={'column'}>
            <div className={styles.header}>
                <TopSection text={'- ¿En qué puedo ayudarte? -'} />
                <h2>{title}</h2>
                <p className={styles.text}>{text}</p>
            </div>
            <div className={styles.items}>
                {services?.map(({ icon, title, text }) => (
                    <ItemCard icon={icon} title={title} text={text} key={title} />
                ))}
            </div>
        </SectionLayout>
    );
};
