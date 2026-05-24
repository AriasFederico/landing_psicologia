import { ComponentMap, DetailItem, TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './MapSection.module.scss';
export const MapSection = ({ coordinates }) => {

    const data = {
        topSection: '- Ubicación -',
        title: 'Nos encontramos cerca',
        info: {
            title: 'Consultorio',
            items: [
                {
                    icon: 'compass', title: 'Dirección', line_1: 'Av. Corrientes 1234, Piso 5°, Of. B', line_2: 'Ciudad Autónoma de Buenos Aires'
                },
                {
                    icon: 'clock', title: 'Horarios', line_1: 'Lunes a Viernes: 9:00 – 20:00', line_2: 'Sábados: 9:00 – 14:00'
                },
            ],
        },
        openTo: 'Abrir en Google Maps'

    }

    const { info } = data;

    return (
        <SectionLayout bgVariant={'main'} direction={'column'} id={'contact'}>
            <div className={styles.header}>
                <TopSection text={data.topSection} />
                <h2>{data.title}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.mapContainer}>
                    <ComponentMap />
                </div>
                <div className={styles.info}>
                    <h3>{info.title}</h3>

                    {
                        info?.items?.map(({ icon, title, line_1, line_2 }) => (
                            <DetailItem icon={icon} line_1={line_1} line_2={line_2} key={title} title={title} />
                        ))
                    }
                </div>
            </div>
        </SectionLayout>
    );
};
