import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruso Alcalde - Tunja 2024-2028</title>
        <meta name="description" content="Pagina de apoyo a Mikhail a la alcaldia de Tunja 2024 " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.description}>
            <div>
              <a
                href="https://wa.link/56ld8t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp"
                  width={100}
                  height={24}
                  priority
                />
                Contactame
              </a>
            </div>
          </div>


          <div  className={styles.imageProfile}>
              <Image
                className={styles.photo}
                src="/ruso.jpeg"
                alt="13"
                width={400}
                height={280}
                priority
              />
          </div>
        </div>  
        <div className= {styles.header}>
            <h1 className={styles.title}>
              Ruso alcalde
            </h1>
            <p className={styles.text}>Bienvenido a la pagina oficial de apoyo ciudadano para impulsar mi candidatura a la Alcaldia de esta hermosa ciduad <strong>Tunja</strong>.
              Mi nombre es <strong>Mikhail Krasnov </strong> conocido cariñosamente como <stron>el ruso</stron>, Ciudadano Colombiano, Tunjano, nacido en Sarátov Rusia. Soy profesor e investigador, Magister en Sociología, Economía y Relaciones Internacionales.
            </p>
        </div>
          
        {/* <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.subTitle}>
            Inscríbite como voluntario <span>-&gt;</span>
            </h2>
            <p className={styles.text}>
            ¡Únete como voluntario a nuestro Movimiento Innovación Ciudadana. Ayuda a marcar la diferencia en nuestra comunidad y a construir un futuro mejor para todos. ¡Tu ayuda es valiosa y necesaria! #MikailParaTunja #VoluntariosPorElCambio
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.subTitle}>
              Apoyanos con tu firma <span>-&gt;</span>
            </h2>
            <p className={styles.text}>
              Nuestro movimiento es un moviento independiente, por eso necesitamos tu firma para hacer realidad nuestra candidatura.   
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.subTitle}>
              Ruso Alcalde en redes sociales <span>-&gt;</span>
            </h2>
            <p className={styles.text}>
              Sigue todas nuestras novedades, eventos y noticias en mis redes Facebook e Instagram
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.subTitle}>
              Lo que dicen los medios. <span>-&gt;</span>
            </h2>
            <p className={styles.text}>
              Varios medios han notado nuestro liderazgo...
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}
