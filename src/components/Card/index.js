import Image from 'next/image'
import styles from './index.module.css'
import Button from '../Button/Button'
import icon from '../../../public/whatsappIcon.png'


const Card = () => {
    return (
        <div className={styles.card}>
            <h2 className="card-title">Te estamos buscando</h2>
            <div className={styles.cardBody}>
                <div>
                    <Image className={styles.cardImg} src='/Volunteer.jpg' width={300} height={150} alt='te estamos buscando' />
                </div>
                <p className={styles.cardText}>
                    ¡Únete a nuestro equipo de recolección de firmas! Estamos buscando voluntarios comprometidos y entusiastas que quieran apoyar a nuestro candidato a la alcaldía.
                    <br />
                    <br />
                    Como voluntario, tendrás la oportunidad de hacer una diferencia real en nuestra comunidad y ayudar a llevar a nuestro candidato al éxito.
                    <br />
                    <br />
                    Este es un momento emocionante en nuestra ciudad, y queremos que tu formes parte de él. Si estás interesado en unirte a nuestro equipo y ser parte de un movimiento progresista y comprometido con el cambio positivo, ¡contáctanos hoy mismo!
                    <Button
                        link='https://wa.link/56ld8t'
                        cta='Hablemos'
                        iconButton={icon}
                    />
                </p>
            </div>

        </div>
    )
}

export default Card