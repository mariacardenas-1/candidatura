import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image'
import styles from './index.module.css'
import Button from '../Button/Button'
import icon from '../../../public/whatsappIcon.png'


const Card = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.card}>
            <h2 className="card-title">{t('titleVolunteer')}</h2>
            <div className={styles.cardBody}>
                <div>
                    <Image className={styles.cardImg} src='/Volunteer.jpg' width={300} height={150} alt='te estamos buscando' />
                </div>
                <section className={styles.cardText}>
                    <p>
                        {t('textVolunteer')}
                    </p>
                    <br />
                    <p>
                        {t('textVolunteer1')}
                    </p>
                    <br />
                    <p>
                        {t('textVolunteer2')}
                        <Button
                            link='https://wa.link/56ld8t'
                            cta={t('cardCta')}
                            iconButton={icon}
                        />
                    </p>
                </section>
            </div>

        </div>
    )
}

export default Card