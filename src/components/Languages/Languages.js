import Link from 'next/link'
import Image from 'next/image'
import colombia from '../../../public/colombia.png'
import uk from '../../../public/reino-unido.png'
import rusia from '../../../public/rusia.png'
import style from './Languages.module.css'

export default function Languages () {
    return (
        <div className={style.languages}>
           
                <Link href="/" locale="es">
                    <Image src={colombia} width='20' height='20' alt='Español'/>
                </Link>
                <Link href="/" locale="en">
                    <Image src={uk} width='20' height='20' alt='Ingles'/>
                </Link>
                <Link href="/" locale="ru">
                    <Image src={rusia} width='20' height='20' alt='Ruso'/>
                </Link>
        </div>
    )
}