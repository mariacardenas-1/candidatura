import Button from '../Button/Button'
import styles from './HeroText.module.css'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../../../public/whatsappIcon.png'


export default function HeroText({isDesktop}) {
    return (
        <div className= {isDesktop ? styles.heroDesktop : styles.heroMobile}>
            <h1 className={styles.title}>
              Ruso alcalde
            </h1>
            <p className={styles.text}>Bienvenido a la pagina oficial de apoyo ciudadano para impulsar mi candidatura a la Alcaldia de esta hermosa ciduad <strong>Tunja</strong>.
              Mi nombre es <strong>Mikhail Krasnov </strong> conocido cariñosamente como <stron>el ruso</stron>, Ciudadano Colombiano, Tunjano, nacido en Sarátov Rusia. Soy profesor e investigador, Magister en Sociología, Economía y Relaciones Internacionales.
            </p>
            <div className={styles.iconBox}> 
            <Link href='https://www.facebook.com/profile.php?id=100089668390660&mibextid=ZbWKwL' target='_blank'>
              <Image
               className={styles.photo}
               src="/facebook-icon.png"
               alt="13"
               width={40}
               height={40}
               priority
               />
               </Link>
               <Link href='https://instagram.com/ruso_alcalde?igshid=ZDdkNTZiNTM=' target='_blank'>
                  <Image
                  className={styles.photo}
                  src="/instagram-icon.png"
                  alt="13"
                  width={40}
                  height={40}
                  priority
                />
                </Link>
                <Link href='https://www.tiktok.com/@rusoalcaldetunja' target='_blank'>
                <Image
                  className={styles.photo}
                  src="/tiktok-icon.png"
                  alt="13"
                  width={40}
                  height={40}
                  priority
                />
                 </Link>
            </div>

            <Button 
              link='https://wa.link/56ld8t' 
              cta='Contactame' 
              iconButton={icon}
            />
        </div>
    )
  }