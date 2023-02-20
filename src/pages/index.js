import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruso Alcalde - Tunja 2024-2028</title>
        <meta name="description" content="Pagina de apoyo a Mikhail a la alcaldia de Tunja 2024 " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          {/* <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p> */}
          <div>
            {/* <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
              Maria Fernanda Cardenas
            </a> */}
          </div>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
          <h1 className={inter.className}>
            Ruso alcalde
          </h1>
          <p className={inter.className}>Bienvenido a la pagina oficial de apoyo ciudadano para impulsar mi candidatura a la Alcaldia de esta hermosa ciduad <strong>Tunja</strong>.
            Mi nombre es Mikail Krasnov, Ciudadano Colombiano, Tunjano, nacido en Sarátov Rusia. Soy profesor e investigador, Magister en Sociología, Economía y Relaciones Internacionales.
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            Inscríbite como voluntario <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            ¡Únete a nosotros como voluntario para apoyar la candidatura a la alcaldía de Tunja de Mikail Krasnov por el Movimiento Innovación Ciudadana, más conocido como "El Ruso"! Ayuda a marcar la diferencia en nuestra comunidad y a construir un futuro mejor para todos. ¡Tu ayuda es valiosa y necesaria! #MikailParaTunja #VoluntariosPorElCambio
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contactame <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Siempre estoy disponible y dispuesto a escuchar, hablemos, contactame por mis redes sociales o por whatsApp 
            </p>
          </a>

          {/* <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a> */}

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </>
  )
}
