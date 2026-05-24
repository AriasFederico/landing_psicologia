import { ButtonCta, FloatTag, TopSection } from '../../ui';
import { HeroLayout } from '..';
import styles from './Hero.module.scss';

export const Hero = ({ cta, img }) => {

    const data = {
        title: 'Un espacio para sanar y crecer',
        text: 'Te acompaño a comprender lo que sentís, a manejar la ansiedad y a tomar decisiones desde un lugar más sereno.La terapia no es para quien está roto — es para quien quiere crecer.',
        smallText: 'Sesiones presenciales y online · Respondo en menos de 24 hs',
    };
    return (
        <HeroLayout bgVariant={'bgMain'}>
            <div className={styles.content}>
                <TopSection text={'Psicóloga Clínica · Mat. 12345'} />
                <h1>{data.title}</h1>
                <p className={styles.text}>
                    {data.text}
                </p>

                <div className={styles.ctas}>
                    <ButtonCta text={'Pedir primera consulta'} icon={'cta'} size='md' href={cta} />
                    <ButtonCta text={'Conocer más'} variant='secondary' size='md' href={'#services'} />
                </div>
                <p className={styles.smallText}>
                    {data.smallText}
                </p>
            </div>
            <div className={styles.media}>
                <img src={img} alt='' className={styles.img} />
                <FloatTag title={'+8 años'} subtitle={'EXPERIENCIA CLÍNICA'} />
            </div>
        </HeroLayout>
    );
};
