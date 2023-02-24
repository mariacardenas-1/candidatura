import Button from '../Button/Button'
import styles from './HeroText.module.css'

export default function HeroText({isDesktop}) {
    return (
        <div className= {isDesktop ? styles.heroDesktop : styles.heroMobile}>
            <h1 className={styles.title}>
              Ruso alcalde
            </h1>
            <p className={styles.text}>Bienvenido a la pagina oficial de apoyo ciudadano para impulsar mi candidatura a la Alcaldia de esta hermosa ciduad <strong>Tunja</strong>.
              Mi nombre es <strong>Mikhail Krasnov </strong> conocido cariñosamente como <stron>el ruso</stron>, Ciudadano Colombiano, Tunjano, nacido en Sarátov Rusia. Soy profesor e investigador, Magister en Sociología, Economía y Relaciones Internacionales.
            </p>
            <Button />
        </div>
    )
  }